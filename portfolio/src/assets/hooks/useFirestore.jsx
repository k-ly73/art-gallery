// import { useState, useEffect } from 'react';
// import { projectFirestore , projectStorage } from '../firebase/firebase';

// const useFirestore = (collection) => {
//     const [docs, setDocs] = useState([]);

//     //use effect to grab data from storage
//     useEffect(() => {
//         const unsub = projectStorage.child(collection)
//             .orderBy('createdAt', 'desc')
//             .onSnapshot((snap) => {
//                 let documents = [];
//                 snap.forEach(doc => {
//                     documents.push({...doc.data(), id: doc.id});
//                 });
//                 setDocs(documents);
//             });
//         return () => unsub();
//     });

//     return { docs };
// }
// export default useFirestore