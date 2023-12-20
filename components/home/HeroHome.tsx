import React from "react";

export default function HeroHome() {
    return (
        <section className="flex items-center flex-1">
            <div className="flex flex-col w-full ">
                <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                    <span
                        className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                        Coming
                    </span>

                    <span
                        className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                        Soon
                    </span>
                </h1>

                <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
                    Symply is still under development, including the site, so for the time being we&apos;re offering this page as a new update.
                </p>
            </div>
        </section>
    );
}
