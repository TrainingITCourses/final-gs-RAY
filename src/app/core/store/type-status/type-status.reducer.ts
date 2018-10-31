import { TypeStatus } from './../models';
import { TypeStatusActions, TypeStatusActionTypes } from './type-status.actions';


export interface TypeStatusState {
  typesStatus: TypeStatus[];
  nameSelected: string;
}

export const initialState: TypeStatusState = {
  typesStatus: [],
  nameSelected: ''
};

export function reducer(state = initialState, action: TypeStatusActions): TypeStatusState {
  switch (action.type) {
    case TypeStatusActionTypes.LoadTypeStatus:
      return { ...state};
    case TypeStatusActionTypes.TypeStatusLoaded:
      return {...state, typesStatus: action.payload };
    case TypeStatusActionTypes.TypeStatusNameSelected:
      return {...state, nameSelected: action.payload };
    default:
      return state;
  }
}
