import { AddItem } from './AddItem';

export type stepFormAction = {
  type: 'NEXT' | 'PREV';
  payload?: number | number[];
};
export type stepperState = {
  currentStep: number;
  completedSteps: number[];
};
export const stepperReducer = (state: stepperState, action: stepFormAction) => {
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        currentStep: state.currentStep + 1,
        completedSteps: [...state.completedSteps, state.currentStep],
      };
    case 'PREV':
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    default:
      return state;
  }
};

export * from './AddItem';
export default AddItem;
