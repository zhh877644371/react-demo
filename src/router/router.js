import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import FuncDemo from 'bundle-loader?lazy&name=funcDemo!pages/ReactStudy/FuncDemo';
import PropsTypeCheck from 'bundle-loader?lazy&name=propsTypeCheck!pages/ReactStudy/PropsTypeCheck';
import InitState from 'bundle-loader?lazy&name=initState!pages/ReactStudy/InitState';
import StateDemo from 'bundle-loader?lazy&name=stateDemo!pages/ReactStudy/StateDemo';
import AsyncState from 'bundle-loader?lazy&name=asyncState!pages/ReactStudy/AsyncState';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading />
        }
    </Bundle>
);

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)} />
            <Route path="/page1" component={createComponent(Page1)} />
            <Route path="/counter" component={createComponent(Counter)} />
            <Route path="/userinfo" component={createComponent(UserInfo)} />
            <Route path="/funcdemo" component={createComponent(FuncDemo)} />
            <Route path="/propstypecheck" component={createComponent(PropsTypeCheck)} />
            <Route path="/initstate" component={createComponent(InitState)} />
            <Route path="/statedemo" component={createComponent(StateDemo)} />
            <Route path="/asyncstate" component={createComponent(AsyncState)} />
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
);