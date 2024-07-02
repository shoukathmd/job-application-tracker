import { Link } from "lucide-react";
import LinksDropdown from "./LinksDropdown";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between">
      <div>
        <LinksDropdown />
      </div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
