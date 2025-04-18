import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseInit";
import page from "page";

export default async function(ctx) {
    try {
        await signOut(auth);
        page.redirect('/');

    } catch (error) {
        console.error(error.message);
    }
}