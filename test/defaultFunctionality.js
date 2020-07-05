const selectorCnt = require('../data/selectors.json').counter;
const expectedCnt = require('./../data/expected.json').counter;
const expectedDCF = require('../data/expected.json').defaultCounterFunctionality;
const inputNumber = require('../helpers/inputNumber');
const addNewCounter = require('../helpers/addNewCounter');

describe('Default counter functionality', function () {

    it('TC-040 Calculation: Sub 1 works', function () {
        browser.url('');
        const button = $$(selectorCnt.blackBtn)[0];
        button.click();
        const result = $(selectorCnt.countValue).getText();
        expect(result).toEqual(expectedDCF.countValueTC040);
    })

    it('TC-041 Add 3 gives 2', function () {
        const button = $$(selectorCnt.blackBtn)[5];
        button.click();
        const result = $(selectorCnt.countValue).getText();
        expect(result).toEqual(expectedDCF.countValueTC041);
    })

    it('TC-042 LLF accept 1', function () {
        inputNumber("left", expectedDCF.inputMin)
        const result = $(selectorCnt.error).isDisplayed();
        expect(result).toEqual(false);
    })

    it('TC-043 ULF accept 9', function () {
        inputNumber("right", expectedDCF.inputMax)
        const result = $(selectorCnt.error).isDisplayed();
        expect(result).toEqual(false);
    })

    it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
        browser.refresh();
        inputNumber("left", expectedDCF.inputMin);
        inputNumber("right", expectedDCF.inputMin);
        const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
        expect(actual).toEqual(expectedDCF.valueTC044);
    })

    it('TC-045 LLF = 9 and ULF = 9 gives 2 black buttons', function () {
        browser.refresh();
        inputNumber('right', expectedDCF.inputMax);
        inputNumber('left', expectedDCF.inputMax);
        const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length.toString();
        expect(actual).toEqual(expectedDCF.countValueTC041);
    })

    it('TC-046 Reset button works', function () {
        browser.refresh();
        $$(selectorCnt.blackBtn)[5].click();
        $(selectorCnt.resetBtn).click();
        const actual = $(selectorCnt.countValue).getText();
        expect(actual).toEqual(expectedCnt.countValue);
    });

    it('TC-047 Delete button works', function () {
        $(selectorCnt.deleteBtn).click();
        const actual = $(selectorCnt.countValue).isExisting();
        expect(actual).toEqual(false);
    });


        //test case to use new function
    it('should check add new default counter', function () {
        browser.refresh();
        addNewCounter.addNewDefaultCounter('New name', 50);
        const result = $$(selectorCnt.counterName)[1].getText();
        expect(result).toEqual(expectedDCF.newName);
    });


});