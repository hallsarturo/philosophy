# ThinkPhi

An interactive philosophy learning platform built with Next.js. Learn epistemology, Bayesian thinking, and other branches of philosophy through bite-sized lessons, gamified progression, and a visual course experience.

## Tech Stack

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Framework  | Next.js 16 (App Router)                        |
| Language   | TypeScript 5                                   |
| Styling    | Tailwind CSS v4, shadcn/ui                     |
| Auth       | Better Auth v1 (email/password + Google OAuth) |
| Database   | PostgreSQL via Prisma 7 + Prisma Accelerate    |
| Animations | Motion (Framer Motion v12)                     |
| i18n       | next-intl (English & Spanish)                  |

## Features

### ✅ Implemented

- **Landing page** — hero section with CTA, navigation links (How it Works, Topics, Leaderboard, About)
- **Authentication** — sign-up/sign-in with Google OAuth; email+password support configured; session management via Better Auth; sign-out flow
- **Login modal** — accessible dialog triggered from the navbar
- **Courses list page** (`/courses`) — lists all published courses with title, difficulty badge, XP reward, lessons, and enrollment status (auth-aware)
- **Lesson progress tracking** — completed lessons shown per user; locked/unlocked state based on sequential prerequisites
- **Course landing page** (`/course/[courseSlug]`) — parallax scroll hero with course image, title, description, and lesson map; auth-protected (redirects to sign-in)
- **Dark mode** — full light/dark theme toggle via `next-themes`
- **Internationalisation** — English (`en`) and Spanish (`es`) locale routing
- **Navbar** — language selector, dark mode toggle, login button
- **Profile page** (`/profile/[userId]`) — heading and stats layout scaffolded
- **Database schema** — full Prisma schema covering:
    - Users, Sessions, Accounts (Better Auth models)
    - Courses & Lessons with slug routing, difficulty, XP rewards, ordering, and prerequisites
    - User progress: `UserCourse` (enrolment + progress %) and `UserLesson` (per-lesson completion)
    - Gamification: `UserProfile` (level, total XP, streaks), `XpTransaction` audit log, `Achievement` / `UserAchievement` badges
    - Activity logs and interest/topic tagging
- **Seed script** — seeds courses and automatically links lessons as sequential prerequisites

### 🚧 In Progress / Scaffolded

- **Course landing page** — lesson card buttons and enrolment actions partially implemented (`LessonCardButtons`, `CoursesLandingList`)
- **Lesson viewer page** (`/course/[courseSlug]/[lessonId]`) — route exists, renders a placeholder
- **Dashboard page** (`/dashboard`) — route exists, renders a placeholder
- **Payment page** (`/payment`) — route exists, renders a placeholder
- **Profile stats** — `ProfileStats` component is scaffolded with placeholder content (not yet wired to real data)
- **Gamification logic** — full XP, level, streak, and achievement schema is in place but backend logic not yet implemented

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Environment Variables

- `DATABASE_URL` — Prisma Accelerate connection string
- `DIRECT_DATABASE_URL` — Direct PostgreSQL URL (used for seeding)
- `BETTER_AUTH_URL` — Base URL for Better Auth (e.g. http://localhost:3000)
- `BETTER_AUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

### Database setup

npx prisma migrate deploy # run migrations
npx tsx prisma/seeds/seed.ts # seed course data

### Project Structure

```
app/[locale]/           # Localised routes (en/es)
  courses/              # Course listing
  course/[slug]/        # Course landing (parallax)
  course/[slug]/[id]/   # Lesson viewer (in progress)
  dashboard/            # User dashboard (in progress)
  profile/[userId]/     # User profile
  payment/              # Payment (in progress)
  sign-up/              # Auth page
components/
  courses/              # CoursesList, Buttons, landing parallax
  landing/              # Home landing page
  navbar/               # Navbar, language selector, theme toggle
  profile-page/         # ProfileHeading, ProfileStats
  sign-up/ log-in/      # Auth UI
lib/
  auth.ts               # Better Auth server config
  auth-client.ts        # Better Auth client
  prisma.ts             # Prisma client singleton
server/actions/courses/ # Server actions (getCourses, getLessonsByCourseSlug)
prisma/
  schema.prisma         # Full data model
  seeds/                # Seed scripts
i18n/                   # next-intl routing & messages (en, es)
```
