import { createUserWithEmailAndPassword } from "firebase/auth";
import { html } from "lit-html";
import { auth } from "../config/firebaseInit";
import page from "page";

const template = (onSubmit) => html`
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit=${onSubmit} class="space-y-6" action="#" method="POST">
            <div>
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div class="mt-2">
                <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                    <div class="text-sm">
                    </div>
                </div>
                <div class="mt-2">
                    <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="repeatPassword" class="block text-sm/6 font-medium text-gray-900">Repeat Password</label>
                    <div class="text-sm">
                    </div>
                </div>
                <div class="mt-2">
                    <input type="password" name="repeatPassword" id="repeatPassword" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                </div>
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
            </div>
        </form>
    </div>
</div>
`;

export default function(ctx) {
    ctx.render(template(registerSubmitHandler));
}

async function registerSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { email, password, repeatPassword } = Object.fromEntries(formData);

    if (password !== repeatPassword) {
        alert('Passwords do not match!');
        return;
    }

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        page.redirect('/');
        
    } catch (error) {
        console.error(error.message);
    }
    
    //TODO: Make users know password must be at least 6 characters long.
}