import * as React from 'react';
import {ToolbarButton} from './buttons';
import {
  ItalicIcon, BoldIcon, HeaderIcon, QuoteIcon, CodeIcon, LinkIcon
} from './icons';

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
          <HeaderIcon />
        </ToolbarButton>

        <ToolbarButton textArea={props.textArea} caret="****" offset={2}
          updateTextArea={props.updateTextArea}
          shouldUpdateCursor={props.shouldUpdateCursor}
          cursorPosition={props.cursorPosition}>
          <BoldIcon />
        </ToolbarButton>

        <ToolbarButton textArea={props.textArea} caret="**" offset={1}
          updateTextArea={props.updateTextArea}
          shouldUpdateCursor={props.shouldUpdateCursor}
          cursorPosition={props.cursorPosition}>
          <ItalicIcon />
        </ToolbarButton>
      </div>

      <div className="btn-group">
        <ToolbarButton textArea={props.textArea} caret="> " offset={2}
          updateTextArea={props.updateTextArea}
          shouldUpdateCursor={props.shouldUpdateCursor}
          cursorPosition={props.cursorPosition}>
          <QuoteIcon />
        </ToolbarButton>

        <ToolbarButton textArea={props.textArea} caret="``" offset={1}
          updateTextArea={props.updateTextArea}
          shouldUpdateCursor={props.shouldUpdateCursor}
          cursorPosition={props.cursorPosition}>
          <CodeIcon />
        </ToolbarButton>

        <ToolbarButton textArea={props.textArea} caret="[](url)" offset={1}
          updateTextArea={props.updateTextArea}
          shouldUpdateCursor={props.shouldUpdateCursor}
          cursorPosition={props.cursorPosition}>
          <LinkIcon />
        </ToolbarButton>
      </div>
    </div>
  );
}
