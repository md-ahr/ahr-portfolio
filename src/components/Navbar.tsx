'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MENU } from '@/utils/contants';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav id="main-navbar">
      <ul className="navbar-wrapper">
        {MENU.length > 1 ? (
          MENU.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`nav-link ${item.path === pathname ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            </li>
          ))
        ) : (
          <li className="capitalize text-gray-600">Menu not available</li>
        )}
      </ul>
    </nav>
  );
}
