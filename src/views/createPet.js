import { html } from "lit-html";
import app from "../config/firebaseInit";
import page from "page";
import { child, getDatabase, push, ref, update } from "firebase/database";

const template = (onSubmit) => html`
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit=${onSubmit} class="space-y-6" action="#" method="POST">
            <div>
                <label for="name" class="block text-sm/6 font-medium text-gray-900">Name</label>
                <div class="mt-2">
                <input type="text" name="name" id="name" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="animalType" class="block text-sm/6 font-medium text-gray-900">Animal Type</label>
                </div>
                <div class="mt-2">
                    <input type="text" name="animalType" id="animalType" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="breed" class="block text-sm/6 font-medium text-gray-900">Breed</label>
                </div>
                <div class="mt-2">
                    <input type="text" name="breed" id="breed" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                </div>
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Pet</button>
            </div>
        </form>
    </div>
</div>
`;

export default function(ctx) {
    ctx.render(template(createPetSubmitHandler));
}

async function createPetSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { name, animalType, breed } = Object.fromEntries(formData);

    try {
        // const userCredentials = await signInWithEmailAndPassword(auth, name, animalType, breed);

        // A post entry.
        const petData = {
            name,
            animalType,
            breed
        };

        const db = getDatabase(app);
        // Get a key for a new Post.
        const newPetKey = push(child(ref(db), 'pets')).key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['/pets/' + newPetKey] = petData;

        update(ref(db), updates);
        page.redirect('/');
        
    } catch (error) {
        console.error(error.message);
    }
    
}