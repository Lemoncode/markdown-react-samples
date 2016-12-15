import * as React from 'react';
import {BaseToolbarButton, LinkToolbarButton} from './buttons';
import {
  ItalicIcon, BoldIcon, HeaderIcon, QuoteIcon, CodeIcon, LinkIcon,
  BulletedListIcon, NumberedListIcon, ImageIcon
} from './icons';

interface Props {
  textArea: HTMLTextAreaElement;
  updateTextArea: (content: string, cursorPosition: number) => void;
}

export const Toolbar = (props: Props) => {

  return (
    <div className="btn-toolbar">
      <div className="btn-group">
        <BaseToolbarButton textArea={props.textArea} caret="#" offset={1}
          updateTextArea={props.updateTextArea}>
          <HeaderIcon />
        </BaseToolbarButton>

        <BaseToolbarButton textArea={props.textArea} caret="****" offset={2}
          updateTextArea={props.updateTextArea}>
          <BoldIcon />
        </BaseToolbarButton>

        <BaseToolbarButton textArea={props.textArea} caret="**" offset={1}
          updateTextArea={props.updateTextArea}>
          <ItalicIcon />
        </BaseToolbarButton>
      </div>

      <div className="btn-group">
        <BaseToolbarButton textArea={props.textArea} caret="``" offset={1}
          updateTextArea={props.updateTextArea}>
          <CodeIcon />
        </BaseToolbarButton>

        <LinkToolbarButton textArea={props.textArea} caret="[](url)" offset={1}
          cursorStartPosition={-4}
          cursorEndPosition={-1}
          updateTextArea={props.updateTextArea}>
          <LinkIcon />
        </LinkToolbarButton>

        <LinkToolbarButton textArea={props.textArea} caret="![alt text]()" offset={12}
          cursorStartPosition={2}
          cursorEndPosition={10}
          updateTextArea={props.updateTextArea}>
          <ImageIcon />
        </LinkToolbarButton>
      </div>

      <div className="btn-group">
        <BaseToolbarButton textArea={props.textArea} caret="\n - " offset={4}
          updateTextArea={props.updateTextArea}>
          <BulletedListIcon />
        </BaseToolbarButton>

        <BaseToolbarButton textArea={props.textArea} caret="\n 1. " offset={5}
          updateTextArea={props.updateTextArea}>
          <NumberedListIcon />
        </BaseToolbarButton>

        <BaseToolbarButton textArea={props.textArea} caret="> " offset={2}
          updateTextArea={props.updateTextArea}>
          <QuoteIcon />
        </BaseToolbarButton>
      </div>
    </div>
  );
}
