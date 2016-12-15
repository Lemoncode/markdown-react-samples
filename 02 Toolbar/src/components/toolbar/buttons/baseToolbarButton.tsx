import * as React from 'react';
import {textAreaTool} from '../../../common/ui/tools/textAreaTool';

interface Props {
  textArea: HTMLTextAreaElement;
  caret: string;
  offset: number;
  cursorStartPosition?: number;
  cursorEndPosition?: number;
  updateTextArea: (content: string, cursorStartPosition?: number, cursorEndPosition?: number) => void;
}

export class BaseToolbarButton extends React.Component<Props, {}> {
  onClick(event) {
    event.preventDefault();
    let cursorStartPosition = this.props.offset;
    if (this.props.cursorStartPosition) {
        cursorStartPosition = this.props.cursorStartPosition;
    }

    const cursorPosition = textAreaTool.caculateCaretStartCursorPosition(
      this.props.textArea, this.props.caret, cursorStartPosition);

    const textWithCaret = textAreaTool.insertAtCaretGetText(this.props.textArea,
      this.props.caret, this.props.offset);

    this.props.updateTextArea(textWithCaret, cursorPosition);
  }

  render() {
    return (
      <button type="button" className="btn btn-default"
        onClick={(e) => this.onClick(e)}>
        {this.props.children}
      </button>
    );
  }
}
