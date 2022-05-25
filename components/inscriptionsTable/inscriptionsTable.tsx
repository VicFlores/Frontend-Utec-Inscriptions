import React, { useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { acceptStudent, denyStudent } from '../../utils/inscriptions';
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

const InscriptionsTable = ({data, token}:{data:any, token:string}) => {
  const declinedStudent = async(id:string) => {
    const result = await denyStudent(id, token)
  }

  const approvedtStudent = async(id:string) => {
    await acceptStudent(id, token)
  }


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

        {
          data?.signups ? (
            data.signups.map((value:any, index:number) => {
              return(
                <>
                  <Tr key={index}>
                    <Td>{value.name}</Td>
                    <Td>{value.lastname}</Td>
                    <Td>{value.age}</Td>
                    <Td>{value.country}</Td>
                    <Td>{value.city}</Td>
                    <Td>{value.cellphone}</Td>
                    <Td>
                      <Button 
                        theme={{ bgColor: '#2F8F9D', wth: '100px' }}
                      >
                        <AiOutlineEye fontSize={'26px'} />
                      </Button>
                    </Td>
                    <Td>
                      <Button 
                        theme={{ bgColor: '#81B214', wth: '150px' }}
                        onClick={() => approvedtStudent(value.id)}
                      >
                        Accept
                      </Button>
                    </Td>
                    <Td>
                      <Button 
                        theme={{ bgColor: '#B20600', wth: '150px' }}
                        onClick={() => declinedStudent(value.id)}
                      >Deny</Button>
                    </Td>
                  </Tr>
                
                </>
              )
            })
          ):
          (
            <>
            <p>No hay datos</p>
            </>
          )
        }
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default InscriptionsTable;