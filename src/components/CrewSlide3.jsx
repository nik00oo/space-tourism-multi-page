import logo from "../assets/shared/logo.svg";
import pilot from "../assets/crew/image-victor-glover.png"
import '../modules/crew.scss';
import classes from "../modules/Destination.module.scss"
import {useState} from "react";
import CrewSlide from "./CrewSlide.jsx";
import CrewSlide4 from "./CrewSlide4.jsx";
import CrewSlide2 from "./CrewSlide2.jsx";


const Crew3 = () => {
    const [crew, setCrew] = useState("CREW3")

    const renderCrew = () => {
        switch (crew) {
            case "CREW3":
        return (
            <>
                <div className='background-crew'>
                    <main>
                        <div className='main-div'>
                            <h2> PILOT </h2>
                            <h1 className={"crew-h1"}> VICTOR GLOVER </h1>
                            <p className={"crew-p"}>
                                Pilot on the first operation flight of the SpaceX Crew Dragon to the international Space
                                Station. <br/> Glover is a commander in the U.S. Navy Where pilots an F/A-18. <br/> He was a crew
                                member of Expedition 64, and served as a station systems flight engineer.
                            </p>
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
                            <img src={pilot} alt="dougles"/>
                        </div>


                    </main>
                    <footer></footer>
                </div>
            </>
        )
            case "CREW":
                return <CrewSlide/>;
            case "CREW2":
                return <CrewSlide2/>;
            case "CREW4":
                return <CrewSlide4/>;
            default:
                return null;
        }
    }

    return (
        <div className={classes["background-crew"]}>

            {renderCrew()}
        </div>
    );

}

export default Crew3