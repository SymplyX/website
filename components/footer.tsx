import Image from 'next/image';
import React from "react";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import {Button} from "@nextui-org/react";
import {FaDiscord, FaGithub, FaTwitter} from "react-icons/fa";
import {siteConfig} from "@/config/site";

export default function Footer() {
    return (
        <footer className="bg-background">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-start items-center gap-1">
                            <Image src="/favicon.ico" alt="Symply Logo" width={50} height={50} />
                            <p className="font-bold text-inherit">Symply</p>
                        </div>

                        <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
                            Symply, a highly customizable, open-source server software for Minecraft Bedrock Edition written in PHP, derived from PocketMine-MP.
                        </p>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <a
                                    href={siteConfig.links.discord}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Discord</span>

                                    <FaDiscord size={25} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href={siteConfig.links.github}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Github</span>

                                    <FaGithub size={25} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Twitter</span>

                                    <FaTwitter size={25}/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white">Getting Started</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Installation
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Documentation
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        PHP Docs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900 dark:text-white">Community</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Github
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Discord
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900 dark:text-white">Symply</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Our Team
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Contribute
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Sponsors
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        SymHanguar
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900 dark:text-white">Terms</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Terms
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Legal Notice
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Community Guidelines
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                    &copy; 2023. Symply. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
