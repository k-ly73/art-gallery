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
    profileURL, 
    photoURL, 
    caption, 
    comments
}) {


    return (
        <div>
            <div className="post">
                <div className="post__header">
                    <div className="post__headerLeft">
                        <img className="post__profilePic" src={profileURL}/>
                        <p style={{ marginLeft: "8px"}}>{username}</p>
                    </div>
                    <button className="post__delete">Delete</button>
                </div>
                <div className="post__center">
                    <img className="post__photoURL" src={photoURL}/>
                </div>
                <div>
                    <p>
                        <span style ={{ fontWeight: '500', marginRight: "4px"}}>
                            {username}
                        </span>
                        {caption}
                    </p>
                </div>
            </div>
        </div>
       
    )
}