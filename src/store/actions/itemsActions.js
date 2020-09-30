import * as actionTypes from './actiontypes';

export const addCategory = (category) => {
    return {
        type: actionTypes.ADD_CATEGORY,
        newCategory:category
    }
}


export const addItem = (item) => {
    return {
        type: actionTypes.ADD_ITEM,
        newItem:item
    }
}


export const editItem = (itemID, updatedItem) => {
    return {
        type: actionTypes.EDIT_ITEM,
        itemID:itemID,
        updatedItem:updatedItem
    }
}
