import { createApp } from 'nativescript-vue';
import { View } from '@triniwiz/nativescript-masonkit';
import { installMasonKit } from '@triniwiz/nativescript-masonkit/vue';
import Home from './components/Home.vue';

// Start every MasonKit element from Tailwind's preflight baseline
// (border-box, no UA margins/padding). Must run before any view is created.
View.preflight = true;

// Registers MasonKit's elements (<view>, <text>, <scroll>, <button>, ...) and
// the HTML-shaped ones (<div>, <section>, <h1>, <p>, <span>, ...).
installMasonKit();

createApp(Home).start();
