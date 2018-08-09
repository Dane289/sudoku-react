const func = require("./functions");

describe("board is full", () => {
    var nonZeroArray = [1, 2, 3, 4, 5];
    
    test("board has no zeros", () => {
        expect(func.isFull(nonZeroArray)).toBeTruthy();
    });

    test("1+1=2", () =>{
        expect(1+1).toBe(2)
    });

    test("See how toBe works", () => {
        expect(func.isFull([1,2,3])).toBe(true);
    });

});

describe("Board changes", () => {
    test("board is changed on first position", () => {
        var someArray = [1, 2, 3, 4, 5];
        var expected = [5, 2, 3, 4, 5];
        expect(func.changeSudokuBoard(someArray, 0, 0, 5)).toEqual(expected);
    });
});

describe("Board validations", () => {
    test("duplicates on lines", () => {
        var testBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9,
            11, 11, 31, 41, 51, 61, 71, 81, 91,
            12, 22, 32, 42, 52, 62, 72, 82, 92,
    
            13, 23, 33, 43, 53, 63, 73, 83, 93,
            14, 24, 34, 44, 54, 64, 74, 84, 94,
            15, 25, 35, 45, 55, 65, 75, 85, 95,
            
            16, 26, 36, 46, 56, 66, 76, 86, 96,
            17, 27, 37, 47, 57, 67, 77, 87, 97,
            18, 28, 38, 48, 58, 68, 78, 88, 98];
        expect(func.isBoardValid(testBoard)).toBeFalsy();
    });

    test("duplicates on columns", () => {
        var testBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9,
            11, 21, 31, 41, 51, 61, 71, 81, 91,
            12, 22, 32, 42, 52, 62, 72, 82, 92,
    
            13, 23, 33, 48, 53, 63, 73, 83, 93,
            14, 24, 34, 44, 54, 64, 74, 84, 94,
            15, 25, 35, 45, 55, 65, 75, 85, 95,
            
            16, 26, 36, 46, 56, 66, 76, 86, 96,
            17, 27, 37, 47, 57, 67, 77, 87, 97,
            18, 28, 38, 48, 58, 68, 78, 88, 98];
        expect(func.isBoardValid(testBoard)).toBeFalsy();
    });

    test("duplicates on regions", () => {
        var testBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9,
            11, 21, 31, 41, 51, 61, 71, 81, 91,
            12, 22, 21, 42, 52, 62, 72, 82, 92,
    
            13, 23, 33, 43, 53, 63, 73, 83, 93,
            14, 24, 34, 44, 54, 64, 74, 84, 94,
            15, 25, 35, 45, 55, 65, 75, 85, 95,
            
            16, 26, 36, 46, 56, 66, 76, 86, 96,
            17, 27, 37, 47, 57, 67, 77, 87, 97,
            18, 28, 38, 48, 58, 68, 78, 88, 98];
        expect(func.isBoardValid(testBoard)).toBeFalsy();
    });

    test("full valid board", () => {
        var testBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9,
            11, 21, 31, 41, 51, 61, 71, 81, 91,
            12, 22, 32, 42, 52, 62, 72, 82, 92,
    
            13, 23, 33, 43, 53, 63, 73, 83, 93,
            14, 24, 34, 44, 54, 64, 74, 84, 94,
            15, 25, 35, 45, 55, 65, 75, 85, 95,
            
            16, 26, 36, 46, 56, 66, 76, 86, 96,
            17, 27, 37, 47, 57, 67, 77, 87, 97,
            18, 28, 38, 48, 58, 68, 78, 88, 98];
        expect(func.isBoardValid(testBoard)).toBeTruthy();
    })
});