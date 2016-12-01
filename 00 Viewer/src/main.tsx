import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloComponent} from './hello';

declare function require(name:string);
const ReactMarkdown = require('react-markdown');

const input = '# This is a header example \nThis not!'

ReactDOM.render(
  <ReactMarkdown source={input} />
  , document.getElementById('root'));
