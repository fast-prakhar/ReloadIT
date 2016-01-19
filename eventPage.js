chrome.alarms.onAlarm.addListener(function (alarm){
/*	alert("in listener");
	chrome.tabs.query({
		active:true,
		currentWindow:true
	},
	function(tabs){
		alert("In tabs");
		chrome.extension.getBackgroundPage().console.log(tabs[0].title);
		chrome.extension.getBackgroundPage().console.log("works");
		chrome.extension.getBackgroundPage().console.log(JSON.stringify(tabs[0]));

	});
*/
	//alert("heheheh");

	var name=alarm.name;
	var tabID=parseInt(name.slice(7));
	chrome.extension.getBackgroundPage().console.log("alarm obj");
	chrome.extension.getBackgroundPage().console.log(alarm);
	chrome.extension.getBackgroundPage().console.log("TABID[out] to reload "+tabID);
	chrome.tabs.reload(tabID,function (){
		chrome.extension.getBackgroundPage().console.log('reloaded');
		chrome.extension.getBackgroundPage().console.log("TABID[in] to reload "+tabID);
		//chrome.tabs.getSelected(null,function(tab){
			//chrome.extension.getBackgroundPage().console.log(tab);
			//chrome.extension.getBackgroundPage().console.log(tab.favIconUrl);
		//	chrome.extension.getBackgroundPage().console.log('inside');	
		//});	
	});
	
});