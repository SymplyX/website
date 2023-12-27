import {Image} from "@nextui-org/react";
import React from "react";

export default function FourOhFour() {
    return <>
        <main>
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-lg mx-auto text-center">
                    <div className="pb-6">
                        <div className="flex items-center justify-center mr-6">
                            <Image src="/favicon.ico" alt="Symply Logo" width={50} height={50}/>
                            <p className="font-bold text-inherit">Symply</p>
                        </div>
                        <h3 className="text-blue-700 text-4xl font-semibold sm:text-5xl">
                            Page not found
                        </h3>
                        <p className="text-white-600 mt-3">
                            Sorry, the page you are looking for could not be found or has been removed.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </>
}