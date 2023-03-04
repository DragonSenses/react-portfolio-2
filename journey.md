# Intro

During the time of making this, A.I. (Artificial Intelligence) such as ChatGPT and Midjourney were generating so much attention. Wanted to try using the latest technologies to incorporate some of these into my personal projects. In this case I am using [Midjourney](https://midjourney.com/
) AI's image generator. 

# Using Midjourney AI - image generator

1. Header over to https://midjourney.com/ and Join the Beta (have to have a [Discord](https://discord.com/) account if you haven't made one already). 
2. Accept the Discord link and go to Midjourney server. 
3. Jump into one of the newcomer rooms and type in the chat this command: `/imagine`

```sh
/imagine (prompt words describing your image) (list of parameters)
```

so type out your list of parameters for the image you want. e.g., 

```sh
/imagine background graphic dragon outline, outline, lines, light gray outlines, light gray outlines, light shades, minimalism --ar 3:2 --v 4 --stylize 500
```

Then it will take some time for the AI to respond with the post containing the images.

- `--ar 3:2` - is the aspect ratio
- `--v 4` using 4th version of ai
- `--stylize 500` varies from 0 - 1000, and determines how either how close to the prompt it is (0) but less artistic or how "artistic" it is (value of 1000) but less connected to the prompt. See the [docs](https://docs.midjourney.com/docs/stylize).  

Full [Parameter List](https://docs.midjourney.com/docs/parameter-list).

Play around with the prompts.

### After the Midjourney AI responds to you with the image prompts

There will be 9 buttons, 4 of which have U (U1, U2, U3, U4) and other 4 are (V1, V2, V3, V4)
- Clicking `U#` means to upscale that specific image # (so you can save it later)
  - When you found the image you want but want a higher quality of it

- Clicking `V#` means to make more variations of that specific image # 
  - When the images is close to what you want but not quite, and you want more versions of it


Run this multiple times till you get all the assets you plan to have in your site. 

4. Create multiple designs for the web page

Here is the prompt:

```sh
/imagine web portfolio, developer web page, ui, uix, ux, ui/ux, figma, layouts, white background with blue and violet accents, minimalism --v 4
```

# Coding the website

1. Create React project with Vite 

https://tailwindcss.com/docs/guides/vite

```sh
npm create vite@latest my-project -- --template react
cd my-project
```

In my terminal
```sh
npm create vite@latest react-ai -- --template react
cd react-ai
``` 

Creates a react project for us using Vite.

2. Install Tailwind CSS

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Install files tailwind needs
- Then initialize files for the config

3. Configure template paths

In `tailwind.config.js`
```cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Add Tailwind directives to CSS

In `index.css`, replace all of it with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Cleaning out some boilerplate code

In `App.jsx`

```jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
```

`App.jsx` clean:

```jsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    </div>
  )
}

export default App
```

- Delete `App.css` file

6. Now we can finally start the build process

```sh
npm run dev
```

Opens up a project on `http://localhost:5173/`

Open link in the browser.

7. Add a some code to the App

In `App.jsx`

```jsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2 className="bg-purple-300 text-white">Hello!</h2>
    </div>
  )
}

export default App
```

**Tip**: Here is how I typed it so it auto completes in Visual Studio Code:

`h2.bg-purple-300.text-white` then press Enter, and it should create the tags for you:

```jsx
<h2 className="bg-purple-300 text-white"></h2>
```

Then write the content within.

# Making **components**

- Make a `components` folder within `src` and then create a `Layout.jsx` file 

Generate the Layout component with `rfc` command. This is from a VSCode Extension - **ES7+ React/Redux/React-Native snippets**.

- Also make a `Main` and `Navbar` component

# Import the components in the App

`App.jsx`
```jsx
import { useState } from 'react'
import Layout from './components/Layout'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Main />
    </Layout>
  )
}

export default App
```

- Layout will need a both opening and closing tag
- Main does not need a closing tag, so just give it a self-closing tag

## Pass props in `Layout` and render children

- Receive props in Layout
- Destructure children from props
- Inside Layout render out children

Now we can see that Main is rendered at the top within our Layout

```jsx
import React from 'react'

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      {children} 
    </div>
  )
}
```

## Styling the `Layout`

Now we can style the Layout by giving it a className

```jsx
export default function Layout(props) {
  const { children } = props;
  return (
    <div className='min-h-screen flex flex-col relative'>
      {/* ... */}
    </div>
  )
}
```

Let's wrap the children (i.e., Main component) in a `<main>` tag, so we can target it for styling.

```jsx
export default function Layout(props) {
  const { children } = props;
  return (
    <div className='min-h-screen flex flex-col relative'>
      <main className='flex flex-col flex-1'>
        {children} 
      </main>
    </div>
  )
}
```

Now we can add the `Navbar` component above the main:

```jsx
import React from 'react'
import Navbar from './Navbar'

export default function Layout(props) {
  const { children } = props;
  return (
    <div className='min-h-screen flex flex-col relative'>
      <Navbar/>
      <main className='flex flex-col flex-1'>
        {children} 
      </main>
    </div>
  )
}
```
- `flex flex-col flex-1` so it occupies as much space as it can

*Notice*: `import` Navbar at the top. Make sure to do so otherwise it won't render.

We should see in `localhost:5173` that `Navbar` is sitting on top of `Main`.

## Styling Navbar

Give Navbar a className of `sticky-0` so it always sticks to the top of the page. 

```jsx
export default function Navbar() {
  return (
    <div className='sticky-0 flex justify-between items-center gap-4 sm:gap-8'>
      Navbar
    </div>
  )
}
```

- Define a links component (an array) which will store 2-element arrays
  - The first item is the name & second item is the link to that element

