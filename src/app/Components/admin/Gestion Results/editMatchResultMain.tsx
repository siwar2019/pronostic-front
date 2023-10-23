import React from "react";
import "./editMatchResultMainStyles.css";
import UpdateLaptop from "./editMatchResultLaptop";
import UpdateMobile from "./editMatchResultMobile";

export default function EditMatchResultMain() {
  return (
    <>
      <div className="laptop-display-update-matchResult">
        <UpdateLaptop />
      </div>
      <div className="mobile-display-update-matchResult">
        <UpdateMobile />
      </div>
    </>
  );
}
