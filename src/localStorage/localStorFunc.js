export const initLocalStorage = () => {
  if (!localStorage.length) {
    localStorage.setItem("goods/visited", "[]");
    localStorage.setItem("goods/likes", "[]");
    localStorage.setItem("goods/basket", "[]");
  }
};

export const get = (id) => JSON.parse(localStorage.getItem(id));

export const set = (id, value) => {
  return localStorage.setItem(id, JSON.stringify(value));
};

export const contains = (arr, elem, getElem = false) => {
  try {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id === elem._id) {
        return getElem ? i : true;
      }
    }
    return false;
  } catch (e) {
    return true;
  }
};
