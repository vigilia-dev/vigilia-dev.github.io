import fs from 'fs';
import path from 'path';

// Create build directory if it doesn't exist
if (!fs.existsSync('build')) {
  fs.mkdirSync('build', { recursive: true });
}

try {
  // Skip SvelteKit build entirely
  console.log('Creating static build...');

  // Copy static files
  console.log('Copying static files...');
  if (fs.existsSync('static')) {
    const staticFiles = fs.readdirSync('static');
    staticFiles.forEach(file => {
      const sourcePath = path.join('static', file);
      const destPath = path.join('build', file);

      if (fs.lstatSync(sourcePath).isDirectory()) {
        // If it's a directory, create it in the build directory
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }

        // Copy all files in the directory
        const dirFiles = fs.readdirSync(sourcePath);
        dirFiles.forEach(dirFile => {
          fs.copyFileSync(
            path.join(sourcePath, dirFile),
            path.join(destPath, dirFile)
          );
        });
      } else {
        // If it's a file, copy it directly
        fs.copyFileSync(sourcePath, destPath);
      }
    });
  }

  // Create .nojekyll file
  console.log('Creating .nojekyll file...');
  fs.writeFileSync(path.join('build', '.nojekyll'), '');

  // Create CNAME file
  console.log('Creating CNAME file...');
  fs.writeFileSync(path.join('build', 'CNAME'), 'vigilia.ai');

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
