const selectorGen = require('../data/selectors.json').general;
const expectedGen = require('../data/expected.json').general;
const selectorCnt = require('../data/selectors.json').counter;
const expectedCnt = require('../data/expected.json').counter;
const expectedGF = require('../data/expected.json').generalFunctionality;

beforeEach(() => {
    browser.url('')
})

// describe('Alina Archangelsky - TC 3, 4 Verify that the header is present and has text', function () {
//     it('TC 3 should check that header is present', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const header = $('h1');
//         expect(header.isDisplayed()).toEqual(true);
//     });
//     it('TC 4 should check header text', function () {
//         const header = $('h1');
//         const headerText = header.getText();
//         const expected = 'Counters';
//         expect(headerText).toEqual(expected);
//     });
// });
// describe('Alina Archangelsky - TC 5, 6 Verify that total result is present and has text', function () {
//     it('TC 5 should check that total result is present', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const totalRes = $('h3');
//         expect(totalRes.isDisplayed()).toEqual(true);
//     });
//     it('TC 6 should check total result text', function () {
//         const totalRes = $('h3');
//         const text = totalRes.getText();
//         const expected = 'Total: 0';
//         expect(text).toEqual(expected);
//     });
// });
// describe('Alina Archangelsky - TC 7, 8 Verify that Default Counter is present and has text', function () {
//     it('TC 7 should check that Default Counter is present', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const defaultCounterName = $('h3:nth-child(1)');
//         expect(defaultCounterName.isDisplayed()).toEqual(true);
//     });
//     it('TC 8 should check Default Counter text', function () {
//         const defaultCounterName = $('h3:nth-child(1)');
//         const text = defaultCounterName.getText();
//         const expected = '1. Default Counter';
//         expect(text).toEqual(expected);
//     });
// });
// describe('Alina Archangelsky - TC 9, 10 Verify that count value is present and has text', function () {
//     it('TC 9 should check that count value field is present', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const countValue = $('.badge.badge-primary.primary');
//         expect(countValue.isDisplayed()).toEqual(true);
//     });
//     it('TC 10 should check count value field text', function () {
//         const countValue = $('.badge.badge-primary.primary');
//         const text = countValue.getText();
//         const expected = '0';
//         expect(text).toEqual(expected);
//     });
// });
//
// describe('Nadezhda Dziganchuk - TC 11; 12 - Verify that Lower Limit Field (LLF) is present and has text', () => {
//     it('LLF is present', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         expect(browser.$('//button[@name="negative"]').isDisplayed()).true;
//     });
//     it('LLF has text "CHANGE STEP OPTIONS?"', () => {
//         const elementLLF = $('button[name="positive"]').getText();
//         expect(elementLLF).toEqual('CHANGE STEP OPTIONS?')
//     });
// });
//
// describe('Elena Seregina - Test Complex Counter', () => {
//     it('should have the right title', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         const actualTitle = browser.getTitle();
//         const expectedTitle = 'Complex Counter App';
//         expect(actualTitle).toEqual(expectedTitle);
//     });
//     it('TC 13 should check Sub Buttons present',function () {
//         const sub1button = $("//button[contains(text(),'-1')]");
//         const sub2button = $("//button[contains(text(),'-2')]");
//         const sub3button = $("//button[contains(text(),'-3')]");
//         expect(sub1button).toBePresent();
//         expect(sub2button).toBePresent();
//         expect(sub3button).toBePresent();
//         expect(sub1button.getLocation().x).toBeLessThan(sub2button.getLocation().x);
//         //browser.pause(1000);
//     });
//     // Verify that -1, -2, -3 Sub buttons are displayed by default to the left of the LLF in the asс order
//     it('TC 14 should check that -1, -2, -3 Sub buttons are displayed by default to the left of the LLF in the asс order',function () {
//         const sub1button = $("//button[contains(text(),'-1')]");
//         const sub2button = $("//button[contains(text(),'-2')]");
//         const sub3button = $("//button[contains(text(),'-3')]");
//         const LLF = $("//button[@name='negative']");
//         expect(sub1button.getLocation().x).toBeLessThan(sub2button.getLocation().x);
//         expect(sub2button.getLocation().x).toBeLessThan(sub3button.getLocation().x);
//         expect(sub3button.getLocation().x).toBeLessThan(LLF.getLocation().x);
//         // browser.pause(1000);
//     });
// });
//
// describe('Nadezhda Dziganchuk - TC 15; 16 - Verify that  Upper Limit Field (ULF) is present and has text',  () => {
//     it('ULF is present', () => {
//         expect($('button[name="positive"]').isDisplayed()).true;
//     });
//     it('ULF has text "CHANGE STEP OPTIONS?"', () => {
//         const elementULF = $('button[name="positive"]').getText();
//         expect(elementULF).toEqual('CHANGE STEP OPTIONS?');
//     });
//
// });
//
// describe('Elena Seregina - Test Complex Counter', () => {
//     it('should have the right title', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         const actualTitle = browser.getTitle();
//         const expectedTitle = 'Complex Counter App';
//         expect(actualTitle).toEqual(expectedTitle);
//     });
//     //Verify that on the right side Limit Fields has Add Buttons
//     it('TC 17 should check Add Buttons present',function () {
//         const add1button = $("//body//button[6]");
//         const add2button = $("//body//button[7]");
//         const add3button = $("//body//button[8]");
//         expect(add1button).toBePresent();
//         expect(add2button).toBePresent();
//         expect(add3button).toBePresent();
//         expect(add1button.getLocation().x).toBeLessThan(add2button.getLocation().x);
//         //browser.pause(1000);
//     });
//     //Verify that 1, 2, 3 Add buttons are displayed by default to the right of the ULF in the asс order
//     it('TC 18 should check that 1, 2, 3 Add buttons are displayed by default to the right of the ULF in the asс order',function () {
//         const add1button = $("//body//button[6]");
//         const add2button = $("//body//button[7]");
//         const add3button = $("//body//button[8]");
//         const ULF = $("//button[@name='positive']");
//         expect(ULF.getLocation().x).toBeLessThan(add1button.getLocation().x);
//         expect(add1button.getLocation().x).toBeLessThan(add2button.getLocation().x);
//         expect(add2button.getLocation().x).toBeLessThan(add3button.getLocation().x);
//         browser.pause(1000);
//     });
// });
//
// describe('Alina Archangelsky - TC 19, 20 Verify that DELETE button is present and has text', function () {
//     it('TC 19 should check that DELETE button is present', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const deleteButton = $('.Ripple-parent.btn.btn-danger.delete');
//         expect(deleteButton.isDisplayed()).toEqual(true);
//     });
//     it('TC 20 should check DELETE button text', function () {
//         const deleteButton = $('.Ripple-parent.btn.btn-danger.delete');
//         const text = deleteButton.getText();
//         const expected = 'DELETE';
//         expect(text).toEqual(expected);
//     });
// });
// describe('Alina Archangelsky - TC 21, 22 Verify that RESET button is present and has text', function () {
//     it('TC 21 should check that RESET button is present', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const resetButton = $('.Ripple-parent.btn.btn-primary.reset');
//         expect(resetButton.isDisplayed()).toEqual(true);
//     });
//     it('TC 22 should check RESET button text', function () {
//         const resetButton = $('.Ripple-parent.btn.btn-primary.reset');
//         const text = resetButton.getText();
//         const expected = 'RESET';
//         expect(text).toEqual(expected);
//     });
// });
// describe('Alina Archangelsky - TC 23, 24, 25 Verify that Edit Name Field is present and has text', function () {
//     it('TC 23 should check that Edit Name Field is present', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const editNameField = $('[name="edit"]');
//         expect(editNameField.isDisplayed()).toEqual(true);
//     });
//     it('TC 24 should check Edit Name Field lable text', function () {
//         const editNameFieldLable = $('//label[contains(text(),\'Edit Counter Title:\')]');
//         const text = editNameFieldLable.getText();
//         const expected = 'Edit Counter Title:';
//         expect(text).toEqual(expected);
//     });
//     it('TC 25 should check Edit Name Field placeholder value', function () {
//         const editNameField = $('[name="edit"]');
//         const value = editNameField.getValue();
//         const expected = 'Default Counter';
//         expect(value).toEqual(expected);
//     });
// });
//
// describe('Alina Marukhnenko', function () {
//     it('TC - 26 should check that "ADD COUNTER" module is present', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const AddCounterLoc = $('div:nth-child(1) div:nth-child(1) div.container:nth-child(5) div.row.align-items-center.justify-content-center:nth-child(1) > button.btn-success.btn.Ripple-parent.add.col-6:nth-child(3)')
//         expect(AddCounterLoc.isExisting());
//     });
//     it('TC - 27 should check that "Add Name Field" is present', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const AddNameFieldLoc = $('//input[@name=\'name\']')
//         expect(AddNameFieldLoc.isExisting());
//     });
// });
//
// describe('Elena Seregina - Test Complex Counter', () => {
//     it('should have the right title', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         const actualTitle = browser.getTitle();
//         const expectedTitle = 'Complex Counter App';
//         expect(actualTitle).toEqual(expectedTitle);
//     });
//     //Verify that the "Add Name Field"  has lable "Enter Counter Title:"
//     it('TC 28 should check that the "Add Name Field"  has lable "Enter Counter Title:"',function () {
//         const element = $("//input[@name='name']");
//         const label = $("//label[text()='Enter Counter Title: ']");
//         expect(label.getLocation().x + label.getSize().width).toBeLessThanOrEqual(element.getLocation().x);
//         expect(label.getLocation().x + label.getSize().width).toBeGreaterThanOrEqual(element.getLocation().x - 25);
//         const midLabel = label.getLocation().y + label.getSize().height / 2;
//         const midElement = element.getLocation().y + element.getSize().height / 2;
//         expect(midLabel).toEqual(midElement);
//         // browser.pause(1000);
//     });
//     //Verify that the "Add Name Field"  has placeholder "Counter Name"
//     it('TC 29 should check that the "Add Name Field"  has placeholder "Counter Name"',function () {
//         const element = $("//input[@name='name']");
//         expect(element).toHaveAttribute("value","Counter Name");
//     });
// });
//
// describe('Natalya Reznikova - Initial layout', function () {
//     it('TC-30 should verify that Default value field is present.', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const defaultvaluefield = $("//input[@name='value']");
//         expect(defaultvaluefield.isExisting());
//     });
//     it('TC-31 should check if Default value field has lable "Enter Initial Count"',function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const text = $('//label[contains(text(),\'Enter Initial Count:\')]').getText();
//         expect(text).toEqual("Enter Initial Count:");
//     });
//     it('TC-32 should check if Default value field is present', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const text = $("//input[@name='value']").getValue();
//         expect(text).toEqual("50");
//     });
// });

