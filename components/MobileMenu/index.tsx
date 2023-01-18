import { animate, stagger } from "motion";
import { useEffect } from "react";
type Props = {} & React.HTMLAttributes<HTMLElement>;

const MobileMenu = ({ className, ...rest }: Props) => {
  useEffect(() => {
    animate(
      "li",
      { opacity: 1, width: "100%" },
      { duration: 0.3, delay: stagger(0.01, { from: "last" }) }
    );
  }, []);

  const menuItemClassnames =
    "py-4 border-b border-carbon-50 dark:border-carbon-600 hover:border-yellow-300 opacity-1 transform w-0";

  return (
    <ul className="absolute flex flex-col w-full h-screen list-none z-50 text-sm font-bold bg-white dark:bg-carbon">
      <li className={menuItemClassnames}>Home</li>
      <li className={menuItemClassnames}>Blog</li>
      <li className={menuItemClassnames}>Blog</li>
      <li className={menuItemClassnames}>Blog</li>
      <li className={menuItemClassnames}>Blog</li>
    </ul>
  );
};

export default MobileMenu;
