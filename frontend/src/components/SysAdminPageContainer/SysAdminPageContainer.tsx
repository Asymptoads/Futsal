import { VStack, Box, Heading } from '@chakra-ui/react';
import { IconMenu2 } from '@tabler/icons-react';
import { useState } from 'react';

import SysAdminSidebar from '../SysAdminSidebar/SysAdminSidebar';

type SysAdminPageContainerTypes = {
    children: React.ReactNode;
};

export type SysAdminSidebarTypes = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<
        React.SetStateAction<SysAdminSidebarTypes['isSidebarOpen']>
    >;
};

const SysAdminPageContainer = ({ children }: SysAdminPageContainerTypes) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <VStack width={'100%'} height={'100vh'} bgColor={'powderblue'}>
            <Box
                width={'100%'}
                padding={'20px'}
                position={'relative'}
                bgColor={'skyblue'}
            >
                <Box
                    className='sidebar-open-btn'
                    position={'absolute'}
                    left={'auto'}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <IconMenu2 size={'32px'} cursor={'pointer'} />
                </Box>
                <Heading fontSize={'42px'} textAlign={'center'}>
                    Futmaidan Admin Panel
                </Heading>
            </Box>
            <SysAdminSidebar {...{ isSidebarOpen, setIsSidebarOpen }} />
            <VStack flex={1} width={'100%'} minW={'320px'} minH={'320px'}>
                {children}
            </VStack>
        </VStack>
    );
};

export default SysAdminPageContainer;
