<script>
  // official SvelteKit documentation suggests { MyImage },
  // but that doesn't work
  // import { MyImage } from './assets/raimond-klavins-Ql6JhGdbQg0-unsplash.jpg?enhanced';
  import MyImage from './assets/raimond-klavins-Ql6JhGdbQg0-unsplash.jpg?enhanced';

  import Screenshot from './assets/Screenshot from 2023-11-11 17-23-29.png?enhanced';
</script>

<main>
  <h3>Demo: <code>@sveltejs/enhanced-img</code> with Svelte / without SvelteKit</h3>
  <blockquote>
    Docs: <a href="https://kit.svelte.dev/docs/images#sveltejs-enhanced-img"
      >https://kit.svelte.dev/docs/images#sveltejs-enhanced-img</a>
  </blockquote>
  <hr />
  <h3>Quick Notes</h3>
  <ul>
    <li>HMR takes a moment on every reload (seems, no caching happening yet)</li>
    <li>
      two large image files took 2 minutes to build:
      <enhanced:img src={Screenshot} alt="Screenshot of terminal" />
    </li>
  </ul>
  <h3>A. Basic import</h3>
  <blockquote>
    <code>&lt;enhanced:img src='path-to-file'/&gt;</code>
  </blockquote>

  <enhanced:img src="./assets/im3rd-media-wDJ80Pl66mg-unsplash.jpg" alt="An alt text" />

  <hr />

  <h3>B. Dynamic import</h3>
  <blockquote>
    <code>import MyImage from 'path-to-file?enhanced'</code><br /><br />
    <code>&lt;enhanced:img src=&lbrace;variable&rbrace; /&gt;</code>
  </blockquote>

  <enhanced:img src={MyImage} alt="Some alt text" />
</main>

<style>
  main {
    padding: 1rem;
    max-width: 1080px;
    margin: 0 auto;
  }
  h3 {
    margin: 1rem 0;
  }
  blockquote {
    margin: 1rem 0;
    padding: 1rem;
    background-color: #eee;
  }
</style>
