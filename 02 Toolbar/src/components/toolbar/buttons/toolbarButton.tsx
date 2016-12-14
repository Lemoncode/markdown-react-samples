import * as React from 'react';
import {textAreaManager} from '../../../common/managers/textAreaManager';

interface Props {
  textArea: HTMLTextAreaElement;
  caret: string;
  offset: number;
  updateTextArea: (content: string, cursorPosition: number) => void;
  shouldUpdateCursor: boolean;
  cursorPosition: number;
}

export class ToolbarButton extends React.Component<Props, {}> {
  componentDidUpdate() {
    if (this.props.shouldUpdateCursor) {
      textAreaManager.placeCursor(this.props.textArea, this.props.cursorPosition);
    }
  }

  onClick(event) {
    event.preventDefault();

    const cursorPosition = textAreaManager.caculateCaretStartCursorPosition(
      this.props.textArea, this.props.caret, this.props.offset);

    const textWithCaret = textAreaManager.insertAtCaret(this.props.textArea,
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
