import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'
import styles from './Live.module.scss';

function Live({ code, scope }) {
  const codeMarkup = !code
    ? '// Provide code to render something'
    : code.trim();

  return (
    <div className={styles.Live}>
      <LiveProvider code={codeMarkup} scope={scope}>
        <div className={styles.PreviewWrapper}>
          <LivePreview />
        </div>
        <div className={styles.CodeWrapper}>
          <LiveEditor />
        </div>
      </LiveProvider>
    </div>
  );
}

export default Live;
