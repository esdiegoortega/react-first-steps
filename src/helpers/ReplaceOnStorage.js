export const replaceOnStorage = (key, itemList) => {
    // replace movis in localStorage
    localStorage.setItem(key, JSON.stringify(itemList));
};
