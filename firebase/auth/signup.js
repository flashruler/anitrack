import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";

const auth = getAuth(firebase_app);
setPersistence(auth, browserSessionPersistence);

export default async function signUp(email, password) {

    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
