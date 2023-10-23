import React, { useEffect } from "react";
import RegisterPage from "../Components/partner/PartnerRegister";
import LoginPage from "../pages/login";
import DemoPage from "../pages/demo";
import AdminDashbord from "../pages/admin/dashboard";
import Home from "../pages/common/home";
import DashboardEmployee from "../pages/employee";
import EventsEmployee from "../Components/employee/events";
import GamesEmployee from "../Components/employee/games";
import GameEmployee from "../Components/employee/game";
import CategoriesPronosticsEmployee from "../Components/employee/pronostics";
import EventsPronosticsEmployee from "../Components/employee/pronostics/events";
import PronosticsEmployee from "../Components/employee/pronostics/pronosticsEvent";
import CategoriesRankingEmployee from "../Components/employee/ranking";
import EventsRankingEmployee from "../Components/employee/ranking/events";
import EventTotalPronosticsEmployees from "../Components/employee/ranking/rankingEvent";
import UpdatePronostic from "../Components/employee/update_pronostic";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../Components/admin/dashboard/landing page";
import TabsLink from "../Components/TabsLink";
import { onAppBoot } from "../../_redux/actions/auth";
import TableEmployePartner from "../Components/Profile/Partner/tableEmploye";
import RankigEmployePartner from "../Components/Profile/Partner/rankingEmploye";
import GroupePartner from "../Components/Profile/Partner/groupes";
import ListPartners from "../Components/admin/Gestion Partner/PartnersList";
import AddNewCategorie from "../Components/admin/Gestion categorie/categorie";
import VerticalLinearStepper from "../Components/admin/Gestion Events";
import GestionResults from "../Components/admin/Gestion Results/index";
import GamesPartner from "../Components/Profile/Partner/games/index";
import PronosticHistory from "../Components/partner/pronosticEmployee/pronosticHistory";
import EventPronosticHistory from "../Components/partner/pronosticEmployee/eventPronosticHistory";
import EmptyPageModal from "../Components/partner/emptyPage/emptyPageModal";
import Loading from "../Components/Loading";
import ProfilePage from "../Components/Profile/profilePage";
import ForgotPassword from "../pages/forgotPassword/sendEmailPwd";
import ChangePassword from "../pages/forgotPassword/changePwd";
import CategorieAdmin from "../Components/admin/gestion match/all categorie";
import EventsAdmin from "../Components/admin/gestion match/all evnts";
import { MatchGroupesAdmin } from "../Components/admin/gestion match/allMatchs";
import CoeffCategoriesAdmin from "../Components/admin/coefficient/categories";
import CoeffEventsAdmin from "../Components/admin/coefficient/events";
import CoeffGamesAdmin from "../Components/admin/coefficient/games";
import CoeffGameAdmin from "../Components/admin/coefficient/game";
import DrawCategoriesAdmin from "../Components/admin/draw/categories";
import DrawEventsAdmin from "../Components/admin/draw/events";
import CategoriesPartnerAdmin from "../Components/admin/ranking/categories";
import EventsPartnerAdmin from "../Components/admin/ranking/events";
import RankingPartnerAdmin from "../Components/admin/ranking/rankingPartner";
import PronosticHistoryPartnerAdmin from "../Components/admin/ranking/pronosticHistory";
import UpdateMatchDate from "../Components/admin/gestion match/updateMatch";
import EditMatchResultMain from "../Components/admin/Gestion Results/editMatchResultMain";
import CategoriesPartner from "../Components/Profile/Partner/categoriesPartner";
import Events from "../Components/partner/PartnerRegister/events";
import Dashboard from "../Components/partner/dashboard";
import CategoriesGroups from "../Components/Profile/Partner/eventsGroups";
import Joker from "../Components/partner/jockerPage/jockerPronostic";

