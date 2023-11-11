import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';

/** per https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes
 * "In Svelte 5 they are functions and should be instantiated differently."
 */
const app = mount(App, {
  target: document.getElementById('app'),
});

export default app;
