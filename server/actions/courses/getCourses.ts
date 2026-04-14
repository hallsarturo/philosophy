'use server';

import prisma from '@/lib/prisma';

export async function getCourses(userId?: string) {
    try {
        const result = prisma.course.findMany({
            include: {
                lessons: {
                    include: {
                        completions: userId ? { where: { userId } } : true,
                        prerequisites: true,
                    },
                    orderBy: { order: 'asc' },
                },
                enrollments: userId ? { where: { userId } } : false,
            },
        });
        return result;
    } catch (err) {
        console.error('getCourses error: ', err);
        throw new Error('Failed to fetch courses');
    }
}

export async function getLessonsByCourseSlug(
    userId: string,
    courseSlug: string
) {
    try {
        const result = prisma.course.findUnique({
            where: { slug: courseSlug },
            include: {
                lessons: {
                    include: {
                        completions: { where: { userId } },
                        prerequisites: true,
                    },
                    orderBy: { order: 'asc' },
                },
                enrollments: { where: { userId } },
            },
        });
        return result;
    } catch (err) {
        console.error('getLessonsByCourseSlug error:', err);
        throw new Error('Failed to fetch courses');
    }
}
