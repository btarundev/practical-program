# Practical Programs

This workspace contains practical examples for HTML, CSS, JavaScript, MySQL, Node.js, and Supabase.

## Folder structure

```text
practical progra── index.html
├── README.md
├── html/
├── css/
└── javascript/
    ├── basics/
    ├── dom-manipulation/
    ├── events/
    ├── forms-validation/
    ├── browser-storage/
    ├── mysql/
    ├── nodejs/
    └── supabase/
```

## Run the examples

1. Open [index.html](index.html) in a web browser.
2. Use the links on the homepage to open the HTML and JavaScript examples.
3. Open CSS files directly in VS Code or include them in an HTML page with:

```html
<link rel="stylesheet" href="../css/style.css">
```

## JavaScript

The basic JavaScript exercises are in `javascript/basics/1.js` through `javascript/basics/67.js`.

Browser examples in the other JavaScript folders should be loaded from an HTML page or pasted into the browser console. The Node.js server can be run from the workspace root after installing Node.js:

```powershell
node javascript/nodejs/server.js
```

Then open `http://localhost:3000/api/health`.

## Database examples

- Run `javascript/mysql/database.sql` in MySQL Workbench or the MySQL command line.
- Replace the placeholder Supabase URL and key in `javascript/supabase/client-example.js` before running it.

## Requirements

- A modern web browser for HTML, CSS, and browser JavaScript.
- Node.js for the Node.js example.
- MySQL for the SQL example.
- A Supabase project for the Supabase example.
