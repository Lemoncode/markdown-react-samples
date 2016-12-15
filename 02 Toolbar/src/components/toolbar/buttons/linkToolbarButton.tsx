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
      textAreaManager.caculateCaretEndCursorPosition(this.props.textArea, this.props.caret, this.props.cursorStartPosition) :
      textAreaManager.caculateCaretStartCursorPosition(this.props.textArea, this.props.caret, this.props.offset);
  }

  private getCursorEndPosition(): number {
    return textAreaManager.hasSelectedText(this.props.textArea) ?
      textAreaManager.caculateCaretEndCursorPosition(this.props.textArea, this.props.caret, this.props.cursorEndPosition) :
      null;
  }
}
