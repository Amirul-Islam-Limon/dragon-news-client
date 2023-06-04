import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn=(event)=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result=>{
            const user = result.user;
            navigate("/");
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className="text-danger">
            Provide valid email and strong password
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    );
};

export default Login;