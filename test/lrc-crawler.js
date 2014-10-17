var crawler = require('..');
var should  = require('chai').should();
var sinon   = require('sinon');

describe('crawler', function() {

    describe('#getList()', function() {

        it('should call callback function', function(done) {

            var callback = sinon.spy();

            crawler.getList('七里香', function() {
                callback();
                done();
            });

            callback.called.should.be.true;
        });

        it('respond with matching songs', function(done) {

            crawler.getList('七里香', function(err, list) {

                should.not.exist(err);
                should.exist(list);
                list.should.be.an('array');
                // list.should.equal([]);
                done();
            })
        });

    });

    describe('#getLrc()', function() {

    });

});