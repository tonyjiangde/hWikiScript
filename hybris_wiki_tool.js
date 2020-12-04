// ==UserScript==
// @name        Hybris Wiki Tools
// @namespace   I314119
// @match       https://cxwiki.sap.com/*
// @version     0.0.1
// @author      I314119
// @description Wiki tool
// 
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// 
// @history     0.0.1   Release: 04.12.2020
// ==/UserScript==

var toJsonButton = $('<button class="aui-icon,aui-icon-medium">To JSON</button>');
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
toJsonButton.on('click',function(){
    //download("myjson", "test")
    var output=[];
    console.log($( ".json-object" ).length);
    $( ".json-object" ).each(function() {
        var string1 = $(this).text();
        var jsonobject ={"value":string1};
        console.log(string1);
        output.push(jsonobject)
    });
    download("myjson", JSON.stringify(output));
});
//toJsonButton.css({"background":"white","font-size":"10px","color":"white","background-color":"white"});
$("#rw_top_menu").append(toJsonButton);