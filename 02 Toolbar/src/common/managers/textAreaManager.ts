
// Based on: http://stackoverflow.com/questions/1064089/inserting-a-text-where-cursor-is-using-javascript-jquery
class TextAreaUtils {
  insertAtCaret(txtArea: HTMLElement, text: string, offsetCursor : number = 0) {
    const scrollPos : number = txtArea.scrollTop;

    let position = this.calculateTextAreaCurrentCursorPosition(txtArea);
    position = this.insertText(txtArea, text, position);
    this.placeCursor(txtArea, position, offsetCursor);

    txtArea.scrollTop = scrollPos;
  }

  private calculateTextAreaCurrentCursorPosition(txtarea : HTMLElement)
  {
      return txtarea['selectionStart'];
  }

  private insertText(txtarea : HTMLElement, text : string, position : number) : number {
    var front = (txtarea['value']).substring(0, position);
    var back = (txtarea['value']).substring(position, txtarea['value'].length);
    txtarea['value'] = front + text + back;
    return (position + text.length);
  }

  private placeCursor(txtArea : HTMLElement, position : number, offset : number)
  {
    txtArea['selectionStart'] = position - offset;
    txtArea['selectionEnd'] = position - offset;
    txtArea.focus();
  }
}

const textAreaUtils = new TextAreaUtils();
