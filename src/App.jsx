import {Outlet, Link, NavLink} from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Bookkeeper</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <NavLink to="/invoices">Invoices</NavLink> |{" "}
                <NavLink to="/expenses">Expenses</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}