import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { BrowserRouter, Route } from "react-router-dom";
import FontAwesome from "../components/FontAwesome";

class Sidenav extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                  onSelect={(selected) => {
                    const to = "/" + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="font-awesome">
                    <NavItem eventKey="font-awesome">
                      <NavIcon></NavIcon>
                      <NavText>Font Awesome</NavText>
                    </NavItem>

                    <NavItem eventKey="selector-de-fechas">
                      <NavIcon></NavIcon>
                      <NavText>Selctor de fechas</NavText>
                    </NavItem>

                    <NavItem eventKey="reproductor-de-video">
                      <NavIcon></NavIcon>
                      <NavText>Reproductor de video</NavText>
                    </NavItem>

                    <NavItem eventKey="datatables">
                      <NavIcon></NavIcon>
                      <NavText>DataTables</NavText>
                    </NavItem>

                    <NavItem eventKey="grafica-de-barras">
                      <NavIcon></NavIcon>
                      <NavText>Grafica de barras</NavText>
                    </NavItem>

                    <NavItem eventKey="grafica-circular">
                      <NavIcon></NavIcon>
                      <NavText>Grafica Circular</NavText>
                    </NavItem>

                    <NavItem eventKey="modal">
                      <NavIcon></NavIcon>
                      <NavText>Modal (Pop up)</NavText>
                    </NavItem>

                    <NavItem eventKey="cookies">
                      <NavIcon></NavIcon>
                      <NavText>Cookies</NavText>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>
                <main>
                  <Route
                    path="./font-awesome"
                    exact
                    component={(props) => <FontAwesome />}
                  />
                </main>
              </React.Fragment>
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}
export default Sidenav;
