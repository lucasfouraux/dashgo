import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      mx="auto"
      mt="4"
      px="6"
      align="center*"
    >
      <Logo />
      
      <Flex
        align="center"
        ml="auto"
      >
        
        { isWideVersion && <SearchBox /> }
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />

      </Flex>
    </Flex>
  )
}