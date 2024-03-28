import { icons } from 'lucide-react';

import { IconType } from '@/lib/data';

interface IconProps {
  className?: string;
  color?: string;
  name: IconType;
  size?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

export const Icon = ({ color, name, size = '24', className, strokeWidth = 2, absoluteStrokeWidth }: IconProps) => {
  const LucideIcon = icons[name];
  return <LucideIcon color={color} size={size} className={className} strokeWidth={strokeWidth} absoluteStrokeWidth={absoluteStrokeWidth} />;
};
