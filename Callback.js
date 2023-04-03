/**
 * How to test the Callback equality in Jest
 */

function fetchData(callBack) {
    return callBack("Hello");
}

module.exports = fetchData;