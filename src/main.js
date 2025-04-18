import '../src/config/firebaseInit';
import page from 'page';

import homeView from './views/home';
import petsView from './views/pets';
import loginView from './views/login';
import logoutView from './views/logout';
import registerView from './views/register';
import layoutView from './views/layout';
import { authMiddleware } from './middlewares/auth';

// Middlewares
page(authMiddleware);
page(layoutView);

// Setup routes
page('/', homeView);
page('/pets', petsView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);

// Start routing
page();