import PronosticPage from "../pages/common/produit/pronostic";
import FantasyPage from "../pages/common/produit/fantasy";
import GameRules from "../pages/common/gameRules";
import Empty from "../Components/admin/dashboard/landing page/empty";
import PageNews from "../pages/common/news";
import DrawCategories from "../Components/employee/draw/drawCategories";
import DrawEvents from "../Components/employee/draw/drawEvents";
import DisplayAllPartnerEvents from "../Components/Profile/Partner/Events/displayAllPartnerEvents";
import AddEquipes from "../Components/admin/Gestion equipes/CreateEquipes";
import DrawPronoctics16 from "../Components/employee/draw/drawPronoctics16";
import DrawPronoctics from "../Components/employee/draw/drawPronoctics";
import Commercial from "../Components/admin/Gestion commercial/addCommercial";
import AddPartnerCommer from "../Components/commercial/addPartnerCommer";
import CachoutCommercial from "../Components/commercial/cachOut";
import RankingEmployeePerEvent from "../Components/employee/ranking/rankingEvent/rankingPerEvent";
import Scrapper from "../Components/Currency/scrapper";
import Pay from "../pages/partner/pay/index";
import UpdateMatchEquipe from "../Components/admin/gestion match/updateMatchEquipe";
import GestionEquipe from "../Components/admin/Gestion equipes/index";
import Quiz from "../Components/admin/Gestion Quiz";
import GenerateQ from "../Components/admin/Gestion Quiz/generateQuizDetails";
import QuizGame from "../Components/employee/quizGame/quiz";
import WelcomeGame from "../Components/employee/quizGame/welcomeQuiz" ;
import QuizBuild from "../Components/admin/Gestion Quiz";
const RouterConfig = () => {
  const user = useAppSelector(({ auth: { currentUser } }) => currentUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => dispatch(onAppBoot()))();
  }, [dispatch]);

  switch (user?.role) {
    case "visiteur":
      return (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pronostic" element={<PronosticPage />} />
            <Route path="/game-rules" element={<GameRules />} />
            <Route path="/fantasy" element={<FantasyPage />} />
            <Route path="/news" element={<PageNews />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login/:verifytoken" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/addEquipe" element={<AddEquipes />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      );
    case "commercial":
      return (
        <>
          <LandingPage />
          <TabsLink />
          <Empty />
          <Routes>
            <Route path="/Cash-out" element={<CachoutCommercial />} />
            <Route path="/partner" element={<AddPartnerCommer />} />
          </Routes>
        </>
      );
    case "admin":
      return (
        <>
          <LandingPage />
          <TabsLink />
          <Empty />
          <Routes>
            <Route path="/" element={<AdminDashbord />} />
            <Route path="/Users" element={<ListPartners />} />
            <Route
              path="/Users/:partnerId"
              element={<CategoriesPartnerAdmin />}
            />
            <Route
              path="/Users/categories/events/:partnerId/:categorieId"
              element={<EventsPartnerAdmin />}
            />
            <Route
              path="/Users/categories/events/ranking/:partnerId/:eventId"
              element={<RankingPartnerAdmin />}
            />
            <Route
              path="/Users/categories/events/pronostics/history/:partnerId/:eventId/:employeeId"
              element={<PronosticHistoryPartnerAdmin />}
            />
            <Route path="/equipes" element={<GestionEquipe />} />
            <Route path="/catégories" element={<AddNewCategorie />} />
            <Route path="/Events" element={<VerticalLinearStepper />} />
            <Route path="/Resultats" element={<GestionResults />} />
            <Route path="/Matchs" element={<CategorieAdmin />} />
            <Route path="/allEvents/:id" element={<EventsAdmin />} />
            <Route path="/MatchGroup/:id" element={<MatchGroupesAdmin />} />
            <Route path="/coeff" element={<CoeffCategoriesAdmin />} />
            <Route
              path="/coeff/categories/events/:id"
              element={<CoeffEventsAdmin />}
            />
            <Route
              path="/coeff/categories/games/:id"
              element={<CoeffGamesAdmin />}
            />
            <Route
              path="/coeff/categories/game/:id"
              element={<CoeffGameAdmin />}
            />
            <Route
              path="/UpdateMatch/:match_id"
              element={<UpdateMatchDate />}
            />
            <Route
              path="/UpdateMatchEquipe/:match_id/:groupe_id/:event_id"
              element={<UpdateMatchEquipe />}
            />
            <Route path="/draw" element={<DrawCategoriesAdmin />} />
            <Route
              path="/draw/categories/events/:id"
              element={<DrawEventsAdmin />}
            />
            <Route
              path="/draw/categories/qualification/:id"
              element={<DrawPronoctics />}
            />
            <Route
              path="/draw/categories/qualification16/:id"
              element={<DrawPronoctics16 />}
            />
            <Route path="/Resultats/:id" element={<EditMatchResultMain />} />
            <Route path="/agent" element={<Commercial />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/quizz" element={<QuizBuild/>} />
            {/* <Route path="/generate-quiz" element={<GenerateQ/>} /> */}
            <Route path="/generate-quiz/:id" element={<GenerateQ />} />



          </Routes>
        </>
      );
    case "partner":
      return (
        <>
          <LandingPage />
          <TabsLink />
          <Empty />
          <Routes>
            <Route path="/employees" element={<TableEmployePartner />} />
            <Route path="/categories/events/:id" element={<Events />} />
            {/* <Route path="/ranking" element={<CategoriesRanking />} /> */}
            <Route path="/ranking" element={<RankigEmployePartner />} />
            <Route
              path="/ranking/events/:id"
              element={<EventPronosticHistory />}
            />
            <Route path="/ranking/:id" element={<EventPronosticHistory />} />
            <Route
              path="/partner-events"
              element={<DisplayAllPartnerEvents />}
            />
            <Route path="/eventGroups/:id" element={<GroupePartner />} />
            <Route
              path="/eventsGroups/events/:id"
              element={<GroupePartner />}
            />
            <Route path="/eventGroups" element={<CategoriesGroups />} />
            <Route path="/games/:id" element={<GamesPartner />} />
            {/* <Route
              path="/rankingEmployee/:event_id"
              element={<RankigEmployePartner />}
            /> */}
            {/* <Route
              path="/eventPronostic/:event_id/:id"
              element={<PronosticHistory />}
            /> */}
            <Route
              path="/pronosticHistory/:id"
              element={<PronosticHistory />}
            />
            {/* <Route
              path="/drawHistory/:event_id/:id"
              element={<DrawPronoctics />}
            /> */}
            <Route path="/emptyPage" element={<EmptyPageModal />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/categories" element={<CategoriesPartner />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="pay" element={<Pay />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login/:verifytoken" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/Jokers" element={<Joker />} />
          </Routes>
        </>
      );
    case "employee":
      return (
        <>
          <LandingPage />
          <TabsLink />
          {/* <SideBarEmploye/> */}
          <Empty />
          <Routes>
            <Route path="/" element={<DashboardEmployee />} />
            <Route path="/categories/events/:id" element={<EventsEmployee />} />
            <Route path="/categories/games/:id" element={<GamesEmployee />} />
            <Route
              path="/categories/game/:event_id/:id"
              element={<GameEmployee />}
            />
            <Route
              path="/pronostics/events/:id"
              element={<EventsPronosticsEmployee />}
            />
            <Route path="/pronostics/:id" element={<PronosticsEmployee />} />
            <Route
              path="/pronostics"
              element={<CategoriesPronosticsEmployee />}
            />
            <Route
              path="/ranking/categories"
              element={<CategoriesRankingEmployee />}
            />
            <Route
              path="/ranking"
              element={<EventTotalPronosticsEmployees />}
            />
            <Route
              path="/ranking/events/:id"
              element={<EventsRankingEmployee />}
            />
            <Route
              path="/ranking/:event_id"
              element={<RankingEmployeePerEvent />}
            />
            <Route
              path="/pronostics/game/:event_id/:id"
              element={<UpdatePronostic />}
            />
            <Route path="/drawCategories" element={<DrawCategories />} />
            <Route path="/drawCategories/events/:id" element={<DrawEvents />} />
            <Route path="/draw32/:id" element={<DrawPronoctics />} />
            <Route path="/draw16/:id" element={<DrawPronoctics16 />} />

            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/emptyPage" element={<EmptyPageModal />} />
            <Route path="/currency" element={<Scrapper />} />
            {/* <Route path="/quizz" element={<QuizGame/>} /> */}
            <Route path="/quizz/:id" element={<QuizGame/>} /> 
            <Route path="/quizz" element={<WelcomeGame/>} />


          </Routes>
        </>
      );

    default:
      return (
        <>
          <Loading />
        </>
      );
  }
};

export default RouterConfig;
