import * as actionTypes from "../actions/actiontypes";
import { updateCategories, updateItems } from "../utils/helpers";

const initialState = {
  items: [
    {
      id: 1,
      Email: "demo@demo.com",
      Sno: 1,
      Name: "Apple",
      Description: "Apple Iphone XR",
      Phone: "9993283828",
      document: "aadhar",
      category: 1,
      action: true,
    },
    {
      id: 2,
      Sno: 2,
      Email: "demo@examplde.com",
      Name: "Oneplus",
      Description: "Oneplus 7 pro",
      Phone: "9993283828",
      document: "Passport",
      category: 2,
      action: true,
    },
    {
      id: 3,
      Sno: 3,
      Email: "test@examplde.com",
      Name: "Samsung",
      Description: "Samsung s10",
      Phone: "9993283828",
      document: "Driving License",
      category: 3,
      action: true,
    },
  ],
  categories: [
    {
      Sno: 1,
      id: 1,
      Name: "Mobile",
      Icons:
        "https://cdn.pocket-lint.com/r/s/1200x/assets/images/120309-phones-buyer-s-guide-best-smartphones-2020-the-top-mobile-phones-available-to-buy-today-image1-eagx1ykift.jpg",
      Description: "All Mobiles",
    },
    {
      Sno: 2,
      id: 2,
      Name: "Laptops",
      Icons: "https://cdn.mos.cms.futurecdn.net/A4GDK27VMnz6LtFDy9yzk.jpg",
      Description: "All Laptops",
    },
    {
      Sno: 3,
      id: 3,
      Name: "Grocery",
      Icons:
        "https://itk-assets.nyc3.digitaloceanspaces.com/2020/03/grocery-delivery-services-1024x690.jpg",
      Description: "All Grocery",
    },
  ],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      return updateCategories(state, {
        categories: [...state.categories, action.newCategory],
      });
      break;
    case actionTypes.ADD_ITEM: {
      return updateItems(state, {
        items: [...state.items, action.newItem],
      });
    }

    case actionTypes.EDIT_ITEM: {
      let itemIndex = [];
      itemIndex = state.items.findIndex((item) => {
        return item.id === action.itemID;
      });
      return updateItems(state, {
        items: Object.assign([], state.items, {
          [itemIndex]: action.updatedItem,
        }),
      });
    }

    default:
      return state;
      break;
  }
};

export default itemReducer;
