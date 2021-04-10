import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../assets/css/commentUpload.css';

import { useAuth } from '../assets/contexts/auth'
import { projectFirestore } from '../assets/firebase/firebase';

export default function CreateComment({ comments, id, user }) {
    const { currentUser } = useAuth();
    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState(comments ? comments : []);

    //this will add a comment to the previously created post
    const addComment = () => {
        if(comment != ""){ //Prevents an empty comment post
            commentList.push({
                comment: comment,
                username: currentUser.email.replace("@gmail.com", ""),
            });
            projectFirestore.collection("posts")
            .doc(id)
            .update({
                comments: commentList,
            }).then(function(){
                setComment("");
                console.log("added comment");
            }).catch(function(error){
                console.log(`Error ${error}`)
            })
    
        }

    }
    return (
        <div className="commentUpload">
            <textarea 
                rows="1" 
                className="commentUpload__textarea"
                placeholder="Write a comment"

                value={comment}
                onChange={(e) => setComment(e.target.value)}
            >
            </textarea>
            <button 
                className="commentUpload__button"
                onClick={addComment}
            >
                Post
            </button>
        </div>
    )
}