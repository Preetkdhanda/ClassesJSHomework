const assert = require('assert');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Paint', function(){
    let paint;

    beforeEach(function(){
        paint = new Paint (20);
    });

    it('checks if paint is empty', function(){

        const actual = paint.checkIfPaintIsEmpty();
        assert.strictEqual(actual, false)
        
    })

    it('empties can', function(){
        const actual = paint.emptyPaint()
        assert.strictEqual(actual, 0)

    })

})

