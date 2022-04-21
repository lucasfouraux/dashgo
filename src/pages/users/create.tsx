import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, Divider, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Siderbar } from "../../components/Siderbar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading>Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid width="100%" spacing="8" minChildWidth="240px" >
              <Input name="name" label="Nome Completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>
          </VStack>

          <VStack spacing="8">
            <SimpleGrid width="100%" spacing="8" minChildWidth="240px" >
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password" label="Confirmação de senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>

          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}