import { Checkbox, Heading, HStack, Table, Text} from '@chakra-ui/react';
import SysAdminPageContainer from '../../components/SysAdminPageContainer/SysAdminPageContainer';   
import { useState } from 'react';

type OrderStatus = 'pending' | 'confirmed' | 'cancelled';

interface Order {
    customerName: string;
    futsalName: string;
    dateAndTime: string;
    status: OrderStatus;
}

const orders: Order[] = [
    {customerName: 'Customer 1', futsalName: 'Futsal 1', dateAndTime: '2023-10-01 10:00', status: 'pending'},
    {customerName: 'Customer 2', futsalName: 'Futsal 2', dateAndTime: '2023-10-01 11:00', status: 'confirmed'},
    {customerName: 'Customer 3', futsalName: 'Futsal 3', dateAndTime: '2023-10-01 12:00', status: 'cancelled'},
    {customerName: 'Customer 4', futsalName: 'Futsal 4', dateAndTime: '2023-10-01 13:00', status: 'pending'},
    {customerName: 'Customer 5', futsalName: 'Futsal 5', dateAndTime: '2023-10-01 14:00', status: 'confirmed'},
    {customerName: 'Customer 6', futsalName: 'Futsal 6', dateAndTime: '2023-10-01 15:00', status: 'cancelled'},
    {customerName: 'Customer 7', futsalName: 'Futsal 7', dateAndTime: '2023-10-01 16:00', status: 'pending'},
    {customerName: 'Customer 8', futsalName: 'Futsal 8', dateAndTime: '2023-10-01 17:00', status: 'confirmed'},
    {customerName: 'Customer 9', futsalName: 'Futsal 9', dateAndTime: '2023-10-01 18:00', status: 'cancelled'},
    {customerName: 'Customer 10', futsalName: 'Futsal 10', dateAndTime: '2023-10-01 19:00', status: 'pending'},
    {customerName: 'Customer 11', futsalName: 'Futsal 11', dateAndTime: '2023-10-01 20:00', status: 'confirmed'},
    {customerName: 'Customer 12', futsalName: 'Futsal 12', dateAndTime: '2023-10-01 21:00', status: 'cancelled'}
];

// Sorting orders based on status Assuming 'pending' < 'confirmed' < 'cancelled'
const statusOrder: Record<OrderStatus, number> = {pending: 1, confirmed: 2, cancelled: 3};
const sortedOrders = [...orders].sort((a, b) => {
    return statusOrder[a.status] - statusOrder[b.status];
});

const pendingOrders: Order[] = sortedOrders.filter(order => order.status === 'pending');
const confirmedOrders: Order[] = sortedOrders.filter(order => order.status === 'confirmed');
const cancelledOrders: Order[] = sortedOrders.filter(order => order.status === 'cancelled');

const Orders = () => {
    const [showPending, setShowPending] = useState(true);
    const [showConfirmed, setShowConfirmed] = useState(true);
    const [showCancelled, setShowCancelled] = useState(true);

    const rows = [...(showPending ? pendingOrders : []), ...(showConfirmed ? confirmedOrders : []), ...(showCancelled ? cancelledOrders : [])].map((item, index) => (
        <Table.Row
        key={item.customerName}
        >
        <Table.Cell>{`${index+1}.`}</Table.Cell>
        <Table.Cell>{item.customerName}</Table.Cell>
        <Table.Cell>{item.futsalName}</Table.Cell>
        <Table.Cell>{item.dateAndTime}</Table.Cell>
        <Table.Cell textTransform={'capitalize'}><Text display={'block'} padding={'2px'} borderRadius={'25px'}
        textAlign={'center'}
       bgColor={item.status === 'pending' ? 'yellow.300' : item.status === 'confirmed' ? 'green.500' : 'red.600'} 
       color={item.status === 'pending'? 'black' : 'white'}
        >{item.status}</Text></Table.Cell>
        </Table.Row>
    ));

    return (
        <SysAdminPageContainer>
            <Heading as="h1" size="lg" mb={4}>Orders List</Heading>
        <HStack justifyContent={'flex-end'} width={'100%'} >
            <Text fontWeight={'bold'}>Filter: </Text>
            <Checkbox.Root 
                checked={showPending}
                onChange={() => setShowPending(!showPending)}
                
                colorPalette='yellow'
                variant={'subtle'}
                >
                    <Checkbox.HiddenInput/>
                    <Checkbox.Control/>
                <Checkbox.Label>Pending</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root 
                checked={showConfirmed}
                onChange={() => setShowConfirmed(!showConfirmed)}
                colorPalette='green'
                variant={'subtle'}
                >
                    <Checkbox.HiddenInput/>
                    <Checkbox.Control/>
                <Checkbox.Label>Confirmed</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root 
                checked={showCancelled}
                onChange={() => setShowCancelled(!showCancelled)}
                colorPalette='red'
                variant={'subtle'}
                >
                    <Checkbox.HiddenInput/>
                    <Checkbox.Control/>
                <Checkbox.Label>Cancelled</Checkbox.Label>
            </Checkbox.Root>
        </HStack>
            <Table.Root>
                <Table.ColumnGroup>
                    <Table.Column />
                    <Table.Column htmlWidth={'30%'} />
                    {/* Adjusted width for better visibilty of customer name, futsal name, dateAndTime and pending */}
                    <Table.Column htmlWidth={'30%'} />
                    <Table.Column htmlWidth={'20%'} />
                    <Table.Column htmlWidth={'20%'}/>
                </Table.ColumnGroup>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>S.N</Table.ColumnHeader>
                        <Table.ColumnHeader>Customer Name</Table.ColumnHeader>
                        <Table.ColumnHeader>Futsal Name</Table.ColumnHeader>
                        <Table.ColumnHeader>Date and Time</Table.ColumnHeader>
                        <Table.ColumnHeader>Status</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{rows}</Table.Body>
            </Table.Root>
        </SysAdminPageContainer>
    )
};

export default Orders;