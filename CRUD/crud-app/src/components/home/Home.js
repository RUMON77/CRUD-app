import React from 'react';
import './Home.css';
import { useContext } from "react";
import { Button, Table } from 'react-bootstrap';
import { UserContext } from '../usercontext/UserContext';
import {
    Link
  } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useContext(UserContext);
    return (
        <div>
            <Link to="/create">
            <Button variant="primary">Create User</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salery</th>
                        <th>Action</th>
                    </tr>
                </thead>
            
                <tbody>
                    {
                        users.map(user =>
                       <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.salary}</td>
                        <td>
                        <Link to={"/read/"+user.id}>
                           <Button className="action_btn" variant="success">Read</Button>
                        </Link>
                        <Link to={"/edit/"+user.id}>   
                           <Button className="action_btn" variant="info">Edit</Button>
                        </Link>
                        <Link to={"/delete/"+user.id}>
                           <Button className="action_btn" variant="danger">Delete</Button>
                        </Link>
                        </td>
                        </tr> )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default Home;