import ThemeToggle from '@/components/ui/themeToggle';
import NextLink from 'next/link';
import IEEETitle from '../logos/IEEETitle';
import NavBarMobile from './NavBarMobile';
import Links from './Links';

import './Header.css';

export default function Header() {
  return (
    <header id="header" className="w-full flex justify-center items-center text-primary sticky top-0 bg-background backdrop-blur-md z-10">
      <div className="w-full max-w-7xl py-2 px-6 flex justify-between items-center">
        <NextLink href="/">
          <IEEETitle className="w-40 h-auto" />
          <span className="sr-only">IEEE COMPUTER SOCIETY</span>
        </NextLink>
        <div className="flex gap-2 items-center">
          <nav className="flex items-center justify-start gap-10">
            <Links />
          </nav>
          <div className="hidden md:flex gap-2 items-center">
            <ThemeToggle />
          </div>
          <NavBarMobile />
        </div>
      </div>

    </header>
  );
}
