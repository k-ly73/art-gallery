import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from '../firebase/firebase';
import { useAuth } from '../../assets/contexts/auth';
const useStorage = (file) => {
    const { currentUser } = useAuth();
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const collectionRef = projectFirestore.collection(`${currentUser.email}`);
        const storageRef = projectStorage.ref(`images/${currentUser.email}/${file.name}`);
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, 
        (err) => {
            setError(err);
        },
        async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt })
            setUrl(url);
        })
    }, [file]);

    return { progress, error, url }
}

export default useStorage;