import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import CodeEditor from '../components/CodeEditor';
import { Link } from "react-router-dom";
import { FaCode, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to CodeMaster</Heading>
        <Text fontSize="lg" textAlign="center">Your ultimate platform to learn coding online.</Text>
        <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
          <Image src="/images/online-learning.png" alt="Online Learning" boxSize="200px" />
        </Box>
        <Box display="flex" justifyContent="space-around" width="100%" mt={8}>
          <Button as={Link} to="/courses" leftIcon={<FaCode />} colorScheme="teal" variant="solid" size="lg">
            Start Learning
          </Button>
          <Button leftIcon={<FaChalkboardTeacher />} colorScheme="blue" variant="outline" size="lg">
            Join as Instructor
          </Button>
        </Box>
        <CodeEditor />
        <Box display="flex" justifyContent="center" alignItems="center" mt={8}>
          <FaLaptopCode size="50px" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;