import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Stack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

function Form({ isOpen, onClose, addMutation, id, setId }) {
    const [details, setDetails] = useState({
        employee_name: '',
        employee_salary: '',
        employee_age: ''
    });

    useEffect(() => {
        if (id) {
            setDetails(id)
        } else {
            setDetails({
                employee_name: '',
                employee_salary: '',
                employee_age: ''
            })
        }
    }, [id])


    const SubmitHandler = async () => {
        if (!details.employee_age || !details.employee_name || !details.employee_salary) {
            return;
        }

        addMutation.mutate(details, {
            onSuccess: () => {
                setDetails({
                    employee_name: null,
                    employee_salary: null,
                    employee_age: null
                })
            },
        })
        onClose();
    }

    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={() => {
                onClose();
                setId(null);
            }}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add or Edit Employee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={3}>
                            <Input value={details.employee_name} onChange={e => setDetails({ ...details, employee_name: e.target.value })} variant='filled' placeholder='Enter Name' />
                            <Input value={details.employee_age} onChange={e => setDetails({ ...details, employee_age: e.target.value.trim() })} variant='filled' type="number" placeholder='Enter Age' />
                            <Input value={details.employee_salary} onChange={e => setDetails({ ...details, employee_salary: e.target.value.trim() })} variant='filled' type="number" placeholder='Enter Salary' />
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            setId(null);
                            // clearMutation.mutate();s
                            onClose();
                        }}>
                            Close
                        </Button>
                        <Button onClick={SubmitHandler} variant='ghost'>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Form;