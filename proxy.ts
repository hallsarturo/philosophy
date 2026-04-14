import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Localization routing Next-Intl
const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    // Run Next-Intl middleware
    const response = intlMiddleware(request);

    // Optimistic secure proxing (better-auth)

    // Protected paths
    const protectedPaths = ['payment', 'course'];
    const { pathname } = request.nextUrl;
    const localeMatch = pathname.match(/^\/[a-z]{2}(\/.*)/);
    const normalizedPath = localeMatch ? localeMatch[1] : pathname;

    const isProtected = protectedPaths.some((protectedPath) =>
        normalizedPath.split('/').some((segment) => segment === protectedPath)
    );

    if (isProtected) {
        // Check for the session cookie
        const sessionCookieName =
            process.env.NODE_ENV === 'production'
                ? '__Secure-better-auth.session_token'
                : 'better-auth.session_token';
        const session = request.cookies.get(sessionCookieName);

        if (!session) {
            console.log('No session detected: ', sessionCookieName)
            return NextResponse.redirect(new URL('/sign-up', request.url));
        }
    }

    // Continue
    return response;
}

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
