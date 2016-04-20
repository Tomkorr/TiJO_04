describe('app', function () {
    'use strict';
    var app = window.app;
    
    xdescribe('Division function', function () {
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
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
        
    });
    
    
    xdescribe('getDesc',function() {
        it('should get numbers between two numbers, maybe', function() {
            expect(app.getDescendingNumbers(3,1)).toEqual();
        });
        it('should get numbers ', function() {
            expect(app.getDescendingNumbers(3,1)).toEqual(false);
        });
        it('should get numbers ', function() {
            expect(app.getDescendingNumbers(3,1)).toEqual(false);
        });
        it('should get numbers ', function() {
            expect(app.getDescendingNumbers(3,1)).toEqual('3 2 1');
        });
        it('should get numbers ', function() {
            expect(app.getDescendingNumbers(5,1)).toEqual('5 4 3 2 1');
        });
        it('should get numbers ', function() {
            expect(app.getDescendingNumbers(-2, 6)).toEqual(false);
        });
        it('should\'t get a number', function(){
            expect(app.getDescendingNumbers('aaaaaa', 3)).toEqual(false);
        });
        it('should\'t get a number', function(){
            expect(app.getDescendingNumbers(8, '+')).toEqual(false);
        });
        it('should get numbers ', function() {
            expect(app.getDescendingNumbers(0, -1)).toEqual('0 -1');
        });
        
    });
    
    
    describe(' areaOfTrapezoid',function() {
        xit('should get false', function() {
            expect(app. areaOfTrapezoid(-1, -1, 4)).toEqual(false);
        });
        xit('should get a number', function(){
            expect(app.areaOfTrapezoid(10,10,20)).toEqual(200);
        });
        xit('should\'t get a number', function(){
            expect(app.areaOfTrapezoid('adasdasd', '1', '54')).toEqual(false);
        });
        xit('should get a false value', function(){
            expect(app.areaOfTrapezoid(-1, -1, -1)).toEqual(false);
        });
        xit('should get a false value', function(){
            expect(app.areaOfTrapezoid(-1, -1, 1)).toEqual(false);
        });
        xit('should get a false value', function(){
            expect(app.areaOfTrapezoid(-1, 1, 1)).toEqual(false);
        });
        xit('should get a false value', function(){
            expect(app.areaOfTrapezoid('a', 10, 10)).toEqual(false);
        });
        xit('should get a false value', function(){
            expect(app.areaOfTrapezoid('a', "aa", 1)).toEqual(false);
        });
        it('should get a false value', function(){
            expect(app.areaOfTrapezoid('a', "aabbbbbccc", "aassc")).toEqual(false);
        });
        
    });
    
    
    describe('maxArray',function() {
        it('should get a true value', function() {
            expect(app.maxArray([1,2])).toEqual(2);
        });
        it('should get a Null value', function() {
            expect(app.maxArray([])).toBeNull(true);
        });
        it('should get a false', function(){
            expect(app.maxArray(['1', '5'])).toEqual(false); //a real problem in JavaSript vs other programming languages - 'a', 'b' ASCII var or Error X
        });
    });
});
