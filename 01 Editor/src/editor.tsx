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
      <div className="container-fluid">
           <div className='row'>
            <div className='col-xs-6 editor--textarea-border'>
              {this.state.content}
            </div>
            <div className='col-xs-6'>
              <textarea onChange={this.onTextareaChange.bind(this)}>
                {this.state.content}
              </textarea>
            </div>
           </div>
      </div>
    )
  }
}
