import React from 'react';
import './App.css';

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Rate from "../rate/Rate";
import Contacts from "../contacts/Contacts";
import Currency from "../currency/Currency";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
    render() {
        let nav = this.props.nav;

        return (
            <div className="App">
                <Header nav={nav} />

                <div className="container">
                    <main>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Rate} />
                                <Route exact path="/currency" component={Currency} />
                                <Route exact path="/contacts" component={Contacts} />
                            </Switch>
                        </Router>
                    </main>
                </div>

                <div className="container" id="cookie_info">
                    <div className="site-content">
                        <div className="well">
                            На нашем сайте мы используем cookie для сбора информации технического характера.
                            <br />
                            В часности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона Вашего местоположения.
                            &nbsp; <button className="btn btn-primary btn-sm">OK</button>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default App;
