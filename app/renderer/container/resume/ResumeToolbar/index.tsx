// app/renderer/container/resume/ResumeToolbar/index.tsx
/**
 * @description 编辑简历-模块管理
 */
import React from 'react';
import './index.less';
import MyScrollBox from '@common/components/MyScrollBox';
import RESUME_TOOLBAR_LIST from '@common/constants/resume';

function ResumeToolbar() {
  const height = document.body.clientHeight;
  return (
    <div styleName="slider">
      <MyScrollBox maxHeight={height - 180}>
        <div styleName="module">
          全部模块
          <div styleName="content">
            {RESUME_TOOLBAR_LIST.map((toolbar: TSResume.SliderItem) => {
              return <div styleName="box" key={toolbar.key} />;
            })}
          </div>
        </div>
      </MyScrollBox>
    </div>
  );
}

export default ResumeToolbar;
