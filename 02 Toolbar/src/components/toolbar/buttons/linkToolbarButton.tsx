import * as React from 'react';
import {textAreaTool} from '../../../common/ui/tools/textAreaTool';
import {BaseToolbarButton} from './baseToolbarButton';

export class LinkToolbarButton extends BaseToolbarButton {
  onClick(event) {
    event.preventDefault();

    const textWithCaret = textAreaTool.insertAtCaretGetText(this.props.textArea,
      this.props.caret, this.props.offset);
    const cursorStartPosition = this.getCursorStartPosition();
    const cursorEndPosition = this.getCursorEndPosition();

    this.props.updateTextArea(textWithCaret, cursorStartPosition, cursorEndPosition);
  }

  private getCursorStartPosition(): number {
    return textAreaTool.hasSelectedText(this.props.textArea) ?
      this.getCursorStartPositionForSelectedText() :
      textAreaTool.caculateCaretStartCursorPosition(this.props.textArea, this.props.caret, this.props.offset);
  }

  private getCursorStartPositionForSelectedText(): number {
    return this.props.cursorStartPosition > 0 ?
      textAreaTool.caculateCaretStartCursorPosition(this.props.textArea, this.props.caret, this.props.cursorStartPosition) :
      textAreaTool.caculateCaretEndCursorPosition(this.props.textArea, this.props.caret, this.props.cursorStartPosition);
  }

  private getCursorEndPosition(): number {
    return textAreaTool.hasSelectedText(this.props.textArea) ?
      this.getCursorEndPositionForSelectedText() :
      null;
  }

  private getCursorEndPositionForSelectedText(): number {
    return this.props.cursorEndPosition > 0 ?
    textAreaTool.caculateCaretStartCursorPosition(this.props.textArea, this.props.caret, this.props.cursorEndPosition) :
    textAreaTool.caculateCaretEndCursorPosition(this.props.textArea, this.props.caret, this.props.cursorEndPosition);
  }
}
