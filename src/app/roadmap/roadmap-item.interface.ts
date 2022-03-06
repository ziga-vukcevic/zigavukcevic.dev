export interface RoadmapItemInterface {
  level: number;
  version?: string | number;
  status: 'knowledgeAbsorbed' | 'knowledgeNeedToGain';
  text: string;
  hrefTitle?: string | null;
  href?: string | null;
  childList?: RoadmapItemInterface[];
}
