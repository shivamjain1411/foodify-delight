import {Sum} from "../Sum"

test("sum function should calculate the sum of two number",()=>{
    const result=Sum(3,5);

    //assertion
    expect(result).toBe(8);
});