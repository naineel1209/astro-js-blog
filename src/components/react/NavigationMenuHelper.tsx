import { Button } from "../ui/button";
import ModeToggle from "./ModeToggle";

interface NavigationMenuHelperProps {
  navItems: {
    id: number;
    name: string;
    url: string;
    isModeToggle?: boolean;
  }[];
}

export default function NavigationMenuHelper({
  navItems,
}: NavigationMenuHelperProps) {
  return (
    <div className="flex items-center">
      {navItems.map((navItem) => {
        if (navItem.isModeToggle) {
          return (
            <ModeToggle
              key={navItem.id}
              className="text-stone-800 dark:text-stone-200 hover:scale-101 font-bold text-md transition-all duration-200 mx-1 hover:mx-3 border-0"
            />
          );
        }
        return (
          <Button
            key={navItem.id}
            asChild
            variant="outline"
            className="text-stone-800 dark:text-stone-200 hover:scale-101 font-bold text-md transition-all duration-200 mx-1 hover:mx-3 border-0"
          >
            <a href={navItem.url}>
              {navItem.name}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
