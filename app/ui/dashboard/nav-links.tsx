'use client';
// This component is used to display the navigation links in the dashboard.
// It is a client component because it uses the usePathname hook from next/navigation
// to determine the current path and highlight the active link.

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ReceiptPercentIcon, VariableIcon } from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'About',
    href: '/dashboard/about',
    icon: VariableIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Candidates', href: '/dashboard/candidates', icon: UserGroupIcon },
  { name: 'Jobs', href: '/dashboard/jobs', icon: ReceiptPercentIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href; // Check if the current path matches the link's href

        return (
          <Link
            key={link.name}
            href={link.href}
          //   className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 ${
          //     isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-50 hover:bg-sky-100 hover:text-blue-600'
          //   }`}
          // >
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-500': pathname === link.href,
            },
          )}
        >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
