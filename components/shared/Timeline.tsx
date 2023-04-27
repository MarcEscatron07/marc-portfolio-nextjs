import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

import {
  EXPERIENCE_TIMELINE
} from '../../variables'

function Timeline() {
  return (
    <>
      <Box>
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
              <StepLabel icon={timeline.order}>
                <p className="timeline-title">{timeline.title}</p>
                <p className="timeline-subtitle">{timeline.subtitle}</p>
              </StepLabel>
              <StepContent>
                <div className="timeline-container">
                  <ul className="timeline-list">
                    {timeline.texts && timeline.texts.map((text, tIdx) => {
                      return (
                        <li key={tIdx} className="timeline-listitem">{text}</li>
                      )
                    })}
                  </ul>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}

export default Timeline;
