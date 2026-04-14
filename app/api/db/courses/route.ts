import { getCourses } from '@/server/actions/courses/getCourses';

export async function GET() {
    try {
        const coursesData = await getCourses();
        console.log(coursesData);
        return Response.json(
            { status: 'ok', data: coursesData },
            { status: 200 }
        );
    } catch (err) {
        return Response.json(
            {
                status: 'error',
                message: 'Failed to fetch courses',
            },
            { status: 500 }
        );
    }
}
