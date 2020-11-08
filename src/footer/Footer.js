import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        // let adress = this.props.adress;
        // let contacts = this.props.contacts;

        return (
            <footer className="footer" id="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex-container">

                            <div className="flex-item">
                                <h1 className="footer-title">
                                    <a href="/">2020 &copy; Currencies</a>
                                </h1>
                                <p>All Rights Reserved</p>
                            </div>

                            <div className="flex-item hidden">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href="/sitemap/" tooltip="Карта сайта">Карта сайта</a></li>
                                        <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap">Google Sitemap</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex-item hidden">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href="/contacts/" tooltip="Контакты">Контакты</a></li>
                                        <li><a href="/a">Гарантии</a></li>
                                        <li><a href="/b">О сервисе</a></li>
                                        <li><a href="/c">Условия возврата</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </footer>
        );
    }
}

export default Footer;
