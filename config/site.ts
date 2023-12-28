export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Symply | Home",
	description: "Symply is much more than just an enhanced version of PocketMine-MP. It's a platform brimming with exceptional innovations and add-ons for creating your own personalized Minecraft Bedrock server. With its advanced features, user-friendly interface and selection of fantastic add-ons, Symply gives you the power to shape a unique and captivating gaming environment for you and your players.",
	navItems: [
    {
      label: "docs",
      href: "/docs",
    },
    {
      label: "plugin",
      href: "/plugins",
    },
    {
      label: "forums",
      href: "/forum",
    },
    {
      label: "team",
      href: "/team",
    },
	{
	  label: "contributors",
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
