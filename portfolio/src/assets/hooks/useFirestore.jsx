import { useState, useEffect } from 'react';
import { projectFirestore  } from '../firebase/firebase';
import { useAuth } from '../../assets/contexts/auth';

const useFirestore = (collection) => {
    const { currentUser } = useAuth();
    const [docs, setDocs] = useState([]);

    //use effect to grab data from storage
    useEffect(() => {
        const unsub = projectFirestore.collection(`${currentUser.email}`)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            })
        return () => unsub();
    }, [collection]);

    return { docs };
}
export default useFirestore