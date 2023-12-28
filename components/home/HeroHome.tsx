import React, {useEffect, useState} from "react";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Card,
    CardHeader,
    Tooltip,
    CardBody,
    CardFooter,
    Divider,
    Checkbox,
    useDisclosure,
    Image, ModalProps
} from "@nextui-org/react";
import {useTranslations} from 'next-intl';
import {MdOutlineFileDownload} from "react-icons/md";
import {FaDiscord} from "react-icons/fa";
import {FiDownload} from "react-icons/fi";
import {siteConfig} from "@/config/site";
import {useRouter} from "next/router";
import { CiWarning } from "react-icons/ci";

export default function HeroHome() {
    const t = useTranslations('Home');

    type BackdropType = "blur" | "transparent" | "opaque";

    const { isOpen, onOpen, onClose } = useDisclosure();
    const downloadLink = "https://github.com/SymplyX/Symply/releases";

    const [isClient, setIsClient] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const [scrollBehavior] = React.useState<ModalProps["scrollBehavior"]>("outside");
    const [backdrop] = useState<BackdropType>("blur")
    const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked(event.target.checked);
    };

    const {locale} = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className="flex items-center flex-1 relative">
            <div className="flex flex-col w-full">
                <h1 className="text-5xl font-extrabold text-center text-white dark:text-white lg:text-6xl 2xl:text-7xl">
                    {t('title')}&nbsp;
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600">
                      {t('title-2')}
                    </span>
                </h1>

                <p className="max-w-4xl mx-auto mt-9 text-sm text-center text-white dark:text-white md:text-xl">
                    {t('description')}
                </p>
                <Button onPress={onOpen} className="max-w-3xl mx-auto mt-8 font-medium" color="success" variant="shadow"
                        size="lg"
                        startContent={<MdOutlineFileDownload/>}>
                    {t('download')}
                </Button>
                <Modal isOpen={isOpen} backdrop={backdrop} onClose={onClose} scrollBehavior={scrollBehavior}>
                    <ModalContent className="w-full md:max-w-screen-sm lg:max-w-screen-md mx-auto">
                        <ModalHeader className="flex flex-col gap-1 md:flex-row md:gap-2 items-center justify-center">
                            {t('modal.title')}
                            <span className="text-transparent bg-clip-text bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-800"> Symply Beta</span>
                        </ModalHeader>
                        <ModalBody className="w-full">
                            <p>{t.rich('modal.description', {
                                locale,
                                p: (children) => <p>{children}</p>,
                                skip: (children) => <br/>,
                            })}</p>
                            <Card className="w-full">
                                <CardHeader className="flex gap-3">
                                    <CiWarning color="yellow" size="30"/>
                                    <div className="flex flex-col">
                                        <p className="text-md">{t("card.title")}</p>
                                    </div>
                                </CardHeader>
                                <Divider/>
                                <CardBody>
                                    <p>{t("card.description")}</p>
                                    <Button
                                        color="primary"
                                        isIconOnly={true}
                                        variant="faded"
                                        size={"sm"}
                                        onPress={() => isClient && window.open(siteConfig.links.discord, "_blank")}
                                        startContent={<FaDiscord style={{fontSize: "2em"}}/>}
                                        className={"mt-3 w-full"}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Checkbox color="success" onChange={handleCheckboxChange}>
                                        {isChecked ? t("card.check.yes") : t("card.check.no")}
                                    </Checkbox>
                                </CardFooter>
                            </Card>
                        </ModalBody>
                        <ModalFooter className="flex flex-col md:flex-row md:justify-between w-full">
                            <Tooltip
                                content={t('modal.button-download.tooltip')}
                                color="danger"
                                showArrow={true}
                                isDisabled={isChecked}
                            >
                                <div className="button-wrapper w-full">
                                    <Button
                                        color="success"
                                        variant="shadow"
                                        onPress={() => isClient && window.open(downloadLink, "_blank")}
                                        startContent={<FiDownload style={{fontSize: "1.3em"}}/>}
                                        isDisabled={!isChecked}
                                        className={"w-full"}
                                    >
                                        {t('modal.button-download.title')}
                                    </Button>
                                </div>
                            </Tooltip>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </section>
    );
}