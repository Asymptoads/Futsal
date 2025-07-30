import { Heading,  Table} from '@chakra-ui/react';
import SysAdminPageContainer from '../../components/SysAdminPageContainer/SysAdminPageContainer';   


const customers = [
    {customerName: 'Customer 1', startDate: '2023-10-01 10:00', orders: 5, refunds: 2, rating: 4.5},
    {customerName: 'Customer 2', startDate: '2023-10-01 11:00', orders: 3, refunds: 1, rating: 4.0},
    {customerName: 'Customer 3', startDate: '2023-10-01 12:00', orders: 8, refunds: 0, rating: 4.8},
    {customerName: 'Customer 4', startDate: '2023-10-01 13:00', orders: 2, refunds: 1, rating: 4.2},
    {customerName: 'Customer 5', startDate: '2023-10-01 14:00', orders: 6, refunds: 3, rating: 4.1},
    {customerName: 'Customer 6', startDate: '2023-10-01 15:00', orders: 4, refunds: 2, rating: 4.3},
    {customerName: 'Customer 7', startDate: '2023-10-01 16:00', orders: 7, refunds: 1, rating: 4.0},
    {customerName: 'Customer 8', startDate: '2023-10-01 17:00', orders: 5, refunds: 2, rating: 4.1},
    {customerName: 'Customer 9', startDate: '2023-10-01 18:00', orders: 3, refunds: 0, rating: 4.2},
    {customerName: 'Customer 10', startDate: '2023-10-01 19:00',orders: 2, refunds: 1, rating: 4.3},
    {customerName: 'Customer 11', startDate: '2023-10-01 20:00',orders: 1, refunds: 0, rating: 4.4},
    {customerName: 'Customer 12', startDate: '2023-10-01 21:00',orders: 0, refunds: 0, rating: 0}
];


const Customers = () => {
    const rows = customers.map((item, index) => (
        <Table.Row
        key={item.customerName}
        >
        <Table.Cell>{`${index+1}.`}</Table.Cell>
        <Table.Cell>{item.customerName}</Table.Cell>
        <Table.Cell>{item.startDate}</Table.Cell>
        <Table.Cell>{item.orders}</Table.Cell>
        <Table.Cell>{item.refunds}</Table.Cell>
        <Table.Cell>{item.rating}</Table.Cell>
        </Table.Row>
    ));

    return (
        <SysAdminPageContainer>
            <Heading as="h1" size="lg" mb={4}>Customer List</Heading>
            <Table.Root>
                <Table.ColumnGroup>
                    <Table.Column />
                    <Table.Column htmlWidth={'30%'} />
                    {/* Adjusted width for better visibilty of customer name, futsal name, dateAndTime and pending */}
                    <Table.Column htmlWidth={'20%'} />
                    <Table.Column htmlWidth={'20%'} />
                    <Table.Column htmlWidth={'20%'}/>
                    <Table.Column htmlWidth={'10%'}/>
                </Table.ColumnGroup>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>S.N</Table.ColumnHeader>
                        <Table.ColumnHeader>Customer Name</Table.ColumnHeader>
                        <Table.ColumnHeader>Starting Date</Table.ColumnHeader>
                        <Table.ColumnHeader>Number of orders</Table.ColumnHeader>
                        <Table.ColumnHeader>Number of refunds</Table.ColumnHeader>
                        <Table.ColumnHeader>Rating</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{rows}</Table.Body>
            </Table.Root>
        </SysAdminPageContainer>
    )
};

export default Customers;