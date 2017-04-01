import React, {Component} from 'react';
import './github-page.css';
import './App.css';

import DD from 'react-dropdowniz';
import moment from 'moment';

import Header from './components/Header';
import MainContentSection from './components/layout/MainContentSection';

const DownLoadSVG = ({
    label,
    /*: string*/
    totalDownloads/*: number*/
}) => (
    <div>
        <svg width="136" height="20">
            <linearGradient id="b" x2="0" y2="100%"><stop offset="0" stopColor="#bbb" stopOpacity=".1"/><stop offset="1" stopOpacity=".1"/></linearGradient>
            <clipPath id="a"><rect width="136" height="20" rx="3" fill="#fff"/></clipPath>
            <g clipPath="url(#a)"><path fill="#555" d="M0 0h69v20H0z"/><path fill="#4c1" d="M69 0h67v20H69z"/><path fill="url(#b)" d="M0 0h136v20H0z"/></g>
            <g fill="#fff" textAnchor="middle" fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif" fontSize="10">
                <text x="34.5" y="15" fill="#010101" fillOpacity=".3">{label}</text>
                <text x="34.5" y="14">{label}</text>
                <text x="101.5" y="15" fill="#010101" fillOpacity=".3">{totalDownloads}</text>
                <text x="101.5" y="14">{totalDownloads}</text>
            </g>
        </svg>
    </div>
);

class App extends Component {
    constructor() {
        super();

        this.state = {
            showDropdown: false,
            totalDownloads: 0,
        }
    }

    componentDidMount() {
        const startDate = '2017-03-24';
        const currentDate = moment().format('YYYY-MM-DD');
        const URL = `https://npm-stat.com/downloads/range/${startDate}:${currentDate}/react-dropdowniz`;

        fetch(URL).then(response => {
            return response.json();
        }).then(json => {
            let totalDownloads = 0;

            json.downloads.map(item => {
                return totalDownloads += item.downloads;
            });

            this.setState({totalDownloads});
        });
    }

    handleShowDropdown = () => {
        this.setState(() => ({showDropdown: true}));
    }

    handleHideDropdown = () => {
        this.setState(() => ({showDropdown: false}));
    }

    render() {
        const downloadsInfo = <DownLoadSVG label="downloads" totalDownloads={this.state.totalDownloads}/>
        return (
            <div>
                <Header downloadsInfo={downloadsInfo}/>

                <MainContentSection>
                    <h2 id="welcome-to-github-pages">Here you can try React Dropdowniz component.</h2>
                    <p>React Dropdowniz - simple dropdown, which is easy to use and customize</p>
                </MainContentSection>

                <div className="">

                    <div className="page-header">
                        <div>
                            <button className="btn btn--regular btn--no-margin" onClick={this.handleShowDropdown}>Open dropdown</button>
                            <div style={{ position: 'relative', color: 'black' }}>
                            {
                                this.state.showDropdown &&
                                    <DD
                                        show={this.state.showDropdown}
                                        onClose={this.handleHideDropdown}
                                    >
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                    </DD>
                            }
                            </div>
                        </div>
                    </div>

                    <MainContentSection>

                        <h2>Installation</h2>

                        <div className="">
                            <p>Just run:</p>
                            <div className="code-sample__inner">
                                <pre>
                                    <code>npm install react-dropdowniz</code>
                                </pre>
                            </div>
                            <p>or, if you are using
                                <code className="code-blue">yarn</code>:</p>
                            <div className="code-sample__inner">
                                <pre>
                                    <code>yarn add react-dropdowniz</code>
                                </pre>
                            </div>
                        </div>

                        <p>You can check examples of use and docs on Github: <a href="https://github.com/ivanzusko/react-dropdowniz" target="_blank">https://github.com/ivanzusko/react-dropdowniz</a></p>

                    </MainContentSection>

                </div>

                <footer className="footer">
                    <div className="main-content copy">
                        <code>Copyright &copy;</code>
                        <a href="https://twitter.com/IvanZusko" target="_blank">Ivan Zusko</a>
                        <code>2017. MIT Licensed.</code>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