describe('Elena Demina - Initial layout: Add counter module', function () {
    it('TC-33 should verify that ADD COUNTER button is present', function () {
        const actual = $(selectorGen.addCounterBtn).isDisplayed();
        expect(actual).toEqual(true);
    });
    it('TC-34 should verify that ADD COUNTER button has text "ADD COUNTER"', function () {
        const actual = $(selectorGen.addCounterBtn).getText();
        expect(actual).toEqual(expectedGen.addCounterBtn);
    });
});

// describe('Elena Seregina - Test Complex Counter', () => {
//     it('should have the right title', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         const actualTitle = browser.getTitle();
//         const expectedTitle = 'Complex Counter App';
//         expect(actualTitle).toEqual(expectedTitle);
//     });
//     //Verify that a new counter can't be added when the name of the counter in "Add Name Field" is less than 7 characters.
//     it('TC 36 should check that a new counter can not be added when the name of the counter in "Add Name Field" is less than 7 characters',function () {
//         const nameField = $("//input[@name='name']");
//         nameField.clearValue();
//         nameField.addValue("Abcdef");
//         const errorMsg = $("//div[@class='container']//span[1]");
//         expect(errorMsg.getText()).toEqual("ERROR: Counter name should be longer than 6 characters");
//         const addCountBtn = $("//button[text()=\"Add Counter\"]");
//         expect(addCountBtn).toBeDisabled();
//         //browser.pause(1000);
//     });
//     //Verify that a new counter can't be added when "Add Name Field" is empty.
//     it('TC 37 should check that a new counter can not be added when "Add Name Field" is empty',function () {
//         //browser.refresh()
//         const nameField = $("//input[@name='name']");
//         const addCountBtn = $("//button[text()=\"Add Counter\"]");
//         nameField.clearValue();
//         nameField.click();
//         const errorMsg = $("//div[@class='container']//span[1]");
//         expect(errorMsg.getText()).toEqual("ERROR: Counter name should be longer than 6 characters");
//         expect(addCountBtn).toBeDisabled();
//         //browser.pause(1000);
//     });
// });
//
// describe('Alina Marukhnenko', function () {
//     it('TC - 38 should check that clicking the arrow up button in the "Default value field" with no user input increases the value by 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const DefaultValueField = $('//input[@name=\'value\']');
//         DefaultValueField.isClickable();
//         DefaultValueField.setValue(51);
//         expect(DefaultValueField.isExisting());
//     });
//     it('TC - 39 should check that clicking the arrow down button in the "Default value field" with no user input decreases the value by 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const DefaultValueField = $('//input[@name=\'value\']');
//         DefaultValueField.isClickable();
//         DefaultValueField.setValue(49);
//         expect(DefaultValueField.isExisting());
//     });
//     it('TC - 40 should check that clicking the arrow up button in the ""Default value field"" with user input increases the value by 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const DefaultValueField = $('//input[@name=\'value\']');
//         DefaultValueField.isClickable();
//         DefaultValueField.setValue(20);
//         DefaultValueField.setValue(21);
//         expect(DefaultValueField.isExisting());
//     });
//     it('TC - 41 should check that clicking the arrow down button in the ""Default value field"" with user input decreases the value by 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const DefaultValueField = $('//input[@name=\'value\']');
//         DefaultValueField.isClickable();
//         DefaultValueField.setValue(20);
//         DefaultValueField.setValue(19);
//         expect(DefaultValueField.isExisting());
//     });
//     it('TC - 43 should check that upper case letter can\'t  be added into "Default value field"', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const DefaultValueField = $('//input[@name=\'value\']');
//         DefaultValueField.isClickable();
//         DefaultValueField.clearValue()
//         DefaultValueField.setValue('A');
//         expect(DefaultValueField.isExisting());
//     });
//     it('TC - 44 should check that lower case letter can\'t  be added into "Default value field"', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const DefaultValueField = $('//input[@name=\'value\']');
//         DefaultValueField.isClickable();
//         DefaultValueField.clearValue()
//         DefaultValueField.setValue('a');
//         expect(DefaultValueField.isExisting());
//     });
// });
//
// describe('Alina Marukhnenko', function () {
//     it('TC - 52 should check that a new counter can be added  when ""Add Name Field"" and ""Default Value Field"" are correct', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const addNameField = $('//input[@name=\'name\']');
//         addNameField.setValue('Abcdefg');
//         const DefaultValueField = $('//input[@name=\'value\']');
//         DefaultValueField.setValue('0');
//         const addCounter = $('div:nth-child(1) div:nth-child(1) div.container:nth-child(5) div.row.align-items-center.justify-content-center:nth-child(1) > button.btn-success.btn.Ripple-parent.add.col-6:nth-child(3)');
//         addCounter.click();
//         const counter2 = $('body:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) > div.container-fluid.counter-wrapper:nth-child(4)');
//         counter2.getValue();
//         expect(counter2.isExisting());
//     });
// });
//
// describe('Viktoryia Aliakseyeva - Add counter module', function () {
//     it('TC-53 New counter should be added with valid fields', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const addNameField = $('input[name="name"]');
//         addNameField.setValue('Abcdefgh');
//         const defaultValueField = $("input[name='value']");
//         defaultValueField.setValue('1000');
//         const addCounterButton = $("button[class='btn-success btn Ripple-parent add col-6']");
//         addCounterButton.click();
//         const secondCounter = $("//div[2]//div[1]//h3[1]\n");
//         expect(secondCounter.getText()).toEqual('2. Abcdefgh');
//     });
//     it('TC-55 New counter\'s name with no user input should be equal to the default name', function () {
//         browser.refresh();
//         const addCounterButton = $("button[class='btn-success btn Ripple-parent add col-6']");
//         addCounterButton.click();
//         const secondCounter = $("//div[2]//div[1]//h3[1]\n");
//         expect(secondCounter.getText()).toEqual('2. Counter Name');
//     });
//     it('TC-56 New counter\'s name should be equal to user\'s input', function () {
//         browser.refresh();
//         const addNameField = $('input[name="name"]');
//         addNameField.setValue('Abcdefgh');
//         const addCounterButton = $("button[class='btn-success btn Ripple-parent add col-6']");
//         addCounterButton.click();
//         const secondCounter = $("//div[2]//div[1]//h3[1]\n");
//         expect(secondCounter.getText()).toEqual('2. Abcdefgh');
//     });
//     it('TC-57 New counter\'s name (3-d counter) should be equal to user\'s input', function () {
//         browser.refresh();
//         const addCounterButton = $("button[class='btn-success btn Ripple-parent add col-6']");
//         addCounterButton.click();
//         const addNameField = $('input[name="name"]');
//         addNameField.setValue('Abcdefgh');
//         addCounterButton.click();
//         const thirdCounter = $("//div[3]//div[1]//h3[1]");
//         expect(thirdCounter.getText()).toEqual('3. Abcdefgh');
//     });
// });
//
// describe('Alexander Dobrovolsky - TC { 58, 59 } Counter name', function () {
//     it('should change numeration of counters in ascending order', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         $('//button[@class=\'btn-success btn Ripple-parent add col-6\']').click();
//         const name1 = $('//div[2]//div[1]//h3[1]').getText();
//         expect(name1).toEqual('2. Counter Name')
//         $('//button[@class=\'btn-success btn Ripple-parent add col-6\']').click();
//         browser.pause(1000);
//         const name2 = $('//div[3]//div[1]//h3[1]').getText();
//         expect(name2).toEqual('3. Counter Name')
//     });
// });
// describe('Alexander Dobrovolsky - TC { 60, 61 } Count value', function () {
//     it('should make Count value 50 of a new counter if initial count is in default state TC { 60 }', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         $('//div[@class=\'container-fluid counter-wrapper\']//h3[1]').isDisplayed();
//         $('//button[@class=\'btn-success btn Ripple-parent add col-6\']').click();
//         const value = $('//span[contains(text(),\'50\')]').getText();
//         expect(value).toEqual('50');
//     });
//     it('should make count value of a new counter equal to user input in "Initial count" field TC { 61 }', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         $('//div[@class=\'container-fluid counter-wrapper\']//h3[1]').isDisplayed();
//         $('//input[@name=\'value\']').setValue('0');
//         $('//button[@class=\'btn-success btn Ripple-parent add col-6\']').click();
//         const count = $('//body//div[2]//div[2]//span[1]').getText();
//         expect(count).toEqual('0');
//     });
// });

