import classes from "../modules/Destination.module.scss"
import logo from "../assets/shared/logo.svg"
import moon_img from "../assets/destination/image-moon.png"
import {useState} from "react";
import Mars from "../components/Mars.jsx"
import Titan from "../components/Titan.jsx"
import Europa  from "../components/Europa.jsx"
import CrewSlide from "./CrewSlide.jsx";
import Technology from "./Technology.jsx";
import App from "../App.jsx";

const Moon = () => {
    const [planet , setPlanet] = useState("MOON");
    const [nav, setNav] = useState("DESTINATION");

    const renderPlanets = () => {
        switch (planet) {
            case "MOON":
                return (
                    <div className={classes["body-wrapper"]}>
                        <h1>
                            <span className={classes["numbers"]}>01</span> Pick your destination
                        </h1>
                        <div className={classes["choose-destination-wrapper"]}>
                            <img className={classes["moon-img"]} src={moon_img} alt="Moon" />
                            <div className={classes["choose-destination-item"]}>
                                <header className={classes["choose-destination-header"]}>
                                    <button onClick={() => setPlanet("MOON")}>MOON</button>
                                    <button onClick={() => setPlanet("MARS")}>MARS</button>
                                    <button onClick={() => setPlanet("EUROPA")}>EUROPA</button>
                                    <button onClick={() => setPlanet("TITAN")}>TITAN</button>
                                </header>
                                <br />
                                <div className={classes["choose-destination-description-wrapper"]}>
                                    <h1 className={classes["destination-h1"]}>MOON</h1>
                                    <p className={classes["destination-p"]}>
                                        See our planet as you’ve never seen it before. A perfect relaxing trip away
                                        to help regain perspective and come back refreshed. While you’re there, take
                                        in some history by visiting the Luna 2 and Apollo 11 landing sites.
                                    </p>
                                    <hr />
                                    <div className={classes["distance-time"]}>
                                        <div className={classes["distance"]}>
                                            <p className={classes["distance-p"]}>AVG. DISTANCE</p>
                                            <h3 className={classes["distance-h3"]}>225 MIL. KM</h3>
                                        </div>
                                        <div className={classes["time"]}>
                                            <p className={classes["distance-p"]}>Est. travel time</p>
                                            <h3 className={classes["distance-h3"]}>9 MONTHS</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "MARS":
                return <Mars />;
            case "EUROPA":
                return <Europa />;
            case "TITAN":
                return <Titan />;
            default:
                return null;
        }
    };

    const renderNav = () => {
        switch (nav) {
            case "DESTINATION":
                return (
                    <div>
                        <header className="global-header">
                            <div className="logo-wrapper">
                                <div className="logo">
                                    <img src={logo} alt="logo" />
                                </div>
                            </div>
                            <div className="app">
                                <button onClick={() => setNav("HOME")} className="nav-item">00 Home</button>
                                <button onClick={() => setNav("DESTINATION")} className="nav-item">01 Destination</button>
                                <button onClick={() => setNav("CREW-NAV")} className="nav-item">02 Crew</button>
                                <button onClick={() => setNav("TECHNOLOGY-NAV")} className="nav-item">03 Technology</button>
                            </div>
                        </header>
                        <main>{renderPlanets()}</main>
                        <footer></footer>
                    </div>
                );
            case "HOME":
                return <App />;
            case "CREW-NAV":
                return <CrewSlide />;
            case "TECHNOLOGY-NAV":
                return <Technology />;
            default:
                return null;
        }
    };

    return <div className={classes["destination-background"]}>
        {renderNav()}
    </div>;
};





export default Moon