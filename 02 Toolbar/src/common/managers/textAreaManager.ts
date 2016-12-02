
// Based on: http://stackoverflow.com/questions/1064089/inserting-a-text-where-cursor-is-using-javascript-jquery
class TextAreaManager {
  insertAtCaret(textArea: HTMLTextAreaElement, text: string, offsetCursor : number = 0) {
    const scrollPosition : number = textArea.scrollTop;

    let position = this.calculateTextAreaCurrentCursorPosition(textArea);
    position = this.insertText(textArea, text, position);
    this.placeCursor(textArea, position, offsetCursor);

    textArea.scrollTop = scrollPosition;
  }

  private calculateTextAreaCurrentCursorPosition(txtarea : HTMLTextAreaElement)
  {
      return txtarea.selectionStart;
  }

  private insertText(textArea : HTMLTextAreaElement, text : string, position : number) : number {
    var preText = (textArea.value).substring(0, position);
    var postText = (textArea.value).substring(position, textArea.value.length);
    textArea.value = preText + text + postText;
    return (position + text.length);
  }

  private placeCursor(txtArea : HTMLTextAreaElement, position : number, offset : number)
  {
    txtArea.selectionStart = position - offset;
    txtArea.selectionEnd = position - offset;
    txtArea.focus();
  }
}

export const textAreaManager = new TextAreaManager();
