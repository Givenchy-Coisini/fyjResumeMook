// renderer/windowPages/setting/app.tsx
import React from 'react';
import ReactDOM from 'react-dom';
// 👇 引入Redux
import { Provider } from 'react-redux';
import store from '@src/store';
// 👇 应用设置的入口组件
import Setting from './index';

function App() {
  return (
    <Provider store={store}>
      <Setting />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
