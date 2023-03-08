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


Let's add a profile image, place it under the `<h1>`. 

```jsx
<img className='mx-auto h-[200px] aspect-square rounded-full shadow-lg'
  alt = 'my profile picture'
  src = {profilePic} />
```

## Responsive Design choice for the image

- On small screens and smaller, we have image in a on column layout right under the header
- On medium screens and larger, we have the image show up on the right side of the `AboutMe` component

Then place the same image right under the second to last `<div>`, but give with a few tweaks to the class. 

We also have the entire div an `md:grid md:grid-cols-2` to split into 2 columns.

```jsx
import React from 'react'
import profilePic from '../assets/profile-pic.png'

export default function AboutMe() {
  return (
    <div className="flex flex-col ">
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-4xl sm:text-6xl'>firstName lastName</h1>
        <img className='mx-auto md:hidden h-[200px] aspect-square rounded-full shadow-lg'
          alt = 'my profile picture'
          src = {profilePic} />
        {/* ... */}
      </div>
      <img className='mx-auto hidden md:flex h-[200px] aspect-square rounded-full shadow-lg'
          alt = 'my profile picture'
          src = {profilePic} />
    </div>
  )
}
```

So on medium screens @ grid-cols-2 we can render the image out again. The second image has a default of hidden, but an `md:flex`.

> Going to wrap the both the header text and img in a div with a className of flex items-center

```jsx
  <div className="flex items-center">
    <h1 className='font-bold text-4xl sm:text-6xl'>firstName lastName</h1>
    <img className='mx-auto md:hidden h-[200px] aspect-square rounded-full shadow-lg'
      alt = 'my profile picture'
      src = {profilePic} />
  </div>
```


## Funny Issue: image ok on mobile/small but overlaps with header on medium screens

- Fix: In `Main.jsx` we have to change `md:grid-cols-3` to `md:grid-cols-2`

## Funny Issue 2: The text goes behind the image, somewhere around medium - 768px min-width

- Issue fixed when AboutMe component and image are given more columns to span, see below

# Design choice - Have sidebar component take up ~1/4 of space, the Main and the rest of the components take up ~3/4

To implement this, inside of `Main` set it grid-cols to 4 on medium screens.

Now in `AboutMe`, on medium screens `md:col-span-3` so it will span 3 columns.

# Experience Component

This will encapsulate the lower half of the page. 

It will contain an array of `experiences` and within the JSX we will map out each experience.

```jsx
import React from 'react'

export default function Experience() {
  const experiences = [
    {
      company: 'Self',
      position: 'Senior Level Surveyor of Opportunities',
      description: "I'm in the process of surveying and completing multiple applications per day. In short, I'm seeking a job."
    },
    {
      company: 'Company 2',
      position: 'Full Stack Pancake Architect',
      description: 'I did a whole lot of things but I can\'t really remember them specifically so you\'ll have to take my word on it',
    },
    {
      company: 'Company 3',
      position: 'Hydro-Ceramics Engineer',
      description: 'It is a firm habit to immediately cleanse ceramic plates after usage.'
    }
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
      {experiences.map((experience, index) => {
        return (
          <div>{experience.company}</div>
        )
      })}
    </div>
  )
}
```

## Fixing the Main Layout to include `Experience` component

Recall in `Main.jsx`
```jsx
export default function Main() {
  return (
    <div className='p-4 flex flex-col md:grid md:grid-cols-4'>
      <AboutMe />
      <Experience />
      <Skills />

    </div>
  )
}
```

The flex-column layout for screens smaller than medium are fine, but the issue is how the grid layout will work for medium screens. 

I want the `Experience` component to be cover the second half of the page, so essentially want it to be under `AboutMe` in the grid layout. 

So I'm going to wrap both of them in a `div`. 

### Issue: It is still broken on larger screens.

To resolve that, we have to *swap* out the `md:col-span-3` from the `AboutMe`'s first `div` and put it into its parent component. Which is the div we wrapped Experience and AboutMe. 

While we are still here, also give it a flex column because they will always sit on top of one another. Also give a gap of 4. 

