
import React, {useEffect, useState} from 'react';
import { projectStorage } from '../assets/firebase/firebase';

const ImageGrid = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const imagesRef = projectStorage.ref().child('images/');
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
                <div className = "img-wrap">
                    <img src={url} alt="photos" key={index.toString()}/>
                </div>
            ))}
        </div>
   

    )
}
export default ImageGrid;