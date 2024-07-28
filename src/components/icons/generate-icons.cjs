/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const FOLDER_PATH = './svgs';

const pascalCase = (str) =>
  str
    .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    })
    .replace(/\W/g, '');

const getIconsCollectionFileContent = () => {
  const directChildren = fs.readdirSync(path.resolve(__dirname, FOLDER_PATH));

  const getExportDeclaration = (file) => {
    const fileName = file.split('.')[0];

    const componentName = pascalCase(fileName);

    return `export { default as ${componentName} } from './svgs/${fileName}.svg';`;
  };

  const exportDeclarations =
    directChildren.map(getExportDeclaration).filter(Boolean).join('\n') + '\n';

  return exportDeclarations;
};

fs.writeFileSync(
  path.resolve(__dirname, FOLDER_PATH, '../icons.generated.tsx'),
  getIconsCollectionFileContent(),
);
