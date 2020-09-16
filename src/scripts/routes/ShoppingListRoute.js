import * as React from "react";
import { createContainer } from "unstated-next";
import { ListGroup, Form, Row, Col } from "react-bootstrap";
const useShoppingList = (initialState = []) => {
    let [shopping, setList] = React.useState(initialState);
    let add = (item) => setList([...shopping, item]);
    let remove = (value) => setList(shopping.filter((elem) => elem != value));
    return { shopping, add, remove };
};
let ShoppingList = createContainer(useShoppingList);
const ListDisplay = () => {
    let list = ShoppingList.useContainer();
    let [selectedItem, setSelectedItem] = React.useState("");
    let [textInput, setTextInput] = React.useState("");
    return (React.createElement("div", null,
        React.createElement(Row, null,
            React.createElement(Col, { sm: 8 },
                React.createElement(Form.Control, { size: "lg", type: "text", placeholder: "Large text", onChange: (e) => {
                        setTextInput(e.target.value);
                    } })),
            React.createElement(Col, { sm: 4 },
                React.createElement("button", { onClick: () => {
                        list.add(textInput);
                    } },
                    "Add ",
                    textInput))),
        React.createElement(Row, null,
            React.createElement(Col, { sm: 8 },
                React.createElement("h1", null,
                    "Remove ",
                    selectedItem)),
            React.createElement(Col, { sm: 4 },
                React.createElement("button", { onClick: () => {
                        list.remove(selectedItem);
                    } }, "Remove selected"))),
        React.createElement(Row, null,
            React.createElement(Col, { sm: 12 },
                React.createElement(ListGroup, null, list.shopping.map((item) => {
                    return (React.createElement(ListGroup.Item, { onClick: () => {
                            setSelectedItem(item);
                        } }, item));
                }))))));
};
const ShoppingListRoute = () => {
    return (React.createElement(ShoppingList.Provider, { initialState: ["beans", "more beans"] },
        React.createElement(ListDisplay, null)));
};
export default ShoppingListRoute;
//# sourceMappingURL=ShoppingListRoute.js.map