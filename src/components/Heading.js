import styled from "styled-components";

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;
const H1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 70px;
  margin-bottom: 1em;
`;

export const Heading = () => {
  return (
    <Header>
      <H1>Clicksplash</H1>
    </Header>
  );
};
