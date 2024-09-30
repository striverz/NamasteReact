# How do we configure TailwindCSS?
[https://tailwindcss.com/docs/installation/framework-guides](THE LINK FOR CONFIGUREING TAILWIND IN DIFF THINGS)

# In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
In the tailwind.config.js file, the different keys are used to configure and customize Tailwind CSS to fit your project's needs. Here's a breakdown of the key options:
1. content
Purpose: Specifies the paths to all your template files (HTML, JavaScript, JSX, Vue, etc.).
Function: Tailwind uses these paths to scan for class names and remove unused styles in production, a process known as "purging."
```
content: [
  './src/**/*.{html,js,jsx,ts,tsx}',
  './public/index.html',
],
```
Explanation: This configuration tells Tailwind to look for class names in all files within the src directory that have the specified extensions and the index.html file in the public directory.

2. theme
Purpose: This key is used to customize the default design system of Tailwind. It allows you to define custom colors, spacing, fonts, and more.
Function: Provides an object to override or extend the default design tokens provided by Tailwind.
```
theme: {
  colors: {
    primary: '#1da1f2',
    secondary: '#14171a',
  },
  spacing: {
    '72': '18rem',
    '84': '21rem',
  },
},
```
Explanation: This example customizes the colors and spacing scales in Tailwind's default theme.

3. extend
Purpose: This key is used within the theme key to extend Tailwind's default theme without completely replacing it.
Function: Allows you to add new values to the design tokens while keeping the existing ones intact.
```
theme: {
  extend: {
    colors: {
      customGreen: '#32CD32',
    },
    spacing: {
      '128': '32rem',
    },
  },
},
```
Explanation: The extend key adds a custom green color and a new spacing value to the existing Tailwind theme, while still retaining all default colors and spacing options.
4. plugins
Purpose: This key is used to add additional functionalities to Tailwind via plugins. Plugins can add new utilities, components, or customize existing ones.
Function: Integrates third-party or custom plugins into your Tailwind setup.
```
plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
],
```
Explanation: This example shows how to integrate the official Tailwind CSS plugins for forms and typography into your project.

# why do we need .postCSS file?
it is just a `transpiler that turns a special PostCSS plugin syntax into a Vanilla CSS`. You can think of it as the Babel tool for CSS.