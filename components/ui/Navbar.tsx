import Image from "next/image";
import { ThemeChanger } from "./ThemeChanger";
import { BurgerIcon } from "./icons";
import { NavbarItem } from "./NavbarItem";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Jobs",
    href: "/jobs",
  },
];

export const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <BurgerIcon />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems.map((item) => (
              <NavbarItem key={item.href} {...item} />
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems.map((item) => (
            <NavbarItem key={item.href} {...item} />
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeChanger />
      </div>
    </div>
  );
};
