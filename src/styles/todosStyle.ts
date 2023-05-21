import { styled } from "@stitches/react";
export const Container = styled("div", {
  marginTop: "1em",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  height: "58vh",
  overflow: "auto",
  fontSize: "18px",
});

export const TodoBox = styled("div", {
  background: "white",
  padding: ".5em 1em",
  borderRadius: ".2em",
  display: "flex",
  gap: "5px",
  alignItems: "center",
  position: "relative",
  justifyContent: "space-between",
  transition: ".4s",
  "&.done::after": {
    transition: ".3s",
    background: "Black",
    scale: 1,
  },
  "&.done": {
    color: "rgba(0,0,0,0.4)",
  },
  "&::after": {
    content: "",
    position: "absolute",
    width: "70%",
    scale: 0,
    transition: ".4s",
    height: 1,
    background: "grey",
    left: "45%",
    top: "50%",
    translate: "-50% -50%",
  },
});

export const CheckBox = styled("button", {
  width: 16,
  height: 16,
  border: "2px solid gray",
  borderRadius: ".2rem",
  cursor: "pointer",
  "&.done": {
    background: "lightblue",
  },
});

export const Card = styled("div", {
  width: 200,
  wordWrap: "break-word",
  userSelect: "none",
  cursor: "pointer",
});
export const BoxContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});

export const UpdateButton = styled("div", {
  backgroundSize: "cover",
  width: 18,
  height: 18,
  cursor: "pointer",
});
