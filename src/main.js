import page from 'page';
import homeView from './views/home';
import petsView from './views/pets';
import layoutView from './views/layout';

// Middlewares
page(layoutView);

// Setup routes
page('/', homeView);
page('/pets', petsView);

// Start routing
page();