import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";
import { useStyles } from "./gamesStyles";
import { useAppSelector } from "../../../../../hooks/reduxHooks";
import { IGroupesEquipe } from "../../../../../types/groupes";

const CollapseGroupes: React.FC<{
  data: IGroupesEquipe;
  index: number;
  children: any;
}> = ({ data, index, children }) => {
  const [visible, setVisible] = useState(false);

  const classes = useStyles();
  const GroupesEquipe = useAppSelector(
    ({ matchsSlice: { groupeEquipe } }) => groupeEquipe
  );
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={
            visible ? (
              <RemoveIcon sx={{ color: "white" }} />
            ) : (
              <AddIcon sx={{ color: "white" }} />
            )
          }
          sx={{
            ...(index % 1 === 0 && {
              background: "-webkit-linear-gradient(left, #2192ff, #092B4C)",
            }),
            borderColor: "white",
            borderRadius: "8px",
          }}
          onClick={() => setVisible(!visible)}
        >
          <Typography
            style={{
              color: "white",
            }}
          >
            {GroupesEquipe.find((el) => el.name === data.name).name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            borderRadius: "8px",
          }}
        >
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CollapseGroupes;
