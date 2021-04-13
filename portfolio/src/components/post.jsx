import React, { useState } from 'react';
import { useAuth } from '../assets/contexts/auth'
import '../assets/css/post.css';
//firebase
import { projectStorage, projectFirestore, timeStamp, user } from '../assets/firebase/firebase'

//reactstrap
import { Button } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

//local imports 
import Comment from './comment';

export default function Post({
    username,
    profileURL, 
    photoUrl,  
    comments,
    caption,
    id
}) {

    const deletePost = () => {

        //deleting images from storage
        var imageRef = projectStorage.refFromURL(photoUrl);

        imageRef.delete().then(function(){
            console.log("delete successful");
        }).catch(function(error){
            console.log(`${error}`)
        })

        projectFirestore.collection("posts")
        .doc(id)
        .delete()
        .then(function() {
            console.log("delete post info successful");
        })
        .catch(function (error) {
            console.log(`${error}`);
        });
    }
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                    <img className="post__profilePic" src={profileURL}/>
                    <p style={{ marginLeft: "8px"}}>{username}</p>
                </div>
                <button onClick={deletePost} className="post__delete">Delete</button>
            </div>
            <div className="post__center">
                <img className="post__photoURL" src={photoUrl}/>
            </div>
            <div>
                <strong>{username}</strong> {caption}
            </div>


            {comments ? comments.map((comment) => 
                <Comment username={comment.username} caption={comment.caption}/>) : <></>}
        </div>
       
    )
}