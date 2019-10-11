import { extname, basename, dirname } from 'path';

const ATTRIBUTE = 'data-component';

export default function babelPluginReactDataAttr({ types: t }) {

  function Classes(path, state) {

  }
  function Functions(path, state) {
    // // console.log('Functions')
    // console.log(path.parentPath.isExportDefaultDeclaration())
    // console.log(path.parentPath.isExportNamedDeclaration())
    // console.log(path.scope.getBinding(name))

    const { parentPath, node: { id }} = path;
    // console.log(t.isIdentifier(), id.name)
    console.log(path.type);
  }

  function JSX(path, { source }) {
    // If in different function than the component
    if (path.getFunctionParent() !== source) {
      return;
    }

    const openingElement = path.get('openingElement');
    console.log(openingElement.node);
  }

  return {
    name: 'babel-plugin-react-data-attr',
    visitor: {
      // 'FunctionDeclaration|FunctionExpression|ArrowFunctionExpression': Functions,
      'JSXElement': JSX
    }
  };
}


// 'FunctionDeclaration|FunctionExpression|ArrowFunctionExpression': () => {
//   console.log('functions')
// },
// 'ClassDeclaration|ClassExpression': (path, state) => {
//   console.log('classes')
// }
