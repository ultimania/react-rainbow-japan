import imgMv1 from './assets/img_mv_01.webp'
import imgMv2 from './assets/img_mv_02.webp'
import imgMv3 from './assets/img_mv_03.webp'

import imgSv1 from './assets/img_service_01.webp'
import imgSv2 from './assets/img_service_02.webp'
import imgSv3 from './assets/img_service_03.webp'
import imgSv4 from './assets/img_service_04.webp'
import imgAc2 from './assets/img_achievement_02.webp'
import imgAc3 from './assets/img_achievement_03.webp'
import imgAc4 from './assets/img_achievement_04.webp'

export const slides = [{ src: imgMv1 }, { src: imgMv2 }, { src: imgMv3 }]

export const informations = [
  {
    date: '20230310',
    title:
      'Company A has been certified as "Excellent Health Management Corporation 2023" by the Ministry of Economy, Trade and Industry. We will continue our efforts in health management.',
    url: '/dummy',
  },
  {
    date: '20220401',
    title:
      'Announcement of transition to hybrid work (combination of office work and telework).',
  },
  {
    date: '20220309',
    title:
      'Company A has been certified as "Excellent Health Management Corporation 2022" by the Ministry of Economy, Trade and Industry. We will continue our efforts in health management.',
  },
]

export const headerNavItems = [
  {
    name: 'Features',
    href: '/dummy',
  },
  {
    name: 'Services',
    href: '/dummy',
    subItems: [
      {
        name: 'Website Creation',
        href: '/dummy',
      },
      {
        name: 'Website Improvement/Updates',
        href: '/dummy',
      },
      {
        name: 'Web Marketing Support',
        href: '/dummy',
      },
      {
        name: 'UI Design',
        href: '/dummy',
      },
      {
        name: 'Website Production Flow',
        href: '/dummy',
      },
      {
        name: 'Website Production Team',
        href: '/dummy',
      },
    ],
  },
  {
    name: 'Achievements',
    href: '/dummy',
  },
  {
    name: 'Company Information',
    href: '/dummy',
  },
  {
    name: 'Careers',
    href: '/dummy',
  },
  {
    name: 'Announcements',
    href: '/dummy',
  },
]

export const footerNavItems = [
  {
    name: 'Privacy Policy',
    href: '/dummy',
  },
  {
    name: 'Site Map',
    href: '/dummy',
  },
  {
    name: 'Quality Policy/Environmental Policy',
    href: '/dummy',
  },
]

export const achievements = [
  {
    src: imgAc2,
    title: 'Product A',
    subtitle: 'Company B',
    href: '/dummy',
    buttonLabel: 'Brand Site',
  },
  {
    src: imgAc3,
    title: 'Product B',
    subtitle: 'Company C',
    href: '/dummy',
    buttonLabel: 'Corporate Site',
  },
  {
    src: imgAc4,
    title: 'Product C',
    subtitle: 'Company D',
    href: '/dummy',
    buttonLabel: 'Corporate Site',
  },
]

export const headlines = [
  {
    title: 'Website Creation',
    description:
      'We create websites ranging from large-scale sites to landing pages according to your requirements.',
    href: 'https://example.com/website-creation',
    img: imgSv1,
  },
  {
    title: 'Website Improvement',
    description:
      'We provide solutions for website administrators, from improving traffic and user flow to handling routine page updates.',
    href: 'https://example.com/website-improvement',
    img: imgSv2,
  },
  {
    title: 'Web Marketing Support',
    description:
      'From identifying issues through research and analysis to measuring the effectiveness of implemented strategies, we specialize in Google Analytics setup support.',
    href: 'https://example.com/web-marketing-support',
    img: imgSv3,
  },
  {
    title: 'UI Design',
    description:
      'We create user interfaces for mobile apps, web apps, and more. Feel free to consult us for demo mock-ups and design guideline development.',
    href: 'https://example.com/ui-design',
    img: imgSv4,
  },
]
