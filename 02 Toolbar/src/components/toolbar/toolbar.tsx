import * as React from 'react';
import {ItalicButton} from './buttons/italicButton';

interface Props {
  textArea: HTMLTextAreaElement;
  updateTextArea: (content: string) => void;
  shouldUpdateCursor: boolean;
}

const Toolbar = (props: Props) => {
  return (
    <div className="btn-toolbar">
      <div className="btn-group">
        <ItalicButton textArea={props.textArea}
          caret="**"
          offset={1}
          updateTextArea={props.updateTextArea}
          shouldUpdateCursor={props.shouldUpdateCursor} />
      </div>
    </div>
  );
}
