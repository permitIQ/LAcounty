# React PermitIQ Static App

This project is a static React application that replicates a specific UI layout, including a sidebar, header, and an iframe content area.
It is built with Vite, React, TypeScript, Tailwind CSS, and Mantine.

## Development

1.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Building for Production

```bash
npm run build
# or
yarn build
```
This command generates a `dist` folder with the static assets.

## Deployment to GitHub Pages

This project is set up for deployment to GitHub Pages using the `gh-pages` package.

1.  **Ensure `vite.config.ts` has the correct `base` path.**
    It should be `/your-repo-name/`.
    ```typescript
    // vite.config.ts
    export default defineConfig({
      plugins: [react()],
      base: '/reactpermitiq-app/' // CHANGE 'reactpermitiq-app' TO YOUR ACTUAL GITHUB REPOSITORY NAME
    })
    ```

2.  **Deploy:**
    ```bash
    npm run deploy
    # or
    yarn deploy
    ```
    This command will build the project and push the contents of the `dist` folder to the `gh-pages` branch of your repository.

3.  **Configure GitHub Pages:**
    In your GitHub repository settings, under "Pages", select the `gh-pages` branch as the source for GitHub Pages.

## Project Structure

- `public/`: Static assets.
- `src/`: Application source code.
  - `assets/`: Images, svgs, etc.
  - `components/`: React components (Sidebar, Header, MainContent).
  - `App.tsx`: Main application component, layout structure.
  - `main.tsx`: Entry point of the application.
  - `index.css`: Global styles and Tailwind directives.
  - `app-styles.css`: Custom styles and CSS variables from the example HTML.
- `index.html`: Main HTML page.
- `vite.config.ts`: Vite configuration.
- `tailwind.config.js`: Tailwind CSS configuration.
- `postcss.config.js`: PostCSS configuration.
- `tsconfig.json`: TypeScript configuration.

## Notes

- The UrbanLogiq logo in the sidebar (`src/assets/sidebar-ul-logo.svg`) is currently a placeholder. Replace it with the actual logo file.
- The dropdown in the sidebar for user options (Settings, Admin, Logout) is not yet functional. It will require implementing state management and potentially using a UI component library like Mantine for the dropdown behavior.
- The workspace picker in the header is static. For dynamic functionality, it would need to be connected to state and potentially an API.
- Ensure Font Awesome icons are correctly referenced and displayed. The setup includes `@fortawesome/fontawesome-free`.
