const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll ,ITestCaseHookParameter,setDefaultTimeout} = require('@cucumber/cucumber')
setDefaultTimeout(150 * 1000);

Before(async (scenario) => {
  console.log('Create new context')
  console.log(`🥒 Running cucumber "${scenario.pickle.name}"`);
})

After(async (scenario) => {
  const scenarioStatus= scenario.result?.status
  console.log('Close context')

})
