export interface RoadmapItemInterface {
  level: number;
  status: 'knowledgeAbsorbed' | 'knowledgeNeedToGain';
  text: string;
  textVersion?: string | number;
  textNote?: string;
  hrefTitle?: string | null;
  href?: string | null;
  depthMeter: number;
  ga?: any;
  gaEvent?: string;
  child?: {
    id: string;
    isVisible: boolean;
    itemList: RoadmapItemInterface[];
  } | null;
}
