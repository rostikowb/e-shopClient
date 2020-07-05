import {CHANGE_MODAL} from './types'

const initialState = {
    isActiveModal: false,
};

export default (state = initialState, action) => {
    
    switch (action.type){
        case CHANGE_MODAL:
            return {...state, isActiveModal: !state.isActiveModal};
        default: return state
    }
    

};