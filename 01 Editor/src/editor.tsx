import * as React from 'react';
declare function require(name:string);
const MTRC = require('markdown-to-react-components');

interface Props {
}

interface State {
  content : string;
}

export class EditorComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {content: 'test'};
  }


  onTextareaChange(event) {
      this.setState({
        content: MTRC(event.target.value).tree
      });
    }

  render() {
    return (
       <div className='editor--container-flex'>
        <div className='editor--viewer-border editor--viewer-container'>
          {this.state.content}
        </div>
        <div className="editor--edit-container">
          <textarea
            className='editor--textarea-size'
            onChange={this.onTextareaChange.bind(this)}>
            {this.state.content}
          </textarea>
        </div>
       </div>
    )
  }
}
