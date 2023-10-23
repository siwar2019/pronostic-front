import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { GetEmployeeSolde } from "../../../../../_redux/actions/solde";

const EmployeeSolde = () => {
  const dispatch = useAppDispatch();
  const { employeeSolde } = useAppSelector((state) => state.soldeSlice);
  useEffect(() => {
    dispatch(GetEmployeeSolde());
  }, []);

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <Typography variant="h4" style={{ fontFamily: "fantasy !important" }}>
          Crédit :{" "}
          {employeeSolde.totalSolde ? employeeSolde.totalSolde + " DT" : "0 DT"}
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <Typography variant="h6">
          Crédit:{" "}
          {employeeSolde.totalSolde ? employeeSolde.totalSolde + "DT" : "0 DT"}
        </Typography>
      </Box>
    </>
  );
};
export default EmployeeSolde;
