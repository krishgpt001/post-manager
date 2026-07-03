const seedPosts = [
  {
    id: "1",
    title: "Day 1 — My First HTML Page",
    author: "Krishna",
    content: "Today I wrote my very first HTML page. It was just a heading, a paragraph and an image but seeing it open in the browser felt amazing. I learned that HTML is not a programming language — it is a markup language that structures content. The most important thing I understood today is that every webpage is just a text file that the browser reads and renders. Tags like h1, p, a, img and div are the building blocks of everything on the internet.",
    tags: ["html", "beginnings", "webdev"],
    createdAt: "2026-02-01T08:00:00Z",
    updatedAt: "2026-02-01T08:00:00Z"
  },
  {
    id: "2",
    title: "Making Things Look Good with CSS",
    author: "Krishna",
    content: "HTML gives structure but CSS gives life. Today I learned how to style my pages using colors, fonts, margins and padding. The box model was confusing at first — every element is a box with content, padding, border and margin. Once that clicked everything made sense. I also learned the difference between block and inline elements. My biggest win today was centering a div using flexbox after struggling with margin auto for an hour.",
    tags: ["css", "flexbox", "styling"],
    createdAt: "2026-02-15T09:00:00Z",
    updatedAt: "2026-02-15T09:00:00Z"
  },
  {
    id: "3",
    title: "JavaScript Finally Makes Sense",
    author: "Krishna",
    content: "JavaScript was intimidating at first but today things started clicking. I learned variables, functions, loops and conditionals. The most important concept was the difference between let, const and var. I also learned how to manipulate the DOM — selecting elements with querySelector and changing their content and styles with JavaScript. My first project was a simple counter that increments and decrements a number on button click. Small but it felt like real programming.",
    tags: ["javascript", "dom", "basics"],
    createdAt: "2026-03-01T10:00:00Z",
    updatedAt: "2026-03-01T10:00:00Z"
  },
  {
    id: "4",
    title: "Built My First Responsive Website with Bootstrap",
    author: "Krishna",
    content: "Writing CSS from scratch for every screen size is painful. Today I discovered Bootstrap and it changed everything. The 12 column grid system makes responsive layouts so much easier. I rebuilt my portfolio using Bootstrap cards, a navbar and a grid layout. The site looked professional on both mobile and desktop without writing much custom CSS. I also learned about Bootstrap utility classes like mt-4, d-flex and text-center which speed up development massively.",
    tags: ["bootstrap", "responsive", "css"],
    createdAt: "2026-03-20T11:00:00Z",
    updatedAt: "2026-03-20T11:00:00Z"
  },
  {
    id: "5",
    title: "Understanding async JavaScript — Fetch and Promises",
    author: "Krishna",
    content: "Today I learned why JavaScript needs async programming. Since JS is single threaded, waiting for data from an API would freeze the entire page. Promises solve this by saying — go fetch this data and when it is ready, do something with it. I learned fetch, then, catch and finally async/await which makes the code read like normal synchronous code. My first real async project was fetching posts from a public API and displaying them as cards on the page.",
    tags: ["javascript", "async", "fetch", "promises"],
    createdAt: "2026-04-05T09:30:00Z",
    updatedAt: "2026-04-05T09:30:00Z"
  },
  {
    id: "6",
    title: "React Blew My Mind — Components and Props",
    author: "Krishna",
    content: "Switching to React felt like upgrading from a bicycle to a car. The component model is brilliant — instead of writing HTML in one giant file, you break the UI into small reusable pieces. Today I learned functional components, JSX and props. Props are how parent components pass data to child components. I rebuilt my Bootstrap card layout in React and was amazed that I could render 10 cards from an array using just a map function and one Card component.",
    tags: ["react", "components", "props"],
    createdAt: "2026-05-01T10:00:00Z",
    updatedAt: "2026-05-01T10:00:00Z"
  },
  {
    id: "7",
    title: "State Management with useState and useEffect",
    author: "Krishna",
    content: "Today I learned the two most important React hooks. useState creates reactive variables — when they change React automatically re-renders the component. useEffect runs code after a render, perfect for fetching data when a component loads. I built a todo app using useState to manage the list and a search feature that filters todos as you type. Then I upgraded it to fetch todos from an API using useEffect on mount. This is when React started feeling truly powerful.",
    tags: ["react", "hooks", "useState", "useEffect"],
    createdAt: "2026-05-20T11:00:00Z",
    updatedAt: "2026-05-20T11:00:00Z"
  },
  {
    id: "8",
    title: "Backend Basics — Node.js and Express",
    author: "Krishna",
    content: "Until now everything I built lived in the browser. Today I wrote my first server using Node.js and Express. Express is a minimal framework that lets you define routes and handle HTTP requests. I created a simple REST API with GET and POST routes that returns JSON data. Testing it in Postman felt like unlocking a new level. The key insight today was understanding the request-response cycle — the client sends a request, the server processes it and sends back a response.",
    tags: ["nodejs", "express", "backend", "api"],
    createdAt: "2026-06-10T09:00:00Z",
    updatedAt: "2026-06-10T09:00:00Z"
  },
  {
    id: "9",
    title: "MongoDB — Storing Real Data with Mongoose",
    author: "Krishna",
    content: "SQL databases scared me but MongoDB felt natural because data is stored as JSON-like documents. Today I connected MongoDB Atlas to my Express server using Mongoose. I learned schemas, models and the four core operations — find, create, findByIdAndUpdate and findByIdAndDelete. The most satisfying moment was when I hit a POST route in Postman, opened MongoDB Atlas and saw my data actually saved in the cloud. That connection between code and real persistent storage was a huge milestone.",
    tags: ["mongodb", "mongoose", "database", "mern"],
    createdAt: "2026-06-20T10:00:00Z",
    updatedAt: "2026-06-20T10:00:00Z"
  },
  {
    id: "10",
    title: "First Full MERN App — The Journey So Far",
    author: "Krishna",
    content: "Today I finished my first complete MERN stack application — a full Airbnb clone with user authentication, property listings, image uploads and booking management. MongoDB stores the data. Express handles the API routes. React builds the frontend with protected routes and AuthContext. Node.js runs the server. Six months ago I did not know what a div was. Now I can build and deploy a full stack web application from scratch. This is only the beginning — next step is mastering advanced React patterns, TypeScript and system design.",
    tags: ["mern", "fullstack", "milestone", "react"],
    createdAt: "2026-07-03T12:00:00Z",
    updatedAt: "2026-07-03T12:00:00Z"
  }
]

export default seedPosts