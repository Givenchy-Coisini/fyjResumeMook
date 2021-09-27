import React from 'react';
import './index.less';
// 👇 引入所有的静态模版
import * as TemplateList from '@src/container/templates';
// 👇 引入上边写好的 Footer 组件
import Footer from '../Footer';
import MyScrollBox from '@common/components/MyScrollBox';

function StaticResume() {
  const HEADER_HEIGHT = 76; // 距离头部距离
  const height = document.body.clientHeight;

  return (
    <div styleName="container">
      <MyScrollBox maxHeight={height - HEADER_HEIGHT}>
        {/* 这里暂时先写死第一个静态模版 */}
        <TemplateList.TemplateOne />
        <Footer />
      </MyScrollBox>
    </div>
  );
}

export default StaticResume;
