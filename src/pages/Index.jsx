import { Box, Flex, Input, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex height="100vh" bg="green.50">
      <Box width={isMobile ? "100%" : "300px"} bg="green.600" p={4} color="white">
        <Text fontSize="xl" mb={4}>Contacts</Text>
        <VStack spacing={3}>
          <Text>John Doe</Text>
          <Text>Jane Smith</Text>
          <Text>Mike Brown</Text>
        </VStack>
      </Box>
      <Flex direction="column" flex="1" p={4}>
        <VStack spacing={4} flex="1" overflowY="auto">
          <Box bg="white" p={4} borderRadius="lg" shadow="md" alignSelf="flex-start">
            <Text>John Doe: Hello!</Text>
          </Box>
          <Box bg="white" p={4} borderRadius="lg" shadow="md" alignSelf="flex-end">
            <Text>You: Hi John, how are you?</Text>
          </Box>
        </VStack>
        <Input placeholder="Type a message" bg="white" borderRadius="lg" p={4} shadow="md" />
      </Flex>
    </Flex>
  );
};

export default Index;