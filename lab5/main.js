function max(a, b) {
    if (a >= b)
        return a;
    return b;
}

function maxOfThree(a,b,c) {
    return max(max(a, b), c);
}

function isVowel(v) {
    var vowels = ['A', 'E', 'I', 'O', 'U'];
    return vowels.includes(v.toUpperCase());
}

function sum(a) {
    return a.reduce((i, j) => i + j, 0);
}

function multiply (a){
    return a.reduce((i, j) => i * j, 1);
}

function reverse(s) {
    return s.split("").reverse().join(""); 
}

function findLongestWord(arr) {
    if (arr.length > 0) 
        return arr.sort((i, j) => j.length - i.length)[0].length
    return null;
}


function filterLongWords(words, i) {
    return words.filter(word => word.length >= i);
}

function jsSample() {
    const a = [1,3,5,3,3];
    const b = a.map(i => i * 10)
    const c = a.filter(i => i === 3);
    
    return a.concat(b).concat(c);
}

function myFunctionTest(expected, func) {
    const actual = func.call();
    
    if (JSON.stringify(expected) == JSON.stringify(actual)) 
        return "TEST SUCCEEDED"; 
    return "TEST FAILED." + "  Expected " + expected + " but found " + actual;
}

function test() {

    console.log("testing max(3, 4) " + myFunctionTest(4, () => max(3, 4) ));
    console.assert(max(3, 4) == 4, "failed max(3, 4)");

    console.log("testing maxOfThree(5, 2, 3) " + myFunctionTest(5, () => maxOfThree( 5, 2, 3) ));
    console.assert(maxOfThree( 5, 2, 3) == 5, "failed maxOfThree(5, 2, 3)");

    console.log("testing isVowel('O') " + myFunctionTest(true, () => isVowel('O') ));
    console.assert(isVowel('O'), "failed isVowel('O')");

    console.log("testing sum([1,2,3,4]) " + myFunctionTest(10, () => sum([1,2,3,4])));
    console.assert(sum([1,2,3,4]) == 10, "failed sum([1,2,3,4])");

    console.log("testing multiply([1,2,3,4]) " + myFunctionTest(24, () => multiply([1,2,3,4])));
    console.assert(multiply([1,2,3,4]) == 24, "failed multiply([1,2,3,4])");

    console.log("testing reverse('Florida')" + myFunctionTest("adirolF", () => reverse("Florida")));
    console.assert(reverse("Florida") == "adirolF", "failed reverse('Florida')");

    console.log("testing findLongestWord(['a','abcde','abc','abdc']) " + myFunctionTest(5, () => findLongestWord(['a','abcde','abc','abdc'])));
    console.assert(findLongestWord(['a','abcde','abc','abdc']) == 5, "failed findLongestWord(['a','abcde','abc','abdc'])");

    console.log("testing filterLongWords(['a','abcde','abc','abdc', 'efghi', 'asdfg'], 5) " +
            myFunctionTest(["abcde","efghi","asdfg"], () => filterLongWords(['a','abcde','abc','abdc', 'efghi', 'asdfg'], 5) )
            );
    console.assert(filterLongWords(['a','abcde','abc','abdc', 'efghi', 'asdfg'], 5).length == ["abcde","efghi","asdfg"].length, "failed filterLongWords(['a','abcde','abc','abdc', 'efghi', 'asdfg']");

            
}

test();