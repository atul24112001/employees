import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Flex,
    Text,
    Button,
} from '@chakra-ui/react'
import { EditIcon, SmallAddIcon } from "@chakra-ui/icons"

export default function EmployeeTable(props) {
    return (
        <Box w="98vw">
            <Flex minWidth='max-content' justifyContent='space-between' alignItems='center' p='3'>
                <Text fontWeight="bold" fontSize="2xl">Employees Details</Text>
                <Button onClick={props.onOpen} _active={{ outline: 0 }} _focus={{ outline: 0 }} leftIcon={<SmallAddIcon />} colorScheme='teal' size='md'>
                    Add Employee
                </Button>
            </Flex>
            <TableContainer border="1px" borderRadius="md" borderColor="#ccc">
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th isNumeric>Age</Th>
                            <Th isNumeric>Salary</Th>
                            <Th isNumeric>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {props.data.map((employee) => (
                            <Tr key={employee._id}>
                                <Td>{employee.employee_name}</Td>
                                <Td isNumeric>{employee.employee_age}</Td>
                                <Td isNumeric>{employee.employee_salary}</Td>
                                <Td isNumeric><EditIcon onClick={() => {
                                    props.onOpen();
                                    props.setId(employee)
                                }} /></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}
