import React, { useState, useEffect } from 'react';
import ToolBar from './toolbar';
import CreatePost from './createpost';
import Post from './post';
//CSS
import '../assets/css/dashboard.css';

//firestore reference
import { projectFirestore } from '../assets/firebase/firebase';
import { useAuth } from '../assets/contexts/auth'
//ReactStrap 
import { Container, Row, Col } from 'react-bootstrap';


function DashBoard() {

    const [posts, setPosts] = useState([]);
    const { currentUser } = useAuth();
    useEffect(() => {
        projectFirestore.collection("posts").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                post: doc.data()
            })));
        })
    }, [posts])


    return (
        <div className="bg-water ptb-200">
            <ToolBar/>
            <Container className="d-flex align-items-center justify-content-center">
                <CreatePost/>
            </Container>
            <Container className="d-flex align-items-center justify-content-center">
                <Row>
                    <Col>
                        {posts.map(({id, post}) => {
                            return <Post
                                key={id}
                                id={id}
                                profileURL={post.profileURL}
                                username={post.username}
                                caption={post.caption}
                                photoUrl={post.photoUrl}
                                comments={post.comments}
                            />
                        })}
                    </Col>
                 
                </Row>  

            </Container>
        </div>

 
    )
}
export default DashBoard