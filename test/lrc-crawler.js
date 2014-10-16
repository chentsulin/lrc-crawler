var crawler = require('..');
var should  = require('chai').should();

describe('crawler', function() {

    describe('#getList()', function() {

        it('respond with matching songs', function(done) {
            crawler.getList('七里香',function(err, list) {

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