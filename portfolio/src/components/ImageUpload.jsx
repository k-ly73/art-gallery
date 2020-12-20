import React, { Component } from 'react';
import {projStorage} from '../assets/firebase/firebase'; 
// import '../assets/css/upload.css';

class ImageUpload extends Component {

    constructor(props){
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUplad = this.handleUpload.bind(this);
    }
    
    //handles change upon uploading an image
    handleChange = e => {
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }

    //uploads an image 
    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = projStorage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
        },
        (error) => {
            console.log(error);
        },

        () => {
            projStorage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        }

        )
    }
    
    // useEffect(() => {
        
    //     const fetchImages = async () => {
            
    //         let result = await projStorage.child('images/').listAll();
        
    //     }
    // })
    
    render(){        
        return (
            <body>
                <div className = "container">
                    <h1>Upload Photos Below</h1>
                    <div className = "row">
                        
                        <progress value = {this.state.progress} max = "100" />
                        <br/>
                        <input type = "file" onChange = {this.handleChange} />
                        <label onClick = {this.handleUpload}>Upload</label>
                        <br/>

                       
                
                    
                    
                    </div>
                    <div className = "row">
                        <img src = {this.state.url || 'https://via.placeholder.com/300x400'} alt="Uploaded images" height = "300" width = "400"/>
                    </div>
                
                    
                    
                </div>
                
                
            </body>
        )
    }
} 
export default ImageUpload