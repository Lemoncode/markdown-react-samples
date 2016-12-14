import * as React from 'react';
declare function require(name:string);
const MTRC = require('markdown-to-react-components');
import {textAreaManager} from './common/managers/textAreaManager';

interface Props {
}

interface State {
  editorContent: string;
  viewerContent: string;
  shouldUpdateCursor: boolean;
}

export class EditorComponent extends React.Component<Props, State> {
  textArea : HTMLTextAreaElement;
  offset: number;
  cursorPosition: number;

  constructor(props: Props) {
    super(props);

    this.state = {
      editorContent: 'test',
      viewerContent: 'test',
      shouldUpdateCursor: false
    };

    this.offset = 1;
  }

  componentDidUpdate() {
    if (this.state.shouldUpdateCursor) {
      textAreaManager.placeCursor(this.textArea, this.cursorPosition, this.offset);
    }
  }

  //https://facebook.github.io/react/docs/refs-and-the-dom.html
  onItalicText(event) {
    event.preventDefault();
    const caret = '*';
    this.cursorPosition = textAreaManager.getPositionAfterCaret(this.textArea, caret);
    const textWithCaret = textAreaManager.insertAtCaret(this.textArea, caret, this.offset);

    this.setState({
      editorContent: textWithCaret,
      viewerContent: MTRC(textWithCaret).tree,
      shouldUpdateCursor: true
    });
  }

  onTextareaChange(event) {
      this.setState({
        editorContent: event.target.value,
        viewerContent: MTRC(event.target.value).tree,
        shouldUpdateCursor: false
      });
  }

  render() {
    return (
      <div>
        <input type="submit" value="Italic" className="btn btn-default" onClick={this.onItalicText.bind(this)} />
        <div className='editor--container-flex'>
          <div className="editor--edit-container">
            <textarea
              id="editor-viewer-text-area"
              className='editor--textarea-size'
              onChange={this.onTextareaChange.bind(this)}
              ref={(textarea) => { this.textArea = textarea; }}
              value={this.state.editorContent}
             >
            </textarea>
          </div>

         <div className='editor--viewer-border editor--viewer-container'>
           {this.state.viewerContent}
         </div>
        </div>
      </div>
    )
  }
}
