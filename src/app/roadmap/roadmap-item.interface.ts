export interface RoadmapItemInterface {
  level: number;
  status: 'knowledgeAbsorbed' | 'knowledgeNeedToGain';
  text: string;
  ga?: any;
  gaEvent?: string;
  hrefTitle?: string | null;
  href?: string | null;
  version?: string | number;
  childList?: RoadmapItemInterface[];
}
