const fs = require('fs');
const path = require('path');

// Define the test files that need fixing
const testFiles = [
  'src/Examples/Tables/TableWithButton/__tests__/TableWithButton.test.tsx',
  'src/Examples/Tables/TableDefault/__tests__/TableDefault.test.tsx',
  'src/Examples/Tables/TableActiveRow/__tests__/TableActiveRow.test.tsx',
  'src/Examples/Tables/TableWithIcon/__tests__/TableWithIcon.test.tsx',
  'src/Examples/Tables/TableWithPagination/__tests__/TableWithPagination.test.tsx',
  'src/Examples/Modals/__tests__/Modales.test.tsx',
  'src/Examples/Home/__tests__/Home.test.tsx',
  'src/Examples/HomeV2/__tests__/HomeV2.test.tsx',
];

// Function to fix imports in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix component imports
    content = content.replace(
      /import (\w+) from '\.\/index'\s*;/g,
      'import $1 from "../index";'
    );
    
    // Fix type imports
    content = content.replace(
      /import type \{ ([^}]+) \} from '\.\/types'/g,
      'import type { $1 } from "../types"'
    );
    
    // Special case for Home.test.tsx which has a different import
    if (filePath.includes('Home.test.tsx')) {
      content = content.replace(
        /import Home from '\.\/index\.js\.tsx'/,
        'import Home from "../index"'
      );
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing imports in ${filePath}:`, error);
  }
}

// Process all test files
testFiles.forEach(filePath => {
  const fullPath = path.resolve(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    fixImports(fullPath);
  } else {
    console.warn(`File not found: ${fullPath}`);
  }
});

console.log('Finished fixing test imports.');
