import {
    VStack,
    HStack,
    Box,
    Text,
    Input,
    Heading,
    Field,
    Button,
    Center,
} from '@chakra-ui/react';

const Login = () => {
    return (
        <VStack width={'100%'} height={'100vh'} bgColor={'powderblue'}>
            <Box
                padding={'20px'}
                width={'100%'}
                bgColor={'skyblue'}
                textAlign={'center'}
            >
                <Heading fontSize={'42px'}>Futmaidan Admin Panel</Heading>
            </Box>
            <Center flex={1}>
                <VStack bgColor={'white'} padding={'20px'}>
                    <Heading fontSize={'24px'}>System Admin Login</Heading>
                    <VStack as={'form'} marginTop={'20px'} gap={'20px'}>
                        <Field.Root
                            width={'100%'}
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems={'center'}
                            gap={'20px'}
                        >
                            <Field.Label>
                                <Text fontWeight={'bolder'} fontSize={'18px'}>
                                    Username:
                                </Text>
                            </Field.Label>
                            <Input placeholder='username...' type='text' />
                            {/* <Field.ErrorText>Couldn't find area!</Field.ErrorText> */}
                        </Field.Root>
                        <Field.Root
                            width={'100%'}
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems={'center'}
                            gap={'20px'}
                        >
                            <Field.Label>
                                <Text fontWeight={'bolder'} fontSize={'18px'}>
                                    Password:
                                </Text>
                            </Field.Label>
                            <Input placeholder='password...' type='password' />
                            {/* <Field.ErrorText>Couldn't find area!</Field.ErrorText> */}
                        </Field.Root>
                        <Button type='submit'>Submit</Button>
                    </VStack>
                </VStack>
            </Center>
        </VStack>
    );
};

export default Login;