describe('Elena Demina - Test: Error message in Add counter: Add Name Field', function () {
    it('TC-69 should verify that an error message will appear if Add Name Field is invalid.', function () {
        $(selectorGen.addNameField).setValue(expectedGF.addNameFieldLetter);
        const result = $(selectorCnt.error).isExisting();
        expect(result).toEqual(true);
    });
    it('TC-70 should verify the text of error message for the invalid Add Name Field', function () {
        $(selectorGen.addNameField).setValue(expectedGF.addNameFieldLetter);
        const result = $(selectorCnt.error).getText();
        expect(result).toEqual(expectedCnt.errorZero);
    });

    it('TC-72 should verify that an error message will appear if Add Name Field has 5 characters (ABCde)', function () {
        $(selectorGen.addNameField).setValue(expectedGF.addNameField5Char);
        const result = $(selectorCnt.error).isExisting();
        expect(result).toEqual(true);
    });
    it('TC-75 should verify that an error message will appear if Add Name Field has 6 characters (ABCdef)', function () {
        $(selectorGen.addNameField).setValue(expectedGF.addNameField6Char);
        const result = $(selectorCnt.error).isExisting();
        expect(result).toEqual(true);
    });
});

// describe('Alina Marukhnenko', function () {
//     it('TC - 83 should check that error message appears if LLF value > ULF value', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const ULF = $('//button[@name=\'positive\']');
//         ULF.click();
//         const ULF2 = $('//input[@name=\'upper\']');
//         ULF2.setValue('4');
//         const LLF = $('//button[@name=\'negative\']');
//         LLF.click();
//         const LLF2 = $('//input[@name=\'lower\']');
//         LLF2.setValue('5');
//         const error = $('//div[@class=\'alert alert-danger row align-items-center justify-content-center\']');
//         expect(error.isExisting());
//     });
//     it('TC - 84 should check text in error message if LLF value > ULF value', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const ULF = $('//button[@name=\'positive\']');
//         ULF.click();
//         const ULF2 = $('//input[@name=\'upper\']');
//         ULF2.setValue('4');
//         const LLF = $('//button[@name=\'negative\']');
//         LLF.click();
//         const LLF2 = $('//input[@name=\'lower\']');
//         LLF2.setValue('5');
//         const error = $('//div[@class=\'alert alert-danger row align-items-center justify-content-center\']');
//         expect(error.isExisting());
//         const actualText = error.getText();
//         const expectedText = 'ERROR: Lower Limit Must be Less than Upper Limit';
//         expect(actualText).toEqual(expectedText);
//     });
//     it('TC - 85 should check text in error message if LLF value > ULF value', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const ULF = $('//button[@name=\'positive\']');
//         ULF.click();
//         const LLF = $('//button[@name=\'negative\']');
//         LLF.click();
//         const LLF2 = $('//input[@name=\'lower\']');
//         LLF2.setValue('3');
//         const ULF2 = $('//input[@name=\'upper\']');
//         ULF2.setValue('2');
//         const error = $('//div[@class=\'alert alert-danger row align-items-center justify-content-center\']');
//         expect(error.isExisting());
//         const actualText = error.getText();
//         const expectedText = 'ERROR: Upper Limit Must be GREATER than Lower Limit';
//         expect(actualText).toEqual(expectedText);
//     });
// });
//
// describe('Natalya Reznikova - Error message in Limit Fields',function () {
//     it('TC-91 Verify that error message appears when LLF change to "0"', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const defaulLLF = $('button[name=negative]');
//         defaulLLF.click();
//         const LLF = $("input[name='lower']")
//         LLF.setValue('0');
//         const alert = $("//div[@class='alert alert-danger row align-items-center justify-content-center']//span[1]");
//         expect(alert.isDisplayed());
//     });
// });

