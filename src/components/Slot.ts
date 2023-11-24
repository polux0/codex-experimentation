import { InputCriteria } from '../data_models/InputCriteria';
import { LogicType, Action } from '../Enums';
import { InputProcessor } from '../services/InputProcessor';
import { LogicHandler } from '../services/LogicHandler';
import { ActionHandler } from '../services/ActionHandler';

export class Slot {
  state: Action | null;

  constructor(public input_criteria: InputCriteria, public logic_type: LogicType) {
    this.state = null;
  }

  applyInput(data: any): Action {
    const processed_data = InputProcessor.process(data, this.input_criteria);
    const logic_decision = LogicHandler.process(processed_data, this.logic_type);
    this.state = ActionHandler.handle(logic_decision);
    return this.state;
  }
}
