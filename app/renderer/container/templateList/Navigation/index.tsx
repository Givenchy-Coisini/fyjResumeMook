// renderer/container/templateList/Navigation/index.tsx

import React from 'react';
import './index.less';
import UseIcon from '@assets/icon/use.png';
// 👇 模版封面图
import TemplateCoverOne from '@assets/template/template1.jpg';
import TemplateCoverTwo from '@assets/template/template2.jpg';
import MyScrollBox from '@common/components/MyScrollBox';
import MyButton from '@common/components/MyButton';

function Navigation() {
  const height = document.body.clientHeight;

  return (
    <div styleName="navigation">
      <MyScrollBox maxHeight={height - 60 - 32}>
        {/* 悬浮效果一：属于当前模版 */}
        <div styleName="template">
          <img styleName="cover" src={TemplateCoverOne} />
          <div styleName="mask">
            <img styleName="use" src={UseIcon} />
          </div>
        </div>
        {/* 悬浮效果二：可选择预览模版 */}
        <div styleName="template">
          <img styleName="cover" src={TemplateCoverTwo} />
          <div styleName="mask">
            <MyButton size="middle" className="view-btn" onClick={() => {}}>
              预览模版
            </MyButton>
          </div>
        </div>
      </MyScrollBox>
    </div>
  );
}

export default Navigation;
