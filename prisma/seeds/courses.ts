import { Difficulty } from '../../lib/generated/prisma/client';

export const courses = [
    {
        title: 'Pseudo-Science Demarcation 1',
        slug: 'pseudo-science-demarcation-1',
        description:
            'Why astrology, chiropraxy, are not prased by science? Does science have the truth of everything? Why are we certain of scientific laws?',
        difficulty: Difficulty.BEGINNER,
        lessons: [
            {
                title: 'lesson 1',
                content: '...',
                order: 1,
            },
            {
                title: 'lesson 2',
                content: '...',
                order: 2,
            },
            {
                title: 'lesson 3',
                content: '...',
                order: 3,
            },
            {
                title: 'lesson 4',
                content: '...',
                order: 4,
            },
        ],
    },
    {
        title: 'Bayesian Reasoning 1',
        slug: 'bayesian-reasoning-1',
        description: 'course description',
        difficulty: Difficulty.BEGINNER,
        lessons: [
            {
                title: 'lesson 1',
                content: '...',
                order: 1,
            },
            {
                title: 'lesson 2',
                content: '...',
                order: 2,
            },
            {
                title: 'lesson 3',
                content: '...',
                order: 3,
            },
            {
                title: 'lesson 4',
                content: '...',
                order: 4,
            },
        ],
    },
    {
        title: 'Philosophy of Religion',
        slug: 'philosophy-of-religion-1',
        description: 'course description',
        difficulty: Difficulty.BEGINNER,
        lessons: [
            {
                title: 'lesson 1',
                content: '...',
                order: 1,
            },
            {
                title: 'lesson 2',
                content: '...',
                order: 2,
            },
            {
                title: 'lesson 3',
                content: '...',
                order: 3,
            },
            {
                title: 'lesson 4',
                content: '...',
                order: 4,
            },
        ],
    },
];
