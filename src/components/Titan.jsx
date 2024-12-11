import classes from "../modules/Destination.module.scss"
import titan_img from "../assets/destination/image-titan.png"
import Mars from "../components/Mars.jsx"
import Europa  from "../components/Europa.jsx"
import Moon from "../components/Moon.jsx";
import {useState} from "react";



const Titan = () => {
    const [planet , setPlanet] = useState("Titan");


    const renderPlanets = () => {
        switch (planet) {
            case "Titan":
                return (
                    <div className={classes["destination-background"]}>
                        <div className={classes["body-wrapper"]}>
                            <h1><span className={classes["numbers"]}>01</span> Pick your destination</h1>
                            <div className={classes["choose-destination-wrapper"]}>
                                <img className={classes["moon-img"]} src={titan_img} alt=""/>
                                <div className={classes["choose-destination-item"]}>
                                    <header className={classes["choose-destination-header"]}>
                                        <button onClick={() => setPlanet("MOON")}>MOON</button>
                                        <button onClick={() => setPlanet("MARS")}>MARS</button>
                                        <button onClick={() => setPlanet("EUROPA")}>EUROPA</button>
                                        <button onClick={() => setPlanet("TITAN")}>TITAN</button>
                                    </header>
                                    <br/>
                                    <div className={classes["choose-destination-description-wrapper"]}>
                                        <h1 className={classes["destination-h1"]}>TITAN</h1>
                                        <p className={classes["destination-p"]}>Titan The only moon known to have a
                                            dense
                                            atmosphere other than Earth, Titan is a home away from home (just a few
                                            hundred
                                            degrees colder!). As a bonus, you get striking views of the Rings of
                                            Saturn.</p>
                                        <hr/>
                                        <div className={classes["distance-time"]}>
                                            <div className={classes["distance"]}>
                                                <p className={classes["distance-p"]}>AVG.DISTANCE</p>
                                                <h3 className={classes["distance-h3"]}>1.6 BIL. KM</h3>
                                            </div>
                                            <div className={classes["time"]}>
                                                <p className={classes["distance-p"]}>Est. travel time</p>
                                                <h3 className={classes["distance-h3"]}>7 YEARS</h3>
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
            case "EUROPA":
                return <Europa/>;
            case "MARS":
                return <Mars/>;
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

export default Titan