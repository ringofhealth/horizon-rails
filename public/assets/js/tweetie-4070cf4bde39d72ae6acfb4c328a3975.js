!function(e){"use strict";e.fn.twittie=function(){var t=arguments[0]instanceof Object?arguments[0]:{},a="function"==typeof arguments[0]?arguments[0]:arguments[1],r=e.extend({username:null,list:null,hashtag:null,count:4,hideReplies:!1,dateFormat:"%b/%d/%Y",template:"{{date}} - {{tweet}}",apiPath:"../api/tweet.php"},t);r.list&&!r.username&&e.error("If you want to fetch tweets from a list, you must define the username of the list owner.");var n=function(e){var t=e.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi,'<a href="$1" target="_blank" title="Visit this link">$1</a>').replace(/#([a-zA-Z0-9_]+)/g,'<a href="http://twitter.com/search?q=%23$1&amp;src=hash" target="_blank" title="Search for #$1">#$1</a>').replace(/@([a-zA-Z0-9_]+)/g,'<a href="http://twitter.com/$1" target="_blank" title="$1 on Twitter">@$1</a>');return t},s=function(e){var t=e.split(" ");e=new Date(Date.parse(t[1]+" "+t[2]+", "+t[5]+" "+t[3]+" UTC"));for(var a=["January","February","March","April","May","June","July","August","September","October","November","December"],n={"%d":e.getDate(),"%m":e.getMonth()+1,"%b":a[e.getMonth()].substr(0,3),"%B":a[e.getMonth()],"%y":String(e.getFullYear()).slice(-2),"%Y":e.getFullYear()},s=r.dateFormat,u=r.dateFormat.match(/%[dmbByY]/g),i=0,l=u.length;l>i;i++)s=s.replace(u[i],n[u[i]]);return s},u=function(e){for(var t=r.template,a=["date","tweet","avatar","url","retweeted","screen_name","user_name"],n=0,s=a.length;s>n;n++)t=t.replace(new RegExp("{{"+a[n]+"}}","gi"),e[a[n]]);return t};this.html("<span>Loading...</span>");var i=this;e.getJSON(r.apiPath,{username:r.username,list:r.list,hashtag:r.hashtag,count:r.count,exclude_replies:r.hideReplies},function(e){i.find("span").fadeOut("fast",function(){i.html("<ul></ul>");for(var t=0;t<r.count;t++){var l=!1;if(e[t])l=e[t];else{if(void 0===e.statuses||!e.statuses[t])break;l=e.statuses[t]}var o={user_name:l.user.name,date:s(l.created_at),tweet:n(l.retweeted?"RT @"+l.user.screen_name+": "+l.retweeted_status.text:l.text),avatar:'<img src="'+l.user.profile_image_url+'" />',url:"http://twitter.com/"+l.user.screen_name+"/status/"+l.id_str,retweeted:l.retweeted,screen_name:n("@"+l.user.screen_name)};i.find("ul").append("<li>"+u(o)+"</li>")}"function"==typeof a&&a()})})}}(jQuery);