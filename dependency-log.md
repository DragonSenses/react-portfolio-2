- Jump to [dependency-log](#dependency-log)

# Maintenance: dependency/package management

**Package management**, also known as **dependency management**, involves updating packages and dependencies within a project. Tools like `npm` (Node Package Manager) facilitate updating packages to their latest versions.

Useful commands:

- [npm outdated](https://docs.npmjs.com/cli/v10/commands/npm-outdated)
- [npm update](https://docs.npmjs.com/cli/v10/commands/npm-update)

We can run the following command to check for outdated packages in our project:

```sh
npm outdated
```

#### **Wanted version** of a package

The `wanted` column in the `npm outdated` command refers to the **maximum version** of a package that satisfies the semver range specified in your `package.json`. Here's what it means:

- If a semver range is defined in your `package.json`, the `wanted` version represents the latest version within that range.
- If there's no semver range (e.g., when running `npm outdated --global` or if the package isn't included in `package.json`), the `wanted` version shows the currently-installed version.

In summary, `wanted` indicates the version you should update to based on your package constraints. If you prefer the latest version, consider updating to the one shown in the `latest` column. 

#### What's **semver**?

**Semver** (short for **Semantic Versioning**) is a versioning system used in the Node.js ecosystem, particularly by npm (Node Package Manager). It provides a consistent way to manage package dependencies. Here are the key points about semver:

1. **Version Format:**
   - Semver follows the format `MAJOR.MINOR.PATCH`.
   - **MAJOR**: Indicates breaking changes.
   - **MINOR**: Introduces new features without breaking existing functionality.
   - **PATCH**: Fixes issues or provides backward-compatible updates.

2. **Usage in npm:**
   - All packages published to npm are assumed to follow semver semantics.
   - Package authors use semver to define dependency versions bundled with their packages.

3. **Example:**
   - Suppose a package has version `1.2.3`.
     - Incrementing the **MAJOR** version (e.g., `2.0.0`) implies breaking changes.
     - Incrementing the **MINOR** version (e.g., `1.3.0`) adds features without breaking compatibility.
     - Incrementing the **PATCH** version (e.g., `1.2.4`) includes backward-compatible fixes.

semver helps maintain compatibility and ensures smooth package updates.

#### Install the latest minor version of npm package

To install only the **wanted** versions of each npm package run the following command:

chore: Update dependencies to latest semver range

```sh
npm update --save
```

Or we can run `npm install` with specific requirements. 

To install the latest minor version:

```sh
npm install package-name@"^2.x.x"
```

To install a package right before the latest major update run the following command:

```sh
npm install package-name@"<next-major.0.0"
```

For example:

```sh
npm install package-name@"<3.0.0" 
```

Would install the latest right before 3.0.0 (e.g. 2.11.1)

## Dependency log

### 2024/05/27

(May 27, 2024)

```sh
npm outdated

Package               Current   Wanted   Latest  Location                           Depended by
@types/react          18.0.28   18.3.3   18.3.3  node_modules/@types/react          react-ai
@types/react-dom      18.0.11   18.3.0   18.3.0  node_modules/@types/react-dom      react-ai
@vitejs/plugin-react    3.1.0    3.1.0    4.3.0  node_modules/@vitejs/plugin-react  react-ai
autoprefixer          10.4.13  10.4.19  10.4.19  node_modules/autoprefixer          react-ai
postcss                8.4.21   8.4.38   8.4.38  node_modules/postcss               react-ai
react                  18.2.0   18.3.1   18.3.1  node_modules/react                 react-ai
react-dom              18.2.0   18.3.1   18.3.1  node_modules/react-dom             react-ai
tailwindcss             3.2.7    3.4.3    3.4.3  node_modules/tailwindcss           react-ai
vite                    4.1.4    4.5.3   5.2.11  node_modules/vite                  react-ai
```

chore: Update dependencies to latest semver range

```sh
npm update --save

@vitejs/plugin-react    3.1.0   3.1.0   4.3.0  node_modules/@vitejs/plugin-react  react-ai
vite                    4.5.3   4.5.3  5.2.11  node_modules/vite                  react-ai
```
