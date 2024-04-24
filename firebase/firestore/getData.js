import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getDocument(collection, id) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;
    let data = null;

    try {
        result = await getDoc(docRef);
        data = result._document.data.value.mapValue.fields;
    } catch (e) {
        error = e;
    }
    return { data, error };
}

