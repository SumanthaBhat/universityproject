window.onload = function() {
    jQuery(function() {
        jQuery.getFeed({
            url: 'http://globalnews.ca/feed/',
        	success: function(feed) {
            	var html = '';
                for(var i = 0; i < feed.items.length; i++) {            
                    var item = feed.items[i];
                    $('.timeline-wrapper').hide();
                    html += '<div class="panel">'
                    + '<div class="panel-heading">'
                    + '<h3 class="panel-title"><img class="img-circle feed-header-img" src="images/feed.png"/> '
                	+ 'Global News'
                    + '</h3>'
                    + '</div><!--End panel heading-->'
                    + '<div class="panel-body newsfeed">'
                    + "<a href='" + item.link + "'><img class='img-responsive' src='images/rss.jpg'><button class='btn btn-block'>VIEW STORY</button></a>"
                    + "<div class='panel-desc'>" + item.description + '</div>'
                    + '</div><!--End panel body-->'
                    + '<div class="panel-footer">'
                    + '<i class="glyphicon glyphicon-heart heart"></i> <span class="text-muted">899</span>  <i class="glyphicon glyphicon-comment comment"></i> <span class="text-muted">15k</span> <i class="glyphicon glyphicon-tags comment"></i><hr>'
                    + '<span class="text-muted pointer">view all 15k comments</span><br>'
                    + '<input class="form-control" type="text" placeholder="COMMENT HERE">'
                    + '</div><!--End panel footer-->'
                    + '</div><!--End panel primary-->';
                }
                
                jQuery('#feed').append(html);
            }    
        });
    });
};