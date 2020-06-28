//import {expect} from 'chai';
const selectorsGen = require('../data/selectors.json').general;
const valuesGen = require('../data/expected.json').general;

describe('Complex Counter App', function () {

    describe('Getting to the page', function () {

        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('https://likejean.github.io/homework-5/');
            const title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual('Complex Counter App');
        })

    });

    describe('Elements exist', function () {

        it('TC-002 Header', function () {
            const header = $(selectorsGen.header).isDisplayed();
            expect(header).toEqual(true);
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

    describe('Elements value', function () {
        it('TC-009 Header = Counter', function () {
            const actual = $(selectorsGen.header).getText();
            expect(actual).toEqual(valuesGen.header);
        })

        it('TC-010 Total Result = Total: 0', function () {
            const actual = $(selectorsGen.totalResult).getText();
            expect(actual).toEqual(valuesGen.totalResult);
        })

        it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
            const actual = $$(selectorsGen.addNameFieldLabel)[$$(selectorsGen.addNameFieldLabel).length -2].getText();
            expect(actual).toEqual(valuesGen.addNameFieldLabel);
        })

        it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
            const actual = $(selectorsGen.addNameField).getValue();
            expect(actual).toEqual(valuesGen.addNameField);
        })

        it('TC-013 Label for Default Value Field = Enter Initial Count:', function () {
            const actual = $$(selectorsGen.defaultValueFieldLabel)[$$(selectorsGen.defaultValueFieldLabel).length -1].getText();
            expect(actual).toEqual(valuesGen.defaultValueFieldLabel);
        })

        it('TC-014 Placeholder for Default Value Field = 50', function () {
            const actual = $(selectorsGen.defaultValueField).getValue();
            expect(actual).toEqual(valuesGen.defaultValueField);
        })

        it('TC-015 Add Counter = ADD COUNTER', function () {
            const actual = $(selectorsGen.addCounterBtn).getText();
            expect(actual).toEqual(valuesGen.addCounterBtn);
        })

    });

});