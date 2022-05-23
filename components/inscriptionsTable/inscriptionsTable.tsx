import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from './styles';

const InscriptionsTable = () => {
  return (
    <TableContainer>
      <Table className="animate__animated animate__fadeInLeft">
        <Thead>
          <tr>
            <Th>Name</Th>
            <Th>Lastname</Th>
            <Th>Age</Th>
            <Th>Country</Th>
            <Th>City</Th>
            <Th>CellPhone</Th>
            <Th>View Info</Th>
            <Th>Accept</Th>
            <Th>Deny</Th>
          </tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>Vic Ferman</Td>
            <Td>Flores Escobar</Td>
            <Td>21</Td>
            <Td>El Salvador</Td>
            <Td>San Salvador</Td>
            <Td>75527785</Td>
            <Td>
              <Button theme={{ bgColor: '#2F8F9D', wth: '100px' }}>
                <AiOutlineEye fontSize={'26px'} />
              </Button>
            </Td>
            <Td>
              <Button theme={{ bgColor: '#81B214', wth: '150px' }}>
                Accept
              </Button>
            </Td>
            <Td>
              <Button theme={{ bgColor: '#B20600', wth: '150px' }}>Deny</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default InscriptionsTable;
