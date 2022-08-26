export const saveOnStorage = (key, itemValue) => {
    // get elements from localStorage
    let itemList = JSON.parse(localStorage.getItem(key));

    // if there is no movies in localStorage, create an array
    if (!Array.isArray(itemList)) {
        itemList = [];
    }
    // add new movie to the array
    itemList.push(itemValue);

    // save movie in localStorage
    localStorage.setItem(key, JSON.stringify(itemList));

    // return movie object
    return itemValue;
};
