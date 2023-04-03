const fetchData = require("./Async");

test("Async Test Case", async () => {
    const data = await fetchData();
    expect(data).toBe("done");
})