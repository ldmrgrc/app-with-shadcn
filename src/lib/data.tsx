import { icons } from "lucide-react";

type IconType = keyof typeof icons;

type SideItem = {
    title: string;
    icon?: IconType;
    link: string;
    subitems: SideItem[];
  };
  
  const sideitem: SideItem[] = [
    {
      title: 'Dashboard',
      icon: 'Home',
      link: '/dashboard',
      subitems: [],
    },
    {
      title: 'Users',
      icon: 'User',
      link: '/users',
      subitems: [
        {
          title: 'All Users',
          icon: 'List',
          link: '/users/all',
          subitems: [],
        },
        {
          title: 'Add User',
          icon: 'Plus',
          link: '/users/add',
          subitems: [],
        },
      ],
    },
    {
      title: 'Products',
      icon: 'Box',
      link: '/products',
      subitems: [
        {
          title: 'All Products',
          icon: 'List',
          link: '/products/all',
          subitems: [],
        },
        {
          title: 'Add Product',
          icon: 'Plus',
          link: '/products/add',
          subitems: [],
        },
      ],
    },
    {
      title: 'Orders',
      icon: 'ShoppingCart',
      link: '/orders',
      subitems: [
        {
          title: 'Pending',
          icon: 'Clock',
          link: '/orders/pending',
          subitems: [],
        },
        {
          title: 'Completed',
          icon: 'CheckCheck',
          link: '/orders/completed',
          subitems: [],
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'Settings',
      link: '/settings',
      subitems: [
        {
          title: 'Profile',
          icon: 'User',
          link: '/settings/profile',
          subitems: [],
        },
        {
          title: 'Billing',
          icon: 'CreditCard',
          link: '/settings/billing',
          subitems: [],
        },
        {
          title: 'Team',
          icon: 'Users',
          link: '/settings/team',
          subitems: [],
        },
      ],
    },
  ];
  

  export { sideitem }
  export type { IconType, SideItem }

  export type CardStatsProps = {
    title: string;
    svg: React.JSX.Element;
    value: string;
    percentage: string;
  }

  export const cardstats: CardStatsProps[] = [
    {
      title: 'Total Revenue',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      value: '+45,231.89',
      percentage: '+19% from last month',
    },
    {
      title: 'Subscriptions',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      value: '+2350',
      percentage: '+180.1% from last month',
    },
    {
      title: 'Sales',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
      value: '+12,234',
      percentage: '+19% from last month',
    },
    {
      title: 'Active Now',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      value: '+573',
      percentage: '+201 since last hour',
    },
  ];