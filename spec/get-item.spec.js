const getItem = require('../get-item');
const libraryChai = require('chai');
const expect = libraryChai.expect;

describe('getItem()', function () {
    it('If index = 0 returns first item in array', function() {
        const actual = getItem(['a', 'b', 'c'], 0);
        const expected = 'a';
        expect(actual).to.equal(expected);
    });
    it('If index < arr.length returns item at index', function(){
        const actual = getItem(['a', 'b', 'c', 'd'], 2);
        const expected = 'c';
        expect(actual).to.equal(expected);
    });
    it('If index = arr.length returns first item in array', function() {
        const actual = getItem(['a', 'b', 'c'], 3);
        const expected = 'a';
        expect(actual).to.equal(expected);
    });
    it('If index is higher than arr.length cycles back through array', function() {
        const actual = getItem(['a', 'b', 'c'], 5);
        const expected = 'c';
        expect(actual).to.equal(expected);
    });
});