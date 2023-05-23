import React from 'react';
import {useEffect, useState} from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://644a2edda8370fb32146effa.mockapi.io/faker_data`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = () => {
        axios.get(`https://644a2edda8370fb32146effa.mockapi.io/faker_data`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    const onDelete = (id) => {
        axios.delete(`https://644a2edda8370fb32146effa.mockapi.io/faker_data/${id}`)
        .then(() => {
            getData();
        })  
      }

    return (
        <div className='main'>
            <h2 className="main-header">React Crud Operations</h2>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            <Link to='/update'>
                                <Table.Cell><Button onClick={() => setData(data)}>Update</Button></Table.Cell>
                            </Link>
                            <Table.Cell><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell>
                        </Table.Row>
                    )})}
                </Table.Body>
            </Table>
        </div>
    )
}
