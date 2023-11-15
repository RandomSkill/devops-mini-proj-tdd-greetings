const { describe } = require('yargs');
const bob = require('./bob');

test('Greet function', () => {
    describe("when name is bob",()=>{
        it("should return hello,bob",() =>{
            expect(bob("bob")).toBe("Hello,bob");
        })
    })
    
});