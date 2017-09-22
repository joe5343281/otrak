var assert = require('assert');

describe('otrak', function() 
{
    var M = require('./manager.js')
    
    describe('login', 
        function() {
            it('login(ccc, 1111))', function() {
                assert.equal(undefined, typeof(M.log('ccc','1111')));
            });
            
            it('login(ccc, 1234567).id=ccc', function() {
                assert.equal('ccc', M.login('ccc', '1234567').id);
            });
        });
});

