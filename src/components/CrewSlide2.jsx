import logo from "../assets/shared/logo.svg";
import specialist from "../assets/crew/image-mark-shuttleworth.png"
import '../modules/crew.scss';
import classes from "../modules/Destination.module.scss"
import {useState} from "react";
import CrewSlide3 from "./CrewSlide3.jsx";
import CrewSlide4 from "./CrewSlide4.jsx";
import CrewSlide from "./CrewSlide.jsx";

const Crew2 = () => {
    const [crew, setCrew] = useState("CREW2")

    const renderCrew = () => {
        switch (crew) {
            case "CREW2":
                return (
                    <div className='background-crew'>
                        <main>
                            <div className='main-div'>
                                <h2> Mission Specialist </h2>
                                <h1 className={"crew-h1"}> Mark Shuttleworth</h1>
                                <p className={"crew-p"}>Mark Richard Shuttleworth is the founder and CEO of
                                    Canonical,<br/>
                                    the company behind the Linux-based Ubuntu operating system.<br/>
                                    Shuttleworth became the first South African to travel to space as a space
                                    tourist.</p>
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
                                <img src={specialist} alt="dougles"/>
                            </div>


                        </main>
                        <footer></footer>
                    </div>
                );
            case "CREW":
                return <CrewSlide/>;
            case "CREW3":
                return <CrewSlide3/>;
            case "CREW4":
                return <CrewSlide4/>;
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

export default Crew2