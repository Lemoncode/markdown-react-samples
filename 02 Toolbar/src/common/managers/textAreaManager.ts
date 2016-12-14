
// Based on: http://stackoverflow.com/questions/1064089/inserting-a-text-where-cursor-is-using-javascript-jquery
class TextAreaManager {
  insertAtCaret(textArea: HTMLTextAreaElement, caret: string, offsetCursor : number = 0): string {
    return this.buildTextWithCaretBetweenSelectedText(textArea, caret);
  }

  private buildTextWithCaretBetweenSelectedText(textArea : HTMLTextAreaElement, caret: string): string {
    const beforeText = this.getTextBeforeSelectedText(textArea);
    const selectedText = this.getSelectedText(textArea);
    const afterText = this.getTextAfterSelectedText(textArea);

    return beforeText + caret + selectedText + caret + afterText;
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

  public getPositionAfterCaret(textArea: HTMLTextAreaElement, caret: string): number {
    return (textArea.selectionStart + caret.length + 1);
  }

  public placeCursor(textArea : HTMLTextAreaElement, position : number, offset : number)
  {
    textArea.selectionStart = position - offset;
    textArea.selectionEnd = position - offset;
    textArea.focus();
  }
}

export const textAreaManager = new TextAreaManager();
