// app/renderer/container/resume/ResumeContent/index.tsx
import React from 'react';
import './index.less';
// 👇 引入简历模版
import * as UseTemplateList from './UseTemplate';
import MyScrollBox from '@common/components/MyScrollBox';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  return (
    <MyScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
    </MyScrollBox>
  );
}
export default ResumeContent;
