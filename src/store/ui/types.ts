import { Action } from "redux";

export interface Activity {
  uuid: string;
  type: string;
  payload?: any;
}

export interface ActivityError extends Activity {
  message: string;
  timeout?: number;
}

export interface State {
  activities: Activity[];
  errors: ActivityError[];
}

export enum ActionTypes {
  ACTIVITY = "ACTIVITY",
  ERROR = "ERROR",
}

export interface ActivityAction extends Action {
  type: ActionTypes.ACTIVITY;
  payload: Activity;
}

export interface ActivityErrorAction extends Action {
  type: ActionTypes.ERROR;
  payload: ActivityError;
}

export type ActivitiesActions = ActivityAction | ActivityErrorAction;
