import * as React from 'react';
import {textAreaManager} from '../../../common/managers/textAreaManager';
import {BaseToolbarButton} from './baseToolbarButton';

export class LinkToolbarButton extends BaseToolbarButton {
  onClick(event) {
    event.preventDefault();
    let cursorStartPosition;
    let cursorEndPosition;

    if (textAreaManager.hasSelectedText(this.props.textArea)) {
      cursorStartPosition = textAreaManager.caculateCaretEndCursorPosition(
        this.props.textArea, this.props.caret, this.props.cursorStartPosition
      );
      cursorEndPosition = textAreaManager.caculateCaretEndCursorPosition(
        this.props.textArea, this.props.caret, this.props.cursorEndPosition
      );
    } else {
      cursorStartPosition = textAreaManager.caculateCaretStartCursorPosition(
        this.props.textArea, this.props.caret, this.props.offset);
    }

    const textWithCaret = textAreaManager.insertAtCaret(this.props.textArea,
      this.props.caret, this.props.offset);

    this.props.updateTextArea(textWithCaret, cursorStartPosition, cursorEndPosition);
  }

  private assignCursorPositionsOnSelectedText(cursorStartPosition: number, cursorEndPosition: number) {

  }
}
