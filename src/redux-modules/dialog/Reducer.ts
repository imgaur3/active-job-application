import { DialogAction, DialogState } from "./Types";

export const DialogInitialState: DialogState ={
    openModelIds: [],
}

const DialogReducer = (state = DialogInitialState, action: DialogAction) => {
        // eslint-disable-next-line no-undef
        console.log('reducer', action.type, action.payload);
    switch(action.type) {
        case 'DIALOG_OPEN':{
            return {
                ...state,
                openModelIds:  action.payload,
            }
        }
         case 'DIALOG_CLOSE':{
            return {
                ...state,
                openModelIds:  action.payload,
            }
        }
        default:
            return state;
    }
}

export default DialogReducer;