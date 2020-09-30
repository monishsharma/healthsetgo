import React, { useState } from "react";
import "./Modal.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

function Modal(props) {
  const closeModal = () => {
   
    props.hideModal();
    console.log(props.child)
    if(props.child === undefined) {
      props.setIdTonull();

    }
  };

  return (
    <div>
      {props.modalState && (
        <div className="modal-window">
          <div className="modal-content">
            <span onClick={() => closeModal()} className="close">
              &times;
            </span>
            <div className="modal__body">{props.children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modalState: state.UI.showModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(actions.hideModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
