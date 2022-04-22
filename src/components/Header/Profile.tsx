import { Avatar, Flex, Box, Text } from "@chakra-ui/react"

export function Profile() {
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Fouraux</Text>
        <Text color="gray.300" fontSize="small">lucasfouraux@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Lucas Fouraux"src="https://github.com/lucasfouraux.png"/>
    </Flex>
  );
}