Got it — you want **from-scratch project setups** for **each TypeScript build integration**, not just snippets. I’ll keep this practical: folder structure → install → config → build/run.
(Think of this as a mini “starter pack” for each tool.)

---

# 1️⃣ Babel + TypeScript (Transpile only)

> ✅ Fast transpilation
> ❌ No type checking (use `tsc --noEmit` separately)

### Project structure

```
babel-ts/
├─ src/
│  └─ index.ts
├─ dist/
├─ .babelrc
├─ package.json
```

### Init

```bash
npm init -y
npm install --save-dev @babel/core @babel/cli @babel/preset-typescript
```

### `.babelrc`

```json
{
  "presets": ["@babel/preset-typescript"]
}
```

### `src/index.ts`

```ts
const msg: string = "Hello Babel + TS";
console.log(msg);
```

### `package.json`

```json
{
  "scripts": {
    "build": "babel src --extensions \".ts\" --out-dir dist"
  }
}
```

### Build

```bash
npm run build
```

---

# 2️⃣ Browserify + tsify

> Good for older-style bundling (CommonJS)

### Structure

```
browserify-ts/
├─ src/
│  └─ main.ts
├─ dist/
├─ package.json
```

### Init

```bash
npm init -y
npm install browserify tsify typescript --save-dev
```

### `src/main.ts`

```ts
export const sum = (a: number, b: number) => a + b;
console.log(sum(2, 3));
```

### Build (CLI)

```bash
npx browserify src/main.ts -p [ tsify ] > dist/bundle.js
```

---

# 3️⃣ Grunt + Browserify + tsify

> Legacy but still useful in old codebases

### Structure

```
grunt-ts/
├─ src/main.ts
├─ dist/
├─ Gruntfile.js
├─ package.json
```

### Init

```bash
npm init -y
npm install grunt grunt-browserify tsify --save-dev
```

### `Gruntfile.js`

```js
module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      app: {
        src: "src/main.ts",
        dest: "dist/bundle.js",
        options: {
          plugin: ["tsify"]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.registerTask("default", ["browserify"]);
};
```

### Run

```bash
npx grunt
```

---

# 4️⃣ Gulp + TypeScript

> Streaming builds, good for pipelines

### Structure

```
gulp-ts/
├─ src/app.ts
├─ dist/
├─ gulpfile.js
├─ tsconfig.json
```

### Init

```bash
npm init -y
npm install gulp gulp-typescript typescript --save-dev
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "target": "ES5",
    "module": "commonjs"
  }
}
```

### `gulpfile.js`

```js
const gulp = require("gulp");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));
});
```

### Run

```bash
npx gulp
```

---

# 5️⃣ Rollup + TypeScript

> ✅ Tree-shaking
> ✅ Library-friendly

### Structure

```
rollup-ts/
├─ src/index.ts
├─ dist/
├─ rollup.config.js
```

### Init

```bash
npm init -y
npm install rollup typescript tslib @rollup/plugin-typescript --save-dev
```

### `rollup.config.js`

```js
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm"
  },
  plugins: [typescript()]
};
```

### Build

```bash
npx rollup -c
```

---

# 6️⃣ Webpack + ts-loader

> Most common for large apps

### Structure

```
webpack-ts/
├─ src/index.ts
├─ dist/
├─ webpack.config.js
├─ tsconfig.json
```

### Init

```bash
npm init -y
npm install webpack webpack-cli ts-loader typescript --save-dev
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "ESNext",
    "strict": true
  }
}
```

### `webpack.config.js`

```js
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

### Build

```bash
npx webpack
```

---

# 7️⃣ Vite + TypeScript (Modern default 🚀)

> ✅ Fastest DX
> ❌ No type checking by default

### Init

```bash
npm create vite@latest vite-ts -- --template vanilla-ts
cd vite-ts
npm install
```

### Dev

```bash
npm run dev
```

### Type check (optional)

```bash
npx tsc --noEmit
```

---

# 8️⃣ Svelte + TypeScript

### Init

```bash
npm create svelte@latest svelte-ts
cd svelte-ts
npm install
```

### `svelte.config.js`

```js
import preprocess from "svelte-preprocess";

export default {
  preprocess: preprocess()
};
```

### Usage

```svelte
<script lang="ts">
  let count: number = 0;
</script>
```

---

# 9️⃣ MSBuild + TypeScript (Visual Studio)

> Best for .NET / legacy enterprise

### Steps

1. Install **Microsoft.TypeScript.MSBuild** via NuGet
2. Edit `.csproj` or `.vbproj`
3. Configure:

```xml
<TypeScriptTarget>ES5</TypeScriptTarget>
<TypeScriptModuleKind>CommonJS</TypeScriptModuleKind>
```

4. Build via Visual Studio or:

```bash
msbuild
```

---

# 🔚 Quick Recommendation (Real World)

| Use Case            | Best Tool        |
| ------------------- | ---------------- |
| Modern frontend     | **Vite**         |
| Libraries           | **Rollup**       |
| Enterprise apps     | **Webpack**      |
| Legacy pipelines    | **Gulp / Grunt** |
| Fast transpile only | **Babel**        |

If you want, I can:

* ✅ Convert this into a **single README**
* ✅ Add **type-checking strategies**
* ✅ Recommend **best tool for your FormEase / PhotoSeekAI projects**

Just say the word 👀
