export interface RoadmapItemInterface {
  level: number;
  status: 'knowledgeAbsorbed' | 'knowledgeNeedToGain';
  text: string;
  gaEvent?: string | undefined;
  hrefTitle?: string | null;
  href?: string | null;
  version?: string | number;
  childList?: RoadmapItemInterface[];
}
