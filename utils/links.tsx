import { AreaChart, Layers, AppWindow } from "lucide-react";

type NavLink = {
  label?: string;
  href: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    label: "Add Job",
    href: "/add-job",
    icon: <AreaChart />,
  },
  {
    label: "All Jobs",
    href: "/jobs",
    icon: <AppWindow />,
  },
  {
    label: "Stats",
    href: "/stats",
    icon: <Layers />,
  },
];

export default links;
