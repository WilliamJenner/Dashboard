import * as React from "react";
import { Triangle } from "react-feather";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, } from "react-bootstrap";
import { SmallFeatherProps } from "../utils/featherProps";
const NavigationBar = () => {
    return (React.createElement(Navbar, { bg: "light", expand: "lg" },
        React.createElement(Navbar.Brand, { href: "#home" },
            React.createElement(Triangle, Object.assign({}, SmallFeatherProps, { className: "small-horizontal-margin" })),
            "Weekly Digest"),
        React.createElement(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
        React.createElement(Navbar.Collapse, { id: "basic-navbar-nav" },
            React.createElement(Nav, { className: "mr-auto" },
                React.createElement(Nav.Link, { href: "/home" }, "Home"),
                React.createElement(Nav.Link, { href: "/shopping-list" }, "Shopping List"),
                React.createElement(NavDropdown, { title: "Dropdown", id: "basic-nav-dropdown" },
                    React.createElement(NavDropdown.Item, { href: "/action/3.1" }, "Action"),
                    React.createElement(NavDropdown.Item, { href: "/action/3.2" }, "Another action"),
                    React.createElement(NavDropdown.Item, { href: "/action/3.3" }, "Something"),
                    React.createElement(NavDropdown.Divider, null),
                    React.createElement(NavDropdown.Item, { href: "/action/3.4" }, "Separated link"))),
            React.createElement(Form, { inline: true },
                React.createElement(FormControl, { type: "text", placeholder: "Search", className: "mr-sm-2" }),
                React.createElement(Button, { variant: "outline-success" }, "Search")))));
};
export default NavigationBar;
//# sourceMappingURL=NavBar.js.map