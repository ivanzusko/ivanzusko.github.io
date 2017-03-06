import React, {Component} from 'react';
import './App.css';

import Modaliz from 'react-modaliz';
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
        const startDate = '2017-02-22';
        const currentDate = moment().format('YYYY-MM-DD');
        const URL = `https://npm-stat.com/downloads/range/${startDate}:${currentDate}/react-modaliz`;

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

    openModalRegular = () => {
        console.log('Open %cREGULAR Modaliz', 'color: blue');
        this.setState({ showModalRegular: true })
    }

    closeModalRegular = () => {
        this.setState({ showModalRegular: false });
    }

    openModalSimple = () => {
        console.log('Open %cSIMPLE Modaliz', 'color: green');
        this.setState({ showModalSimple: true })
    }

    closeModalSimple = () => {
        this.setState({ showModalSimple: false });
    }

    openModalConditional = () => {
        console.log('Open %cCONDITIONAL Modaliz', 'color: #f00');
        this.setState({ showModalConditional: true })
    }

    closeModalConditional = () => {
        this.setState({ showModalConditional: false });
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
                    <h2 id="welcome-to-github-pages">Here you can try Modaliz React component.</h2>
                    <p>Modaliz - simple modal popup window, which is easy to use and customize</p>
                    <p>Please, choose Modaliz you are interested in and see corresponding code sample</p>
                </MainContentSection>

                <div className="">

                    <div className="page-header">
                        <button className="btn btn--regular" onClick={this.openModalRegular}>Open modal (regular)</button>
                        <button className="btn btn--green" onClick={this.openModalSimple}>Open modal (simple)</button>
                        <button className="btn btn--conditional" onClick={this.openModalConditional}>Open modal (conditional)</button>
                    </div>

                    <MainContentSection>

                        <h2>Installation</h2>

                        <div className="">
                            <p>Just run:</p>
                            <div className="code-sample__inner">
                                <pre>
                                    <code>npm install react-modaliz</code>
                                </pre>
                            </div>
                            <p>or, if you are using <code className="code-blue">yarn</code>:</p>
                            <div className="code-sample__inner">
                                <pre>
                                    <code>yarn add react-modaliz</code>
                                </pre>
                            </div>
                        </div>

                        <h2>Usage</h2>



                        <div className="">
                            <div className="code-sample">
                                <h3>Modal regular</h3>
                                <div className="code-sample__inner">
                                    <pre>
                                        <code>import <code className="code-red--pure">Modaliz</code> from '<code className="code-blue">react-modaliz</code>';</code><br></br>
                                        <code></code><br></br>
                                        <code className="code-blue">&lt;Modaliz</code><br></br>
                                        <code className="code-red">    className</code><code>="some-class"</code><br></br>
                                        <code className="code-red">    onClose</code><code>=&#123;this.closeModalRegular&#125;</code><br></br>
                                        <code className="code-red">    show</code><code>=&#123;this.state.showModalRegular&#125;</code><br></br>
                                        <code className="code-red">    speed</code><code>=&#123;500&#125;</code><br></br>
                                        <code className="code-blue">&gt;</code><br></br>
                                        <code className="code-blue">    &lt;h1&gt;</code><code>Modaliz<code className="code-blue">&lt;/h1&gt;</code></code><br></br>
                                        <code className="code-blue">    &lt;div&gt;</code><br></br>
                                        <code className="code-blue">        &lt;p&gt;</code>Lorem inpum<code className="code-blue">&lt;/p&gt;</code><br></br>
                                        <code className="code-blue">    &lt;/div&gt;</code><br></br>
                                        <code className="code-blue">&lt;/Modaliz&gt;</code><br></br>
                                    </pre>
                                </div>

                                <h3>Modal simple</h3>
                                <div className="code-sample__inner">
                                    <pre>
                                        <code>import <code className="code-red--pure">Modaliz</code> from '<code className="code-blue">react-modaliz</code>';</code><br></br>
                                        <code></code><br></br>
                                        <code className="code-blue">&lt;Modaliz</code><br></br>
                                        <code className="code-red">    className</code><code>="some-class"</code><br></br>
                                        <code className="code-red">    onClose</code><code>=&#123;this.closeModalSimple&#125;</code><br></br>
                                        <code className="code-red">    show</code><code>=&#123;this.state.showModalSimple&#125;</code><br></br>
                                        <code className="code-red">    speed</code><code>=&#123;300&#125;</code><br></br>
                                        <code className="code-red--pure">    simple</code><br></br>
                                        <code className="code-red">    title</code><code>="Modaliz (Simple)"</code><br></br>
                                        <code className="code-red">    text</code><code>="Any string as a text"</code><br></br>
                                        <code className="code-blue">/&gt;</code><br></br>
                                    </pre>
                                </div>

                                <h3>Modal conditional</h3>
                                <div className="code-sample__inner">
                                    <pre>
                                        <code>import <code className="code-red--pure">Modaliz</code> from '<code className="code-blue">react-modaliz</code>';</code><br></br>
                                        <code></code><br></br>
                                        <code className="code-red--pure">&#123;</code><br></br>
                                        <code className="code-red">    this.state.showModalConditional <code className="code-red--pure">&&</code></code><br></br>
                                        <code className="code-blue">        &lt;Modaliz</code><br></br>
                                        <code className="code-red">            className</code><code>="some-class"</code><br></br>
                                        <code className="code-red--pure">            conditionalRender</code><br></br>
                                        <code className="code-red">            onClose</code><code>=&#123;this.closeModalRegular&#125;</code><br></br>
                                        <code className="code-red">            show</code><code>=&#123;this.state.showModalRegular&#125;</code><br></br>
                                        <code className="code-red">            speed</code><code>=&#123;150&#125;</code><br></br>
                                        <code className="code-blue">        &gt;</code><br></br>
                                        <code className="code-blue">            &lt;h1&gt;</code><code>Modaliz (conditional)<code className="code-blue">&lt;/h1&gt;</code></code><br></br>
                                        <code className="code-blue">            &lt;div&gt;</code><br></br>
                                        <code className="code-blue">                &lt;p&gt;</code>Lorem inpum<code className="code-blue">&lt;/p&gt;</code><br></br>
                                        <code className="code-blue">            &lt;/div&gt;</code><br></br>
                                        <code className="code-blue">        &lt;/Modaliz&gt;</code><br></br>
                                        <code className="code-red--pure">&#125;</code><br></br>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </MainContentSection>

                </div>

                <footer className="footer">
                    <div className="main-content copy"><code>Copyright &copy;</code> <a href="https://twitter.com/IvanZusko" target="_blank">Ivan Zusko</a> <code>2017. MIT Licensed.</code></div>
                </footer>

                <Modaliz
                    className="some-class"
                    onClose={this.closeModalRegular}
                    show={this.state.showModalRegular}
                    speed={500}
                >
                    <h1>Modaliz</h1>
                    <div className="code-sample">
                        <div className="code-sample__inner">
                            <pre>
                                <code className="code-blue">&lt;Modaliz</code><br></br>
                                <code className="code-red">    className</code><code>="some-class"</code><br></br>
                                <code className="code-red">    onClose</code><code>=&#123;this.closeModalRegular&#125;</code><br></br>
                                <code className="code-red">    show</code><code>=&#123;this.state.showModalRegular&#125;</code><br></br>
                                <code className="code-red">    speed</code><code>=&#123;500&#125;</code><br></br>
                                <code className="code-blue">&gt;</code><br></br>
                                <code className="code-blue">    &lt;h1&gt;</code><code>Modaliz<code className="code-blue">&lt;/h1&gt;</code></code><br></br>
                                <code className="code-blue">    &lt;div&gt;</code><br></br>
                                <code className="code-blue">        &lt;p&gt;</code>Lorem inpum<code className="code-blue">&lt;/p&gt;</code><br></br>
                                <code className="code-blue">    &lt;/div&gt;</code><br></br>
                                <code className="code-blue">&lt;/Modaliz&gt;</code><br></br>
                            </pre>
                        </div>
                    </div>
                </Modaliz>


                <Modaliz
                    className="some-class"
                    onClose={this.closeModalSimple}
                    show={this.state.showModalSimple}
                    speed={300}
                    simple
                    title="Modaliz (Simple)"
                    // text="Any string about anything you want"
                    text={
                        `<Modaliz
                            className="some-class"
                            simple
                            onClose={this.closeModalSimple}
                            show={this.state.showModalSimple}
                            speed={500}
                            title="Modaliz (Simple)"
                            text="BECAUSE THIS IS JUST A STRING YOU SEE THIS STRING AS A STRING BUT NOT LIKE A MARKUP."
                        />`
                    }
                />


                {
                    this.state.showModalConditional &&
                        <Modaliz
                            className="some-class"
                            conditionalRender
                            onClose={this.closeModalConditional}
                            show={this.state.showModalConditional}
                            speed={150}
                        >
                            <h1>Modaliz (conditional)</h1>
                            <div className="code-sample">
                                <div className="code-sample__inner">
                                    <pre>
                                        <code>&#123;</code><br></br>
                                        <code className="code-red--pure">    this.state.showModalConditional <code className="code-blue">&&</code></code><br></br>
                                        <code></code><br></br>
                                        <code className="code-blue">        &lt;Modaliz</code><br></br>
                                        <code className="code-red">            className</code><code>="some-class"</code><br></br>
                                        <code className="code-red--pure">            conditionalRender</code><br></br>
                                        <code className="code-red">            onClose</code><code>=&#123;this.closeModalRegular&#125;</code><br></br>
                                        <code className="code-red">            show</code><code>=&#123;this.state.showModalRegular&#125;</code><br></br>
                                        <code className="code-red">            speed</code><code>=&#123;300&#125;</code><br></br>
                                        <code className="code-blue">        &gt;</code><br></br>
                                        <code className="code-blue">            &lt;h1&gt;</code><code>Modaliz (conditional)<code className="code-blue">&lt;/h1&gt;</code></code><br></br>
                                        <code className="code-blue">            &lt;div&gt;</code><br></br>
                                        <code className="code-blue">                &lt;p&gt;</code>Lorem inpum<code className="code-blue">&lt;/p&gt;</code><br></br>
                                        <code className="code-blue">            &lt;/div&gt;</code><br></br>
                                        <code className="code-blue">        &lt;/Modaliz&gt;</code><br></br>
                                        <code>&#125;</code>
                                    </pre>
                                </div>
                            </div>
                        </Modaliz>
                }

            </div>
        );
    }
}

export default App;
