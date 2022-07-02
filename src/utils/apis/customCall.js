const { request } =require ('@playwright/test')
const domains =require ('../../config/domains')
const { default: axios } = require('axios');
const { basicHeader } = require ('./header');




const env = process.env.ENV || domains.defaultEvironment
let lastCall = {
    method: undefined,
    url: undefined,
    params:undefined,
    body: undefined,
    responseStatus: undefined,
    responseStatusText: undefined,
    responseBody: undefined
  };
  
  function log(text) {
    // eslint-disable-next-line no-console
    if (debugMode) console.info(text);
  }
  
  function formatApiErrorMessage({ message }) {
    return [
      `Error message: ${message}\n`
        + 'Last API call: \n'
        + `   Method url: ${lastCall.method} ${lastCall.url}\n`
        + `   Headers: ${lastCall.headers}\n`
        + `   Body: ${lastCall.body}\n`
        + `   Response status: ${lastCall.responseStatus} ${lastCall.responseStatusText}\n`
        + `   Response body: ${lastCall.responseBody}\n`
    ];
  }




async function GET(endPoint) {   
    const basicHeaderInfo = basicHeader();
    const URL = `${domains.testApi[env]}${endPoint}`;
    console.log('xxxxxxx full url      :   ' + URL)
    try {
        return await axios({
            method: 'get',
            url:URL,
            headers: basicHeaderInfo
          });

    } catch (e) {
      e.message = formatApiErrorMessage(e);
      throw e;
    }
  };

  async function GET (endPoint,param) {
    const basicHeaderInfo = basicHeader();
    const URL = `${domains.testApi[env]}${endPoint}`;
    try {
      return await axios({
        method: 'GET',
        url:URL,
        params: param,
        headers: basicHeaderInfo
      });
    } catch (e) {
      e.message = formatApiErrorMessage(e);
      throw e;
    }
  };




  module.exports = {
    GET: GET  };