import React, {useEffect, useState} from 'react';
import { projectStorage } from '../assets/firebase/firebase';
import { useAuth } from '../assets/contexts/auth'
import './../assets/css/gallery.css';

const ImageGrid = ({ setSelectedImg }) => {

    const [photos, setPhotos] = useState([]);
    const { currentUser } = useAuth();
    useEffect(() => {
        const imagesRef = projectStorage.ref().child(`images/${currentUser.email}`);
        imagesRef.listAll().then(result => {
            result.items.forEach(resultItem => {
                resultItem.getDownloadURL().then(url => {
                    setPhotos(oldList => [...oldList, url]);
                })
            })
        })
    }, []);

    return (
     
        <div className = "img-grid">
            {photos.map((url, index)=> (
                <div 
                    className ="img-wrap"
                    onClick={() => setSelectedImg(url)}
                > 
                    <img src={url} alt="photos" key={index.toString()}/>
                </div>
            ))}
        </div>
   

    )
}
export default ImageGrid;