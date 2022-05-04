import { Container, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import Chart from "./Components/Chart";
import EmployeeTable from "./Components/EmployeeTable";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

const GetEmployees = async () => {
  const res = await fetch(`http://localhost:5000/employees`);
  return res.json();
}

function App() {
  const { data, status } = useQuery("employees", GetEmployees, {
    refetchInterval: 1000
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState(null);

  const queryClient = new QueryClient()

  const addMutation = useMutation(value => fetch(`http://localhost:5000/${!!id ? `employees/${value._id}` : "employees"}`, {
    method: !id ? "POST" : "PATCH",
    body: JSON.stringify(value),
    headers: {
      "Content-Type": "application/json"
    }
  }), {
    onSuccess: () => queryClient.invalidateQueries('employees'),
  })

  const clearMutation = useMutation(() => fetch(`http://localhost:5000/employees?clear=1`), {
    onSuccess: () => queryClient.invalidateQueries('employees'),
  })

  if (!data || !data.data) {
    return <Text fontSize='xl' align="center">Loading...</Text>
  }

  return (
    <Container p="1vh 1vw" sx={{ bgColor: "white" }} centerContent>
      <Navbar />
      <Form id={id} setId={setId} addMutation={addMutation} clearMutation={clearMutation} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {!status === "success" ? <Text fontSize='xl' align="center">Loading...</Text> : (
        <>
          <EmployeeTable setId={setId} isOpen={isOpen} onOpen={onOpen} onClose={onClose} data={data.data} />
          <Chart data={data.data} />
        </>
      )}
    </Container>
  );
}

export default App;
