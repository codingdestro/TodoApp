import { styled } from "@stitches/react";
const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "10em",
  "& h2": {
    background: "white",
    borderRadius: "1rem",
    padding: "1rem 2em",
    textTransform: "capitalize",
    boxShadow: "1px 5px 19px rgba(0,0,0,.6)",
    textAlign: "center",
    wordWrap: "break-word",
  },
});

const Header = () => {
  return (
    <>
      <Container>
        <h2>welcome to todo bucket</h2>
      </Container>
    </>
  );
};

export default Header;
