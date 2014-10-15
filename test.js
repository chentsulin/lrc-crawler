var crawler = require('./lib/lrc-crawler');

crawler.getList('七里香', function(res) {

    console.log(res);

    crawler.getLrc(res[5].url, function(res) {

        console.log(res);
    });
});