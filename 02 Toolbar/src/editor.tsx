import * as React from 'react';
import {} from 'core-js';
declare function require(name:string);
const MTRC = require('markdown-to-react-components');
import {textAreaManager} from './common/managers/textAreaManager';
import {Toolbar} from './components/toolbar';

interface Props {
}

interface State {
  editorContent: string;
  viewerContent: string;
  shouldUpdateCursor: boolean;
  textArea: HTMLTextAreaElement;
}

export class EditorComponent extends React.Component<Props, State> {
  textArea: HTMLTextAreaElement;
  cursorStartPosition: number;
  cursorEndPosition: number;

  constructor(props: Props) {
    super(props);

    this.state = {
      editorContent: 'test',
      viewerContent: 'test',
      shouldUpdateCursor: false,
      textArea: null
    };
  }

  componentDidMount() {
    const newState = Object.assign({}, this.state, {
      textArea: this.textArea
    });

    this.setState(newState);
  }

  componentDidUpdate() {
    if (this.state.shouldUpdateCursor) {
      textAreaManager.placeCursor(this.state.textArea, this.cursorStartPosition, this.cursorEndPosition);
    }
  }

  onToolbarButtonClick(content: string, cursorStartPosition?: number, cursorEndPosition?: number) {
    const newState = Object.assign({}, this.state, {
      editorContent: content,
      viewerContent: MTRC(content).tree,
      shouldUpdateCursor: true
    });

    this.setState(newState);
    this.cursorStartPosition = cursorStartPosition;
    this.cursorEndPosition = cursorEndPosition;
  }

  onTextareaChange(event) {
    const newState = Object.assign({}, this.state, {
      editorContent: event.target.value,
      viewerContent: MTRC(event.target.value).tree,
      shouldUpdateCursor: false
    });

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Toolbar textArea={this.state.textArea}
          updateTextArea={this.onToolbarButtonClick.bind(this)} />

        <div className='editor--container-flex'>
          <div className="editor--edit-container">
            <textarea
              id="editor-viewer-text-area"
              className='editor--textarea-size'
              onChange={this.onTextareaChange.bind(this)}
              ref={(textarea) => { this.textArea = textarea; }}
              value={this.state.editorContent}>
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
