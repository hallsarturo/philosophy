import { getCourses } from '../actions/courses/getCourses';
import CoursesPage from '@/app/[locale]/courses/page';

export default async function CoursesPageServer() {
    const courses = await getCourses();
    console.log(`courses from server component: ${courses}`);
    return <CoursesPage courses={courses} />;
}
