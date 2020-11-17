const assert = require('assert');
const Paint = require('../paint');

describe('Paint', function() {
    let paint;
    beforeEach(function(){
        paint = new Paint(5);
        paint2 = new Paint(0);
    });
    
    it('should have a value for volume', function() {
        const actual = paint.volume;
        assert.strictEqual(actual, 5);
    });

    describe('emptiness', function() {
        
        it('should be able to check if it is not empty', function() {
            actual = paint.checkIfEmpty();
            expected = false;
            assert.strictEqual(actual, expected)
        });

        it('should be able to check if it is empty', function() {
            actual = paint2.checkIfEmpty();
            expected = true;
            assert.strictEqual(actual, expected)
        });
        
        it('should be able to be emptied', function() {
            actual = paint.emptyItself();
            expected = 0;
            assert.strictEqual(actual, expected)
        });
    });
});