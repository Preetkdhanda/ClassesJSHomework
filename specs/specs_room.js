const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
    let room;

    beforeEach(function(){
        room = new Room (200);

    });

    it('should have a square metres', function(){
        const actual = room.areaBySquareMetres;
        assert.strictEqual(actual,200)
    })

    it('should be able to tell us if its painted', function(){
        const actual = room.painted;
        assert.strictEqual (actual, false)

    })

    it('should be able to be painted', function(){
        room.roompainted();
        const actual = room.painted;
        assert.strictEqual(actual, true)

    })
})

