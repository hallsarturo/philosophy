// types/course.ts
import { Prisma } from '@/lib/generated/prisma/client';

// getCourses
export type CourseWithLessons = Prisma.CourseGetPayload<{
    include: {
        lessons: {
            include: {
                completions: true;
                prerequisites: true;
            };
        };
        enrollments: true;
    };
}>;

// getLessonsByCourseSlug
export type CourseRecord= CourseWithLessons | null;
