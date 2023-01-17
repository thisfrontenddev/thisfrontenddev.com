"use client";
import useToggle from "@/hooks/useToggle";
import clsx from "clsx";
import MobileMenu from "../MobileMenu";
import CloseIcon from "@/components/Icons/Close";
import MenuIcon from "@/components/Icons/Menu";
import NavLink from "./NavLink";
import { useEffect } from "react";
type Props = {} & React.HTMLAttributes<HTMLElement>;

const Header = ({ className, ...rest }: Props) => {
  const [isMenuOpen, toggleMenu] = useToggle();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });

  return (
    <header {...rest} className={clsx(className, "flex flex-col")}>
      <nav className="relative flex w-full max-w-2xl mx-auto pt-8 pb-8">
        <div className="">
          <button
            className="transition-opacity duration-300 relative visible md:hidden w-10 h-10 text-carbon-50"
            aria-label="Toggle menu"
            type="button"
            onClick={toggleMenu}
          >
            <MenuIcon
              className={clsx(
                "inline-block absolute transition-all duration-300 translate-x-[-50%] translate-y-[-50%]",
                { "opacity-100": !isMenuOpen },
                { "opacity-0": isMenuOpen },
                { "scale-100": !isMenuOpen },
                { "scale-0": isMenuOpen }
              )}
            />
            <CloseIcon
              className={clsx(
                "inline-block absolute transition-all duration-300 translate-x-[-50%] translate-y-[-50%]",
                { "opacity-100": isMenuOpen },
                { "opacity-0": !isMenuOpen },
                { "scale-100": isMenuOpen },
                { "scale-0": !isMenuOpen }
              )}
            />
          </button>
          {isMenuOpen && <MobileMenu />}
        </div>
        <NavLink href="/" text="Home" />
      </nav>
    </header>
  );
};

export default Header;
