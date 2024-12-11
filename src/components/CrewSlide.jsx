import logo from "../assets/shared/logo.svg";
import dougles from '../assets/crew/image-douglas-hurley.png'
import '../modules/crew.scss';
import {useState} from "react";
import CrewSlide2 from "./CrewSlide2.jsx";
import CrewSlide3 from "./CrewSlide3.jsx";
import CrewSlide4 from "./CrewSlide4.jsx";
import App from "../App.jsx";
import Technology from "./Technology.jsx";
import Moon from "./Moon.jsx";


const Crew = () => {
    const [crew, setCrew] = useState("CREW")
    const [nav, setNav] = useState("CREW-NAV");


    const renderCrew = () => {
        switch (crew) {
            case "CREW":
                return (
                    <div className='background-crew'>
                        <div className='main-div'>
                            <h2> Commander </h2>
                            <h1 className={"crew-h1"}> Douglas Hurley</h1>
                            <p className={"crew-p"}>Douglas Gerald Hurley is an American engineer, former Marine
                                Corps pilot<br />
                                and former NASA astronaut. He launched into space for the third time as<br />
                                commander of Crew Dragon Demo-2!</p>
                            <div className={"crew-btn-wrapper"}>
                                <span><button className={"crew-btn"} onClick={() => setCrew("CREW")}>.</button></span>
                                <span><button className={"crew-btn"} onClick={() => setCrew("CREW2")}>.</button></span>
                                <span><button className={"crew-btn"} onClick={() => setCrew("CREW3")}>.</button></span>
                                <span><button className={"crew-btn"} onClick={() => setCrew("CREW4")}>.</button></span>
                            </div>
                        </div>
                        <div className="crew-image">
                            <img src={dougles} alt="Douglas Hurley" />
                        </div>
                    </div>
                );
            case "CREW2":
                return <CrewSlide2 />;
            case "CREW3":
                return <CrewSlide3 />;
            case "CREW4":
                return <CrewSlide4 />;
            default:
                return null;
        }
    };

    const renderNav = () => {
        switch (nav) {
            case "CREW-NAV":
                return (
                    <div>
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
                                <button onClick={() => setNav("TECHNOLOGY-NAV")} className="nav-item">03 Technology
                                </button>
                            </div>
                        </header>
                        <main>{renderCrew()}</main>
                        <footer></footer>
                    </div>
                );
            case "HOME":
                return <App/>;
            case "DESTINATION":
                return <Moon/>;
            case "TECHNOLOGY-NAV":
                return <Technology/>;
            default:
                return null;
        }
    };

    return <div className={"background-crew"}>
        {renderNav()}
    </div>;
};

export default Crew