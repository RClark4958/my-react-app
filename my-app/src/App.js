import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
const Main = () => <h2>Main</h2>;

const DPS = () => <h2>DPS</h2>;

// const RPG = ({ routes }) => (
//   <div>
//     <h2>RPG</h2>
//     <ul>
//       <li>
//         <Link to="/rpg/healer">Healer</Link>
//       </li>
//       <li>
//         <Link to="/rpg/dps">DPS</Link>
//       </li>
//     </ul>

//     {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//   </div>
// );

const Healer = ({ routes }) => (
  <div>
    
  <h2>Healer Type</h2>
  <ul>
    <li>
      <Link to="/healer/divine">Divine</Link>
    </li>
    <li>
      <Link to="/healer/magical">Magical</Link>
    </li>
  </ul>

  {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

// const DPS = () => <h3>DPS</h3>;

const Divine = () => <h3>Divine</h3>;

const Magical = () => <h3>Magical</h3>;

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: "/dps",
    component: DPS
  },
  {
    path: "/healer",
    component: Healer,
    routes: [
      {
        path: "/healer/divine/",
        component: Divine
      },
      //    routes: [
      //      {
      //        path:"/tacos/bus/seat",
      //        component: Seat
      //      },
      //      {
      //        path:"/tacos/bus/wheel",
      //        component: Wheel
      //      }
      //    ]
      // },

      {
        path: "/healer/magical",
        component: Magical
      }
    ]
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const RouteConfigExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/dps">DPS</Link>
        </li>
        <li>
          <Link to="/healer">Healer</Link>
        </li>
      </ul>

      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </Router>
);

export default RouteConfigExample;