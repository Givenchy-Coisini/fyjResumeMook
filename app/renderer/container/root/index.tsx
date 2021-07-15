// 首页模块的入口文件
import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import Logo from '../../../../assets/logo.png';

function Root() {
  const history = useHistory();
  const onRouterToLink = (text: string) => {
    if (text !== '简历') {
      // 通过 shell 模块，打开默认浏览器，进入 github
      shell.openExternal('https://github.com/PDKSophia/visResumeMook');
    } else {
      history.push('/resume');
    }
  };
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">fyjResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {['介绍', '简历', '源码'].map((text, index) => {
            return (
              <div key={index} styleName="item" onClick={() => onRouterToLink(text)}>
                {text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2020-{new Date().getFullYear()} All Rights Reserved. Copyright By fuyongjie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;
