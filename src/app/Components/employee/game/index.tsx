import "./game.css";
import GameLaptop from "./gameLaptop";
import GameMobile from "./gameMobile";

export default function Game() {
  return (
    <>
      {window.innerWidth > 900 ? (
        <div
        // className="laptop-display-game"
        >
          <GameLaptop />
        </div>
      ) : (
        <div
        //  className="mobile-display-game"
        >
          <GameMobile />
        </div>
      )}
    </>
  );
}
