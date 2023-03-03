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

*Notice*: `import` Navbar at the top. Make sure to do so otherwise it won't render.

We should see in `localhost:5173` that `Navbar` is sitting on top of `Main`.

## Styling Navbar

Give Navbar a className of `sticky-0` so it always sticks to the top of the page. 

```jsx
export default function Navbar() {
  return (
    <div className='sticky-0 flex items-center gap-4 sm:gap-8'>
      Navbar
    </div>
  )
}
```