import { Container, Nav, Navbar } from "react-bootstrap";
const AppNav = ({ children }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container>
        <Navbar.Brand href="Home" className="navbar-brand">
          <img src="./assets/logo.png"  alt="logo" className="w-100"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">{children}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNav;
