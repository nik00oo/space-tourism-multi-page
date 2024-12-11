import { useState } from 'react';
import "./assets/home/background-home-desktop.jpg";
import  './modules/app.scss';
import logo from './assets/shared/logo.svg'
import Moon from  './components/Moon.jsx'
import classes from "./modules/Destination.module.scss";
import CrewSlide from "./components/CrewSlide.jsx";
import Technology from "./components/Technology.jsx";



function App() {
    const [nav, setNav] = useState("HOME");

    const renderNav = () => {
        switch (nav) {
            case "HOME":
                return (
                    <div className="background">
                        <header className="global-header">
                            <div className="logo-wrapper">
                                <div className="logo">
                                    <img src={logo} alt="logo"/>
                                </div>
                            </div>
                            <div className="app">
                                <button onClick={() => setNav("HOME")} className="nav-item">00 Home</button>
                                <button onClick={() => setNav("DESTINATION")} className="nav-item">01 Destination
                                </button>
                                <button onClick={() => setNav("CREW-NAV")} className="nav-item">02 Crew</button>
                                <button onClick={() => setNav("TECHNOLOGY-NAV")} className="nav-item">03 Technology</button>
                            </div>
                        </header>
                        <main>
                            <div className="main-div">
                                <h2>SO, YOU WANT TO TRAVEL TO</h2>
                                <h1>SPACE</h1>
                                <p>
                                    Let’s face it; if you want to go to space, you might as well genuinely go to<br/>
                                    outer space and not hover kind of on the edge of it. Well, sit back, and relax<br/>
                                    because we’ll give you a truly out-of-this-world experience!
                                </p>
                            </div>
                            <div className="explore-btn">
                                <button>EXPLORE</button>
                            </div>
                        </main>
                        <footer></footer>
                    </div>
                );
            case "DESTINATION":
                return <Moon/>;
            case "CREW-NAV":
                return <CrewSlide/>;
            case "TECHNOLOGY-NAV":
                return <Technology/>;
            default:
                return null;
        }
    };
    return (
        <div className={classes["background"]}>


            {renderNav()}
        </div>
    );
};

export default App;