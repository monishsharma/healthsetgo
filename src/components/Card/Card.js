import React from "react";
import "./Card.css";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";

function Table(props) {
  return (
    <div className="card-container">
      <ul class="cards">
        {props.categories.map((category, item) => {
          return (
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src= {category.Icons} />
                </div>
                <div class="card_content">
                  <h2 class="card_title">{category.Name}</h2>
                  <p class="card_text">
                   {category.Description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // rows: state.city.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // deleteCity: (id) => dispatch(actions.deleteCity(id)),
    // shortListCity: (city) => dispatch(actions.shortListCity(city)),
    // removeFromShortList: (id) => dispatch(actions.removeFromShortList(id)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Table);
