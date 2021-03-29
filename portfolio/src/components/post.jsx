import React, { useState } from 'react';
import { useAuth } from '../assets/contexts/auth'
import '../assets/css/post.css';
//firebase
import { projectStorage, projectFirestore, timeStamp, user } from '../assets/firebase/firebase'

//reactstrap
import { Button } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function Post({
    username, 
    photoURL, 
    caption, 
    comments
}) {

    return (
        <div className="post">
            <div className="post__header">
                <p>{username}</p>
            </div>
        </div>
    )
}