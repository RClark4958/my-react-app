import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
const Main = () => <h2>Main</h2>;

const DPS = () => <div><h2>DPS</h2><img src="https://ksr-ugc.imgix.net/assets/012/589/974/3c7dbf4123b40ef5d2860ca272b120b4_original.jpg?ixlib=rb-1.1.0&crop=faces&w=1552&h=873&fit=crop&v=1464730263&auto=format&frame=1&q=92&s=a45db33e259dbf0551581dba11ac6424"  height="200px" alt="texas"></img></div>

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
    
  <h2>Healer-type</h2>
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

const Divine = ({ routes }) => (
  <div>
    <h3>Divine</h3>
    <ul>
      <li>
        <Link to="/healer/divine/priest">Priest</Link>
      </li>
      <li>
        <Link to="/healer/divine/apothecary">Apothecary</Link>
      </li>
    </ul>

  {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);


const Priest = () => <div><h3>Priest</h3><img src="https://cdn3.vectorstock.com/i/1000x1000/38/02/priest-female-warrior-fantasy-medieval-action-rpg-vector-22363802.jpg" height="200px" alt="female"></img></div>;

const Apothecary = () => <div><h3>Apothecary</h3><img src="https://images-cdn.fantasyflightgames.com/filer_public/fc/37/fc37bf00-6bdb-4dc7-a7f5-a17c027288b2/ora01_elf_apothecary.png" height="200px" alt="fiesty"></img></div>;

const Magical = () => <div><h3>Magical</h3><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBUApgdwfdhjPmDoFv1Snxr3UaSsFFXHrpRgeuuJf5N2QVoXe" height="200px" alt="man"></img></div>;

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
        component: Divine,
        routes: [
           {
             path:"/healer/divine/priest",
             component: Priest
           },
           {
             path:"/healer/divine/apothecary",
             component: Apothecary
           }
         ]
      },

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