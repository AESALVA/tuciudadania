import { Container, Dropdown, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const NavbarMain = ({
  usuarioLogueado,
  setUsuarioLogueado,
  searchState,
  setSearchState,
  setCategory,
}) => {
  const cerrarSesion = () => {
    localStorage.removeItem("usuarioLogueado");
    setUsuarioLogueado();
  };

  return (
    <>
      <Navbar bg="dark" expand="md" className="bg-navbar">
        <Container className="icon-tog">
          <img
            src={require("../views/images/logo.jpg")}
            className="centrar-logo mx-2 my-4 m-4"
            height="70"
            alt="logo"
          />
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="navBarMobile">
            <div className="d-flex justify-content-center">
              <div className="icono-call text-dark mb-1 mx-2">
                <Link to="/" className="navIcons">
                  <ion-icon name="home"></ion-icon>
                  <span className="textNav">Inicio</span>
                </Link>
              </div>
              <div className="icono-call  text-dark mb-1 mx-2">
                <Link to="/PaginaContacto" className="navIcons">
                  <ion-icon name="call"></ion-icon>
                  <span className="textNav">Contacto</span>
                </Link>
              </div>
                <div className="serviciosDropDown">
                  <div className="mainServicios icono-call">
                    <Link className="item-text textNav navIcons">Servicios</Link>
                  </div>
                  <ul className="menuServicios">
                    <li className="menuItem">Servicio Uno</li>
                    <li className="menuItem">Servicio Dos</li>
                    <li className="menuItem">Servicio Tres</li>
                    <li className="menuItem">Servicio Cuarto</li>
                  </ul>
                </div>

              {/* <div className="navIcons">
                <Dropdown className="navIcons">
                  <Dropdown.Toggle>
                    <ion-icon name="call"></ion-icon>
                    <span className="textNav">Servicios</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div> */}
            </div>
            <Form className="ocultar-buscador">
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2 "
                aria-label="Search"
                size="sm"
                value={searchState}
                onChange={(e) => setSearchState(e.target.value)}
              />
              {searchState ? (
                <Link to="/search" className="SearchIconMobile">
                  <FaSistrix className="d-flex" />
                </Link>
              ) : (
                <Link className="SearchIconMobile">
                  <FaSistrix className="d-flex" />
                </Link>
              )}
            </Form>
            <Nav className="icono-call">
              <div className="navIconsContainer">
                {usuarioLogueado ? (
                  <>
                    <NavLink
                      to="/"
                      onClick={cerrarSesion}
                      className={"navIcons"}
                    >
                      <ion-icon name="log-in-outline" size={3}></ion-icon>
                      <span className="textNav">Logout</span>
                    </NavLink>
                  </>
                ) : (
                  <>
                    {usuarioLogueado && usuarioLogueado.rol === "admin" ? (
                      <>
                        <NavLink to="/administrar" className={"navIcons"}>
                          <ion-icon name="log-in-outline" size={3}></ion-icon>
                          <span className="textNav">Administrar</span>
                        </NavLink>
                        <NavLink
                          to="/"
                          onClick={cerrarSesion}
                          className={"navIcons"}
                        >
                          <ion-icon name="log-in-outline" size={3}></ion-icon>
                          <span className="textNav">Logout</span>
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink to="/usuario/login" className={"navIcons"}>
                          <ion-icon name="log-in-outline" size={3}></ion-icon>
                          <span className="textNav">Login</span>
                        </NavLink>
                        <NavLink to="/usuario/registro" className={"navIcons"}>
                          <ion-icon name="calendar"></ion-icon>
                          <span className="textNav">Registrarse</span>
                        </NavLink>
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="d-flex ">
                <ul className="SocialHeader">
                  <li>
                    <Link to="/error404" className="">
                      <FaFacebookF />
                    </Link>
                    <Link to="/error404" className="">
                      <FaTwitter />
                    </Link>
                    <Link to="/error404" className="">
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sec-nav">
                <hr className="text-white" />
                <h3 className="text-white fs-5">SECCIONES</h3>
                <Container className="d-flex justify-content-end flex-column">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Deporte")}
                  >
                    Deportes
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Economia")}
                  >
                    Economia
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Mundo")}
                  >
                    Mundo
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Espectaculos")}
                  >
                    Espectaculos
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Politica")}
                  >
                    Politica
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/category"}
                    onClick={() => setCategory("Opinion")}
                  >
                    Opinion
                  </Link>
                </Container>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
