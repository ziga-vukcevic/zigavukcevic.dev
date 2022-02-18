import { RoadmapItemInterface } from './roadmap-item.interface';

const roadmapItemList: RoadmapItemInterface[] = [
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'HTML',
    childList: [
      // TODO
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'CSS',
    childList: [
      // TODO
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'JavaScript',
    childList: [
      // TODO
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'Version control systems',
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Git',
        href: 'https://git-scm.com/',
        text: 'Git',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        text: 'Code hosting platforms',
        childList: [
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'GitHub',
            href: 'https://github.com/',
            text: 'GitHub',
          },
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'GitLab',
            href: 'https://about.gitlab.com/',
            text: 'GitLab',
          },
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Bitbucket',
            href: 'https://bitbucket.org/',
            text: 'Bitbucket',
          },
        ],
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'Package managers',
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'npm',
        href: 'https://www.npmjs.com/',
        text: 'npm',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'yarn',
        href: 'https://yarnpkg.com/',
        text: 'yarn',
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'JavaScript frameworks / UI libraries',
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Angular',
        href: 'https://angular.io/',
        text: 'Angular',
        childList: [
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'RxJS',
            href: 'https://rxjs.dev/',
            text: 'RxJS',
          },
          {
            level: 3,
            status: 'knowledgeNeedToGain',
            hrefTitle: 'NgRx',
            href: 'https://ngrx.io/',
            text: 'NgRx',
          },
        ],
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'React',
        href: 'https://reactjs.org/',
        text: 'React',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Vue.js',
        href: 'https://vuejs.org/',
        text: 'Vue.js',
      },
      {
        level: 2,
        status: 'knowledgeNeedToGain',
        hrefTitle: 'Svelte',
        href: 'https://svelte.dev/',
        text: 'Svelte',
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'CSS frameworks',
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        text: 'CSS first',
        childList: [
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Foundation',
            href: 'https://get.foundation/',
            text: 'Foundation',
          },
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Bootstrap',
            href: 'https://getbootstrap.com/',
            text: 'Bootstrap',
          },
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Tailwind',
            href: 'https://tailwindcss.com/',
            text: 'Tailwind',
          },
        ],
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        text: 'JavaScript based',
        childList: [
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Chakra UI',
            href: 'https://chakra-ui.com/',
            text: 'Chakra UI',
          },
        ],
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'Static site generators',
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Jekyll',
        href: 'https://jekyllrb.com/',
        text: 'Jekyll',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'NuxtJS',
        href: 'https://nuxtjs.org/',
        text: 'NuxtJS',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'VuePress',
        href: 'https://vuepress.vuejs.org/',
        text: 'VuePress',
      },
      {
        level: 2,
        status: 'knowledgeNeedToGain',
        hrefTitle: 'Hugo',
        href: 'https://gohugo.io/',
        text: 'Hugo',
      },
      {
        level: 2,
        status: 'knowledgeNeedToGain',
        hrefTitle: 'Eleventy',
        href: 'https://www.11ty.dev/',
        text: 'Eleventy',
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeNeedToGain',
    text: 'And I keep learning',
    childList: [
      {
        level: 2,
        status: 'knowledgeNeedToGain',
        text: '...',
      },
    ],
  },
];

export default roadmapItemList;
