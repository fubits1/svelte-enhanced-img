<script>
  // official SvelteKit documentation suggests { MyImage },
  // but that doesn't work
  // import { MyImage } from './assets/raimond-klavins-Ql6JhGdbQg0-unsplash.jpg?enhanced';
  import MyImage from './assets/raimond-klavins-Ql6JhGdbQg0-unsplash-4000.jpg?enhanced';

  import Screenshot from './assets/Screenshot from 2023-11-11 17-23-29.png?enhanced';
  import Screenshot2 from './assets/Screenshot from 2023-11-11 17-48-59.png?enhanced';
</script>

<main>
  <h2>Demo: <code>@sveltejs/enhanced-img</code> with Svelte / without SvelteKit</h2>
  <blockquote>
    Repo: <a href="https://github.com/fubits1/svelte-enhanced-img">fubits1/svelte-enhanced-img</a>
  </blockquote>
  <blockquote>
    Docs: <a href="https://kit.svelte.dev/docs/images#sveltejs-enhanced-img"
      >https://kit.svelte.dev/docs/images#sveltejs-enhanced-img</a>
  </blockquote>
  <hr />
  <details>
    <summary><h3 style="display: inline-block; margin: 0 auto;">Quick Notes</h3></summary>
    <ul>
      <li>HMR takes a moment on every reload (seems, no caching happening yet)</li>
      <li>
        two large image files took 2 minutes to build:
        <enhanced:img src={Screenshot} alt="Screenshot of terminal" />
      </li>
      <li>
        after resizing both images to 4000px, build time went down to 33s (with two screenshots on
        top) <enhanced:img src={Screenshot2} alt="Screenshot of terminal" />
      </li>
    </ul>
  </details>
  <hr />
  <h3>A. Basic import</h3>
  <blockquote>
    <code>&lt;enhanced:img src='path-to-file'/&gt;</code>
  </blockquote>
  <figure>
    <enhanced:img src="./assets/im3rd-media-wDJ80Pl66mg-unsplash-4000.jpg" alt="An alt text" />
    <figcaption>
      Source: <a
        href="https://unsplash.com/photos/a-view-of-the-night-sky-over-a-forest-wDJ80Pl66mg"
        >Unsplash/Im3rd Media</a>
    </figcaption>
  </figure>
  <hr />

  <h3>B. Dynamic import</h3>
  <blockquote>
    <code><s>import &lbrace; MyImage &rbrace; from 'path-to-file?enhanced'</s></code><br />
    <code>import MyImage from 'path-to-file?enhanced'</code><br /><br />
    <code>&lt;enhanced:img src=&lbrace;variable&rbrace; /&gt;</code>
  </blockquote>

  <figure>
    <enhanced:img src={MyImage} alt="Some alt text" />
    <figcaption>
      Source: <a href="https://unsplash.com/photos/blue-orange-and-white-floral-textile-Ql6JhGdbQg0"
        >Unsplash/Raimond Klavins</a>
    </figcaption>
  </figure>
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

  li {
    margin: 0.5rem 0;
  }
</style>
