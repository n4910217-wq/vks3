import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}