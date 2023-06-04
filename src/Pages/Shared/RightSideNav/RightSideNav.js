import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const {providerLogin}=useContext(AuthContext);

    const googleProvider= new GoogleAuthProvider();

    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user= result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle /> Log In With Google</Button>
                <Button variant="outline-dark"><FaGithub/> Log In With Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h5>Find us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch/> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;