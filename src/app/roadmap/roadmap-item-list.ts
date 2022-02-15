import { RoadmapItemInterface } from './roadmap-item.interface';

const roadmapItemList: RoadmapItemInterface[] = [
  {
    level: 1,
    status: 'absorbed',
    text: 'HTML',
    childList: [
      // TODO
    ],
  },
  {
    level: 1,
    status: 'absorbed',
    text: 'CSS',
    childList: [
      // TODO
    ],
  },
  {
    level: 1,
    status: 'absorbed',
    text: 'JavaScript',
    childList: [
      // TODO
    ],
  },
  {
    level: 1,
    status: 'absorbed',
    text: 'Version control systems',
    childList: [
      {
        level: 2,
        status: 'absorbed',
        hrefTitle: 'Git',
        href: 'https://git-scm.com/',
        text: 'Git',
      },
      {
        level: 2,
        status: 'absorbed',
        text: 'Code hosting platforms',
        childList: [
          {
            level: 3,
            status: 'absorbed',
            hrefTitle: 'GitHub',
            href: 'https://github.com/',
            text: 'GitHub',
          },
          {
            level: 3,
            status: 'absorbed',
            hrefTitle: 'GitLab',
            href: 'https://about.gitlab.com/',
            text: 'GitLab',
          },
          {
            level: 3,
            status: 'absorbed',
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
    status: 'absorbed',
    text: 'Package managers',
    childList: [
      {
        level: 2,
        status: 'absorbed',
        hrefTitle: 'Npm',
        href: 'https://www.npmjs.com/',
        text: 'Npm',
      },
      {
        level: 2,
        status: 'absorbed',
        hrefTitle: 'Yarn',
        href: 'https://yarnpkg.com/',
        text: 'Yarn',
      },
    ],
  },
  {
    level: 1,
    status: 'absorbed',
    text: 'JavaScript frameworks / UI libraries',
    childList: [
      {
        level: 2,
        status: 'absorbed',
        hrefTitle: 'Angular',
        href: 'https://angular.io/',
        text: 'Angular',
        childList: [
          {
            level: 3,
            status: 'absorbed',
            hrefTitle: 'RxJS',
            href: 'https://rxjs.dev/',
            text: 'RxJS',
          },
          {
            level: 3,
            status: 'needToLearn',
            hrefTitle: 'NgRx',
            href: 'https://ngrx.io/',
            text: 'NgRx',
          },
        ],
      },
      {
        level: 2,
        status: 'absorbed',
        hrefTitle: 'React',
        href: 'https://reactjs.org/',
        text: 'React',
      },
      {
        level: 2,
        status: 'absorbed',
        hrefTitle: 'Vue.js',
        href: 'https://vuejs.org/',
        text: 'Vue.js',
      },
      {
        level: 2,
        status: 'needToLearn',
        hrefTitle: 'Svelte',
        href: 'https://svelte.dev/',
        text: 'Svelte',
      },
    ],
  },
  {
    level: 1,
    status: 'absorbed',
    text: 'CSS frameworks',
    childList: [
      {
        level: 2,
        status: 'absorbed',
        text: 'CSS first',
        childList: [
          {
            level: 3,
            status: 'absorbed',
            hrefTitle: 'Foundation',
            href: 'https://get.foundation/',
            text: 'Foundation',
          },
          {
            level: 3,
            status: 'absorbed',
            hrefTitle: 'Bootstrap',
            href: 'https://getbootstrap.com/',
            text: 'Bootstrap',
          },
          {
            level: 3,
            status: 'absorbed',
            hrefTitle: 'Tailwind',
            href: 'https://tailwindcss.com/',
            text: 'Tailwind',
          },
        ],
      },
      {
        level: 2,
        status: 'absorbed',
        text: 'JavaScript based',
        childList: [
          {
            level: 3,
            status: 'absorbed',
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
    status: 'needToLearn',
    text: 'And I keep learning',
    childList: [
      {
        level: 2,
        status: 'needToLearn',
        text: '...',
      },
    ],
  },
];

export default roadmapItemList;
