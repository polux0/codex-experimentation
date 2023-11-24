import { Slot } from './components/Slot';
import { InputCriteria } from './data_models/InputCriteria';
import { InputType, LogicType } from './Enums';

const sodaInput = new InputCriteria(InputType.STRICT, null, null, 1.0);
const sodaSlot = new Slot(sodaInput, LogicType.AUTOMATIC);

const chipsInput = new InputCriteria(InputType.DESCRIPTIVE, ["salty", "spicy", "cheesy"]);
const chipsSlot = new Slot(chipsInput, LogicType.GOVERNED);

const chocolateInput = new InputCriteria(InputType.COMBINATION, null, 5, 10.0);
const chocolateSlot = new Slot(chocolateInput, LogicType.GOVERNED);



const resultSoda = sodaSlot.applyInput(1.0);
console.log(resultSoda); 

const resultChips = chipsSlot.applyInput("spicy");
console.log(resultChips);

const resultChocolate = chocolateSlot.applyInput({ price: 8.0, quantity: 3 });
console.log(resultChocolate);

