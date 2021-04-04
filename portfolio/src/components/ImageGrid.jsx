import React, { useEffect, useState } from 'react';
import { projectStorage } from '../assets/firebase/firebase';
import useFirestore from '../assets/hooks/useFirestore';
import { useAuth } from '../assets/contexts/auth'
import './../assets/css/gallery.css';

//Animation
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    
    const [photos, setPhotos] = useState([]);

    //hook for firebase storage
    useEffect(() => {
        const imagesRef = projectStorage.ref().child(`postImages/`);
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
            {/* { docs && docs.map(doc => (
                <motion.div 
                    layout
                    whileHover={{ scale: 1.1 }}
                    className="img-wrap" 
                    key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img 
                        src={doc.url} 
                        alt="uploaded image"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                    />
                </motion.div>
            ))} */}

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