import * as React from 'react';
declare function require(name:string);
const MTRC = require('markdown-to-react-components');
import {textAreaTool} from './common/ui/tools/textAreaTool';

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

//Note: Don't indent text to avoid bad formatted markdown.
    const defaultContent = `# This is a demo text
Where **you** can write *lists*:
- Item 1
- Item 2

And more...`;

    this.state = {
      editorContent: defaultContent,
      viewerContent: MTRC(defaultContent).tree,
      shouldUpdateCursor: false
    };
  }

  componentDidUpdate() {
    if (this.state.shouldUpdateCursor) {
      textAreaTool.placeCursor(this.textArea, this.cursorPosition);
    }
  }

  //https://facebook.github.io/react/docs/refs-and-the-dom.html
  onItalicText(event) {
    event.preventDefault();
    const caret = '**';
    this.offset = 1;

    this.cursorPosition = textAreaTool.caculateCaretStartCursorPosition(this.textArea, caret, this.offset);
    const textWithCaret = textAreaTool.insertAtCaretGetText(this.textArea, caret, this.offset);

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
