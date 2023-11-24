// Enums.ts
export enum InputType {
    STRICT = 'strict',
    DESCRIPTIVE = 'descriptive',
    COMBINATION = 'combination'
  }
  
  export enum LogicType {
    AUTOMATIC = 'automatic',
    GOVERNED = 'governed'
  }
  
  export enum Action {
    FULFILLED = 'fulfilled',
    PARTIAL = 'partial'
  }
  
  export interface InputCriteriaInterface {
    input_type: InputType;
    options?: any[] | null;
    quantity?: number | null;
    fixed_amount?: number | null;
    array?: any[] | null;
  }
  