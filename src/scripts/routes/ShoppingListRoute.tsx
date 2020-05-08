import * as React from "react";
import { createContainer } from "unstated-next";
import { ListGroup, Form, Row, Col } from "react-bootstrap";

const useShoppingList = (initialState: Array<string> = []) => {
  let [shopping, setList] = React.useState(initialState);
  let add = (item: string) => setList([...shopping, item]);
  let remove = (value: string) =>
    setList(shopping.filter((elem) => elem != value));

  return { shopping, add, remove };
};

let ShoppingList = createContainer(useShoppingList);

const ListDisplay = () => {
  let list = ShoppingList.useContainer();
  let [selectedItem, setSelectedItem] = React.useState("");
  let [textInput, setTextInput] = React.useState("");

  return (
    <div>
      <Row>
        <Col sm={8}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Large text"
            onChange={(e) => {
              setTextInput(e.target.value);
            }}
          />
        </Col>
        <Col sm={4}>
          <button
            onClick={() => {
              list.add(textInput);
            }}
          >
            Add {textInput}
          </button>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <h1>Remove {selectedItem}</h1>
        </Col>
        <Col sm={4}>
          <button
            onClick={() => {
              list.remove(selectedItem);
            }}
          >
            Remove selected
          </button>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <ListGroup>
            {list.shopping.map((item) => {
              return (
                <ListGroup.Item
                  onClick={() => {
                    setSelectedItem(item);
                  }}
                >
                  {item}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

const ShoppingListRoute: React.FC = () => {
  return (
    <ShoppingList.Provider initialState={["beans", "more beans"]}>
      <ListDisplay />
    </ShoppingList.Provider>
  );
};

export default ShoppingListRoute;
