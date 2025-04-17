import page from 'page';
import homeView from './views/home.js';

// Setup routes
page('/', homeView);

// Start routing
page();