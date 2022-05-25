import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.respct.club/contact-us",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.respct.club/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.respct.club/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.respct.club/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.respct.club/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.respct.club/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.respct.club",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.respct.club/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.respct.club/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/RespctClub",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/respctclub",
      },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "https://t.me/PancakeSwapIndonesia",
      // },
      // {
      //   label: "中文",
      //   href: "https://t.me/PancakeSwap_CN",
      // },
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      // },
      // {
      //   label: "Italiano",
      //   href: "https://t.me/pancakeswap_ita",
      // },
      // {
      //   label: "русский",
      //   href: "https://t.me/pancakeswap_ru",
      // },
      // {
      //   label: "Türkiye",
      //   href: "https://t.me/pancakeswapturkiye",
      // },
      // {
      //   label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      // },
      // {
      //   label: "Español",
      //   href: "https://t.me/PancakeswapEs",
      // },
      // {
      //   label: "日本語",
      //   href: "https://t.me/pancakeswapjp",
      // },
      // {
      //   label: "Français",
      //   href: "https://t.me/pancakeswapfr",
      // },
      // {
      //   label: "Announcements",
      //   href: "https://t.me/PancakeSwapAnn",
      // },
      // {
      //   label: "Whale Alert",
      //   href: "https://t.me/PancakeSwapWhales",
      // },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/respctclub",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/respctclub",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/respct-club/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/respct",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
