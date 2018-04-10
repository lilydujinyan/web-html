$(function(){
	$.ajax({
		url: "http://192.168.199.249:8080/index.php?c=api&a=bloglist",
		type: "get",
	 	dataType: "json",
	 	success: function(result){
	 		var str = "";
			for (var i = 0;i < result.data.lists.length;i++){
				str+='<li><div class="time"><span>'+result.data.lists[i].month+'</span><span>'+result.data.lists[i].year+'</span></div><div class="icon"></div><div class="label"><h2><a href="#">'+result.data.lists[i].title+'</a></h2><div class="content clearfix"><span class="blogpic"><a href="#"><img src="images/image1.jpg" /></a></span><div class="con-blog"><p>'+result.data.lists[i].content+'</p><p class="clearfix blogs"><a href="#" class="classname">原创个人博客模板</a><a href="readMore.html?id='+result.data.lists[i].id+'" class="readmore">阅读全文>></a></p></div></div></div></li>'
			}
			$(".timeline").html(str);
		},
	 	error: function(result){
	 		alert("失败");
	 	}
	})
	// var result = {
	// 	"status" : true,
	// 	"data"   : {
	// 		"lists" : [
	// 			{
	// 				id: "1",
	// 				title: "131313",
	// 				content: "qqqqqqqqqq",
	// 				image: "./public/upload/img_1508636446641043.png",
	// 				classify_id: "5",
	// 				status: "1",
	// 				createtime: "2017-10-21 10:38:57",
	// 				updatetime: "2017-10-22 09:40:46",
	// 				createdate: "2017/10/21"
	// 			},
	// 			{
	// 				id: "1",
	// 				title: "131313",
	// 				content: "qqqqqqqqqq",
	// 				image: "./public/upload/img_1508636446641043.png",
	// 				classify_id: "5",
	// 				status: "1",
	// 				createtime: "2017-10-21 10:38:57",
	// 				updatetime: "2017-10-22 09:40:46",
	// 				createdate: "2017/10/21"
	// 			},
	// 			{
	// 				id: "1",
	// 				title: "131313",
	// 				content: "qqqqqqqqqq",
	// 				image: "./public/upload/img_1508636446641043.png",
	// 				classify_id: "5",
	// 				status: "1",
	// 				createtime: "2017-10-21 10:38:57",
	// 				updatetime: "2017-10-22 09:40:46",
	// 				createdate: "2017/10/21"
	// 			},
	// 			{
	// 				id: "1",
	// 				title: "131313",
	// 				content: "qqqqqqqqqq",
	// 				image: "./public/upload/img_1508636446641043.png",
	// 				classify_id: "5",
	// 				status: "1",
	// 				createtime: "2017-10-21 10:38:57",
	// 				updatetime: "2017-10-22 09:40:46",
	// 				createdate: "2017/10/21"
	// 			},
	// 		],
	// 	}
	// }

	// var str = "";
	// for (var i = 0;i < result.data.lists.length;i++){
	// 	str+='<li><div class="time"><span>09-08</span><span>2017</span></div><div class="icon"></div><div class="label"><h2><a href="#">'+result.data.lists[i].title+'</a></h2><div class="content clearfix"><span class="blogpic"><a href="#"><img src="images/image1.jpg" /></a></span><div class="con-blog"><p>'+result.data.lists[i].content+'</p><p class="clearfix blogs"><a href="#" class="classname">原创个人博客模板</a><a href="#" class="readmore">阅读全文>></a></p></div></div></div></li>'
	// }
	// $(".timeline").html(str);
})