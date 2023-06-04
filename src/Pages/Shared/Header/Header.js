import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Button } from 'react-bootstrap';

const Header = () => {
    const {user, logOut}=useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            console.log("Log Out Successful");
        })
        .catch(error=>{
            console.error(error);
        })
    }
    console.log(user);
    return (
        <Navbar collapseOnSelect className='mb-3' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link className='text-decoration-none text-dark text-bold' to="/">Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/categories">All News</Nav.Link>
                </Nav>
                <Nav className='d-flex align-items-center'>
                    <Nav.Link href="#deets">
                    {
                        user?.uid?
                        <>
                            <Button variant="light" onClick={handleLogOut}>Log Out</Button>
                            {user?.displayName}
                        </>
                        :
                        <>
                        <Link to='/login'>Log In</Link>
                        <Link to="/register">Register</Link>
                        </>
                    }
                        
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        {
                            user?.photoURL?
                            <Image style={{width:'40px'}} roundedCircle src={user?.photoURL}></Image>
                            :
                            ""
                        }
                    </Nav.Link>
                </Nav>
                <div className='d-lg-none'>
                    <LeftSideNav></LeftSideNav>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;