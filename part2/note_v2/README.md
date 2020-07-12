## add server-side functionality
use a tool called <a href="https://github.com/typicode/json-server">JSON Server</a> as server
Install JSON server globally: <code>npm install -g json-server</code>
Or run the JSON server using the command <code>npx</code>: npx json-server --port 3001 --watch db.json
Or <code>npm install json-server --save-dev</code>, and addition to the package.json file: <code>"server": "json-server -p3001 --watch db.json"</code>, then start json-server with the command: <code>npm run server</code>
Using the <a href="https://github.com/axios/axios">axios</code> library instead for communitation between the browser and server. It functions like <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">fetch</a>, but is somewhat more pleasant to use
Using <code>npm install axios --save</code> install it
effect hooks are precisely the right tool to use when fetching data from a server