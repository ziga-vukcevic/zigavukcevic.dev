export interface RoadmapItemInterface {
  level: number;
  status: 'knowledgeAbsorbed' | 'knowledgeNeedToGain';
  text: string;
  depthMeter: number;
  ga?: any;
  gaEvent?: string;
  hrefTitle?: string | null;
  href?: string | null;
  version?: string | number;
  child?: {
    id: string;
    isVisible: boolean;
    itemList: RoadmapItemInterface[];
  } | null;
}
