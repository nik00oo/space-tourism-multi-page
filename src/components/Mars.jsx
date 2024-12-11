import classes from "../modules/Destination.module.scss"
import mars_img from "../assets/destination/image-mars.png"
import Titan from "../components/Titan.jsx"
import Europa  from "../components/Europa.jsx"
import Moon from "../components/Moon.jsx";
import {useState} from "react";


const Mars = () => {
    const [planet , setPlanet] = useState("MARS");


    const renderPlanets = () => {
        switch (planet) {
            case "MARS":
                return (
                    <div className={classes["destination-background"]}>
                        <div className={classes["body-wrapper"]}>
                            <h1><span className={classes["numbers"]}>01</span> Pick your destination</h1>
                            <div className={classes["choose-destination-wrapper"]}>
                                <img className={classes["moon-img"]} src={mars_img} alt=""/>
                                <div className={classes["choose-destination-item"]}>
                                    <header className={classes["choose-destination-header"]}>
                                        <button onClick={() => setPlanet("MOON")}>MOON</button>
                                        <button onClick={() => setPlanet("MARS")}>MARS</button>
                                        <button onClick={() => setPlanet("EUROPA")}>EUROPA</button>
                                        <button onClick={() => setPlanet("TITAN")}>TITAN</button>
                                    </header>
                                    <br/>
                                    <div className={classes["choose-destination-description-wrapper"]}>
                                        <h1 className={classes["destination-h1"]}>MARS</h1>
                                        <p className={classes["destination-p"]}>Don’t forget to pack your hiking boots.
                                            You’ll
                                            need them to tackle Olympus Mons, the tallest planetary mountain in our
                                            solar
                                            system. It’s two and a half times the size of Everest! </p>
                                        <hr/>
                                        <div className={classes["distance-time"]}>
                                            <div className={classes["distance"]}>
                                                <p className={classes["distance-p"]}>AVG.DISTANCE</p>
                                                <h3 className={classes["distance-h3"]}>384,400 km</h3>
                                            </div>
                                            <div className={classes["time"]}>
                                                <p className={classes["distance-p"]}>Est. travel time</p>
                                                <h3 className={classes["distance-h3"]}>3 days</h3>
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

export default Mars