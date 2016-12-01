import * as React from 'react';
import * as ReactDOM from 'react-dom';


declare function require(name:string);
const MTRC = require('markdown-to-react-components');

const input = '# This is a header example \nThis not!'

ReactDOM.render(
  <div>{MTRC(input).tree}</div>
  , document.getElementById('root'));
