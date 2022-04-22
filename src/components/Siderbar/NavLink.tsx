import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { RiInputMethodLine } from "react-icons/ri";

interface NavLinkProps extends LinkProps{
  icon: ElementType
  children: string
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return(
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}