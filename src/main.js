import ua from 'universal-analytics';
import App from "./App.svelte";

const gaID = process.env.GA_TAG || "ABC";

ua(gaID);

const app = new App({
  target: document.getElementById('app'),
  data: {
    email: "kingdom@kenny.wtf"
  }
});