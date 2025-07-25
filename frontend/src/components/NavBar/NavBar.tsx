import { HStack, Box, Heading } from '@chakra-ui/react';
import { IconMenu2, IconUserCircle } from '@tabler/icons-react';

import type { SidebarTypes } from '../PageContainer/PageContainer';

const NavBar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarTypes) => {
    return (
        <HStack
            justifyContent={'space-between'}
            width={'100%'}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
            <Box>
                <IconMenu2 />
            </Box>
            <Box className='brand-name-container'>
                <Heading as={'h1'} fontVariant={'heading'}>
                    Futsal
                </Heading>
            </Box>
            <Box>
                <IconUserCircle />
            </Box>
        </HStack>
    );
};

export default NavBar;
