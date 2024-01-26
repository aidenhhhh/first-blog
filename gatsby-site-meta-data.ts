export default {
  /**
   * basic Information
   */
  title: `aidenhanblog.com`,
  description: `개발자 진수`,
  language: `ko`,
  siteUrl: `https://aidenhanblog.com/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: `achi-jinsoo/utterance_widjet`, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `한진수`,
    nickname: `진수`,
    stack: ['Frontend', 'React', 'Html/Css'],
    bio: {
      email: `enesparchic@naver.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: 'Gachon Univ. Fashion-Disign (2014.03-2022.08)',
    },
    social: {
      github: `https://github.com/achi-jinsoo`,
      linkedIn: `https://www.linkedin.com/in/jeonming-lee/`,
      resume: `https://www.figma.com/file/dtkCl6G7G5DVe18DN2LWny/%EC%9D%B4%EC%A0%95%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0%3A1`,
    },
    dropdown: {
      tistory: 'https://danminblog.tistory.com/',
      velog: 'https://velog.io/@danmin20',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: '개발, 늦었다고 생각할 때가...',
      category: 'featured-category1',
    },
    {
      title: 'Tech Review',
      category: 'featured-category2',
    },
    {
      title: 'I love it.',
      category: 'featured-category2',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2020.08.04 - NOW',
      en: 'gredit',
      kr: '그래딧',
      info: 'Web Publisher',
      link: '',
    },
    {
      category: 'Career',
      date: '2020.01.04 - NOW',
      en: 'WETWET',
      kr: '웨트웨트',
      info: 'Shopping Mall - aiden Made',
      link: '',
    },
    {
      category: 'Activity',
      date: '2023.09 - 2024,02',
      en: 'EZEN Computer Academy',
      kr: '이젠 컴퓨터 아카데미',
      info: 'UI/UX Web, App design(figma) & Front-End(react.js) 과정 수료',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/danmin',
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
