const selectorsCnt = require('../data/selectors.json').counter;
const expectedDCF = require('../data/expected.json').defaultCounterFunctionality;
const inputNumber = require('../helpers/inputNumber');

describe('Default counter functionality', function () {

    it('TC-040 Calculation: Sub 1 works', function () {
        browser.url('');
        const button = $$(selectorsCnt.blackBtn)[0];
        button.click();
        const countValue = $(selectorsCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC040);
    })

    it('TC-041 Add 3 gives 2', function () {
        const button = $$(selectorsCnt.blackBtn)[5];
        button.click();
        const countValue = $(selectorsCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC041);
    })
    it('TC-042 LLF accept 1', function () {
        inputNumber("left", expectedDCF.inputMin)
        const result = $(selectorsCnt.error).isDisplayed();
        expect(result).toEqual(false);
    })
    it('TC-043 ULF accept 9', function () {
        inputNumber("right", expectedDCF.inputMax)
        const result = $(selectorsCnt.error).isDisplayed();
        expect(result).toEqual(false);
       // browser.pause(2000);
    })
    it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
        browser.refresh();
        inputNumber("left", expectedDCF.inputMin);
        browser.pause(2000);
        inputNumber("right", expectedDCF.inputMin);
        browser.pause(2000);
        const actual = $$(selectorsCnt.blackBtn).filter(el => el.isDisplayed()).length.toString();
        expect(actual).toEqual(expectedDCF.countValueTC041);
    })



});