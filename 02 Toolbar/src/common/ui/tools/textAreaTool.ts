
// Based on: http://stackoverflow.com/questions/1064089/inserting-a-text-where-cursor-is-using-javascript-jquery
class TextAreaTool {
  insertAtCaret(textArea: HTMLTextAreaElement, caret: string, offsetCursor: number = 0): string {
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
    const caretStart = this.getCaretStart(caret, offsetCursor);

    return (textArea.selectionStart + caretStart.length);
  }

  public caculateCaretEndCursorPosition(textArea: HTMLTextAreaElement, caret: string, offsetCursor: number): number {
    const caretStart = this.getCaretStart(caret, offsetCursor);
    const selectedText = this.getSelectedText(textArea);
    const caretEnd = this.getCaretEnd(caret, offsetCursor);

    return (textArea.selectionStart + caretStart.length + selectedText.length + caretEnd.length);
  }

  public placeCursor(textArea : HTMLTextAreaElement, position : number, offsetStart: number = 0, offsetEnd: number = 0)
  {
    textArea.selectionStart = position + offsetStart;
    textArea.selectionEnd = position + offsetEnd;
    textArea.focus();
  }
}

export const textAreaTool = new TextAreaTool();
