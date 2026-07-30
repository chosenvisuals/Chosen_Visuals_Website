const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'apps', 'web', 'app', '(marketing)');

let counter = 0;

function walkDir(dir) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath);
        } else if (f.endsWith('.tsx')) {
            let content = fs.readFileSync(dirPath, 'utf8');
            let originalContent = content;
            
            // Replace Unsplash URLs with Picsum
            content = content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"']*/g, () => {
                counter++;
                // Add a random seed to picsum to get different images
                return `https://picsum.photos/seed/chosen${counter}/800/600`;
            });
            
            if (content !== originalContent) {
                fs.writeFileSync(dirPath, content, 'utf8');
                console.log(`Updated images in: ${dirPath}`);
            }
        }
    });
}

walkDir(directoryPath);
console.log(`Replaced ${counter} images.`);
