import React from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXonKfaM3GikxbY5WSKFoEx42LzwoiEWM",
    authDomain: "lu-page.firebaseapp.com",
    projectId: "lu-page",
    storageBucket: "lu-page.appspot.com",
    messagingSenderId: "401071849310",
    appId: "1:401071849310:web:834c4a4b0fd3378cdfd9cf"
};

const FirebaseContext = React.createContext();

const FirebaseProvider = (props) => {

    const firebase = initializeApp(firebaseConfig);
    const db = getFirestore(firebase);
    const events = collection(db, 'events');
    const places = collection(db, 'places');
    const points = collection(db, 'points');

    async function getPlaces() {
        return await getData(places)
    }

    async function getEvents() {
        return await getData(events)
    }
    async function getPoints() {
        return await getData(points)
    }

    async function getData(collection) {
        const snapshot = await getDocs(collection);
        let aux = snapshot.docs.map(doc => {
            let item = {...doc.data()}
            item['id'] = doc.id
            return item
        })
        return aux
    }

    async function addPlace(name, location, ig, category, calification) {
        await addDoc(places, JSON.parse(`{"name": "${name}", "location": "${location}", "ig": "${ig}", "category": "${category}", "calification": ${calification}}`))
    }

    async function updatePlaces(id, data) {
        await update(id, data, 'places')
    }

    async function updatePoints(data) {
        await update('current_points', data, 'points')
    }

    async function updateEvent(id, data) {
        await update(id, data, 'events')
    }

    async function update(id, data, root) {
        await updateDoc(doc(db, `${root}/${id}`), data)
    }

    return (
        <FirebaseContext.Provider value={{getPlaces, getEvents, getPoints, addPlace, updatePlaces, updateEvent, updatePoints}} {...props}/>
    )
}

const useFirebase = () => React.useContext(FirebaseContext);


export { FirebaseProvider, useFirebase };