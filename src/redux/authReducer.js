
// const userData = localStorage.getItem('userData');

let initialState = {};

// if(userData){
    // initialState = {...userData}
// }else {
    initialState = {
        auth: false,
        email: null,
        number: null,
        name: null,
    };
// }


export default (state = initialState, action) => {
    return state;
};