var btn1=document.getElementById('btn_ama');
var btn2=document.getElementById('btn_flip');
var btn3=document.getElementById('btn_myn');
var query="";
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    var value=url.toString();
    if(value.includes('google') || value.includes('amazon') || value.includes('flipkart')||value.includes('myntra')){
        var start=value.indexOf("?");
        var end=value.indexOf("&");
        if(end==-1){
            end=value.length;
        }
        query=value.substring(start+3,end);
    } else{
        query="";
    }
});
btn1.addEventListener("click",function(){
    var newURL1 = "https://www.amazon.in/s?k="+query;
    chrome.tabs.create({ url: newURL1 });
});

btn2.addEventListener("click",function(){
    var newURL2 = "https://www.flipkart.com/search?q="+query;
    chrome.tabs.create({ url: newURL2 });
});
btn3.addEventListener("click",function(){
    var newURL3 = "https://www.myntra.com/"+query;
    chrome.tabs.create({ url: newURL3 });
});
