describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });

    describe('getDescendingNumbers', function () {
        it('should get descending numbers between string 10 and number 1', function () {
            expect(app.getDescendingNumbers('10', 1)).toEqual(false);
        });
        it('should get descending numbers between number 10 and string 1', function () {
            expect(app.getDescendingNumbers(10, '1')).toEqual(false);
        });
        it('should get descending numbers between string 10 and string 1', function () {
            expect(app.getDescendingNumbers('10', '1')).toEqual(false);
        });
        it('should get descending numbers between 1 and 10', function () {
            expect(app.getDescendingNumbers(1, 10)).toEqual(false);
        });
        it('should get descending numbers between 1 and 1', function () {
            expect(app.getDescendingNumbers(1, 1)).toEqual(false);
        });
        it('should get descending numbers between 2 and 1', function () {
            expect(app.getDescendingNumbers(2, 1)).toEqual('2 1');
        });

     describe('areaOfTrapezoid', function () {
         it('should return area of trapezoid, a < 0', function () {
             expect(app.areaOfTrapezoid(-1, 1, 1)).toEqual(false);
         });
         it('should return area of trapezoid, b < 0', function () {
             expect(app.areaOfTrapezoid(1, -1, 1)).toEqual(false);
         });
         it('should return area of trapezoid, h < 0', function () {
             expect(app.areaOfTrapezoid(1, 1, -1)).toEqual(false);
         });
         it('should return area of trapezoid, a is not a number', function () {
             expect(app.areaOfTrapezoid('1', 1, 1)).toEqual(false);
         });
         it('should return area of trapezoid, b is not a number', function () {
             expect(app.areaOfTrapezoid(1, '1', 1)).toEqual(false);
         });
         it('should return area of trapezoid, h is not a number', function () {
             expect(app.areaOfTrapezoid(1, 1, '1')).toEqual(false);
         });
         it('should return area of trapezoid = 1', function () {
             expect(app.areaOfTrapezoid(1, 1, 1)).toEqual(1);
         });
        })
        
        describe('maxArray', function () {
            it('should return max element of array that contains not only numbers', function () {
                expect(app.maxArray(['0', 0])).toEqual(false);
            })
            it('should return max element of array that contains equal numbers', function () {
                expect(app.maxArray([0, 0])).toEqual(0);
            })
            it('should return max element of array [0, 1]', function () {
                expect(app.maxArray([0, 1])).toEqual(1);
            })
            it('should return max element of array [1, 0]', function () {
                expect(app.maxArray([1, 0])).toEqual(1);
            })
        })

        describe('squareOdd', function () {
            it('should return squareOdd while array contains string and -1', function () {
                expect(['0', -1]).toEqual(['0', 1]);
            })
            it('should return squareOdd while array contains string and -2', function () {
                expect(['0', -2]).toEqual(['0', -2]);
            })
            it('should return squareOdd while array contains string and 0', function () {
                expect(['0', 0]).toEqual(['0', 0]);
            })
            it('should return squareOdd while array contains string and 1', function () {
                expect(['0', 1]).toEqual(['0', 1]);
            })
            it('should return squareOdd while array contains string and 2', function () {
                expect(['0', 2]).toEqual(['0', 2]);
            })
            it('should return squareOdd while array contains string and 3', function () {
                expect(['0', 3]).toEqual(['0', 9]);
            })
            it('should return squareOdd while array contains 0 and -2', function () {
                expect([0, -2]).toEqual([0, -2]);
            })
            it('should return squareOdd while array contains 0 and -1', function () {
                expect([0, -1]).toEqual([0, 1]);
            })
            it('should return squareOdd while array contains 0 and 1', function () {
                expect([0, 1]).toEqual([0, 1]);
            })
            it('should return squareOdd while array contains 0 and 2', function () {
                expect([0, 2]).toEqual([0, 2]);
            })
            it('should return squareOdd while array contains 0 and 3', function () {
                expect([0, 3]).toEqual([0, 9]);
            })
            it('should return squareOdd while array contains 1 and 1', function () {
                expect([1, 1]).toEqual([1, 1]);
            })
            it('should return squareOdd while array contains 1 and 2', function () {
                expect([1, 2]).toEqual([1, 2]);
            })
            it('should return squareOdd while array contains 1 and 3', function () {
                expect([1, 3]).toEqual([1, 9]);
            })
            it('should return squareOdd while array contains false and 0', function () {
                expect([false, 0]).toEqual(false);
            })
            it('should return squareOdd while array contains empty table and 0', function () {
                expect([[], 0]).toEqual(false);
            })
            it('should return squareOdd while array contains empty string and 0', function () {
                expect(['', 0]).toEqual(false);
            })
            it('should return squareOdd while array is null', function () {
                expect(null).toEqual(false);
            })
            it('should return squareOdd while array is empty', function () {
                expect([]).toEqual(false);
            })
            it('should return squareOdd while array is empty string', function () {
                expect('').toEqual(false);
            })
        })
        
    })
});
