import React from "react";
import "./updatePronostic.css";
import UpdateLaptop from "./updateLaptop";
import UpdateMobile from "./updateMobile";

export default function UpdatePronostic() {
  return (
    <>
      {window.innerWidth > 900 ? (
        <div
        // className="laptop-display-update-pronostic"
        >
          <UpdateLaptop />
        </div>
      ) : (
        <div
        //  className="mobile-display-update-pronostic"
        >
          <UpdateMobile />
        </div>
      )}
    </>
  );
}
