// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);

$( "input").keydown(function(e) {
	 
	 if (e.keyCode === 73) {
	 		//change to caps
	 		var i = String.fromCharCode(73);
	 		$(i).val($(this).val().toUpperCase());
	 		//prevent i from typing 
    		e.preventDefault();
 			
 			//set the text area values 
    		var currentInp = $("input").val();
    		$("input").val(currentInp + i);
    		
	}
	
});

 $( "textarea").keydown(function(e) {
	 
	 if (e.keyCode === 73) {
	 		//change to caps
	 		var i = String.fromCharCode(73);
	 		$(i).val($(this).val().toUpperCase());
	 		//prevent i from typing 
    		e.preventDefault();
 			
 			//set the text area values 
    		var currentVal = $("textArea").val();

    		$("textArea").val(currentVal + i);
    		
	}
	
});


