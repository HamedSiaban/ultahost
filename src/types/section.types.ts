import { ReactNode } from "react";

export type SectionProps = {
  id: number;
  badgeLabel: string;
  boldTitle: string;
  normalTitle: string;
  subTitle: string;
  flexOrder: number;
  gridColumnNumber: number;
  gridRowNumber: number;
  image: ReactNode;
};
