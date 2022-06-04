import NextLink from "next/link";
import { FC } from "react";

interface Props {
  text: string;
  href: string;
}

export const NavbarItem: FC<Props> = ({ text, href }) => {
  return (
    <li>
      <NextLink href={href}>{text}</NextLink>
    </li>
  );
};
