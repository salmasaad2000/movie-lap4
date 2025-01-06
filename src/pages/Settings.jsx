import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/slice/language";

export default function Settings() {
  const language = useSelector((state) => state.language.currentLanguage);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Language Settings : [REDUX]</h2>
      <hr />
      <p>Current language : {language}</p>
      <div>
        <button onClick={() => dispatch(changeLanguage("en"))}>
          Change to en
        </button>
        <button className="mx-3" onClick={() => dispatch(changeLanguage("ar"))}>
          Change to ar
        </button>
        <button onClick={() => dispatch(changeLanguage("fr"))}>
          Change to fr
        </button>
      </div>

      <hr />
    </div>
  );
}
