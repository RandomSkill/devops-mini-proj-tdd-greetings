
const bob = require('./bob');


    test("when name is bob",()=>{
       
            expect(bob("bob")).toBe("Hello,bob");
        });
   


   test("when name is '' ",()=> {
       
            expect(bob('')).toBe("Hello, my friend.");
        });
   
        test("when name is 'francois' and lang is FR ",()=> {
       
            expect(bob('Francois',"FR")).toBe("bonjour,Francois");
        });