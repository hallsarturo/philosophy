import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { LockClosedIcon } from '@heroicons/react/24/outline';

export default function Loading() {
    return (
        <div className="min-h-screen overflow-hidden bg-white py-12 sm:py-6 dark:bg-gray-900">
            <div className="flex flex-col mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 gap-8">
                <div className="border-b border-gray-200 pb-5 dark:border-white/10">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white"></h3>
                </div>
                <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
                    <div className="flex justify-between align-middle font-semibold px-4 py-5 sm:px-6">
                        <button
                            type="button"
                            className="rounded-full bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                        >
                            Start course
                        </button>
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                        <ul role="list" className="divide-y divide-gray-100">
                            <li className="flex items-center justify-between gap-x-6 py-5">
                                <div className="min-w-0">
                                    <div className="flex items-start gap-x-3">
                                        <p className="text-sm/6 font-semibold text-gray-900"></p>
                                    </div>
                                    <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                                        <p className="whitespace-nowrap">
                                            Description
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-none items-center gap-x-4">
                                    <p className="mt-0.5 rounded-md bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10"></p>

                                    <p className="mt-0.5 rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20"></p>

                                    <p className="mt-0.5 rounded-md bg-yellow-50 px-1.5 py-0.5 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20"></p>

                                    <a
                                        href={'/'}
                                        className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:block"
                                    >
                                        {/* TODO: implement course status in backend */}

                                        <LockClosedIcon className="size-4" />

                                        <span className="sr-only"></span>
                                    </a>
                                    <Menu
                                        as="div"
                                        className="relative flex-none"
                                    >
                                        <MenuButton className="relative block text-gray-500 hover:text-gray-900">
                                            <span className="absolute -inset-2.5" />
                                            <span className="sr-only">
                                                Open options
                                            </span>
                                            <EllipsisVerticalIcon
                                                aria-hidden="true"
                                                className="size-5"
                                            />
                                        </MenuButton>
                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg outline-1 outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                        >
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                                >
                                                    Edit
                                                    <span className="sr-only">
                                                        ,{' '}
                                                    </span>
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                                >
                                                    Move
                                                    <span className="sr-only">
                                                        ,{' '}
                                                    </span>
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                                >
                                                    Delete
                                                    <span className="sr-only">
                                                        ,{' '}
                                                    </span>
                                                </a>
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
