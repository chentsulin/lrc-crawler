var debug   = require('debug')('crawler');
var request = require('request');
var cheerio = require('cheerio');
var _       = require('lodash');

var crawler = {};

crawler.getList = function(name, callback) {

    request('http://mojim.com/' + name + '.html?t3', function(err, res, body) {

        if (err) throw err;

        var $ = cheerio.load(body);

        var songs = [];

        $('table.iB').find('tr').each(function(i, el) {

            var $el = $(el);

            if ($el.is(':not([bgcolor])')) return;

            var song = {};

            var tds = $el.find('td');

            // song.id        =
            song.singer    = tds.eq(1).text();
            song.album     = tds.eq(2).text();
            song.name      = tds.eq(3).text();
            song.issueDate = tds.eq(4).text();

            songs.push(song);

        });

        callback(songs);
    });
};

crawler.getLrc = function(id, callback) {

    request('http://mojim.com/twy' + id + '.htm', function(err, res, body) {

        if (err) throw err;

        var $ = cheerio.load(body);


        var textArr = $('#fsZ').find('dl').find('dd').html().split('<br />');

        var lrc = _.filter(textArr, function(text) {

            return /^\[/.test(text);
        });

        callback(lrc);
    });
};


module.exports = crawler;