Something like this:

```jsx
  const links = [
    ['Email', "mailto:me@example.com"],
    ['GitHub', "https://github.com/yourNameHere"],
    ['YouTube', "https://google.com"]
  ];
```

So later we can map the contents of the links out. 
- Destructure each link and an index
- Use an arrow function to return some JSX, an anchor tag
- Anchor tag should the reference and link name, along with the `target="_blank" rel="noreferrer"` so it opens up on a new tab

```jsx
{links.map( (link, index) => {
  return (
    <a href={link[1]} target="_blank" rel="noreferrer">{link[0]}</a>
  )
})}
```

- Let's wrap the code above in its own div so `justify-between` can apply to only the header and Navigation Links respectively.

- Then give it a padding of 4 for the entire component so it pushes everything in a little bit.

- Also wrap the Navbar Header Title in an anchor tag that refers back to the main page

```jsx
import React from "react";

export default function Navbar() {
  const links = [
    ["Blog", "https://google.com"],
    ["Email", "mailto:me@example.com"],
    ["GitHub", "https://github.com/DragonSenses"],
  ];

  return (
    <div className="sticky-0 flex justify-between items-center gap-4 sm:gap-8
      p-4">
      <a href='/'>Navbar Title Header</a>

      <div className="flex items-center gap-4">
        {links.map((link, index) => {
          return (
            <a href={link[1]} target="_blank" rel="noreferrer">
              {link[0]}
            </a>
          );
        })}
      </div>
    </div>
  );
}
```

### Mobile-First 

Let's set the text to be small on mobile, then raise it up a bit on small screens
- Also want the Navbar Title Header to be slightly larger than the subsequent text

```jsx
    <div className="sticky-0 flex justify-between items-center gap-4 sm:gap-8
      p-4 text-xs sm:text-sm">
      <a className='text-sm sm:text-base' href='/'>Navbar Title Header</a>
```

# Now let's move on to the main section

Note: the design will have 3 sections: main, profile and sidebar in that order.

On Mobile, would want to switch the order to profile, main and then sidebar.

- Let's create exponents -> `AboutMe.jsx`, `Experience.jsx` and `Skills.jsx`.

`rfc` command, to make them React Functional Components

- Render components in the `Main`
- Center the components
- On small screens make a single column, then medium screens became a grid layout with 3 columns.

```jsx
export default function Main() {
  return (
    <div className='p-4 flex flex-col md:grid md:grid-cols-3 place-items-center'>
      <AboutMe />
      <Experience />
      <Skills />

    </div>
  )
}
```

- Also going to change the background color, text-size & color so in `Layout`:

```jsx
export default function Layout(props) {
  const { children } = props;
  return (
    <div className='min-h-screen flex flex-col relative 
      bg-slate-100 text-slate-900 text-xs sm:text-sm'>
      <Navbar/>
      <main className='flex flex-col flex-1'>
        {children} 
      </main>
    </div>
  )
}
```

## `Aboutme` section 

- Full name in big text
- smaller header for occupation
- paragraph for small introduction
- 2 buttons that will open up a modal for our projects and contact form respectively

```jsx
import React from 'react'

export default function AboutMe() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-4xl sm:text-6xl'>firstName lastName</h1>
      <h2 className='font-medium text-slate-800 
        text-lg sm:text-2xl'>Occupation | Occupation 2</h2>
      <p className='text-slate-500'>I have an ardent passion of creating sites 
      using the latest technology. Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Dolores consequuntur a, ipsam modi culpa at!</p>
      <div className="my-10 flex items-center gap-4 text-sm sm:text-base">
        <button className='rounded-full bg-gradient-to-r from-blue-700 to-violet-700 
        text-white px-4 py-2 hover:opacity-70'>projects</button>
        <button className='rounded-full text-purple-800 
        border border-solid border-violet-800 px-4 py-2 
        hover:opacity-70'>contact</button>
      </div>
    </div>
  )
}
```

### Applying a `transition duration`

I want the buttons to have a transition duration, so let's go to `index.css` and apply it everywhere.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  transition-duration: 250ms;
}
```

On second thought, I reverted this change and just applied it to the buttons.

# Design change

Previously, I had decided to have 3 columns as components. But it makes a bit more sense to have the first 2 sections divided horizontally rather vertically as a column. 

So going across as one section, the `AboutMe` component will contain the 2 columns needed and have a profile image.

On the other hand, the bottom section will contain the information. 

The skills section will remain unchanged.

## Adjustments to our code

Wrap the content of the `AboutMe` content in a div

```jsx
import React from 'react'

export default function AboutMe() {
  return (
    <div className="flex flex-col">
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-4xl sm:text-6xl'>firstName lastName</h1>
        <h2 className='font-medium text-slate-800 
          text-lg sm:text-2xl'>Occupation | Occupation 2</h2>
        <p className='text-slate-500'>I have an ardent passion of creating sites 
        using the latest technology. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Dolores consequuntur a, ipsam modi culpa at!</p>
        <div className="my-10 flex items-center gap-4 text-sm sm:text-base">
          <button className='rounded-full bg-gradient-to-r from-blue-700 to-violet-700 
          text-white px-4 py-2 hover:opacity-70 transition transition-duration:250ms'>projects</button>
          <button className='rounded-full text-purple-800 
          border border-solid border-violet-800 px-4 py-2 
          hover:opacity-70 transition transition-duration:250ms'>contact</button>
        </div>
      </div>
    </div>
  )
}
```

Let's add a profile image. 

```jsx
<img className='mx-auto h-[200px] aspect-square rounded-full shadow-lg'
  alt = 'my profile picture'
  src = {profilePic} />
```
