
// Based on: http://stackoverflow.com/questions/1064089/inserting-a-text-where-cursor-is-using-javascript-jquery
class TextAreaManager {
  insertAtCaret(textArea: HTMLTextAreaElement, caret: string, offsetCursor : number = 0) {

    const position = this.insertCaretBetweenSelectedText(textArea, caret);
    this.placeCursor(textArea, position, offsetCursor);
  }

  private insertCaretBetweenSelectedText(textArea : HTMLTextAreaElement, caret: string) : number {
    const beforeText = this.getTextBeforeSelectedText(textArea);
    const selectedText = this.getSelectedText(textArea);
    const afterText = this.getTextAfterSelectedText(textArea);

    textArea.value = beforeText + caret + selectedText + caret + afterText;
    //TODO: Calculate outside this method
    return (textArea.selectionStart + caret.length + 1);
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
