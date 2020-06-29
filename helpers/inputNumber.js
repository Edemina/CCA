//const selectorsGen = require('../data/selectors.json').general;
//const expectedGen = require('../data/expected.json').general;
const selectorsCnt = require('../data/selectors.json').counter;
//const expectedCnt = require('../data/expected.json').counter;


     function inputNumber(str, value){
        if(str ==="left"){
            if($(selectorsCnt.lowerLimitFieldBtn).isDisplayed()){
                $(selectorsCnt.lowerLimitFieldBtn).click();
            }
            $(selectorsCnt.lowerLimitField).click();
            browser.keys('Backspace');
            browser.keys(value);
        } else {
            if($(selectorsCnt.upperLimitFieldBtn).isDisplayed()){
                $(selectorsCnt.upperLimitFieldBtn).click();
            }
            $(selectorsCnt.upperLimitField).click();
            browser.keys('Backspace');
            browser.keys(value);
        }
    }


module.exports = inputNumber;