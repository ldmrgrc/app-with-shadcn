import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CardStatsProps } from '@/lib/data';



export const CardStats = ({
  percentage,
  svg,
  title,
  value,
}: CardStatsProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {svg}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{percentage}</p>
      </CardContent>
    </Card>
  );
};
