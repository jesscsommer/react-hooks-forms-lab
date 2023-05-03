import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [userQuery, setUserQuery] = useState('')

  function onSearchChange(event){
    setUserQuery(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filterByCategory = items.filter((item) => selectedCategory === 'All' || item.category === selectedCategory)

  const filterByName = items.filter(item => item.name.toLowerCase().includes(userQuery.toLowerCase()))

  const itemsToDisplay = items.filter(item => filterByCategory.includes(item) && filterByName.includes(item))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={userQuery} onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} userQuery={userQuery} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
