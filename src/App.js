import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import {Redirect, Route, Switch} from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Orders from "./containers/Orders/Orders";


class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path='/checkout' component={Checkout}/>
                        <Route path='/orders' exact component={Orders}/>
                        <Route path='/' exact component={BurgerBuilder}/>
                        <Redirect from='/burger' to='/'/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
