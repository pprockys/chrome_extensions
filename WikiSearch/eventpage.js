var menuItem = {
    "id": "wiki",
    "title": "WikiSearch",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI(str){
    return encodeURI(str).replace(/%5B/g,'[').replace(/%5D/g,']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId=="wiki" && clickData.selectionText)
    {
        var wikiurl="https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        var createdata={
            "url":wikiurl,
            "type":"popup",
            "top":5,
            "left":5,
            "height":screen.availHeight/2,
            "width":screen.availWidth/2
        };
        chrome.windows.create(createdata,function(){});
    }
});