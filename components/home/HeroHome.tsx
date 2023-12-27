import React, {useEffect, useState} from "react";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import {useTranslations} from 'next-intl';
import {MdOutlineFileDownload} from "react-icons/md";
import {FaDiscord} from "react-icons/fa";
import {FiDownload} from "react-icons/fi";
import {siteConfig} from "@/config/site";

export default function HeroHome() {
    const t = useTranslations('Home');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const downloadLink = "https://github.com/SymplyX/Symply/releases";

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className="flex items-center flex-1">
            <div className="flex flex-col w-full">
                <h1 className="text-5xl font-extrabold text-center lg:text-6xl 2xl:text-7xl">
                    {t('title')}&nbsp;
                    <span
                        className="text-transparent bg-clip-text bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-800">
                      {t('title-2')}
                  </span>
                </h1>

                <p className="max-w-4xl mx-auto mt-9 text-sm text-center text-gray-700 dark:text-white md:text-xl">
                    {t('description')}
                </p>
                <Button onPress={onOpen} className="max-w-3xl mx-auto mt-8 font-medium" color="success" variant="shadow" size="lg"
                        startContent={<MdOutlineFileDownload/>}>
                    {t('download')}
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                        <ModalHeader className="flex flex-col gap-1 md:flex-row md:gap-2">
                            {t('modal.title')}
                            <span className="text-transparent bg-clip-text bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-800"> Symply Beta</span>
                        </ModalHeader>
                        <ModalBody>
                            <p>{t('modal.description')}</p>
                        </ModalBody>
                        <ModalFooter className="flex flex-col md:flex-row md:justify-between">
                            <Button
                                color="primary"
                                variant="flat"
                                onPress={() => isClient && window.open(siteConfig.links.discord, "_blank")}
                                startContent={<FaDiscord className="m-1" style={{ fontSize: "2em" }} />}
                            >
                                {t('modal.discord')}
                            </Button>
                            <Button
                                color="success"
                                variant="shadow"
                                onPress={() => isClient && window.open(downloadLink, "_blank")}
                                startContent={<FiDownload className="m-1" style={{ fontSize: "2em" }} />}
                            >
                                {t('modal.download')}
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </section>
    );
}