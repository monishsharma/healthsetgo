import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { validate } from "../../store/utils/helpers";

function NewItem(props) {
  const [currentItem, setcurrentItem] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [description, setdescription] = useState("");
  const [phone, setphone] = useState("");
  const [document, setdocument] = useState(0);
  const [category, setcategory] = useState(0);
  const [error, seterror] = useState([]);

  let select = (
    <select
      value={category}
      onChange={(e) => setcategory(e.target.value)}
      className="select"
    >
      <option disabled selected>
        Select Category
      </option>
      {!props.modalState && <option value={0}>Remove Filter</option>}
      {props.categories.map((category, index) => {
        return (
          <option key={index} value={category.id}>
            {category.Name}
          </option>
        );
      })}
    </select>
  );
  useEffect(() => {
    if (props.id !== undefined && props.id !== 0) {
      let itemToBeEdited = [];
      itemToBeEdited = props.items.filter((item) => {
        return parseInt(item.id) === parseInt(props.id);
      });
      setcurrentItem(itemToBeEdited);
      console.log(currentItem);
    }
  }, [props.id]);

  useEffect(() => {
    if (currentItem.length > 0) {
      setdescription(currentItem[0].Description);
      setname(currentItem[0].Name);
      setemail(currentItem[0].Email);
      setphone(currentItem[0].Phone);
      setdocument(currentItem[0].document);
      setcategory(currentItem[0].category);
    }
  }, [currentItem]);

  const Validate = (name, email, description, phone) => {
    let errors = [];
    seterror([]);
    if (name.length <= 0) {
      errors.push({
        name: "Name can't be empty",
      });
    }

    if (!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
      errors.push({
        email: "Email is invalid",
      });
    }
    if (description.length <= 0) {
      errors.push({
        description: "Description can't be empty",
      });
    }

    if (phone.length <= 0) {
      errors.push({
        phone: "number can't be empty",
      });
    }

    if (phone.length > 10 || phone.length < 10) {
      errors.push({
        phone: "number can't be greater or less than 10",
      });
    }
    if (document === 0) {
      errors.push({
        document: "Please Select Document type",
      });
    }
    if (category === 0) {
      errors.push({
        category: "Please select category type",
      });
    }
    seterror(errors);
    if (errors.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  const addNewItem = (e) => {
    e.preventDefault();

    let payload = {
      Email: email,
      Name: name,
      Description: description,
      Phone: phone,
      document: document,
      category: category,
      action: true,
    };
    if (Validate(name, email, description, phone, document, category)) {
      console.log(payload);
      if (currentItem.length > 0) {
        props.editItem(currentItem[0].id, payload);
        props.hideModal();
      } else {
        props.addItem(payload);
        props.hideModal();
      }
    }
  };

  return (
    <div>
      <div className="modal__category">
        <h3>Add Items</h3>
        <form onSubmit={(e) => addNewItem(e)}>
          <div className="model__category__input">
            <label>Enter Name</label>
            <input
              value={name}
              placeholder="Enter Name"
              type="text"
              onChange={(e) => setname(e.target.value)}
            />
            {error.map((err, index) => {
              return (
                <p className="error" key={index}>
                  {err.name}
                </p>
              );
            })}

            <label>Enter Email</label>
            <input
              value={email}
              placeholder="Enter Email"
              type="text"
              onChange={(e) => setemail(e.target.value)}
            />
            {error.map((err, index) => {
              return (
                <p className="error" key={index}>
                  {err.email}
                </p>
              );
            })}

            <label>Enter Description</label>
            <input
              value={description}
              placeholder="Enter Description"
              type="text"
              onChange={(e) => setdescription(e.target.value)}
            />
            {error.map((err, index) => {
              return (
                <p className="error" key={index}>
                  {err.description}
                </p>
              );
            })}

            <label>Enter Phone</label>
            <input
              value={phone}
              placeholder="Enter Phone"
              type="number"
              onChange={(e) => setphone(e.target.value)}
            />
            {error.map((err, index) => {
              return (
                <p className="error" key={index}>
                  {err.phone}
                </p>
              );
            })}

            <label>Select Document</label>
            <select
              value={document}
              onChange={(e) => setdocument(e.target.value)}
            >
              <option selected>Select Document</option>
              <option value="Passport">Passport</option>
              <option value="aadhar">Aadhar</option>
              <option value="Driving License">Driving License</option>
            </select>
            {error.map((err, index) => {
              return (
                <p className="error" key={index}>
                  {err.document}
                </p>
              );
            })}

            <label>Select Category</label>
            {select}
            {error.map((err, index) => {
              return (
                <p className="error" key={index}>
                  {err.category}
                </p>
              );
            })}
          </div>
          <div className="category__add">
            <button onClick={(e) => addNewItem(e)}>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.items.categories,
    items: state.items.items,
    modalState: state.UI.showModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch(actions.showModal()),
    addCategory: (payload) => dispatch(actions.addCategory(payload)),
    hideModal: () => dispatch(actions.hideModal()),
    addItem: (payload) => dispatch(actions.addItem(payload)),
    editItem: (id, payload) => dispatch(actions.editItem(id, payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
