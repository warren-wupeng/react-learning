import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import CounterButton from "./components/CounterButton";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  const handleClick = () => {
    setAlertVisible(true);
  };

  const handleClose = () => {
    setAlertVisible(false);
  };

  return (
    <div>
      <CounterButton />
      <CounterButton />
      {alertVisible && (
        <Alert show={alertVisible} onClose={handleClose}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button color="dark" onClick={handleClick}>
        Show Alert
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
