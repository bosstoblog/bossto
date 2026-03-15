export type SocialLink = {
  label: string;
  url: string;
  icon: string;
};

export type SupportLink = {
  label: string;
  url: string;
  description: string;
};

type LangConfig = {
  socials: SocialLink[];
  support: SupportLink[];
};

export const config: Record<string, LangConfig> = {
  ru: {
    socials: [
      { label: 'Telegram',   url: 'https://t.me/bossto',            icon: 'tg'  },
      { label: 'VK',         url: 'https://vk.com/bossto',          icon: 'vk'  },
      { label: 'YouTube',    url: 'https://youtube.com/@ru.bossto', icon: 'yt'  },
      { label: 'Instagram',  url: 'https://instagram.com/ru.bossto',icon: 'ig'  },
      { label: 'TikTok',     url: 'https://tiktok.com/@bosstoru',   icon: 'tt'  },
    ],
    support: [
      {
        label: 'Boosty',
        url: 'https://boosty.to/bossto',
        description: 'Поддержи на Boosty — доступ к закрытым материалам',
      },
      {
        label: 'Telegram Stars',
        url: 'https://t.me/bossto',
        description: 'Отправь звёзды прямо в Telegram',
      },
    ],
  },

  en: {
    socials: [
      { label: 'Twitter / X', url: 'https://x.com/bosstoblog',             icon: 'x'   },
      { label: 'LinkedIn',    url: 'https://linkedin.com/in/bosstoblog',   icon: 'li'  },
      { label: 'YouTube',     url: 'https://youtube.com/@en.bossto',       icon: 'yt'  },
      { label: 'Instagram',   url: 'https://instagram.com/en.bossto',      icon: 'ig'  },
      { label: 'TikTok',      url: 'https://tiktok.com/@bosstoen',         icon: 'tt'  },
    ],
    support: [
      {
        label: 'Ko-fi',
        url: 'https://ko-fi.com/bosstoblog',
        description: 'Buy me a coffee — support the work',
      },
      {
        label: 'Patreon',
        url: 'https://patreon.com/bosstoblog',
        description: 'Get early access and exclusive content',
      },
    ],
  },

  es: {
    socials: [
      { label: 'Twitter / X', url: 'https://x.com/bosstoblog',             icon: 'x'   },
      { label: 'YouTube',     url: 'https://youtube.com/@es.bossto',       icon: 'yt'  },
      { label: 'Instagram',   url: 'https://instagram.com/es.bossto',      icon: 'ig'  },
      { label: 'TikTok',      url: 'https://tiktok.com/@bosstoes',         icon: 'tt'  },
    ],
    support: [
      {
        label: 'Ko-fi',
        url: 'https://ko-fi.com/bosstoblog',
        description: 'Apoya el trabajo con un café',
      },
    ],
  },
};
