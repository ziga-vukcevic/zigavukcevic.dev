export interface RoadmapItemInterface {
  level: number;
  status: 'absorbed' | 'needToLearn';
  text: string;
  hrefTitle?: string | null;
  href?: string | null;
  childList?: RoadmapItemInterface[];
}
