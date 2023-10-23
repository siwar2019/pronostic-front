import GameRulesComp from "../../Components/common/gameRules/GameRules";
import Questions from "../../Components/common/gameRules/Questions";
import Footer from "../../Components/common/home/Footer";
import NavBar from "../../Components/common/Navbar";
export default function GameRules() {
    return (
        <>
            <NavBar />
            <GameRulesComp />
            <Questions/>
            <Footer/>
        </>
    );
}
