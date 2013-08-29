//when the page is ready
$(document).ready(function() {
	//the list of domains to check and an array which will store hits
	var domains = ['colesinsurance.com.au','aami.com.au','bankwest.com.au','cnn.com','news.com.au', 'news.ninemsn.com.au', 'smh.com.au', 'global.rakuten.com/en/', 'rakuten.co.jp/'];
	var visited = [];
	//for every domain...
	$.each(domains,function() {
		//inject a link into page
    // var a = $('<a>test</a>').attr({ 
    //  href: 'http://www.' + this,
    //  'class': 'checkme'  
    // }).appendTo(document.body);
    
    var $a_link = $('<a>'+this+'</a>').attr({ 
       href: 'http://www.' + this,
       'class': 'checkme'
     }).appendTo(document.body);
     		
    // check the color of the link
    //     if ($(a).css('color') == '#ff0000' || $(a).css('color') == 'rgb(255, 0, 0)') { //either format of color
    //  $(a).addClass('highlight');
    //  visited.push(this);
    // }
    
    $($a_link).append(' ----  ' + $a_link.css('color'));
    
    if ($a_link.css('color') == '#ff0000' || $a_link.css('color') == 'rgb(255, 0, 0)') { //either format of color
      console.log('link is red');
      $a_link.addClass('highlight');
     visited.push($a_link);
    }
    

		//remove from the page -- no longer need the links
    // $a_link.remove();
	});
	console.log(visited.length);
	if(visited.length) {
	}
});