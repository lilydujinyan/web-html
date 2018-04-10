$(function(){
	$(".case-box-item").click(function(){
		$(this).addClass("change").siblings().removeClass("change");
		var index = $(this).index();
		$(".cases-list").eq(index).show().siblings().hide();
	});

	var res = {
		"avg_interactive_count":18,
		"avg_reply_times":5,
		"avg_reply_word_count":30,
		"help":true,
		"similar_problems":[
			{
				"created_time_str":"2017年12月3日",
				"problem_id":1,
				"tags":["用药指导","饮食起居","心里疏导"],
				"title":"感冒了怎么办"
			},
			{
				"created_time_str":"2017年12月2日",
				"problem_id":2,
				"tags":["用药指导","饮食起居","心里疏导"],
				"title":"胃痛怎么办"
			},
			{
				"created_time_str":"2017年12月1日",
				"problem_id":2,
				"tags":["用药指导","饮食起居"],
				"title":"胃痛怎么办"
			}
		],
		"tags":[
			{
				"medicals":[
					{
						"medical_name":"易坦静",
						"medical_ratio":"89%"
					},
					{
						"medical_name":"阿奇霉素",
						"medical_ratio":"64%"
					},
					{
						"medical_name":"小儿氨酚黄那敏颗粒",
						"medical_ratio":"54%"
					},
					{
						"medical_name":"妈咪爱",
						"medical_ratio":"52%"
					}
				],
				"tag_name":"用药指导",
				"tag_ratio":"89%"
			},
			{
				"medicals":[
					{
						"medical_name":"血常规",
						"medical_ratio":"89%"
					},
					{
						"medical_name":"C反应蛋白",
						"medical_ratio":"64%"
					},
					{
						"medical_name":"过敏原",
						"medical_ratio":"54%"
					},
					{
						"medical_name":"性激素6项",
						"medical_ratio":"52%"
					}
				],
				"tag_name":"检查建议",
				"tag_ratio":"63%"
			},
			{
				"medicals":[
					{
						"medical_name":"偏头痛",
						"medical_ratio":"89%"
					},
					{
						"medical_name":"腔性脑梗",
						"medical_ratio":"64%"
					},
					{
						"medical_name":"多囊卵巢综合征",
						"medical_ratio":"54%"
					},
					{
						"medical_name":"宫外妊娠",
						"medical_ratio":"52%"
					}
				],
				"tag_name":"待确诊疾病",
				"tag_ratio":"52%"
			}
		]
	};
	var countStr = res.avg_interactive_count;
	$(".title-1 span").text(countStr);
	var timeStr = res.avg_reply_times;
	$(".title-2 span").text(timeStr);
	var problemStr = "";
	for(var i = 0;i < res.similar_problems.length;i++){
		var tagStr = "";
		for(var j = 0;j < res.similar_problems[i].tags.length;j++){
			tagStr+='<span class="label-list">'+res.similar_problems[i].tags[j]+'</span>';
		}
		problemStr+='<div class="box"><div class="similarity-case-list"><p class="question">问题：<span class="title">'+res.similar_problems[i].title+'</span></p><p class="answer"><span>答题亮点：</span><span class="label-list-1">'+tagStr+'</span></p><p class="data">'+res.similar_problems[i].created_time_str+'</p><div class="cut"></div></div><div class="doctor-introduced"><div class="doctor-img"><img src="images/people.png"></div><div class="introduced"><p><span class="doctor-name">时岩</span><span class="section">皮肤科</span></p><p>北京大学第三人民医院科德分院</p></div></div></div>';
	}
	$(".similarity-case").html(problemStr);
	var tagstr = "";
	for(var i = 0;i < res.tags.length;i++){
		var medicalStr = "";
		for(var j = 0;j < res.tags[i].medicals.length;j++){
			medicalStr+='<p>'+res.tags[i].medicals[j].medical_ratio+'--'+res.tags[i].medicals[j].medical_name+'</p>';
		}
		tagstr+='<div class="tags-box"><div class="case-list-item"><p class="title">'+res.tags[i].tag_ratio+'的问题提供了'+res.tags[i].tag_name+'</p><div class="tags-list">'+medicalStr+'</div></div></div>';
	}
	$(".case-list").html(tagstr);
})