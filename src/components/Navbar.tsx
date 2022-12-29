import { Button, Container, Nav, Navbar as NavBarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavBarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <svg
            viewBox="0 0 14 14"
            role="img"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#5F9EA0"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g transform="translate(.13043484 .04347832) scale(.28986)">
                {" "}
                <g fill="#5F9EA0">
                  {" "}
                  <path d="M18 32c-1.1 0-2-.9-2-2V20h-4v10c0 3.3 2.7 6 6 6h19v-4H18z"></path>{" "}
                  <path d="M12.8 10l-.4-1.3C11.8 7.1 10.3 6 8.6 6H5v4h3.6l5.5 16.6c.3.8 1 1.4 1.9 1.4h19c.8 0 1.5-.5 1.8-1.2L44.4 10H12.8z"></path>{" "}
                </g>{" "}
                <circle cx="5" cy="8" r="2" fill="#5F9EA0"></circle>{" "}
                <g fill="#5F9EA0">
                  {" "}
                  <circle cx="34" cy="39" r="3"></circle>{" "}
                  <circle cx="19" cy="39" r="3"></circle>{" "}
                </g>{" "}
                <g fill="#5F9EA0">
                  {" "}
                  <circle cx="34" cy="39" r="1"></circle>{" "}
                  <circle cx="19" cy="39" r="1"></circle>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            5
          </div>
        </Button>
      </Container>
    </NavBarBs>
  );
}
