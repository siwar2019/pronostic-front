import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { changeLangue } from "../../../_redux/reducers/language";

const useSwitch = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  // const lang = useAppSelector(({ languageSlice: { lang } }) => lang);
  const lang = localStorage.getItem("lang")

  const changeLanguage = () => {
    switch (i18n.language) {
      case "fr":
        i18n.changeLanguage("en");
        dispatch(changeLangue("en"));
        break;
      case "en":
        i18n.changeLanguage("fr");
        dispatch(changeLangue("fr"));
        break;
      default:
        break;
    }
  };
  return {
    changeLanguage,
    lang,
  };
};

export default useSwitch;
