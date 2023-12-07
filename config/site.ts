export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Symply",
	description: "Create your customized server with Symply, a superior fork of PocketMine-MP, packed with fantastic additions !",
	navItems: [
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Plugins",
      href: "/plugins",
    },
    {
      label: "Forums",
      href: "/forum",
    },
    {
      label: "Team",
      href: "/team",
    },
	{
	  label: "Contribute",
	  href: "/contribute",
	}
	],
	navMenuItems: [
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "Pricing",
			href: "/pricing",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	links: {
		github: "https://github.com/SymplyX/Symply",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/FMpGdEpxn9",
    	sponsor: "https://patreon.com/symply"
	},
};
