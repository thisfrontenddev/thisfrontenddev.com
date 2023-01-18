import { animate, stagger } from "motion";
import Link from "next/link";
import { useEffect } from "react";
type Props = React.HTMLAttributes<HTMLElement>;

const MobileMenu = ({ className, ...rest }: Props) => {
  useEffect(() => {
    animate(
      "a",
      { opacity: 1, width: "100%" },
      { duration: 0.3, delay: stagger(0.01, { from: "last" }) }
    );
  }, []);

  const menuItemClassnames =
    "inline-block border-b border-carbon-50 dark:border-carbon-600 hover:border-yellow-300 py-4 opacity-1 transform w-0";

  return (
    <ul className="absolute flex flex-col w-full h-screen list-none z-50 text-sm font-bold bg-white dark:bg-carbon">
      <li>
        <Link className={menuItemClassnames} href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={menuItemClassnames} href="/posts">
          Posts
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
