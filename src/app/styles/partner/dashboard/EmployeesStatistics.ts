import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  employeesSectionPaper: {
    background: "#c9e3f3 !important",
    width: "100% !important",
    height: "700px",
    padding: "20px",
    marginBottom: "25px",
    "@media (max-width:570px)": {
      width: "98vw !important",
    },
  },

  statisticsSectionPaper: {
    background: "#c9e3f3 !important",
    width: "100% !important",
    height: "700px",
    padding: "20px",
    marginBottom: "25px",
    "@media (max-width:899px)": {
      height: "1400px",
    },
    "@media (max-width:570px)": {
      height: "1200px",
      width: "98vw !important",
    },
    "@media (max-width:340px)": {
      background: "#FFF !important",
    },
    "@media (min-width:340px) and (max-width:370px)  ": {
      height: "1100px",
    },
  },

  searchEmpolyee: {
    height: "50px",
  },

  list: {
    overflowY: "auto",
    height: "600px",
    "@media (max-width:899px)": {
      height: "550px",
    },
  },

  event: {
    width: "225px",
    height: "50px",
    "@media (max-width:899px)": {
      width: "268px",
    },
    "@media (max-width:340px)": {
      width: "100%",
    },
  },

  selectedEmpolyee: {
    color: "rgb(33, 146, 255)",
    "& .css-10hburv-MuiTypography-root": {
      fontWeight: "bold",
    },
  },

  eventPlaceholder: {
    color: "rgba(100,100,100,.6)",
  },

  eventIcon: {
    color: "rgba(0, 0, 0, 0.54)",
  },

  staticsBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "600px",
    "@media (max-width:899px)": {
      height: "1340px",
    },
    "@media (max-width:570px)": {
      height: "1200px",
    },
    "@media (max-width:370px)": {
      height: "1000px",
    },
    "@media (min-width:340px) and (max-width:370px)  ": {
      height: "1060px",
    },
  },

  chartsPaper: {
    "@media (min-width:1160px)": {
      height: "90%",
      width: "400px",
    },
    "@media (min-width:1050px) and (max-width:1160px)": {
      height: "90%",
      width: "350px",
    },
    "@media (min-width:920px) and (max-width:1050px)": {
      height: "90%",
      width: "310px",
    },
    "@media (min-width:900px) and (max-width:920px)": {
      height: "90%",
      width: "300px",
    },
    "@media (max-width:899px)": {
      height: "320px !important",
      width: "70vw !important",
    },
    "@media (max-width:625px)": {
      height: "280px !important",
      width: "70vw !important",
    },
    "@media (max-width:570px)": {
      height: "250px !important",
      width: "80vw !important",
    },
    "@media (max-width:460px)": {
      height: "220px !important",
      width: "95vw !important",
    },
    "@media (max-width:370px)": {
      height: "200px !important",
      width: "95vw !important",
    },
    "@media (max-width:345px)": {
      height: "230px !important",
      width: "100vw !important",
    },
  },

  PieCharPaper: {
    height: "270px",
    width: "270px",
  },

  differnceChartPaper: {
    height: "270px",
    "@media (min-width:1160px)": {
      width: "525px",
    },
    "@media (min-width:1050px) and (max-width:1160px)": {
      width: "430px",
    },
    "@media (min-width:920px) and (max-width:1050px)": {
      width: "350px",
    },
    "@media (min-width:900px) and (max-width:920px)": {
      width: "325px",
    },
    "@media (max-width:899px)": {
      height: "320px !important",
      width: "70vw !important",
    },
    "@media (max-width:625px)": {
      height: "280px !important",
      width: "70vw !important",
    },
    "@media (max-width:570px)": {
      height: "250px !important",
      width: "80vw !important",
    },
    "@media (max-width:460px)": {
      height: "220px !important",
      width: "95vw !important",
    },
    "@media (max-width:370px)": {
      height: "200px !important",
      width: "95vw !important",
    },
    "@media (max-width:345px)": {
      height: "230px !important",
      width: "100vw !important",
    },
  },
}));