describe('Elena Demina - Test: Delete & Reset: Delete button', function () {
    // it('TC 111 - should verify that DELETE button will delete counter', function () {
    //     browser.url('https://likejean.github.io/homework-5/');
    //     //click delete
    //     const deleteButton = $('//button[@id="1"]');
    //     deleteButton.click();
    //     //verify counter does not exist by counter name
    //     const counterName = $('//div[@class="row align-items-center justify-content-center"]/h3');
    //     const expected = counterName.isExisting()
    //     expect(expected).toEqual(false);
    // });
    //
    // it('TC 112 - should verify numbering after deleting', function () {
    //     browser.url('https://likejean.github.io/homework-5/');
    //     //set name and add second counter
    //     const addNameField = $('//input[@name="name"]');
    //     addNameField.setValue("Second Counter");
    //     const addCounterButton = $('//button[@class="btn-success btn Ripple-parent add col-6"]');
    //     addCounterButton.click();
    //     //set name and add third counter
    //     addNameField.setValue("Third Counter");
    //     addCounterButton.click();
    //     //delete second counter
    //     const secondDeleteButton = $('//button[@id="2"]');
    //     secondDeleteButton.click();
    //     //verify first counter and second counter by name
    //     const firstCounterName = $('//body//div[@id=\'root\']//div//div//div[1]//div[1]//h3[1]');
    //     const actualFirstCounterName = firstCounterName.getText();
    //     const expectFirstCounterName = "1. Default Counter"
    //     const secondCounterName = $('//div[2]//div[1]//h3[1]');
    //     const actualSecondCounterName = secondCounterName.getText();
    //     const expectSecondCounterName = "2. Third Counter";
    //     expect(actualFirstCounterName).toEqual(expectFirstCounterName);
    //     expect(actualSecondCounterName).toEqual(expectSecondCounterName);
    // });
    //
    // it('TC 115 - should verify Total Result after deleting', function () {
    //     browser.url('https://likejean.github.io/homework-5/');
    //     //set name and add second counter
    //     const addNameField = $('//input[@name="name"]');
    //     addNameField.setValue("Second Counter");
    //     const addCounterButton = $('//button[@class="btn-success btn Ripple-parent add col-6"]');
    //     addCounterButton.click();
    //     //verify Total: 50
    //     const totalResult = $('//h3[@class="total-count"]');
    //     let actualTotalResultText = totalResult.getText();
    //     let expectTotalResultText = "Total: 50";
    //     expect(actualTotalResultText).toEqual(expectTotalResultText);
    //     //delete second counter
    //     const secondDeleteButton = $('//button[@id="2"]');
    //     secondDeleteButton.click();
    //     //verify Total: 0
    //     actualTotalResultText = totalResult.getText();
    //     expectTotalResultText = "Total: 0";
    //     expect(actualTotalResultText).toEqual(expectTotalResultText);
    // });
});

describe('Elena Demina - Test: Delete & Reset: Reset button', function () {
    // it('TC 116 - should verify that pressing "RESET" button will reset Count Value to 0', function () {
    //     //add second counter with default value 50
    //     const addCounterButton = $('//button[@class="btn-success btn Ripple-parent add col-6"]');
    //     addCounterButton.click();
    //     //delete first counter
    //     const firstDeleteButton = $('//button[@id="1"]');
    //     firstDeleteButton.click();
    //     //reset
    //     const resetButton = $("//button[@class='btn-primary btn Ripple-parent reset']");
    //     resetButton.click();
    //     //verify Count Value = 0
    //     const countValue = $("//span[@class='badge primary badge-primary']");
    //     const actualCountValueText = countValue.getText();
    //     const expectCountValueText = "0";
    //     expect(actualCountValueText).toEqual(expectCountValueText);
    // });
    //
    // it('TC 117 - should verify that pressing "RESET" button will reset Total result to 0', function () {
    //     //add second counter with default value 50
    //     const addCounterButton = $('//button[@class="btn-success btn Ripple-parent add col-6"]');
    //     addCounterButton.click();
    //     //click reset on second counter
    //     const secondResetButton = $("//div[2]//div[6]//button[2]");
    //     secondResetButton.click();
    //     //verify Total: 0
    //     const totalResult = $('//h3[@class="total-count"]');
    //     const actualTotalResultText = totalResult.getText();
    //     const expectTotalResultText = "Total: 0";
    //     browser.pause(3000)
    //     expect(actualTotalResultText).toEqual(expectTotalResultText);
    // });
});

