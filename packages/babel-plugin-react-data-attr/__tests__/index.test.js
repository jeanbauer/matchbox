import * as babel from 'babel-core';
import babelPluginReactDataAttr from '../src';

function transform(code, pluginOptions, transformOptions) {
  return babel.transform(code, {
    babelrc: false,
    plugins: [
      [babelPluginReactDataAttr, pluginOptions]
    ],
    parserOpts: {
      plugins: ['jsx'],
      presets: ['@babel/preset-react']
    },
    ...transformOptions
  }).code.trim();
}

describe('babel-plugin-react-data-attr', () => {

  it.only('should transform a returned html element', () => {
    console.log(transform(`
      function MyComponent() {
        return <div />;
      }
    `));
    // expect(transform(`
    //   function MyComponent() {
    //     return <div />;
    //   }
    // `)).toMatchSnapshot();
  });

  it('should not transform a returned react component', () => {
    expect(transform(`
      function MyComponent() {
        return <TestComponent />;
      }
    `)).toMatchSnapshot();
  });

  it('should transform the first html element', () => {
    expect(transform(`
      function MyComponent() {
        return (
          <TestComponent>
            <div></div>
          </TestComponent>
        );
      }
    `)).toMatchSnapshot();
  });

});
