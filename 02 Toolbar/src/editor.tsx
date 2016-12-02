import * as React from 'react';
declare function require(name:string);
const MTRC = require('markdown-to-react-components');
import {textAreaManager} from './common/managers/textAreaManager';

interface Props {
}

interface State {
  content : string;
}

export class EditorComponent extends React.Component<Props, State> {
  textArea : any;

  constructor(props: Props) {
    super(props);

    this.state = {content: 'test'};
  }

  //https://facebook.github.io/react/docs/refs-and-the-dom.html
  onItalicText(event) {
    event.preventDefault();
    textAreaManager.insertAtCaret(this.textArea, '**', 1);
  }

  onTextareaChange(event) {
      this.setState({
        content: MTRC(event.target.value).tree
      });
  }

  render() {
    return (
      <div>
        <input type="submit" value="Italic" className="btn btn-default" onClick={this.onItalicText.bind(this)} />
        <div className='editor--container-flex'>
         <div className='editor--viewer-border editor--viewer-container'>
           {this.state.content}
         </div>
         <div className="editor--edit-container">
           <textarea
             id="editor-viewer-text-area"
             className='editor--textarea-size'
             onChange={this.onTextareaChange.bind(this)}
             ref={(textarea) => { this.textArea = textarea; }}
             defaultValue={this.state.content}
             >
           </textarea>
         </div>
        </div>
      </div>
    )
  }
}
