import React, { useState } from 'react';
import { useAuth } from '../assets/contexts/auth'
import '../assets/css/post.css';
//firebase
import { projectStorage, projectFirestore, timeStamp, user } from '../assets/firebase/firebase'

//reactstrap
import { Button } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

function Post() {
    const { currentUser } = useAuth();
    
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
            var selectedImageSrc = URL.createObjectURL(e.target.files[0]);
            var imagePreview = document.getElementById("image-preview");
            imagePreview.src = selectedImageSrc;
            imagePreview.style.display = "block";
        }
    }
    const handleUpload = () => {
        if(image) {
            const uploadImageTask = projectStorage.ref(`postImages/${image.name}`).put(image);
            uploadImageTask.on("state_changed", (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            }, (error) => {
                console.log(error);
            }, () => {
                projectStorage.ref("postImages").child(`${image.name}`)
                .getDownloadURL().then((imageUrl) => {
                    projectFirestore.collection("posts").add({
                        timestamp: timeStamp,
                        caption: caption,
                        photoUrl: imageUrl,
                        username: user.email.replace("@gmail.com",""),
                        photoUrl: user.photoURL,
                    })
                })
            })
        }
    }

    return (
        <div className="post">      
            <div className="post__loggedIn">
                <p>Create Post</p>
                <div classsName="post__center">
                    <textarea 
                        rows="3" 
                        className="post__caption"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="Type in a Caption"
                    >

                    </textarea>
                    <div className="post__imagePreview">
                        <img id="image-preview" alt=""/>
                    </div>
                </div>
                <div className="post__bottom">
                    <div className="post__imageUpload">
                        <label htmlFor="fileInput">
                            <AddAPhotoIcon style={{cursor:"pointer"}}/>
                        </label>

                        <input 
                            id="fileInput" 
                            type="file" 
                            accept="image/*" 
                            onChange={handleChange}/>
                    </div>
                    <button 
                        className="post__uploadBtn"
                        onClick={handleUpload}
                        style={{color: caption ? "#000" : "lightgrey"}}
                    >
                        {`Post ${progress != 0 ? progress : ""}`}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Post