import '../src/config/firebaseInit';
import page from 'page';

import homeView from './views/home';
import petsView from './views/pets';
import loginView from './views/login';
import layoutView from './views/layout';

// Middlewares
page(layoutView);

// Setup routes
page('/', homeView);
page('/pets', petsView);
page('/login', loginView);

// Start routing
page();