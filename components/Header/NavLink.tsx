import clsx from "clsx";
import Link, { LinkProps } from "next/link";

type Props = { text: string } & LinkProps & React.HTMLAttributes<HTMLElement>;
const NavLink = (props: Props) => {
  const className = clsx(
    props.className,
    "hidden md:inline-block p-1 text-carbon-200"
  );
  return (
    <Link href={props.href} className={className}>
      {props.text}
    </Link>
  );
};

export default NavLink;
