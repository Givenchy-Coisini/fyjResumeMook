import React from 'react';
import './index.less';
import { shell } from 'electron';
import { useHistory } from 'react-router';
import MyTheme from '@common/components/MyTheme';
import Logo from '@assets/logo.png';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';
import { isHttpOrHttpsUrl } from '@common/utils/router';

function Root() {
  const history = useHistory();
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();
  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      if (router.key !== ROUTER_KEY.resume) {
        history.push(router.url);
      } else {
        history.push(router.url);
      }
    }
  };
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">fyjResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="theme">
          <MyTheme />
        </div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div
                key={router.key}
                styleName="item"
                onClick={() => {
                  onRouterToLink(router);
                }}
              >
                {router.text}
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
