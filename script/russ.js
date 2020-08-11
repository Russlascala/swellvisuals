// instagram script 
// for more info: https://github.com/stevenschobert/instafeed.js
/* if ($('#instafeed').length >= 1) {
  $(document).ready(function () {
    var userFeed = new Instafeed({
      get: 'user',
      userId: '542674394',
      limit: 24,
      resolution: "standard_resolution",
      accessToken: 'IGQVJVelNUXzJKTk54Y2ZAXNGR0UGpJVFNoSEEwNzFMclJKQ2tpTl9pSXR0MTRLQVFKZAXB1b3AyNXdaRW1hVVlpZATNXUTRtN1dxdVRQaHE4ZAjl0Q0NyZA1Qxd0N0dFloUnNIOEdsMTRjMDZAoY25Ea202TwZDZD',
      sortBy: "most-recent",
      template: '<div class="col-lg-3 col-md-6 instaImgs"><a href="{{link}}" title={{caption}} target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
      
    });
    userFeed.run();
  });
} 
 */
console.log(Instafeed)
var feed = new Instafeed({
  accessToken: 'IGQVJYb1VlQjExdDgtZA3ltWGRmbmpDV1lVRDFMYkd2eWdjcnhXV2dXSWJnb1BKSTJhNkpERmhfNlpyOVJLa05XQU44T084U0x3X3llZA2M4SC1IZA09aZA1JFaEptb0IwQzlxaU1PZAXkzN19Fa3htNldJLQZDZD',
  template: '<div class="col-lg-3 col-md-6 instaImgs"><a href="{{link}}" title={{caption}} target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
  limit: 24,
  transform: function (item) {
    var d = new Date(item.timestamp);
    item.date = [d.getDate(), d.getMonth(), d.getYear()].join('/');
    return item;
  }
});

feed.run();


/*   var feed = new Instafeed({
    get: 'user',
    userId: '542674394',
    accessToken:'IGQVJWTzNwNVY2c0pTNm9vcEk1VGlIS1d3UDEwRGJYdTBHZAncydWYxQkRIZAlRRNmwwdDgxV0ZAMWVFYeWNOcjREYjRMM2EwOGpjNTY2enVBdThiUTJRdzdsdG5lMnBuenp6MWxQaTJ4SmU5eEhYV3pPTQZDZD',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    
});
feed.run();
 */