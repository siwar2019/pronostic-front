import {
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function EventSelect() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ranking/categories/`);
  };
  return (
    <div>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Display Rank per Event</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Select Category</Typography>
        </AccordionDetails>
      </Accordion> */}

      <Button variant="contained" type="submit" onClick={() => handleClick()}>
        Display by Event
      </Button>
    </div>
  );
}