Here is what the `Main.jsx` looks like now:

```jsx
export default function Main() {
  return (
    <div className='p-4 flex flex-col md:grid md:grid-cols-4'>
      <div className="md:col-span-3 flex flex-col gap-4">
        <AboutMe />
        <Experience />
      </div>
      <Skills />
    </div>
  )
}
```

## Wrapping up the Experience component

Let's finish the mapping of each property within the `experiences` array. 

```jsx
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
      {experiences.map((experience, index) => {
        return (
          <div className='flex flex-col gap-1'>
            <h1 className='text-lg font-bold uppercase'>{experience.company}</h1>
            <h2 className='text-sm pb-2'>{experience.position}</h2>
            <p className='text-slate-500'>{experience.description}</p>
          </div>
        )
      })}
    </div>
  )
```

- Notice I wrapped each one in an element, then I gave a gradient to both color and text-size

# Now onto the `Skills` component

Let's give it a white background to give a nice contrast

```jsx
import React from 'react'

export default function Skills() {
  return (
    <div className='shadow bg-white'>

    </div>
  )
}
```

## **Make components occupy the full length of the page**

Notice how the skills section with a white background only covers a portion of the page.

We can do this by following where its rendered which is `Main` component as its rendered inside the `Layout`. Now let's give `Main` component a `flex-1`, which allows a flex item to grow and shrink as needed, ignoring its initial size. 

## Dividing skills in sections in the side bar

Going to have 3 topics under the side bar: Info, Skills, Interests

```jsx
import React from 'react'

export default function Skills() {
  return (
    <div className='shadow-xl p-3 bg-white rounded flex flex-col gap-4'>
      <div>
        <h1>Info</h1>
      </div>
      <div>
        <h1>Skills</h1>
      </div>
      <div>
        <h1>Interests</h1>
      </div>
    </div>
  )
}
```

Now adding styles so far:

```jsx
export default function Skills() {
  return (
    <div className='shadow-xl p-3 bg-white rounded flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl'>Info</h1>
        <div className="flex items-center gap-1 text-base">
          <h3 className='font-semibold'>Email</h3>
          <a className='text-cyan-500' 
          href="mailto:demoemail@gmail.com">demoemail@gmail.com</a>
        </div>
      </div>
      <div>
        <h1 className='text-4xl'>Skills</h1>
      </div>
      <div>
        <h1 className='text-4xl'>Interests</h1>
      </div>
    </div>
  )
}
```

## Adding a ***hover underline effect***

I also want the email to have a hover effect. So this is what we add to the div:

```jsx
  <div className="flex items-center gap-1 text-base
  relative after:absolute after:bottom-0 after:w-full
  after:h-[2px] after:right-full after:bg-purple-500
  hover:after:translate-x-full after:duration-300
  overflow-hidden">
    <h3 className='font-semibold'>Email</h3>
    <a className='text-cyan-500' 
    href="mailto:demoemail@gmail.com">demoemail@gmail.com</a>
  </div>
```

## Code reuse - Using @apply directive to make a custom utility class.

Let's move all that class code regarding the underline hover effect out and into the `index.css`. Turn it into a custom utility class so that we can shorten the className.

In `index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.underline-on-hover {
  @apply after:absolute after:bottom-0 after:w-full
  after:h-[2px] after:right-full after:bg-purple-500
  hover:after:translate-x-full after:duration-300
  overflow-hidden;
}
```

Now we can shorten the className like this with the class `underline-on-hover`:

```jsx
  <div className="flex items-center gap-1 text-base
  relative underline-on-hover">
    <h3 className='font-semibold'>Email</h3>
    <a className='text-cyan-500' 
    href="mailto:demoemail@gmail.com">demoemail@gmail.com</a>
  </div>
```

Repeat that code above for however many times you'd want, not just for email but GitHub, LinkedIn, or any other sites you'd want. Make sure to add attributes `target="_blank" rel="noreferrer"` to the anchor tag to open in new tab.

## Skills subsection of sidebar

