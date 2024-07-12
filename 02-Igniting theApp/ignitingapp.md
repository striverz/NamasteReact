# What is `NPM`?
npm is the world's largest software registry, hosting millions of packages. it is like a node package manager  [npm link](https://www.npmjs.com/)

# ``` 🛠️ How NPM Works: A Step-by-Step Guide 🚀 ```

1.Project Initialization: Developers kickstart a new project by running npm init in the project directory. This command generates a package.json file that acts as a manifest for the project, containing metadata and dependency information.

``` npm init 
```

2.Developers specify these dependencies in the package.json file and install them using the npm install command.

``` npm install lodash 
```
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
`Parcel/Webpack` are the bundlers.
A web bundler is a tool or software utility used in web development whose primary purpose is to improve the performance of web applications.

### Command for installing the parcel bundler into our code
```
npm install -D parcel
```

● - What is `.parcel-cache`

# What is `npx` ?
 
It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. 

● - What is difference between `dependencies` vs `devDependencies`

● - What is Tree Shaking?

● - What is Hot Module Replacement?

● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words?

● - What is `.gitignore`? What should we add and not add into it?
A .gitignore file tells Git which files (or patterns) it should ignore and not track. This is useful to prevent certain files from being added to version control, which can help reduce repository size and avoid committing sensitive or unnecessary files.

The files which are re-generate with our existing code are mostly not added to out code like 
node_modules/ 
dist/
.parcel_cache


● - What is the difference between `package.json` and `package-lock.json`
`package.json`
Purpose: It is the primary configuration file for a Node.js project. It defines project metadata, dependencies, and scripts.

Content:
* Metadata: Information about the project such as name, version, description, and author.
* Dependencies: Lists the packages your project depends on under the dependencies and devDependencies sections.
* Scripts: Defines scripts that can be run using npm run <script-name>, such as start, test, and build.
```
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}

```

● - Why should I not modify `package-lock.json`?

● - What is `node_modules` ? Is it a good idea to push that on git?

● - What is the `dist` folder?

● - What is `browserlists`

Read about dif bundlers: vite, webpack, parcel

● Read about: ^ - caret and ~ - tilda

● Read about Script types in html (MDN Docs)


