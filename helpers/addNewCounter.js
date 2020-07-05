const selectorGen = require('../data/selectors.json').general;
//const expectedGen = require('../data/expected.json').general;
const selectorCnt = require('../data/selectors.json').counter;
//const expectedCnt = require('../data/expected.json').counter;

function addNewDefaultCounter(name = selectorGen.addNameField, value = selectorGen.defaultValueField){
    $(selectorCnt.deleteBtn).click();
    $(selectorGen.addNameField).setValue(name);
    $(selectorGen.defaultValueField).setValue(value);
    $(selectorGen.addCounterBtn).click();
}

function addSecondCounter(name = "Second Counter", value = selectorGen.defaultValueField){
    $(selectorGen.addNameField).setValue(name);
    $(selectorGen.defaultValueField).setValue(value);
    $(selectorGen.addCounterBtn).click();
}

function addThirdCounter(name = "Third Counter", value = selectorGen.defaultValueField){
    $(selectorGen.addNameField).setValue(name);
    $(selectorGen.defaultValueField).setValue(value);
    $(selectorGen.addCounterBtn).click();
}

module.exports = {addNewDefaultCounter, addSecondCounter, addThirdCounter};