function sum(a) {
    return a.reduce((i, j) => i + j, 0);
}

function multiply (a){
    return a.reduce((i, j) => i * j, 1);
}

function reverse(s) {
    return s.split("").reverse().join(""); 
}

function filterLongWords(words, i) {
    return words.filter(word => word.length >= i);
}

function myFunctionTest(expected, func) {
    const actual = func.call();
    
    if (JSON.stringify(expected) == JSON.stringify(actual)) 
        return "TEST SUCCEEDED"; 
    return "TEST FAILED." + "  Expected " + expected + " but found " + actual;
}

function test() {

    console.log("testing sum([1,2,3,4]) " + myFunctionTest(10, () => sum([1,2,3,4])));
    console.assert(sum([1,2,3,4]) == 10, "failed sum([1,2,3,4])");

    console.log("testing multiply([1,2,3,4]) " + myFunctionTest(24, () => multiply([1,2,3,4])));
    console.assert(multiply([1,2,3,4]) == 24, "failed multiply([1,2,3,4])");

    console.log("testing reverse('Florida')" + myFunctionTest("adirolF", () => reverse("Florida")));
    console.assert(reverse("Florida") == "adirolF", "failed reverse('Florida')");

    console.log("testing filterLongWords(['a','abcde','abc','abdc', 'efghi', 'asdfg'], 5) " +
            myFunctionTest(["abcde","efghi","asdfg"], () => filterLongWords(['a','abcde','abc','abdc', 'efghi', 'asdfg'], 5) )
            );
    console.assert(filterLongWords(['a','abcde','abc','abdc', 'efghi', 'asdfg'], 5).length == ["abcde","efghi","asdfg"].length, "failed filterLongWords(['a','abcde','abc','abdc', 'efghi', 'asdfg']");
            
}

test();