import classes from "../modules/Destination.module.scss";
import logo from "../assets/shared/logo.svg";
import rocket  from '../assets/technology/image-launch-vehicle-portrait.jpg'
import '../modules/Technology.scss'
import {useState} from "react";
import Technology2 from "./Technology2.jsx";
import Technology3 from "./Technology3.jsx";
import App from "../App.jsx";
import CrewSlide from "./CrewSlide.jsx";
import Moon from "./Moon.jsx";


const Technology = () => {
    const [techSlide , setTechSlide] = useState("TECHNOLOGY");
    const [nav, setNav] = useState("TECHNOLOGY-NAV");

    const renderTech = () => {
        switch (techSlide) {
            case "TECHNOLOGY":
                return (
                    <div className='background-technology'>
                        <main>
                            <div className='main-technology-div'>
                                <h2> The terminology... </h2>
                                <h1 className={"technology-h1"}> Launch vehicle</h1>
                                <p className={"technology-p"}>
                                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry
                                    a<br/>
                                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our<br/>
                                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres
                                    tall,<br/>
                                    it's quite an awe-inspiring sight on the launch pad!</p>
                            </div>
                            <div className='technology-btn-div'>
                                <button onClick={() => setTechSlide("TECHNOLOGY")} className='technology-btn'>1</button>
                                <button onClick={() => setTechSlide("TECHNOLOGY2")} className='technology-btn'>2</button>
                                <button onClick={() => setTechSlide("TECHNOLOGY3")} className='technology-btn'>3</button>
                            </div>
                            <img className="technology-img" src={rocket}/>
                        </main>
                        <footer></footer>
                    </div>
                );
            case "TECHNOLOGY2":
                return <Technology2/>;
            case "TECHNOLOGY3":
                return <Technology3/>;
            default:
                return null;
        }
    };

    const renderNav = () => {
        switch (nav) {
            case "TECHNOLOGY-NAV":
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
                                <button onClick={() => setNav("TECHNOLOGY-NAV")} className="nav-item">03 Technology</button>
                            </div>
                        </header>
                        <main>{renderTech()}</main>
                        <footer></footer>
                    </div>
                );
            case "HOME":
                return <App/>;
            case "CREW-NAV":
                return <CrewSlide/>;
            case "DESTINATION":
                return <Moon />;
            default:
                return null;
        }
    };

    return <div className={"background-technology"}>
        {renderNav()}
    </div>;
};


export default Technology