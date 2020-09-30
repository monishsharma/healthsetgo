import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import "./Home.css";
import NewItem from "../../components/NewItem/NewItem";

function Home(props) {
  const [column, setcolumn] = useState([
    "Sno",
    "Email",
    "Name",
    "Phone",
    "document",
    "category",
    "action",
  ]);

  useEffect(() => {
    setfilteredItems(props.items);
  }, [props.items]);

  const [filteredItems, setfilteredItems] = useState(props.items);
  const [category, setcategory] = useState(0);

  let select = (
    <select onChange={(e) => filterData(e.target.value)} className="select">
      <option disabled selected>
        Select Category
      </option>
      <option value={0}>Remove Filter</option>
      {props.categories.map((category, index) => {
        return (
          <option key={index} value={category.id}>
            {category.Name}
          </option>
        );
      })}
    </select>
  );

  const filterData = (value) => {
    if (parseInt(value) !== 0) {
      let updatedArray = [];
      let itemsCopy = [...props.items];
      updatedArray = itemsCopy.filter((item) => {
        return parseInt(item.category) === parseInt(value);
      });
      setfilteredItems(updatedArray);
    } else {
      setfilteredItems(props.items);
    }
  };

  return (
    <div>
      <Modal child = "home">
        <NewItem />
      </Modal>
      <div className="category">
        <div className="category__container">
          <div className="category__add">
            <button onClick={() => props.showModal()}>Add Items</button>
          </div>
          <div className="category__add">{select}</div>
        </div>
        <div className="category__body">
          <h1>List of All Items</h1>
          <Table rows={filteredItems} columns={column} />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    categories: state.items.categories,
    items: state.items.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch(actions.showModal()),
    addCategory: (payload) => dispatch(actions.addCategory(payload)),
    hideModal: () => dispatch(actions.hideModal()),
    addItem: (payload) => dispatch(actions.addItem(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
