import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { GetPartnerSolde } from "../../../../../_redux/actions/solde";

const PartnerSolde = () => {
  const dispatch = useAppDispatch();
  const { partnerSolde } = useAppSelector((state) => state.soldeSlice);
  useEffect(() => {
    dispatch(GetPartnerSolde());
  }, []);

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <Typography variant="h4" style={{ fontFamily: "fantasy !important" }}>
          Crédit :{" "}
          {partnerSolde.totalSolde ? partnerSolde.totalSolde + " DT" : "0 DT"}
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <Typography variant="h6">
          Crédit:{" "}
          {partnerSolde.totalSolde ? partnerSolde.totalSolde + "DT" : "0 DT"}
        </Typography>
      </Box>
    </>
  );
};
export default PartnerSolde;
