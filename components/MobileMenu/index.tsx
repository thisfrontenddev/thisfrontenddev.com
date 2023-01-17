type Props = {} & React.HTMLAttributes<HTMLElement>;

const MobileMenu = ({ className, ...rest }: Props) => {
  return (
    <ul className="absolute flex w-full h-screen text-white list-none p-6 z-50 bg-carbon">
      <li>Home</li>
    </ul>
  );
};

export default MobileMenu;
