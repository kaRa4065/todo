import "./App.css";
import { useEffect, useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";
import Search from "./Search";
import ApiRequest from "./ApiRequest";

function App() {
  const API_URL = "http://localhost:3001/items";
  const [items, setItems] = useState([]);
  const [error, SetError] = useState(null);

  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        SetError(err.message);
      }
    };
    (async () => await fetchItems())();
  }, []);

  const adItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, Checked: false, item };
    const listing = [...items, addNewItem];
    setItems(listing);
    const postOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewItem),
    };
    const result = await ApiRequest(API_URL, postOption);
    if (result) SetError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    adItem(newItem);

    setNewItem("");
  };

  const handleChange = async (id) => {
    const listItems = items.map((listNew) =>
      listNew.id === id
        ? {
            ...listNew,
            checked: !listNew.checked,
          }
        : listNew
    );
    setItems(listItems);

    const myItem = listItems.filter((items) => items.id === id);

    const updateOption = {
      method: "PATCH",
      headers: { "Content Type": "application/json" },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await ApiRequest(reqUrl, updateOption);
    if (result) SetError(result);
  };
  const [search, setSearch] = useState("");

  const handleClick = async (id) => {
    const listedItems = items.filter((listed) => listed.id !== id);
    setItems(listedItems);
    const deleteOption = {
      method: "DELETE",
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await ApiRequest(reqUrl, deleteOption);
    if (result) SetError(result);
  };
  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search search={search} setSearch={setSearch} />
      <main>
        <Content
          handleChange={handleChange}
          handleClick={handleClick}
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          setItems={setItems}
          error={error}
          SetError={SetError}
        />
      </main>
      <Footer item={items} />
    </div>
  );
}

export default App;
