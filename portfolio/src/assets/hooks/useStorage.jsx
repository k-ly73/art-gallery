import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/firebase';

const useStorage = file => {
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        //references
        const storageRef = projectStorage.ref(`images/${file.name}`);
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        },
        (error) => {
            setError(error);    

        },
        async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })

      

    }, [file]);

    return { progress, url, error }
}
export default useStorage