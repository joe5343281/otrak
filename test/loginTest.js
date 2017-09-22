/*eslint-disable no-undef: "error"*/

//var assert = require('assert')
var assert = require('chai').assert 

describe('otrak', function() 
{
    var M = require('./manager.js')
    
    describe('login', function() {
        it('login(ccc, 1111).isUndefined', function () {
            assert.isUndefined(M.login('ccc', '1111'))
        })   

        it('login(ccc, 1234567).id=ccc', function() {
            assert.equal('ccc', M.login('ccc', '1234567').id)
        })
        
        it('login(neo, 1111)===undefined', function() {
            assert.isUndefined(M.login('neo', '1111'))
        })
            
    })
})
