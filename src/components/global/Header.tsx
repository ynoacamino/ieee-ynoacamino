import ThemeToggle from '@/components/ui/themeToggle';
import Link from '@/components/ui/link';
import LanguageToggle from '../ui/languageToggle';
import IEEETitle from '../logos/IEEETitle';

// import './Header.css';

const navLinks = [
  {
    href: '/blog',
    text: 'Blog',
  },
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/events',
    text: 'Events',
  },
  {
    href: '/teams',
    text: 'Teams',
  },
];

export default function Header() {
  return (
    <header id="header" className="w-full flex justify-center items-center text-primary sticky top-0 bg-background backdrop-blur-md z-10">
      <div className="w-full max-w-6xl py-2 px-6 flex justify-between items-center">
        <a href="/">
          <h1 className="font-bold text-xl flex flex-col leading-none text-center">
            <IEEETitle className="w-40 h-auto" />
            <span className="sr-only">IEEE COMPUTER SOCIETY</span>
          </h1>
        </a>
        <div className="flex gap-2 items-center">
          <nav className="flex items-center justify-start gap-10">
            <div className="md:flex gap-2 hidden font-semibold">
              {
            navLinks.map(({ href, text }) => (
              <Link className="text-base" href={href} key={text}>
                {text}
              </Link>
            ))
            }
            </div>
          </nav>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>

    </header>
  );
}