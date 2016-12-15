
// Based on: http://stackoverflow.com/questions/1064089/inserting-a-text-where-cursor-is-using-javascript-jquery
class TextAreaTool {
  insertAtCaretGetText(textArea: HTMLTextAreaElement, caret: string, offsetCursor: number = 0): string {
    return this.buildTextWithCaretBetweenSelectedText(textArea, caret, offsetCursor);
  }

  private buildTextWithCaretBetweenSelectedText(textArea : HTMLTextAreaElement, caret: string, offsetCursor: number): string {
    const beforeText = this.getTextBeforeSelectedText(textArea);
    const selectedText = this.getSelectedText(textArea);
    const afterText = this.getTextAfterSelectedText(textArea);
    const caretStart = this.getCaretStart(caret, offsetCursor);
    const caretEnd = this.getCaretEnd(caret, offsetCursor);

    return beforeText + caretStart + selectedText + caretEnd + afterText;
  }

  private getTextBeforeSelectedText(textArea: HTMLTextAreaElement): string {
    return (textArea.value).substring(0, textArea.selectionStart);
  }

  private getSelectedText(textArea: HTMLTextAreaElement): string {
    return (textArea.value).substring(textArea.selectionStart, textArea.selectionEnd);
  }

  private getTextAfterSelectedText(textArea: HTMLTextAreaElement): string {
    return (textArea.value).substring(textArea.selectionEnd, textArea.value.length);
  }

  private getCaretStart(caret: string, offsetCursor: number): string {
    return caret.substring(0, offsetCursor);
  }

  private getCaretEnd(caret: string, offsetCursor: number): string {
    return caret.substring(offsetCursor, caret.length);
  }

  public caculateCaretStartCursorPosition(textArea: HTMLTextAreaElement, caret: string, offsetCursor: number): number {
    const caretStart = this.getCaretStart(caret, 0);

    return (textArea.selectionStart + caretStart.length + offsetCursor);
  }

  public caculateCaretEndCursorPosition(textArea: HTMLTextAreaElement, caret: string, offsetCursor: number): number {
    const caretStart = this.getCaretStart(caret, 0);
    const selectedText = this.getSelectedText(textArea);
    const caretEnd = this.getCaretEnd(caret, 0);

    return (textArea.selectionStart + caretStart.length + selectedText.length + caretEnd.length + offsetCursor);
  }

  public placeCursor(textArea : HTMLTextAreaElement, selectionStart : number = 0, selectionEnd: number = selectionStart)
  {
    if (selectionStart === null) {
      selectionStart = 0;
    }

    if (selectionEnd === null) {
      selectionEnd = selectionStart;
    }

    textArea.selectionStart = selectionStart;
    textArea.selectionEnd = selectionEnd;
    textArea.focus();
  }

  public hasSelectedText(textArea: HTMLTextAreaElement): boolean {
    const selectedText = this.getSelectedText(textArea);

    return selectedText.length > 0;
  }
}

export const textAreaTool = new TextAreaTool();
