import classes from "../modules/Destination.module.scss"
import europa_img from "../assets/destination/image-europa.png"
import Titan from "../components/Titan.jsx"
import Mars  from "../components/Europa.jsx"
import Moon from "../components/Moon.jsx";
import {useState} from "react";

const Europa = () => {
    const [planet , setPlanet] = useState("EUROPA");


    const renderPlanets = () => {
        switch (planet) {
            case "EUROPA":
                return (
                    <div className={classes["destination-background"]}>
                        <div className={classes["body-wrapper"]}>
                            <h1><span className={classes["numbers"]}>01</span> Pick your destination</h1>
                            <div className={classes["choose-destination-wrapper"]}>
                                <img className={classes["moon-img"]} src={europa_img} alt=""/>
                                <div className={classes["choose-destination-item"]}>
                                    <header className={classes["choose-destination-header"]}>
                                        <button onClick={() => setPlanet("MOON")}>MOON</button>
                                        <button onClick={() => setPlanet("MARS")}>MARS</button>
                                        <button onClick={() => setPlanet("EUROPA")}>EUROPA</button>
                                        <button onClick={() => setPlanet("TITAN")}>TITAN</button>
                                    </header>
                                <br/>
                                <div className={classes["choose-destination-description-wrapper"]}>
                                    <h1 className={classes["destination-h1"]}>EUROPA</h1>
                                    <p className={classes["destination-p"]}> Europa The smallest of the four
                                        Galilean moons orbiting
                                            Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect
                                            for a bit of ice
                                            skating, curling, hockey, or simple relaxation in your snug wintery
                                            cabin.</p>
                                        <hr/>
                                        <div className={classes["distance-time"]}>
                                            <div className={classes["distance"]}>
                                                <p className={classes["distance-p"]}>AVG.DISTANCE</p>
                                                <h3 className={classes["distance-h3"]}>628 MIL. KM</h3>
                                            </div>
                                            <div className={classes["time"]}>
                                                <p className={classes["distance-p"]}>Est. travel time</p>
                                                <h3 className={classes["distance-h3"]}>3 YEARS</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "MOON":
                return <Moon/>;
            case "MARS":
                return <Mars/>;
            case "TITAN":
                return <Titan/>;
            default:
                return null;
        }
    };
    return (
        <div className={classes["destination-background"]}>

            {renderPlanets()}
        </div>
    );
};


export default Europa