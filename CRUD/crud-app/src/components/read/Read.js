import React from 'react';
import { useContext } from "react";
import { UserContext } from '../usercontext/UserContext';
import './Read.css';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

const Read = () => {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();

    const user = users.filter((user) => user.id == id);
    console.log(user[0]);
   
    return (
        <div className="read">
            <h1>ID: {user[0].id}</h1>
            <h1>Name: {user[0].name}</h1>
            <h1>Position: {user[0].position}</h1>
            <h1>Salery: {user[0].salary}</h1>
            <Link to="/">
                <Button variant="info">Back to Home</Button>
            </Link>
        </div>
    );
};

export default Read;