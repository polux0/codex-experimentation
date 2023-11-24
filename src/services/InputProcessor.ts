import { InputCriteria } from '../data_models/InputCriteria';
import { InputType } from '../Enums';

export class InputProcessor {
  static process(data: any, inputCriteria: InputCriteria): boolean {
    switch (inputCriteria.input_type) {
      case InputType.STRICT:
        return this.strict(data, inputCriteria);
      case InputType.DESCRIPTIVE:
        return this.descriptive(data, inputCriteria);
      case InputType.COMBINATION:
        return this.combination(data, inputCriteria);
      default:
        throw new Error('Invalid input type');
    }
  }

  private static strict(data: any, inputCriteria: InputCriteria): boolean {
    return data === inputCriteria.fixed_amount;
  }

  private static descriptive(data: any, inputCriteria: InputCriteria): boolean {
    return inputCriteria.options?.includes(data) ?? false;
  }

  private static combination(data: any, inputCriteria: InputCriteria): boolean {
    // Simplified for this example
    return true;
  }
}
