/**
 * How to test the Callback equality in Jest
 */

const fetchData = require("./Callback");

test("Test case for callback", (done)=> {
    function callBack(data) {
        console.log(data)
        try{
            expect(data).toBe('Hello');
            done()
        } catch(err) {
            done(err);
        }
    }
    fetchData(callBack);
})
