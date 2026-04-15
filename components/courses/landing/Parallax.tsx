'use client';

import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
} from 'motion/react';
import { getImageProps } from 'next/image';
import type { CourseRecord } from '@/types/courses';
import { useEffect, useState } from 'react';

type ParallaxProps = {
    courseData: CourseRecord;
};

export default function Parallax({ courseData }: ParallaxProps) {
    const [isMobile, setIsMobile] = useState(
        () => typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches
    );

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 639px)');
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    function getBackgroundImage(srcSet = '') {
        const imageSet = srcSet
            .split(', ')
            .map((str) => {
                const [url, dpi] = str.split(' ');
                return `url("${url}") ${dpi}`;
            })
            .join(', ');
        return `image-set(${imageSet})`;
    }
    // setting image
    const {
        props: { srcSet },
    } = getImageProps({
        src: `/courses/landing/${courseData?.imageUrl}`,
        width: 3456,
        height: 4320,
        alt: 'background picture',
    });
    const backgroundImage = getBackgroundImage(srcSet);
    const style = {
        backgroundImage,
    };

    // parallax

    const { scrollY } = useScroll();
    const isReduced = useReducedMotion();

    const noMotion = isReduced || isMobile;

    const backgroundY = useTransform(
        scrollY,
        [0, 1000],
        [0, noMotion ? 0 : -500]
    );
    const textY = useTransform(scrollY, [0, 1000], [0, noMotion ? 0 : -1600]);
    const dummyMapY = useTransform(
        scrollY,
        [0, 1000],
        [0, noMotion ? 0 : -3200]
    );

    return (
        <>
            <div className="min-h-screen">
                <div className="bg-white py-6 sm:py-8 dark:bg-gray-900">
                    <div
                        id="bg-image"
                        className="mx-auto max-w-7xl px-6 lg:px-8 bg-[]"
                    >
                        <motion.div
                            style={{ ...style, y: backgroundY }}
                            className="w-full sm:w-[60vw] sm:h-[70vw] bg-cover bg-no-repeat bg-center z-0"
                        >
                            <div className="flex flex-col w-full sm:w-screen items-center my-10 sm:my-20 gap-10 sm:gap-20">
                                <motion.div
                                    className="w-full sm:max-w-4xl px-4 py-6 sm:px-16 sm:py-8 lg:mx-0 backdrop-blur-xl rounded-xl"
                                    style={{ y: textY }}
                                >
                                    <h2 className="text-3xl font-semibold tracking-tight text-gray-400 sm:text-7xl dark:text-white">
                                        {courseData?.title}
                                    </h2>
                                    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                                        {courseData?.description}
                                    </p>
                                </motion.div>
                                <motion.div style={{ y: dummyMapY }}>
                                    <div className="pt-10 ">
                                        {courseData?.lessons.map((lesson) => (
                                            <div
                                                key={lesson.id}
                                                className="flex flex-col w-screen items-center my-20 gap-20"
                                            >
                                                <div className="w-full sm:min-w-md sm:w-auto mx-4 sm:mx-0 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
                                                    <div className="px-4 py-5 sm:px-6 font-bold">
                                                        {/* Content goes here */}
                                                        {lesson.title}
                                                    </div>
                                                    <div className="px-4 py-5 sm:p-6">
                                                        {/* Content goes here */}
                                                        progress
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
