var debug   = require('debug');
var request = require('request');
var cheerio = require('cheerio');

var lrcCrawler = {};

lrcCrawler.getList = function(name, callback) {

    request('http://mojim.com/' + name + '.html?t3', function(err, res, body) {

        if (err) throw err;

        var $ = cheerio.load(body);

        var songs = [];

        $('table.iB').find('tr').each(function(i, el) {

            el.is(':not([bgcolor])') return;

            var song = {};

            var tds = el.find('td');

            song.singer    = tds.eq(1).text();
            song.album     = tds.eq(2).text();
            song.name      = tds.eq(3).text();
            song.issueDate = tds.eq(4).text();

            songs.push(song);

        });

        callback(songs);
    });
};

lrcCrawler.getLrc = function(id) {

    request('http://mojim.com/twy' + id + '.htm', function(err, res, body) {

        if (err) throw err;

        var $ = cheerio.load(body);


    });
};


module.exports = lrcCrawler;
