import logo from "../assets/shared/logo.svg";
import engineer from "../assets/crew/image-anousheh-ansari.png"
import '../modules/crew.scss';
import classes from "../modules/Destination.module.scss"
import {useState} from "react";
import CrewSlide from "./CrewSlide.jsx";
import CrewSlide2 from "./CrewSlide2.jsx";
import CrewSlide3 from "./CrewSlide3.jsx";

const Crew4 = () => {
    const [crew, setCrew] = useState("CREW4")

    const renderCrew = () => {
        switch (crew) {
            case "CREW4":
                return (
                    <div className='background-crew'>
                        <main>
                            <div className='main-div'>
                                <h2> Mission Specialist </h2>
                                <h1 className={"crew-h1"}> Flight Engineer</h1>
                                <p className={"crew-p"}>Anousheh Ansari Anousheh Ansari is an Iranian American
                                    engineer and co-founder of Prodea Systems.<br/> Ansari was the fourth
                                    self-funded space tourist,<br/> the first self-funded woman to fly to the ISS, and the
                                    first Iranian in space.</p>
                                <div className={"crew-btn-wrapper"}>
                                    <span><button className={"crew-btn"}
                                                  onClick={() => setCrew("CREW")}>.</button></span>
                                    <span><button className={"crew-btn"}
                                                  onClick={() => setCrew("CREW2")}>.</button></span>
                                    <span><button className={"crew-btn"}
                                                  onClick={() => setCrew("CREW3")}>.</button></span>
                                    <span><button className={"crew-btn"}
                                                  onClick={() => setCrew("CREW4")}>.</button></span>

                                </div>
                            </div>
                            <div className="crew-image">
                                <img src={engineer} alt="dougles"/>
                            </div>


                        </main>
                        <footer></footer>
                    </div>
                )
            case "CREW":
                return <CrewSlide/>;
            case "CREW2":
                return <CrewSlide2/>;
            case "CREW3":
                return <CrewSlide3/>;
            default:
                return null;
        }
    };
    return (
        <div className={classes["background-crew"]}>

            {renderCrew()}
        </div>
    );
};

export default Crew4