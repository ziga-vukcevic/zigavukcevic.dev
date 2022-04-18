import { RoadmapItemInterface } from './roadmap-item.interface';

export const roadmapItemList: RoadmapItemInterface[] = [
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'Level 1',
    depthMeter: 52,
    child: {
      id: '3a526d02e84c480f9716a037e380ade4',
      isVisible: true,
      itemList: [
        {
          level: 2,
          status: 'knowledgeAbsorbed',
          hrefTitle: 'Level 2',
          href: 'https://wwww.google.com',
          text: 'Level 2',
          depthMeter: 0,
          gaEvent: '',
        },
      ],
    },
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'Level 1',
    depthMeter: 52,
    child: {
      id: '3a526d02e84c480f9716a037e380ade4',
      isVisible: true,
      itemList: [
        {
          level: 2,
          status: 'knowledgeAbsorbed',
          text: 'Level 2',
          depthMeter: 0,
          gaEvent: '',
          child: {
            id: '3a526d02e84c480f9716a037e380ade4',
            isVisible: true,
            itemList: [
              {
                level: 3,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Level 3',
                href: 'https://wwww.google.com',
                text: 'Level 3',
                depthMeter: 0,
                gaEvent: '',
              },
            ],
          },
        },
        {
          level: 2,
          status: 'knowledgeAbsorbed',
          text: 'Level 2',
          depthMeter: 0,
          gaEvent: '',
        },
      ],
    },
  },
  {
    level: 1,
    status: 'knowledgeAbsorbed',
    text: 'Level 1',
    depthMeter: 52,
    child: {
      id: '3a526d02e84c480f9716a037e380ade4',
      isVisible: true,
      itemList: [
        {
          level: 2,
          status: 'knowledgeAbsorbed',
          text: 'Level 2',
          depthMeter: 0,
          gaEvent: '',
        },
        {
          level: 2,
          status: 'knowledgeAbsorbed',
          text: 'Level 2',
          depthMeter: 0,
          gaEvent: '',
          child: {
            id: '3a526d02e84c480f9716a037e380ade4',
            isVisible: true,
            itemList: [
              {
                level: 3,
                status: 'knowledgeAbsorbed',
                hrefTitle: 'Level 3',
                href: 'https://wwww.google.com',
                text: 'Level 3',
                depthMeter: 0,
                gaEvent: '',
              },
            ],
          },
        },
      ],
    },
  },
];
