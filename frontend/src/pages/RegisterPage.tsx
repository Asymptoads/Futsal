import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";

const LoginPage: React.FC = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <Flex justify="center" align="center" minH="100vh">
        <Flex
          boxShadow="xl"
          bg="white"
          borderRadius="xl"
          overflow="hidden"
          w={{ base: "100%", md: "500px" }}
          direction="column"
          align="center"
          p={12}
        >
          <Heading fontFamily="Montserrat" mb={2} size="lg">
            Welcome To Our Platform
          </Heading>
          <Text mb={6} color="gray.600" textAlign="center">
            Create your account to continue.
          </Text>
          <Button
            variant="outline"
            colorScheme="teal"
            w="100%"
            mb={6}
            leftIcon={<FcGoogle size={20} />}
          >
            Sign up with Google
          </Button>
          <Text textAlign="center" color="gray.600" mt={4}>
            Already have an account?{' '}
            <Link href="/login" color="teal.500" fontWeight="medium">
              Log In
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LoginPage;