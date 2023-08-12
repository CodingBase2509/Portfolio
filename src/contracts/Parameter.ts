import { MouseEventHandler, ReactNode } from 'react';
import SkillItem from './SkillItem';
import ResumeItem from './ResumeItem';

export interface BaseParameter {
  className?: string;
}

export interface TextParameter extends BaseParameter {
  children: string;
}

export interface FullChildParameter extends BaseParameter {
  children: ReactNode;
}

export interface ButtonParameter extends FullChildParameter {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface SectionParameter extends FullChildParameter {
  secondaryHeader: string;
  mainHeader: string;
}

export interface IndicatorParameter extends BaseParameter {
  id: number;
  value: number;
}

export interface SkillComponentParameter extends BaseParameter {
  index: number;
  skill: SkillItem;
}

export interface ResumeSectionParameter extends BaseParameter {
  item: ResumeItem;
  indicator: boolean;
}
