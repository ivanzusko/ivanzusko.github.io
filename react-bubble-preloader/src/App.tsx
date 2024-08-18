import {useEffect, useState} from 'react';
import BubblePreloader from 'react-bubble-preloader';
import Header from './components/Header';
import MainContentSection from './components/layout/MainContentSection';
import './github-page.css';
import './App.css';

export default function App() {
    const [totalDownloads, setTotalDownloads] = useState(0);

    useEffect(() => {
        const startDate = '2016-12-18';
        const currentDate = new Date().toISOString().split('T')[0];
        const URL = `https://api.npmjs.org/downloads/point/${startDate}:${currentDate}/react-bubble-preloader`

        fetch(URL)
            .then(response => {
                return response.json();
            })
            .then(json => {
                const totalDownloads = json.downloads;

                setTotalDownloads(totalDownloads);
            });
    }, []);

    return (
        <div>
            <Header totalDownloads={totalDownloads} />

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
                                    <code>import <code className="code-red--pure">BubblePreloader</code> from '<code className="code-blue">react-bubble-preloader</code>';</code><br></br>
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
                                    <code>import <code className="code-red--pure">BubblePreloader</code> from '<code className="code-blue">react-bubble-preloader</code>';</code><br></br>
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

                        <p>You can pass object with styles via <code className="code-blue">`style`</code> property:</p>
                        <div className="code-sample">
                            <div className="code-sample__inner">
                                <pre>
                                    <code>import <code className="code-red--pure">BubblePreloader</code> from '<code className="code-blue">react-bubble-preloader</code>';</code><br></br>
                                    <code></code><br></br>
                                    <code className="code-blue">&lt;BubblePreloader</code><br></br>
                                    <code className="code-red">    style</code><code>=&#123;&#123; border: 'solid 1px red', padding: '10px' &#125;&#125;</code><br></br>
                                    <code className="code-blue">/&gt;</code><br></br>
                                </pre>
                            </div>
                            <BubblePreloader
                                style={{ border: 'solid 1px red', padding: '10px' }}
                            />
                        </div>

                        <p>You can also customise default class name <code className="code-blue">`bubble-loader`</code> in your own CSS file:</p>
                        <div className="code-sample">
                            <div className="code-sample__inner">
                                <pre>
                                    <code className="code-blue">.bubble-loader</code> &#123;<br></br>
                                    <code className="code-red">    text-align:</code><code> center;</code><br></br>
                                    <code className="code-blue">&#125;</code><br></br>
                                </pre>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <BubblePreloader
                                    animation={{ speed: 1 }}
                                    bubble={{ width: '1rem', height: '1rem' }}
                                    colors={['blue', 'aqua', '#8e8888']}
                                />
                            </div>
                        </div>
                    </div>
                    <p>For DOCs, please, check <a href="https://github.com/ivanzusko/react-bubble-preloader#customization" target="_blank">Git repo</a>.</p>
                </MainContentSection>

            </div>

            <footer className="footer">
                <div className="main-content copy"><code>Copyright &copy;</code> <a href="https://twitter.com/IvanZusko" target="_blank">Ivan Zusko</a> <code>{new Date().getFullYear()}. MIT Licensed.</code></div>
            </footer>
        </div>
    );
}
