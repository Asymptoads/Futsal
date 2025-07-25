import { Link as ReactRouterLink } from 'react-router-dom';
import {
    VStack,
    Box,
    Heading,
    Text,
    HStack,
    Link as ChakraLink,
} from '@chakra-ui/react';
import {
    IconBrandFacebookFilled,
    IconBrandInstagram,
    IconBrandX,
    IconBrandTiktokFilled,
    IconBrandBluesky,
} from '@tabler/icons-react';
const Footer = () => {
    const socialMediaList = [
        {
            icon: <IconBrandFacebookFilled />,
            link: '',
        },
        {
            icon: <IconBrandInstagram />,
            link: '',
        },
        {
            icon: <IconBrandX />,
            link: '',
        },
        {
            icon: <IconBrandTiktokFilled />,
            link: '',
        },
        {
            icon: <IconBrandBluesky />,
            link: '',
        },
    ];
    return (
        <VStack className='footer' width={'100%'}>
            <Box
                width={'100%'}
                height={'1px'}
                boxShadow={'0px 45px 50px 0px rgba(0, 0, 0, 1'}
            ></Box>
            <HStack
                className='social-icons-container'
                width={'100%'}
                justifyContent={'center'}
                gap={'20px'}
            >
                {socialMediaList.map((media, index) => {
                    return (
                        <ChakraLink
                            key={index}
                            asChild
                            padding={'8px'}
                            borderRadius={'50%'}
                            bgColor={'black'}
                            color={'white'}
                        >
                            <ReactRouterLink to={media.link}>
                                {media.icon}
                            </ReactRouterLink>
                        </ChakraLink>
                    );
                })}
            </HStack>
        </VStack>
    );
};

export default Footer;
