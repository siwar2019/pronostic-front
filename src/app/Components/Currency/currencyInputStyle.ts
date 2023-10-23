import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  group: {
    width: "100%",
    height: "auto",
    position: "relative",
    display: "flex",
    alignItems: "cener",
    justifyContent: "center",
    padding: "1rem",
    gap: ".5rem",
    border: "1px solid #ccc",
  },

  select: {
    background: "none",
    border: 0,
    color: "#fff",
    padding: "15px",
  },

  input: {
    paddingLeft: "10px",
    background: "none",
    border: 0,
    color: "#fff",
  },

  wrap: {
    flex: 1,
    width: "100%",
  },

  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "1rem",
  },

  card: {
    backgroundColor: "white",
    width: "100%",
    maxWwidth: "600px",
    height: "auto",
    minHeight: "500px",
    borderRadius: "10px",
    padding: "3rem 4rem",
    textAlign: "center",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:500px)": {
      padding: "2rem 2.5rem",
    },
  },

  symbol: {
    padding: "0.75rem",
    paddingLeft: 0,
    fontSize: ".9rem",
  },

  amount: {
    display: "block",
    width: "100%",
    padding: "0.75rem",
    color: "#212529",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    appearance: "none",
    borderRadius: "0.25rem",
  },

  invertCurrency: {
    display: "block",
    cursor: "pointer",
  },

  convertButton: {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.25rem",
    color: "white",
    background: "rgb(33, 146, 255)",
    border: 0,
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
  },

  result: {
    fontSize: "2.5rem",
    marginBottom: 0,
    visibility: "hidden",
    marginTop: "2rem",
  },

  app: {
    // height: "100vh",
    width: "100%",
    position: "relative",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem 15px",
    "@media (max-width:760px)": {
      height: "auto",
    },
  },

  currencies: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "2rem 0",
    gap: "2rem",
    "@media (max-width:500px)": {
      flexDirection: "column",
      gap: "1rem",
    },
  },

  inputGroup: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
  },
}));
