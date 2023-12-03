import {
	Button,
	Kbd,
	Link,
	Input,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
	DropdownItem,
	Image,
	DropdownTrigger, DropdownMenu, Dropdown, cn, Card,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {BiArrowToBottom, BiCheckDouble, BiChevronDown, BiCube} from "react-icons/bi";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Popover } from '@headlessui/react'

import React from "react";
import {CardHeader} from "@nextui-org/card";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="bg-background">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit pr-2">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Image src="/favicon.ico" alt="Symply Logo" width={50} height={50} />
						<p className="font-bold text-inherit">Symply</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-2 justify-start" justify="center">
				<Dropdown className="mt-8">
					<DropdownTrigger className="bg-transparent">
						<Button
							className={clsx(
								linkStyles({ color: "foreground" }),
								"data-[active=true]:text-primary data-[active=true]:font-medium bg-transparent"
							)}
							variant="bordered"
						>
							<BiCube
								color="green"/>
							Getting Started
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Getting Started"
						className="w-[400px]"
						itemClasses={{
							base: "gap-5",
						}}
					>
						<DropdownItem
						>
							<Card className="col-span-12 sm:col-span-4 h-[300px]">
								<CardHeader className="absolute z-10 top-1 flex-col !items-start">
									<p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
									<h4 className="text-white font-medium text-large">Symply&apos;s additions</h4>
								</CardHeader>
								<Image
									removeWrapper
									alt="Card background"
									className="z-0 w-full h-full object-cover"
									src="/header.png"
								/>
							</Card>
						</DropdownItem>
						<DropdownItem
							key="Installation"
							description="How do you want to install Symply ? it's so symply, it's here"
							startContent={<BiArrowToBottom />}
						>
							Installation
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				{siteConfig.navItems.map((item) => (
					<NavbarItem key={item.href}>
						<Button
							disableRipple
							className={clsx(
								linkStyles({ color: "foreground" }),
								"data-[active=true]:text-primary data-[active=true]:font-medium"
							)}
							variant="light"
						>
							{item.label}
						</Button>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.discord}>
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github}>
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden sm:flex">
					<Button
						isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={siteConfig.links.sponsor}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github}>
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
				<Button
					isExternal
					as={Link}
					className="text-sm font-normal text-default-600 bg-default-100"
					href={siteConfig.links.sponsor}
					startContent={<HeartFilledIcon className="text-danger" />}
					variant="flat"
				>
					Sponsor
				</Button>
			</NavbarMenu>
		</NextUINavbar>
	);
};
