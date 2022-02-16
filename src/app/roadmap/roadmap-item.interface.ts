export interface RoadmapItemInterface {
  level: number;
  status: 'knowledgeAbsorbed' | 'needToLearn';
  text: string;
  hrefTitle?: string | null;
  href?: string | null;
  childList?: RoadmapItemInterface[];
}
