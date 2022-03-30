import { RoadmapItemInterface } from './roadmap-item.interface';

// TODO: add Storybook

const roadmapItemList: RoadmapItemInterface[] = [
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'HTML',
    version: 5,
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Semantic markup',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
        text: 'Semantic markup',
        gaEvent: 'htmlSemanticMarkup',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Responsive images',
        href: 'https://developers.google.com/web/fundamentals/design-and-ux/responsive/images',
        text: 'Responsive images',
        gaEvent: 'htmlResponsiveImages',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Conventions and best practices',
        href: 'https://github.com/hail2u/html-best-practices',
        text: 'Conventions and best practices',
        gaEvent: 'htmlConventionsAndBestPractices',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'SEO - Search engine optimization',
        href: 'https://developers.google.com/search/docs',
        text: 'SEO - Search engine optimization',
        gaEvent: 'htmlSEO',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Accessibility',
        href: 'https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/',
        text: 'Accessibility',
        gaEvent: 'htmlAccessibility',
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'CSS',
    version: 3,
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Box model',
        href: 'https://www.geeksforgeeks.org/css-box-model/',
        text: 'Box model',
        gaEvent: 'cssBoxModel',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Specificity',
        href: 'https://specifishity.com/',
        text: 'Specificity',
        gaEvent: 'cssSpecificity',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Responsive web design based on media queries',
        href: 'https://torquemag.io/2021/08/media-queries-guide/',
        text: 'Responsive web design based on media queries',
        gaEvent: 'cssResponsiveWebDesign',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        text: 'Layouts',
        gaEvent: 'cssLayouts',
        childList: [
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Flexbox',
            href: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
            text: 'Flexbox',
            gaEvent: 'cssLayoutsFlexbox',
          },
          {
            level: 3,
            status: 'knowledgeNeedToGain',
            hrefTitle: 'Grid',
            href: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
            text: 'Grid',
            gaEvent: 'cssLayoutsGrid',
          },
        ],
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Transitions and animations',
        href: 'https://blog.hubspot.com/website/css-transition-vs-animation',
        text: 'Transitions and animations',
        gaEvent: 'cssTransitionsAndAnimations',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        text: 'Methodologies',
        childList: [
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'BEM - Block, element and modifier',
            href: 'http://getbem.com/introduction/',
            text: 'BEM - Block, element and modifier',
            gaEvent: 'cssMethodologiesBEM',
          },
        ],
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        text: 'Preprocessors',
        childList: [
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Sass - Syntactically awesome style sheets',
            href: 'https://sass-lang.com/',
            text: 'Sass - Syntactically awesome style sheets',
            gaEvent: 'cssPreprocessorsSass',
          },
        ],
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        text: 'Frameworks',
        childList: [
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            text: 'Based on CSS first',
            childList: [
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Foundation',
                href: 'https://get.foundation/',
                text: 'Foundation',
                gaEvent: 'cssFrameworksFoundation',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Bootstrap',
                href: 'https://getbootstrap.com/',
                text: 'Bootstrap',
                gaEvent: 'cssFrameworksBootstrap',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Tailwind',
                href: 'https://tailwindcss.com/',
                text: 'Tailwind',
                gaEvent: 'cssFrameworksTailwind',
              },
            ],
          },
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            text: 'JavaScript based',
            childList: [
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Chakra UI',
                href: 'https://chakra-ui.com/',
                text: 'Chakra UI',
                gaEvent: 'cssFrameworksChakraUI',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'JavaScript',
    version: 'ES6+',
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'DOM - document object model - manipulation',
        href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents',
        text: 'DOM - document object model - manipulation',
        gaEvent: 'javaScriptDOMmanipulation',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Modules',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules',
        text: 'Modules',
        gaEvent: 'javaScriptModules',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        text: 'Frameworks and libraries',
        childList: [
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Angular',
            href: 'https://angular.io/',
            text: 'Angular',
            gaEvent: 'javaScriptFrameworksAndLibrariesAngular',
            childList: [
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Modules',
                href: 'https://angular.io/guide/architecture-modules',
                text: 'Modules',
                gaEvent: 'angularModules',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Components',
                href: 'https://angular.io/guide/architecture-components',
                text: 'Components',
                gaEvent: 'angularComponents',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Templates',
                href: 'https://angular.io/guide/template-syntax',
                text: 'Templates',
                gaEvent: 'angularTemplates',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Directives',
                href: 'https://angular.io/guide/built-in-directives',
                text: 'Directives',
                gaEvent: 'angularDirectives',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Services',
                href: 'https://angular.io/guide/architecture-services',
                text: 'Services',
                gaEvent: 'angularServices',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Dependency injection',
                href: 'https://angular.io/guide/dependency-injection',
                text: 'Dependency injection',
                gaEvent: 'angularDependencyInjection',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Routing',
                href: 'https://angular.io/guide/routing-overview',
                text: 'Routing',
                gaEvent: 'angularRouting',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Reactive forms',
                href: 'https://angular.io/guide/reactive-forms',
                text: 'Reactive forms',
                gaEvent: 'angularReactiveForms',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'HTTP client',
                href: 'https://angular.io/guide/http',
                text: 'HTTP client',
                gaEvent: 'angularHTTPclient',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Testing',
                href: 'https://angular.io/guide/testing',
                text: 'Testing',
                gaEvent: 'angularTesting',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Internationalization',
                href: 'https://angular.io/guide/i18n-overview',
                text: 'Internationalization',
                gaEvent: 'angularInternationalization',
              },
              {
                level: 4,
                status: 'knowledgeNeedToGain',
                hrefTitle: 'Service workers and PWA',
                href: 'https://angular.io/guide/service-worker-intro',
                text: 'Service workers and PWA',
                gaEvent: 'angularServiceWorkersAndPWA',
              },
              {
                level: 4,
                status: 'knowledgeNeedToGain',
                hrefTitle: 'Web workers',
                href: 'https://angular.io/guide/web-worker',
                text: 'Web workers',
                gaEvent: 'angularWebWorkers',
              },
              {
                level: 4,
                status: 'knowledgeNeedToGain',
                hrefTitle: 'SSR - Server-side rendering',
                href: 'https://angular.io/guide/universal',
                text: 'SSR - Server-side rendering',
                gaEvent: 'angularSSR',
              },
              {
                level: 4,
                status: 'knowledgeNeedToGain',
                hrefTitle: 'Prerendering',
                href: 'https://angular.io/guide/prerendering',
                text: 'Prerendering',
                gaEvent: 'angularPrerendering',
              },
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'CLI - Command-line interface',
                href: 'https://angular.io/cli',
                text: 'CLI - Command-line interface',
                gaEvent: 'angularCLI',
              },
              {
                level: 4,
                status: 'knowledgeNeedToGain',
                text: 'Libraries',
                childList: [
                  {
                    level: 5,
                    status: 'knowledgeNeedToGain',
                    hrefTitle: 'NgRx - Reactive State for Angular',
                    href: 'https://ngrx.io/',
                    text: 'NgRx - Reactive State for Angular',
                    gaEvent: 'angularLibrariesNgRx',
                  },
                ],
              },
            ],
          },
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'React',
            href: 'https://reactjs.org/',
            text: 'React',
            gaEvent: 'javaScriptFrameworksAndLibrariesReact',
          },
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Vue.js',
            href: 'https://vuejs.org/',
            text: 'Vue.js',
            gaEvent: 'javaScriptFrameworksAndLibrariesVueJs',
            childList: [
              {
                level: 4,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Vuex',
                href: 'https://vuex.vuejs.org/',
                text: 'Vuex',
                gaEvent: 'javaScriptFrameworksAndLibrariesVuex',
              },
            ],
          },
          {
            level: 3,
            status: 'knowledgeNeedToGain',
            hrefTitle: 'Svelte',
            href: 'https://svelte.dev/',
            text: 'Svelte',
            gaEvent: 'javaScriptFrameworksAndLibrariesSvelte',
          },
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'RxJS - Reactive Extensions Library for JavaScript',
            href: 'https://rxjs.dev/',
            text: 'RxJS - Reactive Extensions Library for JavaScript',
            gaEvent: 'javaScriptFrameworksAndLibrariesRxJS',
          },
        ],
      },
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
        hrefTitle: 'Git - Global Information Tracker',
        href: 'https://git-scm.com/',
        text: 'Git - Global Information Tracker',
        gaEvent: 'versionControlSystemsGit',
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
            gaEvent: 'versionControlSystemsGitHub',
          },
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'GitLab',
            href: 'https://about.gitlab.com/',
            text: 'GitLab',
            gaEvent: 'versionControlSystemsGitLab',
          },
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Bitbucket',
            href: 'https://bitbucket.org/',
            text: 'Bitbucket',
            gaEvent: 'versionControlSystemsBitbucket',
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
        hrefTitle: 'yarn',
        href: 'https://yarnpkg.com/',
        text: 'yarn',
        gaEvent: 'packageManagersYarn',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'npm',
        href: 'https://www.npmjs.com/',
        text: 'npm',
        gaEvent: 'packageManagersNpm',
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'Web security',
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'HTTPS - Hypertext transfer protocol secure',
        href: 'https://www.cloudflare.com/en-gb/learning/ssl/why-is-http-not-secure/',
        text: 'HTTPS - Hypertext transfer protocol secure',
        gaEvent: 'webSecurityHTTPS',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'CORS - Cross-origin resource sharing',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS',
        text: 'CORS - Cross-origin resource sharing',
        gaEvent: 'webSecurityCORS',
      },
      // TODO: figure out
      // {
      //   level: 2,
      //   status: 'knowledgeAbsorbed',
      //   hrefTitle: 'CSP - Content security policy',
      //   href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP',
      //   text: 'CSP - Content security policy',
      //   gaEvent: 'webSecurityCSP',
      // },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Top 10 OWASP security risks',
        href: 'https://owasp.org/www-project-top-ten/',
        text: 'Top 10 OWASP security risks',
        gaEvent: 'webSecurityTop10OWASPsecurityRisks',
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'Application authentication and authorization',
    // TODO: childList: [] e.g. openId, keycloak
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'Application testing',
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        text: 'Functional tests',
        childList: [
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Unit test',
            href: 'https://www.guru99.com/unit-testing-guide.html',
            text: 'Unit test',
            gaEvent: 'applicationTestingUnitTest',
          },
          {
            level: 3,
            status: 'knowledgeNeedToGain',
            hrefTitle: 'Integration test',
            href: 'https://www.guru99.com/integration-testing.html',
            text: 'Integration test',
            gaEvent: 'applicationTestingIntegrationTest',
          },
        ],
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        text: 'Frameworks',
        childList: [
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Jasmine',
            href: 'https://jasmine.github.io/',
            text: 'Jasmine',
            gaEvent: 'applicationTestingFrameworksJasmine',
          },
          {
            level: 3,
            status: 'knowledgeAbsorbed',
            hrefTitle: 'Karma',
            href: 'https://karma-runner.github.io/latest/index.html',
            text: 'Karma',
            gaEvent: 'applicationTestingFrameworksKarma',
          },
        ],
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'Application versioning',
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Semantic versioning',
        href: 'https://semver.org/',
        text: 'Semantic versioning',
        gaEvent: 'applicationVersioningSemanticVersioning',
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'E-commerce platforms',
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Shopware',
        href: 'https://www.shopware.com/en/',
        text: 'Shopware',
        gaEvent: 'eCommerceShopware',
      },
      {
        level: 2,
        status: 'knowledgeNeedToGain',
        hrefTitle: 'commercetools',
        href: 'https://commercetools.com/',
        text: 'commercetools',
        gaEvent: 'eCommerceCommercetools',
      },
      {
        level: 2,
        status: 'knowledgeNeedToGain',
        hrefTitle: 'Pimcore',
        href: 'https://pimcore.com/en',
        text: 'Pimcore',
        gaEvent: 'eCommercePimcore',
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
        hrefTitle: 'NuxtJS',
        href: 'https://nuxtjs.org/',
        text: 'NuxtJS',
        gaEvent: 'staticSiteGeneratorsNuxtJS',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Jekyll',
        href: 'https://jekyllrb.com/',
        text: 'Jekyll',
        gaEvent: 'staticSiteGeneratorsJekyll',
      },
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'VuePress',
        href: 'https://vuepress.vuejs.org/',
        text: 'VuePress',
        gaEvent: 'staticSiteGeneratorsVuePress',
      },
      {
        level: 2,
        status: 'knowledgeNeedToGain',
        hrefTitle: 'Hugo',
        href: 'https://gohugo.io/',
        text: 'Hugo',
        gaEvent: 'staticSiteGeneratorsHugo',
      },
      {
        level: 2,
        status: 'knowledgeNeedToGain',
        hrefTitle: 'Eleventy',
        href: 'https://www.11ty.dev/',
        text: 'Eleventy',
        gaEvent: 'staticSiteGeneratorsEleventy',
      },
    ],
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'Virtualization',
    childList: [
      {
        level: 2,
        status: 'knowledgeAbsorbed',
        hrefTitle: 'Docker',
        href: 'https://www.docker.com/',
        text: 'Docker',
        gaEvent: 'virtualizationDocker',
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
