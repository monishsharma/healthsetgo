import React, { useState } from "react";
import "./Table.css";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";
import Modal from "../Modal/Modal";
import NewItem from "../NewItem/NewItem";

function Table(props) {

  const [ItemsId, setItemsId] = useState(0);

  const findCategory = (id) => {
    for (var i in props.categories) {
      if (parseInt(props.categories[i].id) == parseInt(id)) {
        return props.categories[i].Name;
      }
    }
  };

  const setIdTonullHandler = () =>{
    setItemsId(0);
  }

  const editItem = (id) => {
    setItemsId(parseInt(id));
    props.showModal();

  }

  return (
    <div>
      <Modal setIdTonull = {() => setIdTonullHandler()}>
        <NewItem id = {ItemsId}  />
      </Modal>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {props.columns.map((col, index) => {
                return <th key={index}>{col}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {props.rows.map((row, index) => {
              return (
                <tr key={index}>
                  {props.columns.map((col, colIndex) => {
                    return (
                      <td key={colIndex + 1}>
                        {col === "action" && (
                          <button onClick = {() => editItem(row.id)} className="edit">Edit</button>
                        )}
                        {col === "category" && findCategory(row.category)}
                        {col !== "category" && row[col]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
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
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Table);