```jsx
<div>
  <h1 className='text-4xl'>Skills</h1>
  <div className="flex items-center gap-2 flex-wrap">
    
  </div>
</div>
```
- Want the items to centered, and flex-wrap to wrap onto next line

We will create a JavaScript object with the key as the category of skills, and value as an array of known skills relevant to that category.


# Side Note on a **Warning** in Chrome Dev Tools

```
react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Navbar`. See https://reactjs.org/link/warning-keys for more information.
 at a
    at Navbar
    at div
    at Layout (http://localhost:5173/src/components/Layout.jsx:20:5)
    at App (http://localhost:5173/src/App.jsx:22:29)
```

So `Navbar.js` looks like this:

```jsx
  const links = [
    ["Blog", "https://google.com"],
    ["Email", "mailto:me@example.com"],
    ["GitHub", "https://github.com/DragonSenses"],
  ];

  return (
    <div className="sticky-0 flex justify-between items-center gap-4 sm:gap-8
      p-4 text-xs sm:text-sm">
      <a className='text-sm sm:text-base' href='/'>Navbar Title Header</a>

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
```

Back at the [React Docs Beta - Rendering Lists](https://beta.reactjs.org/learn#rendering-lists). 

When using a `for` loop or `array map()` function to render lists of components, e.g., an array of products: 

```jsx
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

Inside your component, use the `map()` function to transform an array of products into an array of `<li>` items:

```jsx
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

Notice how `<li>` has a `key` attribute. **For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.** Usually, a key should be coming from your data, such as a database ID. React will rely on your keys to understand what happened if you later insert, delete, or reorder the items.

There are 2 Approaches:

1. Convert our array of `links` into objects 

or 

2. Use index as the `key`

In both approaches though we have to remove the list styling type. So add this to attribute to `<li>` -> `className="list-none"`

### First Approach

Let's convert our `links` an array of arrays to an array of objects with `title`, `url`, and `id`:

```jsx
  const links = [
    {title: "Blog", url: "https://google.com", id: "1"},
    {title: "email", url: "mailto:me@example.com", id: "2"},
    {title: "GitHub", url: "https://github.com/DragonSenses", id: "3"},
  ];
```

Then we map out each `li` with a `key` attribute, wrapping the `<a>` tag.

```jsx
{links.map( link =>
  <li key = {link.id} className="list-none">
    <a href={link.url} target="_blank" rel="noreferrer">
      {link.title}
    </a>
  </li>
)}
```

### Second Approach

Let's preserve our array and use the `index` that we destructured as the key

```jsx
const links = [
  ["Blog", "https://google.com"],
  ["Email", "mailto:me@example.com"],
  ["GitHub", "https://github.com/DragonSenses"],
];

{links.map((link, index) => {
  return (
    <li key={index} className="list-none">
      <a href={link[1]} target="_blank" rel="noreferrer">
        {link[0]}
      </a>
    </li>
  );
})}
```

Now it's up to you what is more readable. I'm going to use both approaches and use the second approach for `Navbar` and use the first approach for `Experience`, since `experiences` is an object already I'm just going to use index as the unique key.

## ***Takeaway*** Every `map` the parent `div` or container needs to return a `key` which we can set to `index` or some unique `id`

# Mapping out skills section

Now that we covered how to render lists and map things out. In `Skills` component we have:

```jsx
  const abilities = {
    JavaScript: ['React', 'Node.js', 'Express.js', 'React Native', 'SvelteKit'],
    Java: ['Spring', 'Apache Maven'],
    Web: ['Git','TailwindCSS', 'SASS', 'Firebase', 'MonogoDB', 'SQL', 'NoSQL', 'Netlify', 'Docker','Kubernetes'],
    Design: ['Adobe InDesign','PhotoShop', 'Pixlr', 'Figma'],
  }
```

A JavaScript object that contains `keys` or property names, and the `values` as an array of those abilities related to the `key` or property name. 

So we have to take the keys of the `abilities` object, then map each `keyName` and destructure the `index` so we can use it as the `id` for `key` attribute. 

```jsx
  {Object.keys(abilities).map((keyName, index) => {
      return(
        <div className="" key={index}>
        <h3>{keyName}</h3>

```

***NOTE*** make sure it is `Object` and not `Objects`. 

### A second mapping

Inside the JSX element thats returned by the mapping of `abilities`, I want a second mapping of each skill related to the `keyName`. Note that we use the [Square Brackets notation](https://javascript.info/object#square-brackets) to access `keyName` before we `map`.

```jsx
<div className="flex items-center gap-2 flex-wrap">
  {Object.keys(abilities).map((keyName, index) => {
    return(
      <div className="" key={index}>
        <h3>{keyName}</h3>
        <div className="flex items-center gap-2 flex-wrap">
          {abilities[keyName].map( (skill, i) => {
            return (
              <div key={i}
              className="rounded-full bg-gradient-to-r from-blue-700 to-violet-700 
              text-white px-4 py-2 text-xs">
                  {skill}
              </div>
            )
          })}
        </div>
      </div>
    )
  })}
</div>
```

These buttons will also have similar `classNames` to the `projects` button in `AboutMe`, but with a few changes.

I'm still deciding if I should create a custom utility class for it since it is only used once, in this mapping. But here is the className with the changes:

```jsx
<div className="flex items-center gap-2 flex-wrap">
  {Object.keys(abilities).map((keyName, index) => {
    return(
      <div className="" key={index}>
        <h3 className="text-lg">{keyName}</h3>
        <div className="flex items-center gap-2 flex-wrap">
          {abilities[keyName].map( (skill, i) => {
            return (
              <div key={i}
              className="rounded bg-gradient-to-r from-blue-700 to-violet-700 
              text-white px-2 py-1 text-xs">
                  {skill}
              </div>
            )
          })}
        </div>
      </div>
    )
  })}
</div>
```

-Increased `h3` text size, decreased skill padding and text size, changed to rounded

Also want space in between each of the `abilities`. So wrap the entire mapping inside of a `div` with `flex flex-col gap-3`

## Another requirement -> change skills to have scrollbar

Substitute the `flex-wrap` of the `div` containing the second mapping, with `overflow-scroll` which allows to scroll along the different sections. 

- Also change `items-center` to `items-stretch` so all skills occupy the same height

- Also to remove the *new line* so each skill has the same height we add to the `className` a `whitespace-nowrap` 

Here are the changes in the Skills subsection:

```jsx
      <div>
        <h1 className='text-4xl pb-2'>Skills</h1>
        {/* <div className="flex items-center gap-2 flex-wrap"> */}
          <div className="flex flex-col gap-3">
            {Object.keys(abilities).map((keyName, index) => {
              return(
                <div className="" key={index}>
                  <h3 className="text-lg">{keyName}</h3>
                  <div className="flex overflow-scroll items-stretch gap-2">
                    {abilities[keyName].map( (skill, i) => {
                      return (
                        <div key={i}
                        className="rounded bg-gradient-to-r from-blue-700 to-violet-700 
                        text-white px-2 py-1 text-xs whitespace-nowrap">
                            {skill}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        {/* </div> */} 
      </div>
```

I also removed the div parent div container.

Hmm perhaps I would want that depending on the screen. 

## Interests subsection

Copy Link from [Font Awesome cdnjs](https://cdnjs.com/libraries/font-awesome).

In `index.html` inside the `<head>` paste link above the `<title>`. 

Now head over to [Free Font Awesome Icons](https://fontawesome.com/search?o=r&m=free) and find icons related to hobbies.

```jsx
<div className='flex flex-col gap-1'>
  <h1 className='text-4xl'>Interests</h1>
  <div className="flex items-center flex-wrap text-lg p-4 gap-2">
    <i className="fa-solid fa-dumbbell"></i>
    <i className="fa-solid fa-mug-hot"></i>
    <i className="fa-solid fa-book-open-reader"></i>
    <i className="fa-solid fa-pen-fancy"></i>
    <i className="fa-solid fa-dragon"></i>
    <i className="fa-solid fa-dog"></i>
    <i className="fa-solid fa-paw"></i>
  </div>
</div>
```