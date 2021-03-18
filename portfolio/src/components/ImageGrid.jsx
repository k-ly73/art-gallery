import React, { useEffect, useState } from 'react';
import { projectStorage } from '../assets/firebase/firebase';
import useFirestore from '../assets/hooks/useFirestore';
import { useAuth } from '../assets/contexts/auth'
import './../assets/css/gallery.css';

const ImageGrid = ({ setSelectedImg }) => {

    const { currentUser } = useAuth();
    const { docs } = useFirestore(`images`);
    console.log(docs);
    /*
        const [photos, setPhotos] = useState([]);

        hook for firebase storage
        useEffect(() => {
            // const imagesRef = projectStorage.ref().child(`images/${currentUser.email}`);
            // imagesRef.listAll().then(result => {
            //     result.items.forEach(resultItem => {
            //         resultItem.getDownloadURL().then(url => {
            //             setPhotos(oldList => [...oldList, url]);
            //         })
            //     })
            // })
        }, [collection]);
    */

    return (
     
        <div className = "img-grid">
            { docs && docs.map(doc => (
                <div 
                    className="img-wrap" 
                    key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt="uploaded image"/>
                </div>
            ))}

            {/* {photos.map((url, index)=> (
                <div 
                    className ="img-wrap"
                    onClick={() => setSelectedImg(url)}
                > 
                    <img src={url} alt="photos" key={index.toString()}/>
                </div>
            ))} */}
        </div>
   

    )
}
export default ImageGrid;