// describe('Alina Archangelsky - TC 119 Verify that LLF accepts 1 if ULF has button "Change step options?"', function () {
//     it('should check that ULF has no user input"', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const upperLimitFireld = $('[name="positive"]');
//         const text = upperLimitFireld.getText();
//         expect(text).toEqual('CHANGE STEP OPTIONS?');
//         upperLimitFireld.click();
//         const uLF = $('[name="upper"]');
//         browser.pause(1000);
//         expect(uLF.getValue()).toEqual('3');
//     });
//     it('should check that lLF accepts "1"', function () {
//         const lowerLimitField = $('[name=\'negative\']');
//         lowerLimitField.click();
//         const lLF = $('[name="lower"]');
//         lLF.setValue("1");
//         browser.pause(1000);
//         const expected = "1";
//         expect(lLF.getValue()).toEqual(expected);
//     });
// });
// describe('Alina Archangelsky - TC 120 Verify that LLF accepts 5 if ULF value is higher than 5', function () {
//     it('should check that ULF value is higher than 5"', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const upperLimitFireld = $('[name="positive"]');
//         upperLimitFireld.click();
//         const uLF = $('[name="upper"]');
//         uLF.setValue(9);
//         browser.pause(1000);
//         expect(uLF.getValue()).toEqual('9');
//     });
//     it('should check that lLF accepts "5"', function () {
//         const lowerLimitField = $('[name=\'negative\']');
//         lowerLimitField.click();
//         const lLF = $('[name="lower"]');
//         lLF.setValue("5");
//         browser.pause(1000);
//         const expected = "5";
//         expect(lLF.getValue()).toEqual(expected);
//     });
// });
//
// describe('Alina Marukhnenko', function () {
//     it('TC - 140 should check that LLF accept integer < than  integer in ULF', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const ULF = $('//button[@name=\'positive\']');
//         ULF.click();
//         const LLF = $('//button[@name=\'negative\']');
//         LLF.click();
//         const ULF2 = $('//input[@name=\'upper\']');
//         ULF2.setValue('5');
//         const LLF2 = $('//input[@name=\'lower\']');
//         LLF2.setValue('3');
//         expect(LLF2.isExisting());
//         expect(ULF2.isExisting());
//     });
// });
//
// describe('Alina Archangelsky - TC 144 Verify that ULF accepts 5 if LLF has button "Change step options?"', function () {
//     it('should check that LLF has no user input"', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const lowerLimitField = $('[name=\'negative\']');
//         const text = lowerLimitField.getText();
//         expect(text).toEqual('CHANGE STEP OPTIONS?');
//         lowerLimitField.click();
//         const lLF = $('[name="lower"]');
//         browser.pause(1000);
//         expect(lLF.getValue()).toEqual('1');
//     });
//     it('should check that ULF accepts "5"', function () {
//         const upperLimitFireld = $('[name="positive"]');
//         upperLimitFireld.click();
//         const uLF = $('[name="upper"]');
//         uLF.setValue(5);
//         browser.pause(1000);
//         expect(uLF.getValue()).toEqual('5');
//     });
// });
// describe('Alina Archangelsky - TC 145 Verify that ULF  accepts 9 if LLF has button "Change step options?"', function () {
//     it('should check that LLF has no user input"', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const lowerLimitField = $('[name=\'negative\']');
//         const text = lowerLimitField.getText();
//         expect(text).toEqual('CHANGE STEP OPTIONS?');
//         lowerLimitField.click();
//         const lLF = $('[name="lower"]');
//         browser.pause(1000);
//         expect(lLF.getValue()).toEqual('1');
//     });
//     it('should check that ULF accepts "5"', function () {
//         const upperLimitFireld = $('[name="positive"]');
//         upperLimitFireld.click();
//         const uLF = $('[name="upper"]');
//         uLF.setValue(9);
//         browser.pause(1000);
//         expect(uLF.getValue()).toEqual('9');
//     });
// });
//
// describe('Alina Marukhnenko', function () {
//     it('TC - 149 should check that if ULF value is less than LLF value , LLF is disabled', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const ULF = $('//button[@name=\'positive\']');
//         ULF.click();
//         const LLF = $('//button[@name=\'negative\']');
//         LLF.click();
//         const LLF2 = $('//input[@name=\'lower\']');
//         LLF2.setValue('3');
//         const ULF2 = $('//input[@name=\'upper\']');
//         ULF2.setValue('2');
//         expect(LLF2.isClickable());
//     });
// });
//
// describe('Elena Seregina - Test Complex Counter', () => {
//     it('should have the right title', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         const actualTitle = browser.getTitle();
//         const expectedTitle = 'Complex Counter App';
//         expect(actualTitle).toEqual(expectedTitle);
//     });
//     // this test doesn't work
//     //Verify that  lower case letter can't be pasted into "Default value field".
// //     it('TC 49 should check that  lower case letter can not be pasted into "Default value field"',function () {
// //         const errorMsg = $("//div[@class='container']//span[1]");
// //         const defaultValueField = $("//input[@name='value']");
// //         const addCountBtn = $("//button[text()=\"Add Counter\"]");
// //         navigator.clipboard.set("a");
// // //        driver.setClipboard("a");
// //         defaultValueField.click(); // to set the focus on the field
// //         browser.keys(['Control', 'v', 'v', 'Control']);
// //         expect(defaultValueField.getText()).toEqual("");
// //         //browser.pause(1000);
// //     });
//     //Verify that when click to ULF appears 3
//     it('TC 160 should check that when click to ULF appears 3',function () {
//         const ULF_button = $("//button[@name='positive']");
//         ULF_button.click();
//         const ULF_input = $("//input[@name='upper']");
//         expect(ULF_input.getValue()).toEqual("3");
//         //browser.pause(1000);
//     });
//     //Verify that when click to ULF appears spinner
//     it('TC 161 should check that when click to ULF appears spinner',function () {
//         browser.refresh();
//         const ULF_button = $("//button[@name='positive']");
//         ULF_button.click();
//         //browser.pause(500);
//         const ULF_input = $("//input[@name='upper']");
//         expect(ULF_input).toHaveAttribute("type", "number");
//         //browser.pause(3000);
//     });
// });
//
// describe('Nadezhda Dziganchuk - TC 168 Verify that correct set of Sub buttons is displayed', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         browser.pause(1000);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         browser.pause(1000);
//         expect(llfValue.isExisting()).true;
//         expect(ulfValue.isExisting()).true;
//     });
//     it('verify that 9 sub buttons from -1 to -9 appear', () => {
//         expect($('[step="-1"]').isExisting()).true;
//         expect($('[step="-2"]').isExisting()).true;
//         expect($('[step="-3"]').isExisting()).true;
//         expect($('[step="-4"]').isExisting()).true;
//         expect($('[step="-5"]').isExisting()).true;
//         expect($('[step="-6"]').isExisting()).true;
//         expect($('[step="-7"]').isExisting()).true;
//         expect($('[step="-8"]').isExisting()).true;
//         expect($('[step="-9"]').isExisting()).true;
//     });
// });
//
// describe('Nadezhda Dziganchuk - TC 170 Verify that min Sub button value is equal to the value in ULF', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     });
//     it('verify that min Sub button value = -9', () => {
//         expect($('[step="-9"]').isExisting()).true;
//         expect($('[step="-10"]').isExisting()).false;
//         const subButtonText = $('[step="-9"]').getText();
//         expect(subButtonText).toEqual("-9");
//     });
// });
//
// describe('Nadezhda Dziganchuk - TC 171 - Verify that max Sub button value is equal to the value in LLF', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     });
//     it('verify that max Sub button value = -1', function () {
//         expect($('[step="-1"]').isExisting()).true;
//         expect($('[step="0"]').isExisting()).false;
//         const subButtonText = $('[step="-1"]').getText();
//         expect(subButtonText).toEqual("-1");
//     });
// });
//
// describe('Nadezhda Dziganchuk - TC 173 Verify that correct set of Add buttons is displayed for max range', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting()).true;
//         expect(ulfValue.isExisting()).true;
//     });
//     it('verify that 9 add buttons from 1 to 9 appear', () => {
//         expect($('[step="1"]').isExisting()).true;
//         expect($('[step="2"]').isExisting()).true;
//         expect($('[step="3"]').isExisting()).true;
//         expect($('[step="4"]').isExisting()).true;
//         expect($('[step="5"]').isExisting()).true;
//         expect($('[step="6"]').isExisting()).true;
//         expect($('[step="7"]').isExisting()).true;
//         expect($('[step="8"]').isExisting()).true;
//         expect($('[step="9"]').isExisting()).true;
//     });
// });
//
// describe('Nadezhda Dziganchuk - TC 174 - Verify that min Add button value is equal to the value in LLF', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting()).true;
//         expect(ulfValue.isExisting()).true;
//     });
//     it('verify that min Add button value = 1', function () {
//         expect($('[step="1"]').isExisting()).true;
//         expect($('[step="0"]').isExisting()).false;
//         const addButtonText = $('[step="1"]').getText();
//         expect(addButtonText).toEqual("1");
//     });
// });
//
// describe('Nadezhda Dziganchuk - TC 175 - Verify that max Add button value is equal to the value in ULF', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting()).true;
//         expect(ulfValue.isExisting()).true;
//     });
//     it('verify that max Add button value = 9', function () {
//         expect($('[step="9"]').isExisting()).true;
//         expect($('[step="10"]').isExisting()).false;
//         const addButtonText = $('[step="9"]').getText();
//         expect(addButtonText).toEqual("9");
//     });
// });
//
// describe('Alex Archangelsky - TC 179 - Verify that the red circle buttons with a cross (the red circle) is present and relate next to LLF', () => {
//     it('should show the red circle displayed next to LLF', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         browser.maximizeWindow();
//         const field = $('//button[@name=\'negative\']');
//         field.click();
//         const actualCircle = $('[name="negative"]');
//         expect(actualCircle.isExisting());
//     })
// })
//
// describe('Alex Archangelsky - TC 180 - Verify that the red circle is present and relate next to ULF', () => {
//     it('should show the red circle displayed next to ULF', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         browser.maximizeWindow();
//         const field = $('//button[@name=\'positive\']');
//         field.click();
//         const actualCircle = $('[name="positive"]');
//         expect(actualCircle.isExisting());
//     })
// })
//
// describe('Alex Archangelsky - TC 183 - Verify that Count Value didn\'t change after reset limit fields to the default value state', () => {
//     it('Count Value is "0"', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         browser.maximizeWindow();
//         const expectedDefaultCount = "0";
//         const countValue = $('//span[@class=\'badge primary badge-primary\']');
//         expect(expectedDefaultCount).toEqual(countValue.getText());
//     })
//     it('Click on LLF and ULF', () => {
//         const llfPlaceholder = $('//button[@name=\'negative\']');
//         llfPlaceholder.click();
//         const ulfPlaceholder = $('//button[@name=\'positive\']');
//         ulfPlaceholder.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     })
//     it('Check if LLF appears 1 and ULF appears 3', () => {
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.getValue()).toEqual("1");
//         expect(ulfValue.getValue()).toEqual("3");
//     })
//     it('Check if count value is 0 after reset', () => {
//         const llfReset = $('[name="negative"]');
//         llfReset.click();
//         const ulfReset = $('[name="positive"]');
//         ulfReset.click();
//         const checkFinalCount = $('//span[@class=\'badge primary badge-primary\']');
//         const expectedDefaultCount = "0";
//         expect(expectedDefaultCount).toEqual(checkFinalCount.getText());
//     })
// })
//
// describe('Alex Archangelsky - TC 184 - Verify that Count Value didn\'t change after reset limit fields to the default value state', () => {
//     it('Count Value is "0"', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         browser.maximizeWindow();
//         const expectedDefaultCount = "0";
//         const countValue = $('//span[@class=\'badge primary badge-primary\']');
//         expect(expectedDefaultCount).toEqual(countValue.getText());
//     })
//     it('Click on LLF and ULF', () => {
//         const llfPlaceholder = $('//button[@name=\'negative\']');
//         llfPlaceholder.click();
//         const ulfPlaceholder = $('//button[@name=\'positive\']');
//         ulfPlaceholder.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     })
//     it('Value "2" is entered in LLF and value "9" - in ULF', () => {
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         llfValue.setValue("2");
//         ulfValue.setValue("9");
//         expect(llfValue.getValue()).toEqual("2");
//         expect(ulfValue.getValue()).toEqual("9");
//     })
//     it('Buttons "9" and "-5" are clicked, the Count Value is "4"', function () {
//         const button9 = $('//body//button[18]');
//         button9.click();
//         const buttonMinus5 = $('//button[contains(text(),\'-5\')]');
//         buttonMinus5.click();
//         const countValue = $('//span[@class=\'badge primary badge-primary\']');
//         expect(countValue.getText()).toEqual("4");
//     })
//     it('Red circle next to LLF id clicked,  Red circle next to ULF id clicked.', function () {
//         const llfReset = $('[name="negative"]');
//         llfReset.click();
//         const ulfReset = $('[name="positive"]');
//         ulfReset.click();
//     })
//     it('Check if count value is 4 after reset', () => {
//         const countValue = $('//span[@class=\'badge primary badge-primary\']');
//         expect(countValue.getText()).toEqual("4");
//     })
// })
//
// describe('Alex Archangelsky - TC 185 - Verify that Total Result didn\'t change after reset limit fields to the default value state', () => {
//     it('Total result is "0"', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         browser.maximizeWindow();
//         const expectedDefaultCount = "Total: 0";
//         const totalResult = $('//h3[@class=\'total-count\']');
//         expect(expectedDefaultCount).toEqual(totalResult.getText());
//     })
//     it('Click on LLF and ULF', () => {
//         const llfPlaceholder = $('//button[@name=\'negative\']');
//         llfPlaceholder.click();
//         const ulfPlaceholder = $('//button[@name=\'positive\']');
//         ulfPlaceholder.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     })
//     it('Check default values LLF is 1 and ULF is 3', () => {
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.getValue()).toEqual("1");
//         expect(ulfValue.getValue()).toEqual("3");
//     })
//     it('Red circle next to LLF id clicked,  Red circle next to ULF id clicked.', () => {
//         const llfReset = $('[name="negative"]');
//         llfReset.click();
//         const ulfReset = $('[name="positive"]');
//         ulfReset.click();
//     })
//     it('Check if Total Result is “Total: 0” and didn\'t change', () => {
//         const totalResult = $('//h3[@class=\'total-count\']');
//         expect(totalResult.getText()).toEqual("Total: 0");
//     })
// })
//
// describe('Alex Archangelsky - TC 186 - Verify that Total Value didn\'t change after reset limit fields to the default value state', () => {
//     it('Total result is "0"', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         browser.maximizeWindow();
//         const expectedDefaultCount = "Total: 0";
//         const totalResult = $('//h3[@class=\'total-count\']');
//         expect(expectedDefaultCount).toEqual(totalResult.getText());
//     })
//     it('Click on LLF and ULF', () => {
//         const llfPlaceholder = $('//button[@name=\'negative\']');
//         llfPlaceholder.click();
//         const ulfPlaceholder = $('//button[@name=\'positive\']');
//         ulfPlaceholder.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     })
//     it('Value "2" is entered in LLF and value "9" - in ULF', () => {
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         llfValue.setValue("2");
//         ulfValue.setValue("9");
//         expect(llfValue.getValue()).toEqual("2");
//         expect(ulfValue.getValue()).toEqual("9");
//     })
//     it('Buttons "9" and "-5" are clicked, the Total is "4"', function () {
//         const button9 = $('//body//button[18]');
//         button9.click();
//         const buttonMinus5 = $('//button[contains(text(),\'-5\')]');
//         buttonMinus5.click();
//         const totalResult = $('//h3[@class=\'total-count\']');
//         expect(totalResult.getText()).toEqual("Total: 4");
//     })
//     it('Red circle next to LLF id clicked,  Red circle next to ULF id clicked.', function () {
//         const llfReset = $('[name="negative"]');
//         llfReset.click();
//         const ulfReset = $('[name="positive"]');
//         ulfReset.click();
//     })
//     it('Check if Total result is "4" after reset', () => {
//         const totalResult = $('//h3[@class=\'total-count\']');
//         expect(totalResult.getText()).toEqual("Total: 4");
//     })
// })
//
// describe('Viktoryia Aliakseyeva - Count Value module', function () {
//     it('TC-188 Sub button decrease its count by 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const buttonMinusOne = $("button[step='-1']");
//         buttonMinusOne.click();
//         const countValue = $("span[class='badge primary badge-primary']");
//         expect(countValue.getText()).toEqual('-1');
//     });
//     it('TC-189 Add button increase its count by 3', function () {
//         browser.refresh();
//         const buttonPlusThree = $("button[step='3']");
//         buttonPlusThree.click();
//         const countValue = $("span[class='badge primary badge-primary']");
//         expect(countValue.getText()).toEqual('3');
//     });
//     it('TC-190 Sub button decrease its count by 4', function () {
//         browser.refresh();
//         const defaultULF = $('button[name=positive]');
//         defaultULF.click();
//         const ULF = $("input[name='upper']");
//         ULF.setValue('5');
//         const defaulLLF = $('button[name=negative]');
//         defaulLLF.click();
//         const LLF = $("input[name='lower']")
//         LLF.setValue('4');
//         const buttonMinusFour = $("button[step='-4']");
//         buttonMinusFour.click();
//         const countValue = $("span[class='badge primary badge-primary']");
//         expect(countValue.getText()).toEqual('-4');
//     });
//     it('TC-191 Add button increase its count by 5', function () {
//         browser.refresh();
//         const defaultULF = $('button[name=positive]');
//         defaultULF.click();
//         const ULF = $("input[name='upper']");
//         ULF.setValue(5);
//         const buttonPlusFive = $("button[step='5']");
//         buttonPlusFive.click();
//         const countValue = $("span[class='badge primary badge-primary']");
//         expect(countValue.getText()).toEqual('5');
//     });
// });
//
// describe('Alex Archangelsky - TC 192 - Verify that Sub button decreases count value', () => {
//     it('Add a new Counter with the Initial Value = 1000', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         browser.maximizeWindow();
//         const initialCount = $('//input[@name=\'value\']');
//         initialCount.setValue("1000");
//         const addCounterBtn = $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]');
//         addCounterBtn.click();
//         const counter = $('//span[contains(text(),\'1000\')]');
//         expect(counter.getText()).toEqual("1000");
//     })
//     it('Click on LLF and ULF', () => {
//         const llfPlaceholder = $('//button[@name=\'negative\']');
//         llfPlaceholder.click();
//         const ulfPlaceholder = $('//button[@name=\'positive\']');
//         ulfPlaceholder.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     })
//     it('Check default values LLF is 1 and ULF is 3', () => {
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.getValue()).toEqual("1");
//         expect(ulfValue.getValue()).toEqual("3");
//     })
//     it('Click button "-1" and check count value to be "999"', () => {
//         const buttonMinus1  = $('//body//div[2]//div[2]//button[1]');
//         buttonMinus1.click();
//         const counter = $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/span[1]');
//         expect(counter.getText()).toEqual("999");
//     })
// })
//
// describe('Alex Archangelsky - TC 193 - Verify that Sub button decreases count value', () => {
//     it('Add a new Counter with the Initial Value = 10000000', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         browser.maximizeWindow();
//         const initialCount = $('//input[@name=\'value\']');
//         initialCount.setValue("10000000");
//         const addCounterBtn = $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]');
//         addCounterBtn.click();
//         const counter = $('//span[contains(text(),\'10000000\')]');
//         expect(counter.getText()).toEqual("10000000");
//     })
//     it('Click on LLF and ULF', () => {
//         const llfPlaceholder = $('//button[@name=\'negative\']');
//         llfPlaceholder.click();
//         const ulfPlaceholder = $('//button[@name=\'positive\']');
//         ulfPlaceholder.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     })
//     it('Check default values LLF is 1 and ULF is 3', () => {
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.getValue()).toEqual("1");
//         expect(ulfValue.getValue()).toEqual("3");
//     })
//     it('Click button "-2" and check count value to be "9999998"', () => {
//         const buttonMinus2  = $('//body//div[2]//div[2]//button[2]');
//         buttonMinus2.click();
//         const counter = $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/span[1]');
//         expect(counter.getText()).toEqual("9999998");
//     })
// })
//
// describe('Alex Archangelsky - TC 194 - Verify that Sub button decreases count value', () => {
//     it('Add a new Counter with the Initial Value = 10000000', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         browser.maximizeWindow();
//         const initialCount = $('//input[@name=\'value\']');
//         initialCount.setValue("10000000");
//         const addCounterBtn = $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]');
//         addCounterBtn.click();
//         const counter = $('//span[contains(text(),\'10000000\')]');
//         expect(counter.getText()).toEqual("10000000");
//     })
//     it('Click on LLF and ULF', () => {
//         const llfPlaceholder = $('//button[@name=\'negative\']');
//         llfPlaceholder.click();
//         const ulfPlaceholder = $('//button[@name=\'positive\']');
//         ulfPlaceholder.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     })
//     it('Check default values LLF is 1 and ULF is 3', () => {
//         const llfValue = $('//input[@name=\'lower\']');
//         const ulfValue = $('//input[@name=\'upper\']');
//         expect(llfValue.getValue()).toEqual("1");
//         expect(ulfValue.getValue()).toEqual("3");
//     })
//     it('Click button "-2" and check count value to be "10000003"', () => {
//         const button3  = $('//body//div[2]//div[2]//button[8]');
//         button3.click();
//         const counter = $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/span[1]');
//         expect(counter.getText()).toEqual("10000003");
//     })
// })
//
// describe('Alina Marukhnenko', function () {
//     it('TC - 196 should check that "Counter Name" can be changed in "Edit Name Field"', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const editNameField = $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/input[1]');
//         editNameField.setValue('Complex');
//         const newName = $('//div[@class=\'container-fluid counter-wrapper\']//h3[1]');
//         expect(newName.isExisting());
//     });
//     it('TC - 197 should check that "Counter Name" can be changed in "Edit Name Field"', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const defaultCounter = $('//div[@class=\'container-fluid counter-wrapper\']//h3[1]');
//         defaultCounter.isExisting();
//         const addCounter = $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]');
//         addCounter.click();
//         const secondCounter = $('//body/div[@id=\'root\']/div/div/div[2]');
//         secondCounter.isExisting(); //create counter 2
//         const editCounterTitle = $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[1]/input[1]');
//         editCounterTitle.setValue('Complex');
//         editCounterTitle.setValue('Complex2');
//         expect(editCounterTitle.isExisting());
//     });
// });
//
// describe('Group practice - TC 199 Verify that ""Counter Name"" can be changed in ""Edit Name Field', function () {
//     it('should change counter name to "1. Abcdef" ', function () {
//         browser.url('https://likejean.github.io/homework-5/'); //go to the website
//         const editCounterTitle = $('//input[@data-testid=\'limit-input\']'); //declare variable with element locator
//         editCounterTitle.setValue('Abcdef');  // add new value to the field
//         browser.pause(2000); //  making pause for visual test
//         const expected = 'Abcdef'; // expected result
//         expect(editCounterTitle.getValue()).toEqual(expected); // comparison actual result with expected
//     });
// });
//
// describe('Alexander Dobrovolsky - TC { 200, 201, 202, 203 } Counter Name', function () {
//     it('should verify that "Counter Name" can be changed in "Edit Name Field", TC { 200 }', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         $('//div[@class=\'container-fluid counter-wrapper\']//h3[1]').isDisplayed();
//         $('//input[@name=\'name\']').setValue('Complex');
//         browser.pause(1000);
//         $('//button[@class=\'btn-success btn Ripple-parent add col-6\']').click();
//         $('//div[2]//div[1]//h3[1]').isDisplayed();
//         $('//input[@id=\'2\']').setValue('Abcdef');
//         const name = $('//div[2]//div[1]//h3[1]').getText();
//         browser.pause(1000);
//         expect(name).toEqual('2. Abcdef');
//     });
//     it('should verify that "Enter counter name" field accepts 7 characters and able to create new counter, TC { 202 }', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         $('//div[@class=\'container-fluid counter-wrapper\']//h3[1]').isDisplayed();
//         $('//input[@name=\'name\']').setValue('Complex');
//         $('//button[@class=\'btn-success btn Ripple-parent add col-6\']').click();
//         const name = $('//div[2]//div[1]//h3[1]').getText();
//         expect(name).toEqual('2. Complex');
//     });
//     it('should verify that "Enter counter title" field accepts/can be changed to 7 chars or more when creating new counters, TC { 203 }  ', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         $('//div[@class=\'container-fluid counter-wrapper\']//h3[1]').isDisplayed();
//         $('//input[@name=\'name\']').setValue('Complex');
//         $('//button[@class=\'btn-success btn Ripple-parent add col-6\']').click();
//         browser.pause(1000);
//         $('//input[@name=\'name\']').clearValue();
//         browser.pause(1000);
//         $('//input[@name=\'name\']').setValue('Complex1');
//         $('//button[@class=\'btn-success btn Ripple-parent add col-6\']').click();
//         const name = $('//div[3]//div[1]//h3[1]').getText();
//         expect(name).toEqual('3. Complex1')
//     });
// });
//
// describe('Alexander Dobrovolsky - TC { 206, 207 , 208 } Total result', function () {
//     it('should change Total result to 50 after creating of a new counter with initial value {TC - 206}', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         $('//button[@class=\'btn-success btn Ripple-parent add col-6\']').click();
//         browser.pause(1000);
//         const text = $('//h3[@class=\'total-count\']').getText()
//         expect(text).toEqual('Total: 50')
//     })
//     it('should change Total result with using negative sub buttons on any counter {TC - 207}', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         $('//button[@class=\'btn-success btn Ripple-parent add col-6\']').click();
//         $('//body//div[2]//div[2]//button[3]').click();
//         browser.pause(1000);
//         const res = $('//h3[@class=\'total-count\']').getText();
//         expect(res).toEqual('Total: 47')
//     });
//     it('should change Total result with using negative sub buttons on any counter {TC - 208} ', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         $('//button[@class=\'btn-success btn Ripple-parent add col-6\']').click();
//         $('//body//div[2]//div[2]//button[8]').click();
//         browser.pause(1000);
//         const res = $('//h3[@class=\'total-count\']').getText();
//         expect(res).toEqual('Total: 53')
//     });
// });