const assert = require('assert');
const Room = require('../room');

describe('Room', function() {
    let room;

    beforeEach(function() {
        room = new Room(34, false);
    });

    it('should have area', function() {
        const actual = room.area;
        assert.strictEqual(actual, 34);
    });
    it('should start not painted', function() {
        const actual = room.paintedStatus;
        assert.strictEqual(actual, false);
    });
});

