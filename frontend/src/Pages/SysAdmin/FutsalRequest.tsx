import {  HStack, Heading, Table, Checkbox, Button } from "@chakra-ui/react";
import SysAdminPageContainer from "../../components/SysAdminPageContainer/SysAdminPageContainer";
import { useState } from "react";

const items = [
    { name: "Futsal A", details: "This is the first futsal court", remarks: "This remarks is written by the owners to approve their request" },
    { name: "Futsal B", details: "This is the second futsal court", remarks: "Please approve my futsal" },
    { name: "Futsal C", details: "This is the third futsal court", remarks: "I beg you" },
    { name: "Futsal D", details: "This is the fourth futsal court", remarks: "Plesaseseeee!!!!" }
];

const SysAdminFutsalRequest = () => {
    const [selection, setSelection] = useState<string[]>([]);
    const indeterminate = selection.length > 0 && selection.length < items.length;

    const rows = items.map((item, index) => (
        <Table.Row
        key={item.name}
        data-selected={selection.includes(item.name) ? "" : undefined}
        >
        <Table.Cell>
            <Checkbox.Root
            size="sm"
            mt="0.5"
            aria-label="Select row"
            checked={selection.includes(item.name)}
            onCheckedChange={(changes) => {
                setSelection((prev) =>
                changes.checked
                    ? [...prev, item.name]
                    : selection.filter((name) => name !== item.name),
                )
            }}
            >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            </Checkbox.Root>
        </Table.Cell>
        <Table.Cell>{`${index+1}.`}</Table.Cell>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.details}</Table.Cell>
        <Table.Cell>{item.remarks}</Table.Cell>
        </Table.Row>
    ))

    return (
        <SysAdminPageContainer>
            <Heading as="h1" size="lg" mb={4}>Futsal Requests</Heading>
            <HStack gap={4} width={'100%'} justifyContent={'flex-end'}>
                <Button colorPalette="blue">Approve</Button>
                <Button colorPalette="red">Reject</Button>
            </HStack>
            <Table.Root>
                <Table.ColumnGroup>
                    <Table.Column />
                    <Table.Column />
                    {/* Adjusted width for better visibilty of futsal name, details and remarks */}
                    <Table.Column htmlWidth={'50%'} />
                    <Table.Column htmlWidth={'25%'} />
                    <Table.Column htmlWidth={'25%'}/>
                </Table.ColumnGroup>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>
                            <Checkbox.Root
                                size="sm"
                                mt="0.5"
                                aria-label="Select all rows"
                                checked={indeterminate ? "indeterminate" : selection.length > 0}
                                onCheckedChange={(changes) => {
                                    setSelection(
                                        changes.checked ? items.map((item) => item.name) : []
                                    );
                                }}
                            >
                                <Checkbox.HiddenInput />
                                <Checkbox.Control />
                            </Checkbox.Root>
                        </Table.ColumnHeader>
                        <Table.ColumnHeader>S.N</Table.ColumnHeader>
                        <Table.ColumnHeader>Futsal Name</Table.ColumnHeader>
                        <Table.ColumnHeader>Details</Table.ColumnHeader>
                        <Table.ColumnHeader>Remarks</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{rows}</Table.Body>
            </Table.Root>
        </SysAdminPageContainer>
    )
};

export default SysAdminFutsalRequest;