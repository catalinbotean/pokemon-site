import { ActionCreator } from "redux";
import {
  Activity,
  ActivityAction,
  ActionTypes,
  ActivityErrorAction,
  ActivityError,
} from "./types";
import { Thunk } from "../data/types";

const DEFAULT_TIMEOUT = 3000;

const activityAction: ActionCreator<ActivityAction> = (activity: Activity) => ({
  type: ActionTypes.ACTIVITY,
  payload: activity,
});

export const beginActivity = (activity: Activity): Thunk => async (
  dispatch
) => {
  dispatch(activityAction(activity));
};

export const endActivity = ({ uuid }: { uuid: string }): Thunk => async (
  dispatch
) => {
  dispatch(activityAction({ uuid, type: null }));
};

const errorAction: ActionCreator<ActivityErrorAction> = (
  error: ActivityError
) => ({
  type: ActionTypes.ERROR,
  payload: error,
});

export const setError = (error: ActivityError): Thunk => async (dispatch) => {
  try {
    dispatch(errorAction(error));
    setTimeout(async () => {
      await dispatch(clearError({ uuid: error.uuid }));
    }, error.timeout || DEFAULT_TIMEOUT);
  } catch (err) {
    console.log(`Awkward, we have an error ${err}`);
  }
};

export const clearError = ({ uuid }: { uuid: string }): Thunk => async (
  dispatch
) => {
  try {
    dispatch(errorAction({ uuid, type: null, error: null }));
  } catch (err) {
    console.log(`Awkward, we have an error ${err}`);
  }
};
