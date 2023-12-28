import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

export default function LocaleSwitcher() {
    const t = useTranslations("common");
    const router = useRouter();

    const { locale, locales, route } = router;

    const [selectedKey, setSelectedKey] = useState<string>(locale || ""); // Assurez-vous que selectedKey est typé correctement

    const handleLocaleChange = async (selectedLocale: string) => {
        await router.push(route, undefined, { locale: selectedLocale });
        setSelectedKey(selectedLocale);
    };

    useEffect(() => {
        setSelectedKey(locale || "");
    }, [locale]);

    const selectedValue = t(`${selectedKey}`);

    // @ts-ignore
    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                        {selectedValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Language Selection"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={[selectedKey]}
                    // @ts-ignore
                    onSelectionChange={(selectedKeys: Set<string>) => {
                        const newSelectedKey = Array.from(selectedKeys)[0];
                        setSelectedKey(newSelectedKey);
                        handleLocaleChange(newSelectedKey);
                    }}
                    locale={locale}
                >
                    {//@ts-ignore
                        locales.map((loc) => (
                        <DropdownItem key={loc} onClick={() => handleLocaleChange(loc)}>
                            {t(`${loc}`)}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}