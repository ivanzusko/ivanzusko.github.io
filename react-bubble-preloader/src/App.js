import React, { Component } from 'react';
import './github-page.css';
import './App.css';

import BubblePreloader from 'react-bubble-preloader';
import moment from 'moment';

import Header from './components/Header';
import MainContentSection from './components/layout/MainContentSection';

const DownLoadSVG = ({label/*: string*/, totalDownloads/*: number*/}) => (
    <div>
        <svg width="136" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stopColor="#bbb" stopOpacity=".1"/><stop offset="1" stopOpacity=".1"/></linearGradient><clipPath id="a"><rect width="136" height="20" rx="3" fill="#fff"/></clipPath><g clipPath="url(#a)"><path fill="#555" d="M0 0h69v20H0z"/><path fill="#4c1" d="M69 0h67v20H69z"/><path fill="url(#b)" d="M0 0h136v20H0z"/></g><g fill="#fff" textAnchor="middle" fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif" fontSize="10"><text x="34.5" y="15" fill="#010101" fillOpacity=".3">{label}</text><text x="34.5" y="14">{label}</text><text x="101.5" y="15" fill="#010101" fillOpacity=".3">{totalDownloads}</text><text x="101.5" y="14">{totalDownloads}</text></g></svg>
    </div>
);

class App extends Component {
    constructor() {
        super();

        this.state = {
            showModalConditional:   false,
            showModalRegular:       false,
            showModalSimple:        false,
            totalDownloads:         0,
        }
    }

    componentDidMount () {
        const startDate = '2016-12-18';
        const currentDate = moment().format('YYYY-MM-DD');
        const URL = `https://npm-stat.com/downloads/range/${startDate}:${currentDate}/react-bubble-preloader`;

        fetch(URL)
            .then(response => {
                return response.json();
            })
            .then(json => {
                let totalDownloads = 0;

                json.downloads.map(item => {
                    return totalDownloads += item.downloads;
                });

                this.setState({ totalDownloads });
            });
    }

    render() {
        const downloadsInfo = <DownLoadSVG
            label="downloads"
            totalDownloads={this.state.totalDownloads}
        />
        return (
            <div>
                <Header downloadsInfo={downloadsInfo}/>

                <MainContentSection>
                    <h2 id="welcome-to-github-pages">Here you can see React Bubble Preloader:</h2>
                    <BubblePreloader />
                </MainContentSection>

                <div className="">
                    <MainContentSection>
                        <h2>Installation</h2>

                        <div className="">
                            <p>Just run:</p>
                            <div className="code-sample__inner">
                                <pre>
                                    <code>npm install react-bubble-preloader</code>
                                </pre>
                            </div>
                            <p>or, if you are using <code className="code-blue">yarn</code>:</p>
                            <div className="code-sample__inner">
                                <pre>
                                    <code>yarn add react-bubble-preloader</code>
                                </pre>
                            </div>
                        </div>

                        <h2>Usage</h2>
                        <div className="">
                            <h3>Default Bubble Preloader</h3>
                            <div className="code-sample">
                                <div className="code-sample__inner">
                                    <pre>
                                        <code>import <code className="code-red--pure">BubblePreloader</code> from '<code className="code-blue">react-bubble-peloader</code>';</code><br></br>
                                        <code></code><br></br>
                                        <code className="code-blue">&lt;BubblePreloader /&gt;</code><br></br>
                                    </pre>
                                </div>
                                <BubblePreloader />
                            </div>

                            <h3>Some customization</h3>
                            <div className="code-sample">
                                <div className="code-sample__inner">
                                    <pre>
                                        <code>import <code className="code-red--pure">BubblePreloader</code> from '<code className="code-blue">react-bubble-peloader</code>';</code><br></br>
                                        <code></code><br></br>
                                        <code className="code-blue">&lt;BubblePreloader</code><br></br>
                                        <code className="code-red">    animation</code><code>=&#123;&#123; speed: 1 &#125;&#125;</code><br></br>
                                        <code className="code-red">    bubble</code><code>=&#123;&#123; width: '1rem', height: '1rem' &#125;&#125;</code><br></br>
                                        <code className="code-red">    className</code><code>="some-class"</code><br></br>
                                        <code className="code-red">    colors</code><code>=&#123;&#91;'blue', 'aqua', '#f4f4f4'&#93;&#125;</code><br></br>
                                        <code className="code-blue">/&gt;</code><br></br>
                                    </pre>
                                </div>
                                <BubblePreloader
                                    animation={{ speed: 1 }}
                                    bubble={{ width: '1rem', height: '1rem' }}
                                    colors={['blue', 'aqua', '#8e8888']}
                                />
                            </div>
                        </div>
                        <p>For DOCs, please, check <a href="https://github.com/ivanzusko/react-bubble-preloader#customization" target="_blank">Git repo</a>.</p>
                    </MainContentSection>

                </div>

                <footer className="footer">
                    <div className="main-content copy"><code>Copyright &copy;</code> <a href="https://twitter.com/IvanZusko" target="_blank">Ivan Zusko</a> <code>2017. MIT Licensed.</code></div>
                </footer>
            </div>
        );
    }
}

export default App;
