export const getFromStorage = (key) => {
    // get elements from localStorage
    let itemList = JSON.parse(localStorage.getItem(key));

    // return movie object
    return itemList || [];
};
