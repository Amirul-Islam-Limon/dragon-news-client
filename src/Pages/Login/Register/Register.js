import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext);

    const handleOnSubmit=(event)=>{
        event.preventDefault();

        const form = event.target;
        const name=form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Typed Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Typed Your PhotoURL" />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Text className="text-danger">
                Provide valid email and strong password
            </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
            Register
            </Button>
        </Form>
    );
};

export default Register;