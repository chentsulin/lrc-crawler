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

            if ($el.is(':not([bgcolor])') || $el.is('[bgcolor="#E9DFD1"]')) return;

            var song = {};

            var tds = $el.find('td');

            song.url       = tds.eq(3).find('a').attr('href');
            song.singer    = tds.eq(1).text();
            song.album     = tds.eq(2).text();
            song.name      = tds.eq(3).text();
            song.issueDate = tds.eq(4).text();

            songs.push(song);

        });

        callback(songs);
    });
};

crawler.getLrc = function(url, callback) {

    request('http://mojim.com' + url, function(err, res, body) {

        if (err) throw err;

        var $ = cheerio.load(body);

        var lines = $('#fsZ').find('dl').find('dd').children();

        var lrc = lines.filter(function(i, el) {

            return el.type === 'text' && /^\[/.test(el.data);

        }).map(function(i, el) {

            return $(el).text;

        }).get();

        callback(lrc);
    });
};


module.exports = crawler;
