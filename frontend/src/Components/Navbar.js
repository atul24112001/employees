import { Center, Text } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
    return (
        <Center w="98vw" m="0vh 1vw" borderRadius='md' color="teal">
            <Text fontSize='4xl' fontWeight='bold'>
                Employees
            </Text>
        </Center>
    )
}
