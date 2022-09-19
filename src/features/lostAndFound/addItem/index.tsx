import { ILostAndFound } from '../../../interfaces';
export type stepFormAction = {
  type: 'NEXT' | 'PREV' | 'RESET' | 'SET_STEP' | 'SET_COMPLETED_STEPS';
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
    case 'RESET':
      return {
        currentStep: 1,
        completedSteps: [],
      };
    case 'SET_STEP':
      return {
        ...state,
        currentStep: action.payload as number,
      };
    case 'SET_COMPLETED_STEPS':
      return {
        ...state,
        completedSteps: action.payload as number[],
      };
    default:
      return state;
  }
};

export type formActionType = {
  payload?: string | number;
  type:
    | 'SET_ITEM_NAME'
    | 'SET_NO_OF_ITEMS'
    | 'SET_CATEGORY'
    | 'SET_ITEM_DESCRIPTION'
    | 'SET_FOUND_BY'
    | 'SET_LOCATION'
    | 'SET_FOUND_DATE'
    | 'SET_DEPOSITED_TO'
    | 'SET_STATUS'
    | 'SET_RECEIVED_BY'
    | 'SET_LEVEL'
    | 'SET_GROUP'
    | 'SET_SEMESTER'
    | 'SET_COURSE'
    | 'RESET';
};

export const lostAndFoundFormReducer = (
  state: ILostAndFound,
  action: formActionType
): ILostAndFound => {
  switch (action.type) {
    case 'SET_ITEM_NAME':
      return {
        ...state,
        itemName: action.payload as string,
      };
    case 'SET_NO_OF_ITEMS':
      return {
        ...state,
        noOfItems: action.payload as number,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload as string,
      };
    case 'SET_ITEM_DESCRIPTION':
      return {
        ...state,
        itemDescription: action.payload as string,
      };
    case 'SET_FOUND_BY':
      return {
        ...state,
        foundBy: action.payload as string,
      };
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.payload as string,
      };
    case 'SET_FOUND_DATE':
      return {
        ...state,
        foundDate: action.payload as string,
      };
    case 'SET_DEPOSITED_TO':
      return {
        ...state,
        depositedTo: action.payload as string,
      };
    case 'SET_STATUS':
      return {
        ...state,
        status: action.payload as 'CLAIMED' | 'PENDING',
      };
    case 'SET_RECEIVED_BY':
      return {
        ...state,
        claimDetails: {
          ...state.claimDetails,
          receiversName: action.payload as string,
        },
      };
    case 'SET_LEVEL':
      return {
        ...state,
        claimDetails: {
          ...state.claimDetails,
          level: action.payload as string,
        },
      };
    case 'SET_GROUP':
      return {
        ...state,
        claimDetails: {
          ...state.claimDetails,
          group: action.payload as string,
        },
      };

    case 'SET_SEMESTER':
      return {
        ...state,
        claimDetails: {
          ...state.claimDetails,
          semester: action.payload as string,
        },
      };
    case 'SET_COURSE':
      return {
        ...state,
        claimDetails: {
          ...state.claimDetails,
          course: action.payload as string,
        },
      };

    default:
      return state;
  }
};

export * from './Step1';
export * from './Step2';
export * from './Step3';
export * from './AddItem';
