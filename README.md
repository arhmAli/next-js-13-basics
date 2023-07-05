<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <h1>Learning next.js notes</h1>
  
  <h2 align="center">Day_01</h2>
  <p><strong>Main:</strong> The <code>app</code> directory is the main directory.</p>
  <p><strong>Page:</strong> The main content goes into the <code>page.tsx</code> file, i.e., homepage.</p>
  <p><strong>Layout:</strong> This file is responsible for making the HTML file through React. If we have a global navbar or a navbar for the page, it is better practice to create it here.</p>
  <p><strong>Routing:</strong> One advantage of Next.js is routing. We can create routes by specifying a folder name, and the <code>page.tsx</code> in that folder will create the route for it.</p>
  <p>For dynamic routing, we use <code>[id]</code> as the folder name.</p>
  
  <h2>BONUS</h2>
  <p><strong>Pocket-base:</strong> It is used for the backend. It is lightweight and gets the job done for light projects. It uses SQLite under the hood, and we can easily create a REST API by executing the downloaded <code>.exe</code> file from the Pocket-base website. After executing it, we can access the admin HTTP link to create different collections.</p>
  
  <h2 align="center">Day_02</h2>
  <p><strong>SSR:</strong> SSR (Server-Side Rendering) means that we can do data fetching alongside our frontend app, making life easier as we don't have to write code for data fetching in another file.</p>
  <p><strong>Caching:</strong> If there is a dynamic route, traditional caching methods like <code>('api', cache: 'no-store')</code> may not be effective. Instead, we can use ISR (Incremental Static Request) where the request is done after a certain number of seconds. The basic syntax is <code>(`api`, {next: {revalidate: 10}})</code> where 10 represents the number of seconds.</p>
  <p><strong>Pre-rendering a function:</strong> We can use <code>generateStaticParams</code> to pre-render a function.</p>
  <p><strong>Somethings in [id] folder:</strong></p>
  <ul>
    <li>We can create an <code>error.tsx</code> file which will automatically show if there is any error.</li>
    <li>We can also create a <code>loading.tsx</code> file which is used for loading when data is being fetched.</li>
  </ul>
  
  <h2 align="center">Day_03</h2>
  <p><strong>Routing:</strong> Routing is done using a folder structure, as studied in Day 01. We use the <code>&lt;Link /&gt;</code> component provided by Next.js, which works just like an <code>&lt;a /&gt;</code> in HTML. It takes the <code>href</code> attribute to specify the route we want to go to.</p>
  <p><strong>useRouter:</strong> We can use the <code>useRouter</code> hook to navigate between routes. It has multiple actions such as <code>.push('/page')</code>, <code>.back()</code>, and <code>.reload()</code>. We import it from <code>next/router</code>.</p>
  <p><strong>Dynamic routing:</strong> If there is a dynamic route, we can directly access the name provided for the folder, for example, <code>[id]</code>. It is part of the <code>params</code> object, which we can access like <code>https://.../api/{params.id}</code>. To use the <code>params.id</code> in a client-side component, we can use the <code>useParams</code> hook.</p>
  <p><strong>Nested routing:</strong> We can use <code>...[id]</code> to catch nested routing.</p>
  <p><strong>Route groups:</strong> We can use <code>(stuff)</code> to create a route group.</p>
  <h1 align="center">Day 04</h1>

<h2>Route Handlers:</h2>
<p>In Next.js, we can create APIs quite easily by following these steps:</p>
<ol>
  <li>Create a folder named <code>api</code> in the project.</li>
  <li>Inside the <code>api</code> folder, create another folder for the specific API you want to create, e.g., <code>blogs</code>.</li>
  <li>In the <code>blogs</code> folder, create a file named <code>route.ts</code>. This file acts as the starting point of the API.</li>
  <li>You can perform various CRUD operations using Next.js APIs, such as:</li>
</ol>

<ul>
  <li><strong>GET</strong>: Retrieve data</li>
  <li><strong>POST</strong>: Create new data</li>
  <li><strong>DELETE</strong>: Delete existing data</li>
  <!-- Add more if needed -->
</ul>

<p>Here's a simple example:</p>

<pre><code>export const GET = (req: Request) =&gt; {
  console.log("Received a request on localhost:3000/api/blog");
};
</code></pre>

<p>It's as simple as that!</p>

<p>Next.js also allows us to create REST APIs easily. For dynamic routing and data fetching, create a folder with a dynamic route, e.g., <code>[id]</code>, and a <code>route.ts</code> file inside that folder. This file will handle the dynamic routing and data fetching.</p>

<p><strong>NOTE:</strong> Remember that a folder cannot have both a <code>route.ts</code> file and a <code>page.tsx</code> file in the same folder.</p>

</body>
</html>
