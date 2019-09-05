import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { PropsTable } from './PropsTable';
import { Live } from './Live';

const components = {
  a: (props) => <Link to={props.href}>{props.children}</Link>,
  PropsTable,
  Live
};

export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
