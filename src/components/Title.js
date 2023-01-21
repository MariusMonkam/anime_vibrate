import { styled, Typography } from "@mui/material";
import { vibrate } from "../keyframes/vivrate";
import { randomCssRgba } from "../utils/utils";

export const Title = styled(Typography)(({ i }) => ({
  color: "white",
  padding: "10px",
  "&:hover": {},
  border: `${i + 1}px solid ${randomCssRgba()}`,
  boxShadow: `${10 + i}px ${10 - i}px ${5 + i}px 1px ${randomCssRgba()}`,
  background: `linear-gradient(${
    18 + i
  }deg, ${randomCssRgba()} 0%, rgba(35, 148, 94, 0.29) 84%, ${randomCssRgba()} 100%)`,

  animation: `${vibrate} ${
    (i + 2) / 5
  }s infinite cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
}));
