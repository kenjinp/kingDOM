const App = require('./App.svelte');

const app = new App({
  target: document.getElementById('app'),
  data: {
    hello: ""
  }
});