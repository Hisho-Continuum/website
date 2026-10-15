export interface NavItem {
  label: string;
  href: string;
}

export interface ObstacleItem {
  id: string;
  title: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  hasVisual?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export interface PlanStep {
  number: string;
  title: string;
  description: string;
}
