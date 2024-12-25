// Importing necessary React components and icons
import { Code, House, Newspaper, UserRound } from 'lucide-react';
import React from 'react';
import NavigationMenuHelper from './react/NavigationMenuHelper';
import NavtxtLogo from './react/NavTxtLogo';

// Define the type for nav items
interface NavItem {
  id: number;
  name: string;
  icon: JSX.Element;
  url: string;
  isModeToggle?: boolean;
}

// List of navigation items with TypeScript type
const navListItems: NavItem[] = [
  {
    id: 0,
    name: 'Home',
    icon: <House />,
    url: '/',
  },
  {
    id: 1,
    name: 'About Me',
    icon: <UserRound />,
    url: '/about-me',
  },
  {
    id: 2,
    name: 'Articles',
    icon: <Newspaper />,
    url: '/articles',
  },
  {
    id: 3,
    name: 'Code Snippets',
    icon: <Code />,
    url: '/code-snippets',
  },
  {
    id: 4,
    name: 'ModeToggle',
    icon: <Code />,
    url: '/mode-toggle',
    isModeToggle: true,
  },
];

// Main navigation component
const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-center p-4 shadow-md dark:shadow-none">
      <NavtxtLogo />
      <NavigationMenuHelper navItems={navListItems} />
    </nav>
  );
};

export default Navbar;
