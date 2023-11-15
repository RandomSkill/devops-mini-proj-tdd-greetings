const { describe } = require('yargs');
const bob = require('./bob');


    test("when name is bob",()=>{
       
            expect(bob("bob")).toBe("Hello,bob");
        });
   


   test("when name is '' ",()=> {
       
            expect(bob('')).toBe("hello,myfriend");
        });
   
   