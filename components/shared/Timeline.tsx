import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";

import {
  EXPERIENCE_TIMELINE
} from '../../variables'

const steps = [
  {
    label:
      "Tagbilaran Information & Communications Technology Office (T.I.C.T.O.)",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Xurpas, Inc.",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
];

function Timeline() {
  return (
    <>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper orientation="vertical">
          {EXPERIENCE_TIMELINE && EXPERIENCE_TIMELINE.map((timeline, idx) => (
            <Step
              key={idx}
              active={true}
              sx={{
                "& .MuiStepLabel-root .Mui-active": {
                  color: "#00b6ff",
                  fontSize: "1.5rem"
                },
                "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
                  color: "#ffffff",
                },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "#ffffff",
                  fontSize: "1.2rem",
                  fontWeight: "bold"
                },
              }}
            >
              <StepLabel>
                <p className="timeline-title">{timeline.title}</p>
                <p className="timeline-subtitle">{timeline.subtitle}</p>
              </StepLabel>
              <StepContent>
                <ul className="timeline-list">
                  {timeline.texts && timeline.texts.map((text, tIdx) => {
                    return (
                      <li key={tIdx} className="timeline-listitem">{text}</li>
                    )
                  })}
                </ul>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}

export default Timeline;
