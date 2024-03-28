'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icon } from '.';
import { SideItem, sideitem } from '@/lib/data';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { cn } from '@/lib/utils';
import { Logo } from '../logo';

export const Sidebar = () => {
  return (
    <aside className='min-h-screen'>
      <div className="flex flex-col h-full w-20 md:w-56 border-r p-3">
        <Logo />
        <nav className="flex-1 overflow-y-auto mt-16 md:mt-8">
          <ul className='space-y-2'>
            {sideitem.map((items, index) => {
              return <SideItems key={index} {...items} />;
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

const SideItems = ({ icon, link, subitems, title }: SideItem) => {
  const path = usePathname()
  return subitems.length > 0 ? (
    <li>
      <Collapsible className='group'>
        <CollapsibleTrigger className={cn("flex items-center px-4 py-2 rounded-md w-full hover:bg-primary/15 hover:text-primary transition-colors ease-in-out duration-300 outline-none", { 'text-primary font-semibold bg-primary/15': path.includes(link)})}>
            {icon && <Icon name={icon} size="20" />}
            <span className='ml-2'>{title}</span>
          <Icon
            name={'ChevronRight'}
            className="ml-auto group-data-[state=open]:rotate-90 group-data-[state=open]:transition-transform"
            size="17"
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul>
            {subitems.map(({ icon, link, title }, index) => {
              return (
                <li key={index}>
                  <Link
                    href={link}
                    className={cn("flex items-center my-2 ml-8 p-4 h-10 text-sm rounded-md hover:font-medium hover:text-primary transition-all ease-in-out duration-300", { 'text-primary font-semibold': link === path})}
                  >
                    {icon && <Icon name={icon} className="mr-2 h-4 w-4" />}
                    <span>{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </li>
  ) : (
    <li>
      <Link
        href={link}
        className={cn("flex items-center px-4 py-2 rounded-md hover:bg-primary/15 hover:text-primary transition-colors ease-in-out duration-300", { 'text-primary font-semibold bg-primary/15': link === path})}
      >
        {icon && <Icon name={icon} size="20" className={cn({ 'font-semibold': link === path})} />}
        <span className='ml-2'>{title}</span>
      </Link>
    </li>
  );
};