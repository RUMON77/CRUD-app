import React from 'react';
import { useContext } from "react";
import './Delete.css';
import { useParams } from 'react-router-dom';
import { UserContext } from '../usercontext/UserContext';
import { Button, Modal } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

const Delete = () => {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();
    
    const deleteUser = (id) => {
        const user = users.filter((user) => user.id != id);
        setUsers(user);

    }
   
    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are u sure?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                 <Link to="/">
                    <Button className="delete_btn" variant="info">
                        Cancle
                    </Button>
                    <Button onClick={() => deleteUser(id)} variant="danger">
                        Delete
                    </Button>
                 </Link>    
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default Delete;