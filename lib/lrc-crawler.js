var debug = require('debug');
var request = require('request');

var lrcCrawler = {};

lrcCrawler.getList = function(name) {

    request('http://mojim.com/' + name + '.html?t3', function(err, res, body) {

        if (err) throw err;

        console.log(body);

    });
};

lrcCrawler.getLrc = function(id) {

    request('http://mojim.com/twy' + id + '.htm', function(err, res, body) {

        if (err) throw err;

        console.log(body);
    });
};


module.exports = lrcCrawler;
