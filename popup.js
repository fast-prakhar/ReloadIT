var alarmClock = {

        onHandler : function(e) {
            /*chrome.tabs.getAllInWindow(function(tabs){
                for (var i = tabs.length - 1; i >= 0; i--) {
                    chrome.extension.getBackgroundPage().console.log(tabs[i].id);
                };   
            });*/
            var t=document.getElementById('refreshInterval').value;
            t=t/60;
            if(t && t > 0){
                chrome.tabs.getSelected(null,function(tab){
                    chrome.extension.getBackgroundPage().console.log("time is "+t);
                    chrome.extension.getBackgroundPage().console.log("Creating alarm for id"+tab.id);
                    chrome.alarms.create("myAlarm"+tab.id, {delayInMinutes: t,periodInMinutes:t} );
                        window.close();    
                });
            }
            
        },

        offHandler : function(e) {
            chrome.tabs.getSelected(null,function(tab){
                chrome.extension.getBackgroundPage().console.log("Removing alarm for id"+tab.id);
                chrome.alarms.clear("myAlarm"+tab.id);
                    window.close();       
            });
            
        },

        setup: function() {
            var a = document.getElementById('alarmOn');
            a.addEventListener('click',  alarmClock.onHandler );
            var b = document.getElementById('alarmOff');
            b.addEventListener('click',  alarmClock.offHandler );
            chrome.tabs.getSelected(null,function(tab){
                chrome.extension.getBackgroundPage().console.log("INSIDE check1");
                chrome.alarms.get("myAlarm"+tab.id,function(alarm){
                   chrome.extension.getBackgroundPage().console.log("YO "+alarm);
                    chrome.extension.getBackgroundPage().console.log("INSIDE check2");
                    if(alarm){
                        a.style.visibility="hidden";
                        chrome.extension.getBackgroundPage().console.log("INSIDE check3");
                    }
                    else{
                        b.style.visibility="hidden";
                        chrome.extension.getBackgroundPage().console.log("INSIDE check4");
                    }
                });
            });

        }
};

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
});
