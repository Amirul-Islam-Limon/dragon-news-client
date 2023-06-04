import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({news}) => {
    const {_id, title, total_view, rating, author, details, image_url}=news
    // console.log(news)
    return (
            <Card className="mb-4">
            <Card.Header className='d-flex w-100 justify-content-between align-items-center '>
                <div className='d-flex'>
                    <Image src={author.img} fluid roundedCircle style={{width:"70px"}} />
                    <div className='ms-3 pt-2'>
                        <p className='mb-0'>{author?.name}</p>
                        <p className='mb-0'>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2 pointer'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
                
            </Card.Header>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img src={image_url}></Card.Img>
            <Card.Text>
                {
                    details.length > 250?
                    <p>{details.slice(0,250) + "..."} <Link to={`/news/${_id}`}>Red More</Link></p>
                    :
                    <p>{details}</p>
                }
            </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning me-2'></FaStar>
                    <p className='mb-0'>{rating?.number}</p>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;