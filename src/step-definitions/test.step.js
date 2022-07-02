

const { Given, When, Then, And, defineStep, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require("chai");
const { GuessDaily } = require('../api-calls/guesdaily');
setDefaultTimeout(150 * 1000);

const guessDaily =  new GuessDaily();
const chracters=[]


    Given('all Chacracters from keyboard',  async function () {
    (await guessDaily.getAllCharacters()).forEach(h=>chracters.push(h))
    });
  
    When('enter all text from keyboard to guess present text', async function () {
      await guessDaily.getPresentWord(chracters)
    });
  
    Then('program will permute postion of them until get correct word', async function () {
      await guessDaily.finalResult()

    });