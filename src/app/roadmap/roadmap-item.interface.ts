export interface RoadmapItemInterface {
  level: number;
  status: 'knowledgeAbsorbed' | 'knowledgeNeedToGain';
  text: string;
  hrefTitle?: string | null;
  href?: string | null;
  childList?: RoadmapItemInterface[];
}
