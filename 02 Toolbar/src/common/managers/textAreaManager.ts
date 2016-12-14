
// Based on: http://stackoverflow.com/questions/1064089/inserting-a-text-where-cursor-is-using-javascript-jquery
class TextAreaManager {
  insertAtCaret(textArea: HTMLTextAreaElement, caret: string, offsetCursor : number = 0): string {
    const position = this.getPositionAfterCaret(textArea, caret);
    const textWithCaret = this.buildTextWithCaretBetweenSelectedText(textArea, caret);
    this.placeCursor(textArea, position, offsetCursor);

    return textWithCaret;
  }

  private getPositionAfterCaret(textArea: HTMLTextAreaElement, caret: string): number {
    return (textArea.selectionStart + caret.length + 1);
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

  private placeCursor(txtArea : HTMLTextAreaElement, position : number, offset : number)
  {
    txtArea.selectionStart = position - offset;
    txtArea.selectionEnd = position - offset;
    txtArea.focus();
  }
}

export const textAreaManager = new TextAreaManager();
