import { Action } from '../Enums';

export class ActionHandler {
  static handle(logicDecision: boolean): Action {
    return logicDecision ? Action.FULFILLED : Action.PARTIAL;
  }
}
