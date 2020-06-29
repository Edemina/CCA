//import {expect} from 'chai';
const selectorsGen = require('../data/selectors.json').general;
const expectedGen = require('../data/expected.json').general;
const selectorsCnt = require('../data/selectors.json').counter;
const expectedCnt = require('../data/expected.json').counter;

describe('Complex Counter App', function () {

    describe('Getting to the page', function () {

        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('https://likejean.github.io/homework-5/');
            const title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual('Complex Counter App');
        })

    });

    describe('General elements exist', function () {

        it('TC-002 Header', function () {
            const actual = $(selectorsGen.header).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-003 Total Result', function () {
            const actual = $(selectorsGen.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-004 Add Name Field', function () {
            const actual = $(selectorsGen.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-005 Add Name Field Label', function () {
            const actual = $$(selectorsGen.addNameFieldLabel)[$$(selectorsGen.addNameFieldLabel).length -2].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-006 Default Value Field', function () {
            const actual = $(selectorsGen.defaultValueField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-007 Default Value Field Label', function () {
            const actual = $$(selectorsGen.defaultValueFieldLabel)[$$(selectorsGen.defaultValueFieldLabel).length -1].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-008 Add Counter Button', function () {
            const actual = $(selectorsGen.addCounterBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

    });

    describe('Generals elements default value', function () {
        it('TC-009 Header = Counter', function () {
            const actual = $(selectorsGen.header).getText();
            expect(actual).toEqual(expectedGen.header);
        })

        it('TC-010 Total Result = Total: 0', function () {
            const actual = $(selectorsGen.totalResult).getText();
            expect(actual).toEqual(expectedGen.totalResult);
        })

        it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
            const actual = $$(selectorsGen.addNameFieldLabel)[$$(selectorsGen.addNameFieldLabel).length -2].getText();
            expect(actual).toEqual(expectedGen.addNameFieldLabel);
        })

        it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
            const actual = $(selectorsGen.addNameField).getValue();
            expect(actual).toEqual(expectedGen.addNameField);
        })

        it('TC-013 Label for Default Value Field = Enter Initial Count:', function () {
            const actual = $$(selectorsGen.defaultValueFieldLabel)[$$(selectorsGen.defaultValueFieldLabel).length -1].getText();
            expect(actual).toEqual(expectedGen.defaultValueFieldLabel);
        })

        it('TC-014 Placeholder for Default Value Field = 50', function () {
            const actual = $(selectorsGen.defaultValueField).getValue();
            expect(actual).toEqual(expectedGen.defaultValueField);
        })

        it('TC-015 Add Counter = ADD COUNTER', function () {
            const actual = $(selectorsGen.addCounterBtn).getText();
            expect(actual).toEqual(expectedGen.addCounterBtn);
        })

    });

    describe('Default counter elements exist', function () {
        it('TC-016 Counter Name', function () {
            const actual = $$(selectorsCnt.counterName)[1].isDisplayed();
            expect(actual).toEqual(true);
        });

        it('TC-017 Count Value', function () {
            const actual = $(selectorsCnt.countValue).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-018 LLF button', function () {
            const actual = $(selectorsCnt.lowerLimitFieldBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-019 ULF button', function () {
            const actual = $(selectorsCnt.upperLimitFieldBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-020, TC-021 Default Sub and Add Buttons', function () {
            const actual = $$(selectorsCnt.blackBtn).filter(el => el.isDisplayed()).length;
            const expected = expectedCnt.defaultNumberBlackBtn;
            expect(actual).toEqual(expected);
        })

        it('TC-022 Delete button', function () {
            const actual = $(selectorsCnt.deleteBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-023 Reset button', function () {
            const actual = $(selectorsCnt.resetBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-024 Edit Name Field', function () {
            const actual = $(selectorsCnt.editNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-025 Label for Edit Name Field', function () {
            const actual = $(selectorsCnt.editNameFieldLabel).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-026 LLF input', function () {
            $(selectorsCnt.lowerLimitFieldBtn).click();
            const actual = $(selectorsCnt.lowerLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-027 ULF input', function () {
            $(selectorsCnt.upperLimitFieldBtn).click();
            const actual = $(selectorsCnt.upperLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })
    });

    describe('Default counter elements values', function () {
        it('TC-028 Counter Name = 1. Default Counter', function () {
            const actual = $(selectorsCnt.counterName)[1].getText();
            expect(actual).toEqual(expectedCnt.counterName);
        });

        it('TC-029 Count Value = 0', function () {
            const actual = $(selectorsCnt.countValue).getText();
            expect(actual).toEqual(expectedCnt.countValue);
        })

        it('TC-030 LLF = CHANGE STEP OPTIONS?', function () {
            const actual = $(selectorsCnt.lowerLimitFieldBtn).getText();
            expect(actual).toEqual(expectedCnt.lowerLimitFieldBtn);
        })

        it('TC-032 ULF = CHANGE STEP OPTIONS?', function () {
            const actual = $(selectorsCnt.upperLimitFieldBtn).getText();
            expect(actual).toEqual(true);
        })

        it('TC-031, TC-033 Default Sub Buttons = -1, -2, -3', function () {
            const actual = $$(selectorsCnt.blackBtn).map(el => el.getText());
            const expected = expectedCnt.blackButtons;
            expect(actual).toEqual(expected);
        })

        // it('TC-022 Delete button', function () {
        //     const actual = $(selectorsCnt.deleteBtn).isDisplayed();
        //     expect(actual).toEqual(true);
        // })
        //
        // it('TC-023 Reset button', function () {
        //     const actual = $(selectorsCnt.resetBtn).isDisplayed();
        //     expect(actual).toEqual(true);
        // })
        //
        // it('TC-024 Edit Name Field', function () {
        //     const actual = $(selectorsCnt.editNameField).isDisplayed();
        //     expect(actual).toEqual(true);
        // })
        //
        // it('TC-025 Label for Edit Name Field', function () {
        //     const actual = $(selectorsCnt.editNameFieldLabel).isDisplayed();
        //     expect(actual).toEqual(true);
        // })


    });

});