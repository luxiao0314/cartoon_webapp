import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import App from './realworld/components/App';
import Article from './realworld/components/Article';
import Editor from './realworld/components/Editor';
import Home from './realworld/components/Home';
import Login from './realworld/components/Login';
import Profile from './realworld/components/Profile';
import Register from './realworld/components/Register';
import Settings from './realworld/components/Settings';

import articlesStore from './realworld/stores/articlesStore';
import commentsStore from './realworld/stores/commentsStore';
import authStore from './realworld/stores/authStore';
import commonStore from './realworld/stores/commonStore';
import editorStore from './realworld/stores/editorStore';
import userStore from './realworld/stores/userStore';
import profileStore from './realworld/stores/profileStore';

const stores = {
  articlesStore,
  commentsStore,
  authStore,
  commonStore,
  editorStore,
  userStore,
  profileStore,
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
useStrict(true);

ReactDOM.render((
  <Provider {...stores}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="editor" component={Editor} />
        <Route path="editor/:slug" component={Editor} />
        <Route path="article/:id" component={Article} />
        <Route path="settings" component={Settings} />
        <Route path="@:username" component={Profile} />
        <Route path="@:username/favorites" component={Profile} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
