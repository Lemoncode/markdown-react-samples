import * as React from 'react';
import {ToolbarButton, ItalicButton, BoldButton} from './buttons';

interface Props {
  textArea: HTMLTextAreaElement;
  updateTextArea: (content: string) => void;
  shouldUpdateCursor: boolean;
}

export const Toolbar = (props: Props) => {

  return (
    <div className="btn-toolbar">
      <div className="btn-group">
        <ToolbarButton textArea={props.textArea} caret="****" offset={2}
          updateTextArea={props.updateTextArea}
          shouldUpdateCursor={props.shouldUpdateCursor}>
          <BoldButton />
        </ToolbarButton>

        <ToolbarButton textArea={props.textArea} caret="**" offset={1}
          updateTextArea={props.updateTextArea}
          shouldUpdateCursor={props.shouldUpdateCursor}>
          <ItalicButton />
        </ToolbarButton>
      </div>
    </div>
  );
}
