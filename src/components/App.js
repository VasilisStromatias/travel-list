import Logo from "../components/Logo";
import Form from "../components/Form";
import PackingList from "../components/PackingList";
import Stats from "../components/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheckbox = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearList = () => {
    const confirmed = window.confirm(
      "Are you sure that you want to clear the list?"
    );

    if (confirmed) setItems([]);
  };

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={setItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleCheckbox={handleCheckbox}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
