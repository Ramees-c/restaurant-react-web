import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

function CustomButton({
  backgroundColor,
  color,
  buttontext,
  welcemeBtn,
  guideBtn,
  getStartedBtn,
}) {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin:
        (welcemeBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (welcemeBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <CustomButton>{buttontext}</CustomButton>;
}

export default CustomButton;