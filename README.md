<h1>Next js 13 notes</h1>

<h2>Day 01</h2>
<p><strong>main=&gt;app directory is the main directory</strong></p>
<p><strong>Page:</strong> The main content goes into the page.tsx file i.e homepage</p>
<p><strong>Layout:</strong> This file is responsible for making the HTML file through React. If we have a global navbar or a navbar specific to a page, it's a good practice to create it here.</p>
<p><strong>Routing:</strong> One advantage of Next.js is routing. We can create routes by just specifying a folder name, and then the page.tsx file in that folder will create the route for it.</p>
<p>For dynamic routing, we use [id] as the folder name.</p>
<p><strong>BONUS:</strong></p>
<p><strong>Pocket-base:</strong> It is a lightweight backend tool that is useful for light projects and side projects. It uses SQLite under the hood and allows us to easily create a REST API by executing the downloaded .exe file from the Pocket Base website. After executing, it will redirect us to the admin HTTP link where we can manage different collections.</p>

<h2>Day 02</h2>
<p><strong>SSR (Server-Side Rendering):</strong> SSR allows us to do data fetching alongside the front end of the app, making it easier to manage data fetching in one file.</p>
<p><strong>Caching if dynamic route:</strong> For dynamic routes, caching is not done by the traditional method of ('api', cache: 'no-store'). Instead, we can use ISR (Incremental Static Request), which means the request is made after a certain number of seconds. The syntax for ISR is `('api', { next: { revalidate: 10 } })` where 10 represents the number of seconds.</p>
<p><strong>Pre-rendering a function:</strong> If we want to pre-render a function, we can use `generateStaticParams`.</p>
<p><strong>Some things in [id] folder:</strong></p>
<ul>
  <li>We can create an error.tsx file that will automatically show if there is any error.</li>
  <li>We can also create a loading.tsx file, which is used for displaying a loading state while data is being fetched.</li>
</ul>
