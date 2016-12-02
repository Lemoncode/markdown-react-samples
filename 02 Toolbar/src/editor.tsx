import * as React from 'react';
declare function require(name:string);
const MTRC = require('markdown-to-react-components');

interface Props {
}

interface State {
  content : string;
}

export class EditorComponent extends React.Component<Props, State> {

  textarea : any;

  constructor(props: Props) {
    super(props);

    this.state = {content: 'test'};
  }

  //http://stackoverflow.com/questions/1064089/inserting-a-text-where-cursor-is-using-javascript-jquery
  //https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
  //https://facebook.github.io/react/docs/refs-and-the-dom.html
  // offset, pending IE fix
  // TODO: Refactor, clean code this
  // Proposal
  //
  // insertAtCaret(txtArea: HMLElement, text: string, offsetCursor = 0) {
  //  const scrollPos : number = txtarea.scrollTop;
  //  let strPos : number = 0;
  //
  //  strPos = calculateTextAreaCurrentCursorPosition(txtarea);
  //  insertText(txtArea, strPos, text);
  //  placeCursor(txtArea, strPos, offset);
  // }
  insertAtCaret(txtarea : HTMLElement, text, offsetCursor = 0) {
  		var scrollPos = txtarea.scrollTop;
  		var strPos = 0;
      // TODO: this "ie" flag seems to be for old Internet explorer versions
      // if it's above 11 it fallbacks into "ff" we can simplify this
  		var br = ((txtarea['selectionStart'] || txtarea['selectionStart'] == '0') ?
  			"ff" : (document['selection'] ? "ie" : false ) );
  		if (br == "ie") {
  			txtarea.focus();
  			var range = document['selection'].createRange();
  			range.moveStart ('character', -txtarea['value'].length);
  			strPos = range.text.length;
  		} else if (br == "ff") {
  			strPos = txtarea['selectionStart'];
  		}

  		var front = (txtarea['value']).substring(0, strPos);
  		var back = (txtarea['value']).substring(strPos, txtarea['value'].length);
  		txtarea['value'] = front + text + back;
  		strPos = strPos + text.length;
  		if (br == "ie") {
        // TODO: This is old IE consider removing this code
  			txtarea.focus();
  			var ieRange = document['selection'].createRange();
  			ieRange.moveStart ('character', -txtarea['value'].length);
  			ieRange.moveStart ('character', strPos);
  			ieRange.moveEnd ('character', 0);
  			ieRange.select();
  		} else if (br == "ff") {
  			txtarea['selectionStart'] = strPos - offsetCursor;
  			txtarea['selectionEnd'] = strPos - offsetCursor;
  			txtarea.focus();
  		}

  		txtarea.scrollTop = scrollPos;
  	}

  onBoldText(event) {
    event.preventDefault();
    this.insertAtCaret(this.textarea, '**', 1)
  }

  onTextareaChange(event) {
      this.setState({
        content: MTRC(event.target.value).tree
      });
  }

  render() {
    return (
      <div>
        <input type="submit" value="Italic" className="btn btn-default" onClick={this.onBoldText.bind(this)} />
        <div className='editor--container-flex'>
         <div className='editor--viewer-border editor--viewer-container'>
           {this.state.content}
         </div>
         <div className="editor--edit-container">
           <textarea
             id="editor-viewer-text-area"
             className='editor--textarea-size'
             onChange={this.onTextareaChange.bind(this)}
             ref={(textarea) => { this.textarea = textarea; }}
             >
             {this.state.content}
           </textarea>
         </div>
        </div>
      </div>
    )
  }
}
