$(function(){
	var a = window.location.search.split("=");
	var id = a[1];
	// console.log(id);
	$.ajax({
		url: "http://192.168.199.249:8080/index.php?c=api&a=bloglistindex.php?c=api&a=info",
		type: "get",
	 	dataType: "json",
	 	data: {
	 		id : id,
	 	},
	 	success: function(res){
	 		var str = '<h4 class="title"><span>'+res.data.info.createdate+'</span>'+res.data.info.title+'</h4><p class="newsnav">您现在的位置是:<a href="#">首页</a>&nbsp>&nbsp<a href="#">模板分享</a>&nbsp>&nbsp<a href="#">个人博客模板</a></p><p>'+res.data.info.content+'</p><p class="about-img"><img src="images/image2.jpg" /></p><p>如果你也在使用帝国cms,可以直接使用模板组.关于首页调用修改,直接修改栏目id即可.</p><p class="moban"><span>帝国cms模板组下载</span><span><a href="#">《如何使用帝国模板组?》</a></span></p><p>本模板更换背景图片也很简单,随意更换背景图片,还有主色就可以变换一个风格.比如这样</p><p class="moban-style"><img src="images/image3.png"/></p><p>&nbsp</p><p class="moban-style"><img src="images/image4.png" /></p><p>静态页面请直接点击下面的蓝色按钮</p><p>&nbsp</p>';
	 		$(".about .about-list").html(str);

	 		var str1 = "";
	 		for(var i = 0;i < res.data.commentList.length;i++){
	 			str1 += '<div class="list-item"><div class="user clearfix"><div class="user-img fl"><img src="images/people.jpeg"></div><div class="user-present fl"><p class="global clearfix"><span class="nickname fl">'+res.data.commentList[i].author.name+'</span><span class="address fl">[山西省太原市网友]</span><span class="user-time fr">'+res.data.commentList[i].author.createtime+'</span></p><p class="saying-w">'+res.data.commentList[i].content+'</p></div></div><div class="action-click"><div class="btns-bar"><i class="gap-gw"></i><span class="click-report"><a href="javascript:void(0)"><i class="icon-gw icon-flag"></i><em>举报</em></a></span><i class="gap-gw"></i><span class="click-reply"><a href="javascript:void(0)">回复</a></span><i class="gap-gw"></i><span class="click-ding"><a href="javascript:void(0)"><i class="icon-gw icon-ding"></i><em class="icon-number">2</em></a></span><i class="gap-gw"></i><span class="click-cai"><a href="javascript:void(0)"><i class="icon-gw icon-cai"></i></a></span><i class="icon-gw"></i><span class="click-prop"><a href="javascript:void(0)"></a></span></div></div></div>';
	 		}
	 		$(".hot-list").html(str1);
	 	},
	 	error: function(){
	 		alert("失败");
	 	}
	})
	$(".header-login").click(function(){
		$(".cover").show();
	})
	$(".login-close").click(function(){
		$(".cover").hide();
	})
	$(".issue").click(function(){
		var content = $(".textarea").val();
		if(content == ""){
			$(".textarea").focus();
			$(".issue-comment").show();
		}else{
			$(".issue-comment").hide();
			var name = $(".username").text();
			if(name == ""){
				$(".cover").show();
			}else {
				// alert(12345678);
				var textarea = $(".textarea").val();
				var blogId = window.location.search.split("=")[1];
				var userId = localStorage.getItem("user_id");
				$.ajax({
					url: "http://192.168.199.249:8080/index.php?c=api&a=doComment",
					type: "post",
					dataType: "json",
					data: {
						content: textarea,
						user_id: userId,
						blog_id: blogId,
					},
					success: function(res){
						alert("成功");
						var str1 = '<div class="list-item"><div class="user clearfix"><div class="user-img fl"><img src="images/people.jpeg"></div><div class="user-present fl"><p class="global clearfix"><span class="nickname fl">吃西红柿</span><span class="address fl">[山西省太原市网友]</span><span class="user-time fr">2018/09-09</span></p><p class="saying-w">'+textarea+'</p></div></div><div class="action-click"><div class="btns-bar"><i class="gap-gw"></i><span class="click-report"><a href="javascript:void(0)"><i class="icon-gw icon-flag"></i><em>举报</em></a></span><i class="gap-gw"></i><span class="click-reply"><a href="javascript:void(0)">回复</a></span><i class="gap-gw"></i><span class="click-ding"><a href="javascript:void(0)"><i class="icon-gw icon-ding"></i><em class="icon-number">2</em></a></span><i class="gap-gw"></i><span class="click-cai"><a href="javascript:void(0)"><i class="icon-gw icon-cai"></i></a></span><i class="icon-gw"></i><span class="click-prop"><a href="javascript:void(0)"></a></span></div></div></div>';
						$(".hot-list").append(str1);
					},
					error: function(res){
						alert(123456);
					}
				})
			}
		}
	})
	$(".login-btn").click(function(){
		var email = $(".phone-input-num").val();
		var passWord = $(".password-input").val();

		$.ajax({
			url: "http://192.168.199.249:8080/index.php?c=api&a=doLogin",
			type: "post",
			dataType: "json",
			data: {
				email: email,
				password: passWord,
			},
			success: function(res){
				if (res.status){
					$(".cover").hide();
					localStorage.setItem("user_id",res.data.id);
					$(".login-box").html('<div class="header-login"><a href="#" class="header-img"><img src="images/people.jpeg" /></a></div><div class="username">'+res.data.name+'</div>');
				}
			},
			error: function(res){
			}
		})
	})
})