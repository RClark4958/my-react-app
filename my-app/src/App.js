import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Food = () => <h2>Food</h2>;
const Drinks = ({ routes }) => (

    <div>

        <h2>Drinks</h2>
            <ul>
                <li>
                    <Link to="/drinks/soda">Soda</Link>
                </li>
                <li>
                    <Link to="/drinks/juice">Juice</Link>
                </li>
            </ul>

            {routes.map((route, i) => <RouteWithSubRoutes key ={i} {...route} />)}

    </div>
);

const Soda = () => <h3>Soda</h3>;
const Juice = () => <h3>Juice</h3>;

const routes = [
    {
        path: "/drinks",
        component: Drinks,
        routes: [
            {
                path:"/drinks/soda",
                component: Soda
            },
            {
                path: "/drinks/juice",
                component: Juice
            }
        ]
    }  
];

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

const RickRick = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/Drinks">Drinks</Link>
                </li>
            </ul>

            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
    </Router>
);

export default RickRick;