import initialState from "./initialState";
import { ActionTypes, ActivitiesActions, State } from "./types";

export const reducer = (
  state: State = initialState,
  action: ActivitiesActions
): State => {
  switch (action.type) {
    case ActionTypes.ACTIVITY: {
      return {
        ...state,
        activities: action.payload.type
          ? [...state.activities, action.payload]
          : state.activities.filter(
              (activity) => activity.payload.uuid !== activity.uuid
            ),
      };
    }
    case ActionTypes.ERROR: {
      return {
        ...state,
        errors: action.payload.type
          ? [...state.errors, action.payload]
          : state.errors.filter((error) => action.payload.uuid !== error.uuid),
      };
    }
    default: {
      return state;
    }
  }
};
