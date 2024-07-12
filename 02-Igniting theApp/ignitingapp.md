# What is `NPM`?
npm is the world's largest software registry, hosting millions of packages. it is like a node package manager  [npm link](https://www.npmjs.com/)

``` 🛠️ How NPM Works: A Step-by-Step Guide 🚀 ```

1.Project Initialization: Developers kickstart a new project by running npm init in the project directory. This command generates a package.json file that acts as a manifest for the project, containing metadata and dependency information.

` npm init `

2.Developers specify these dependencies in the package.json file and install them using the npm install command.

` npm install lodash `
3.NPM automatically creates a node_modules directory where it stores the installed packages. These dependencies are recorded in the package.json file under the dependencies section.

```
"dependencies": {
  "lodash": "^4.17.21"
}
```
4.NPM uses semantic versioning to define package versions. Developers can specify version ranges in the package.json file to allow for flexibility in updating packages.

```
"dependencies": {
  "lodash": "^4.17.21"
}

```
5.The package-lock.json file provides specific version information for each package that is currently being used in a project.

```
{
  "name": "my-blog",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "dependencies": {
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-...
      "dev": true
    }
  }
}
```




● - What is `Parcel/Webpack`? Why do we need it?

● - What is `.parcel-cache`

● - What is `npx` ?

● - What is difference between `dependencies` vs `devDependencies`

● - What is Tree Shaking?

● - What is Hot Module Replacement?

● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words?

● - What is `.gitignore`? What should we add and not add into it?

● - What is the difference between `package.json` and `package-lock.json`

● - Why should I not modify `package-lock.json`?

● - What is `node_modules` ? Is it a good idea to push that on git?

● - What is the `dist` folder?

● - What is `browserlists`

Read about dif bundlers: vite, webpack, parcel

● Read about: ^ - caret and ~ - tilda

● Read about Script types in html (MDN Docs)


