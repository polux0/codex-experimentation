import { InputType, InputCriteriaInterface } from '../Enums';

export class InputCriteria implements InputCriteriaInterface {

  constructor(
    public input_type: InputType, 
    public options: any[] | null = null, 
    public quantity: number | null = null, 
    public fixed_amount: number | null = null, 
    public array: any[] | null = null
  ) {}
}
