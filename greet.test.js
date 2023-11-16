
const greet = require('./greet');


    test("when name is bob",()=>{
       
            expect(greet("bob")).toBe("Hello, bob.");
        });



   


   test("when name is '' ",()=> {
       
            expect(greet('')).toBe("Hello, my friend.");
        });
   
        test("when name is 'francois' and lang is FR ",()=> {
       
            expect(greet('Francois',"FR")).toBe("bonjour, Francois.");
        });