import React from 'react';
import './Nav.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class Nav extends React.Component {
    render() {
        let nav = this.props.nav;

        return (
            <nav>
                <Router>
                    <nav>
                        <ul>
                            {Object.keys(nav).map(elem => {
                                // return <li><Link to={elem}>{nav[elem]}</Link></li>;
                                return <li><a href={elem}>{nav[elem]}</a></li>;
                            })}
                        </ul>

                        {/*Определим область где у нас будет подгружаться вся необходимая часть сайта*/}
                        {/*<Switch>*/}
                            {/*<Route exact path="/" component={Rate} />*/}
                            {/*<Route exact path="/currency" component={Currency} />*/}
                            {/*<Route exact path="/contacts" component={Contacts} />*/}
                        {/*</Switch>*/}

                    </nav>
                </Router>
            </nav>
        );
    }
}



export default Nav;