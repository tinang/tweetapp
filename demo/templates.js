"use strict"; angular.module("mokusApp").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html>\n<html ng-app=\"mokusApp\" class=\"no-js\" ng-strict-di>\n  <head>\n    <meta charset=\"utf-8\">\n\n    <title>Mokus Mini App</title>\n\n    <base href=\"/\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n    <meta name=\"mobile-web-app-capable\" content=\"yes\">\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n    <meta name=\"apple-mobile-web-app-title\" content=\"Mokus Mini App\">\n\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\">\n    <link rel=\"stylesheet\" href=\"main.css\">\n\n    <script src=\"js/oauth.min.js\"></script>\n    <script src=\"app.js\"></script>\n    <script src=\"templates.js\"></script>\n  </head>\n\n  <body>\n\n    <!-- Overlay for loading -->\n    <div ng-show=\"loading\" class=\"throbber\">\n      <i class=\"fa fa-spinner fa-spin fa-5x\"></i>\n    </div>\n\n    <ui-view></ui-view>\n\n  </body>\n</html>\n");
$templateCache.put("home/block-content.html","<div class=\"wrapper-content\">\n  <section class=\"container\">\n    <div class=\"content row\">\n      <div class=\"col-md-14 col-md-offset-5\">\n        <div class=\"content__lg\">\n          The project was initiated in 2011 as a redesign of the Sotheby’s website, but the team quickly realized a broader review of all communications materials was needed. Sotheby’s has a truly global outreach: Founded in London and currently headquartered in New York, the company also has salesrooms in Paris, Zurich, Milan, Geneva, Beijing, Hong Kong and Doha, along with a network of offices and consultants around the world. Sotheby’s was the first international fine art auction house in Russia and China, and the first to hold online auctions.\n        </div>\n        <div class=\"content__md\">\n          <p>Nobody was more surprised by Xbox’s fall from grace than Microsoft. In its first eight years, the Xbox 360 established the company as a powerhouse in the games industry, and one of the best options for streaming apps like Netflix, Hulu, and Pandora. As entertainment trended away from physical media and cable subscriptions, the Xbox 360 felt like a test run for Microsoft’s plan to one day control the living room.</p>\n          <p>With each opulent press conference announcing a new product, Microsoft seemed more confident. When it launched the Kinect motion controller in 2010, Wired called the event \"the most lavish product launch\" in video game history — complete with Cirque du Soleil performers, an animatronic</p>\n          <p>elephant, and an Xbox orb large enough to crush the front row. By the time the company announced the Xbox 360’s successor — Xbox One — three years later, the company was riding a tsunami of success.</p>\n          <p>In theory, the Xbox One was an improvement on everything fans loved about the Xbox 360: a more powerful Kinect, new hardware that merged the console with your cable box, and lots of talk about the cloud. Microsoft only forgot one thing: the games. During the hour-long kick-off presentation, six minutes were allotted to new game announcements.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>");
$templateCache.put("home/home.html","<div class=\"wrapper\">\n\n  <!-- Top Fixed Navigation -->\n  <ng-include src=\"\'home/top-nav.html\'\"></ng-include>\n\n  <div class=\"main\">\n    <!-- List tweets -->\n    <ui-view></ui-view>\n\n    <!-- Block content -->\n    <ng-include src=\"\'home/block-content.html\'\"></ng-include>\n  </div><!--/.main -->\n\n</div><!--/.wrapper -->");
$templateCache.put("home/top-nav.html","<!-- Head Navigation -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" ng-if=\"listHashtags.length > 0\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed pull-left\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\" ng-click=\"isCollapsed = !isCollapsed\">\n        <span class=\"sr-only\">Toggle nav</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\" uib-collapse=\"!isCollapsed\">\n      <ul class=\"nav navbar-nav\">\n        <li ng-repeat=\"hashtagItem in listHashtags\" ui-sref-active=\"active\">\n          <a ui-sref=\"root.feed({hashtag: hashtagItem.hashtag})\">{{ hashtagItem.hashtag }}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav><!--/.navbar -->");
$templateCache.put("feed/list.html","<div class=\"wrapper-feed\">\n  <div class=\"feed container\">\n\n    <div class=\"feed_desc row\">\n      <div class=\"col-md-12 col-md-offset-6\">\n        <div class=\"feed_desc__heading animated fadeInDown\">\n          {{ hashtagObj.desc }}\n        </div>\n        <div class=\"feed_desc__info animated zoomIn\">\n          <span ng-repeat=\"info in hashtagObj.info\">\n          	<a href=\"{{ info.link }}\" target=\"_blank\">{{ info.text }}</a>\n          </span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"feed_list row\">\n      <div ng-repeat=\"tweet in tweets\" class=\"feed_list_wrapper col-md-8 animated fadeInLeft\">\n      	<div class=\"feed_list__item\">\n\n          <div class=\"profile clearfix\">\n            <div class=\"pull-left\">\n              <a class=\"profile_fullname\" href=\"https://twitter.com/{{ tweet.user.screen_name }}\" target=\"_blank\">{{ tweet.user.name }}</a>\n              <span class=\"profile_nickname\">{{ tweet.user.screen_name }} {{ tweet.user.create_at }}</span>\n            </div>\n            <img class=\"pull-right\" src=\"{{ tweet.user.profile_image_url }}\" alt=\"{{ tweet.user.name }}\">\n          </div>\n\n          <div class=\"content\" ng-bind-html=\"tweet.text | displayHtml\"></div>\n          <div class=\"bottom\">\n            <a href=\"https://twitter.com/intent/tweet?in_reply_to={{ tweet.id }}\" rel=\"nofollow\"><i class=\"fa fa-reply\"></i></a>\n            <a href=\"https://twitter.com/intent/retweet?tweet_id={{ tweet.id }}\" rel=\"nofollow\"><i class=\"fa fa-retweet\"></i></a>\n            <a href=\"https://twitter.com/intent/like?tweet_id={{ tweet.id }}\" rel=\"nofollow\"><i class=\"fa fa-heart\"></i></a>\n          </div>\n      	</div>\n      </div>\n    </div><!--\\.feed_list -->\n\n    <button class=\"btn btn-primary btn-lg\" ng-click=\"loadTweets()\">Load older tweets</button>\n  </div>\n</div>");}]);