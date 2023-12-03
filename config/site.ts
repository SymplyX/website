export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Symply",
	description: "Make beautiful websites regardless of your design experience.",
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
		github: "https://github.com/nextui-org/nextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
    	sponsor: "https://patreon.com/symply"
	},
};
