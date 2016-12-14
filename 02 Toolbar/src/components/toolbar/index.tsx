import * as React from 'react';
import {
  ToolbarButton, ItalicButton, BoldButton, HeaderButton
} from './buttons';

interface Props {
  textArea: HTMLTextAreaElement;
  updateTextArea: (content: string, cursorPosition: number) => void;
  shouldUpdateCursor: boolean;
  cursorPosition: number;
}

export const Toolbar = (props: Props) => {

  return (
    <div className="btn-toolbar">
      <div className="btn-group">
        <ToolbarButton textArea={props.textArea} caret="#" offset={1}
          updateTextArea={props.updateTextArea}
          shouldUpdateCursor={props.shouldUpdateCursor}
          cursorPosition={props.cursorPosition}>
          <HeaderButton />
        </ToolbarButton>

        <ToolbarButton textArea={props.textArea} caret="****" offset={2}
          updateTextArea={props.updateTextArea}
          shouldUpdateCursor={props.shouldUpdateCursor}
          cursorPosition={props.cursorPosition}>
          <BoldButton />
        </ToolbarButton>

        <ToolbarButton textArea={props.textArea} caret="**" offset={1}
          updateTextArea={props.updateTextArea}
          shouldUpdateCursor={props.shouldUpdateCursor}
          cursorPosition={props.cursorPosition}>
          <ItalicButton />
        </ToolbarButton>
      </div>
    </div>
  );
}
