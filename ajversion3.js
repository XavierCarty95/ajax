
window.onload = function(){
	
	function handleError(qXHR, textStatus, error){
		console.log(error);
	}
	$.ajax({
	type: "GET",
	url: "data/tweets.json",
	success: cbTweets,
	error: handleError
	});
	
	function cbTweets(data){
		console.log(data);
		
	$.ajax({
	type: "GET",
	url: "data/friends.json",
	success: cbFriends,
	error: handleError
	
	});
	}
	
	function cbFriends(data){
		console.log(data);
		
	$.ajax({
	type: "GET",
	url: "data/videos.json",
	success: function(data){
		console.log(data);
		
	},
	error: handleError
	});
	}
	
};







// window.onload = function(){
	
// 	$.ajax({
// 	type: "GET",
// 	url: "data/tweets.json",
// 	success: function(data){
// 		console.log(data);
		
// 	$.ajax({
// 	type: "GET",
// 	url: "data/friends.json",
// 	success: function(data){
// 		console.log(data);
		
// 	$.ajax({
// 	type: "GET",
// 	url: "data/videos.json",
// 	success: function(data){
// 		console.log(data);
		
// 	},
// 	error: function(jqXHR, textStatus, error){
// 		console.log(error);
// 	}
// 	});
// 	},
// 	error: function(jqXHR, textStatus, error){
// 		console.log(error);
// 	}
// 	});
// 	},
// 	error: function(jqXHR, textStatus, error){
// 		console.log(error);
// 	}
// 	});
	
// };
