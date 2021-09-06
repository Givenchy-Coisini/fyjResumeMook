// app/renderer/container/resume/index.tsx
import React from 'react';
import './index.less';
// 👇 将组件引入
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';

function Resume() {
  return (
    <div styleName="container">
      <div styleName="header">
        <ResumeAction />
      </div>
      <div styleName="content">
        <ResumeContent />
      </div>
      <div styleName="toolbar">
        <ResumeToolbar />
      </div>
    </div>
  );
}
export default Resume;
