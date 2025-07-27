import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Link,
  // IconButton,
} from "@chakra-ui/react";
import { IconUser, IconLogin } from "@tabler/icons-react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic using localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: { email: string; password: string }) => u.email === email && u.password === password);
    if (user) {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <Box minH="100vh" bg="gray.50"> 
      {/* Header */}
      <Flex as="nav" align="center" justify="space-between" px={8} py={4} boxShadow="sm">
        <Text fontWeight="bold" fontSize="xl" fontFamily="Montserrat">FUTSALA</Text>
        <Flex gap={4} align="center">
          <Link href="/register" fontWeight="medium" display="flex" alignItems="center">
            <IconUser size={18} style={{ marginRight: 4 }} /> Signup
          </Link>
          <Link href="/login" fontWeight="medium" display="flex" alignItems="center">
            <IconLogin size={18} style={{ marginRight: 4 }} /> Login
          </Link>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex justify="center" align="center" minH="calc(100vh - 80px)">
        <Flex boxShadow="xl" bg="white" borderRadius="xl" overflow="hidden" w={{ base: "100%", md: "900px" }}>
          {/* Illustration */}
          <Box flex="1" bg="gray.100" display={{ base: "none", md: "block" }} p={12}>
            {/* Placeholder for illustration */}
            <Box h="100%" display="flex" alignItems="center" justifyContent="center">
              <img src="https://img.freepik.com/free-vector/hand-drawn-man-using-smartphone_23-2147914052.jpg" alt="Login Illustration" style={{ maxHeight: 350, opacity: 0.7 }} />
            </Box>
          </Box>

          {/* Login Form */}
          <Box flex="1" p={12}>
            <Heading fontFamily="Montserrat" mb={2} size="lg">Welcome Back</Heading>
            <Text mb={6} color="gray.600">Simplify your workflow with <b>Futsala</b>. Get started for free.</Text>
            <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <Text mb={1} fontWeight="medium">Email address <span style={{ color: "red" }}>*</span></Text>
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  fontFamily="Roboto"
                />
              </Box>
              <Box mb={4}>
                <Text mb={1} fontWeight="medium">Password <span style={{ color: "red" }}>*</span></Text>
                <Input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  fontFamily="Roboto"
                />
              </Box>
              <Button type="submit" colorScheme="teal" w="100%" mb={2}>Log In</Button>
              <Link href="#" color="teal.500" fontWeight="medium" display="block" textAlign="center" mb={4}>Forgot Password?</Link>
              {message && <Text color={message === "Login successful!" ? "green.500" : "red.500"} textAlign="center" mb={2}>{message}</Text>}
              <Box my={6} borderBottom="1px solid" borderColor="gray.200" />
              <Text textAlign="center" mb={2} color="gray.500">or continue with</Text>
              <Flex justify="center" mb={6}>
                <Button variant="outline" px={4} py={2}>
                  <Box as="span" w="100%">
                    <Flex align="center" justify="center">
                      {/* <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="Google"
                        style={{ width: 20, height: 20, marginRight: 8 }}
                      /> */}
                      <Text ml={1}>Google</Text>
                    </Flex>
                  </Box>
                </Button>
              </Flex>
              <Text textAlign="center" color="gray.600">
                Don't have an account?{' '}
                <Link href="/register" color="teal.500" fontWeight="medium">Sign Up</Link>
              </Text>
            </form>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LoginPage;
