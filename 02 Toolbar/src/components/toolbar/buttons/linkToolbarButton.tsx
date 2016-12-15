import * as React from 'react';
import {textAreaManager} from '../../../common/managers/textAreaManager';
import {BaseToolbarButton} from './baseToolbarButton';

export class LinkToolbarButton extends BaseToolbarButton {
  onClick(event) {
    event.preventDefault();

    const textWithCaret = textAreaManager.insertAtCaret(this.props.textArea,
      this.props.caret, this.props.offset);
    const cursorStartPosition = this.getCursorStartPosition();
    const cursorEndPosition = this.getCursorEndPosition();

    this.props.updateTextArea(textWithCaret, cursorStartPosition, cursorEndPosition);
  }

  private getCursorStartPosition(): number {
    return textAreaManager.hasSelectedText(this.props.textArea) ?
      this.getCursorStartPositionForSelectedText() :
      textAreaManager.caculateCaretStartCursorPosition(this.props.textArea, this.props.caret, this.props.offset);
  }

  private getCursorStartPositionForSelectedText(): number {
    return this.props.cursorStartPosition > 0 ?
      textAreaManager.caculateCaretStartCursorPosition(this.props.textArea, this.props.caret, this.props.cursorStartPosition) :
      textAreaManager.caculateCaretEndCursorPosition(this.props.textArea, this.props.caret, this.props.cursorStartPosition);
  }

  private getCursorEndPosition(): number {
    return textAreaManager.hasSelectedText(this.props.textArea) ?
      this.getCursorEndPositionForSelectedText() :
      null;
  }

  private getCursorEndPositionForSelectedText(): number {
    return this.props.cursorEndPosition > 0 ?
    textAreaManager.caculateCaretStartCursorPosition(this.props.textArea, this.props.caret, this.props.cursorEndPosition) :
    textAreaManager.caculateCaretEndCursorPosition(this.props.textArea, this.props.caret, this.props.cursorEndPosition);
  }
}
