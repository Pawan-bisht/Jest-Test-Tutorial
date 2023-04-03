const fetchData = require("./Promise");

test("Promise Test Case", () => {
    return fetchData().then(data => {
        expect(data).toBe("Hello");
    })
})

