import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Chart(props) {
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
    // const [isLargerThan500] = useMediaQuery('(min-width: 500px)')

    const label = props.data.map(emp => emp.employee_name);
    const Salary = props.data.map(emp => emp.employee_salary);

    const data = {
        labels: label,
        datasets: [
            {
                label: '# of Votes',
                data: Salary,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Box w={isLargerThan500 ? "20vw" : "80vw"} pt="2vh">
            <Pie data={data} />
        </Box>
    );
}