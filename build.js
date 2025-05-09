import { execSync } from 'child_process';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Run the SvelteKit build
console.log('Building SvelteKit app...');
execSync('npm run build:kit', { stdio: 'inherit' });

// Create a 404.html file for GitHub Pages
console.log('Creating 404.html...');
const notFoundContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found</title>
    <script>
        // Redirect to the main page
        window.location.href = '/vigilia.github.io/';
    </script>
</head>
<body>
    <h1>Page Not Found</h1>
    <p>Redirecting to the main page...</p>
</body>
</html>
`;

// Ensure the build directory exists
mkdirSync('build', { recursive: true });

// Write the 404.html file
writeFileSync(join('build', '404.html'), notFoundContent);

console.log('Build completed successfully!');
