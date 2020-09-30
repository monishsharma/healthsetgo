import React, { useState } from "react";
import "./Categories.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Modal from "../../components/Modal/Modal";
import Card from "../../components/Card/Card";

function Categories(props) {
  const [columns, setColumns] = useState(["Sno", "Name", "Description"]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState([]);


  const addNewCategory = async () => {
    let payload = {
      Name: name,
      Icons: URL.createObjectURL(icon),
      Description: description,
    };
    await props.addCategory(payload);
    props.hideModal();
  };

  return (
    <div>
      <Modal child = "categories">
        <div className="modal__category">
          <h3>Add Category</h3>
          <div className="model__category__input input">
            <label>Enter Category Name</label>
            <input type="text" placeholder = "Enter Name" onChange={(e) => setName(e.target.value)} />
            <label>Enter Category Description</label>
            <input
              type="text" placeholder = "Enter Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <input type="file"  onChange={(e) => setIcon(e.target.files[0])} />
          <div className="category__add">
            <button onClick={() => addNewCategory()}>Add</button>
          </div>
        </div>
      </Modal>

      <div className="category">
        <div className="category__container">
          <div className="category__add">
            <button onClick={() => props.showModal()}>Add Category</button>
          </div>
        </div>
        <div className="category__body">
          <h1>List of All Category</h1>
          <Card categories={props.categories}></Card>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.items.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch(actions.showModal()),
    addCategory: (payload) => dispatch(actions.addCategory(payload)),
    hideModal: () => dispatch(actions.hideModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
