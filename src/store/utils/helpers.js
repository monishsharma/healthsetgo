export const updateCategories = (oldObj, newObj) => {
  let updatedArray = [];
  newObj.categories.map((data, index) => {
    return updatedArray.push({
      id: index+1,
      Sno: index + 1,
      Name: data.Name,
      Description: data.Description,
      Icons: data.Icons,
    });
  });
  console.log(newObj.categories)
  return {
    ...oldObj,
    categories: updatedArray,
  };
};


export const updateItems = (oldObj, newObj) => {
  let updatedArray = [];
  newObj.items.map((data, index) => {
    return updatedArray.push({
      id: index+1,
      Sno: index+1,
      Email: data.Email,
      Name:data.Name,
      Description:data.Description,
      Phone: data.Phone,
      document: data.document,
      category : data.category,
      action: true
    });
  });
  return {
    ...oldObj,
    items: updatedArray,
  };
};


