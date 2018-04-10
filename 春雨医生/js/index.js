$(function(){
	// $.ajax({
	// 	url: "https://m.chunyuyisheng.com",
	// 	type: "get",
	// 	dataType: "json",
	// 	data: {
	// 		is_json: 1,
	// 	},
	// 	success: function(){
	// 		alert("成功");
	// 	},
	// 	error: function(){
	// 		alert("失败");
	// 	}
	// })
	var res = {
	    "clinic_info":{
	        "first_tag_info":{
	            "id":"267707",
	            "name":"青春痘"
	        },
	        "clinic_no":"4"
	    },
	    "free_problem_count":30,
	    "vendor":"chunyu",
	    "service_list":[

	    ],
	    "show_download_bar":true,
	    "app":"0",
	    "popular_diseases":[
	        {
	            "id":237446,
	            "name":"感冒"
	        },
	        {
	            "id":264890,
	            "name":"过敏"
	        },
	        {
	            "id":243779,
	            "name":"湿疹"
	        },
	        {
	            "id":246581,
	            "name":"痤疮"
	        },
	        {
	            "id":273362,
	            "name":"阴道炎"
	        },
	        {
	            "id":273218,
	            "name":"痔疮"
	        },
	        {
	            "id":222110,
	            "name":"包皮"
	        },
	        {
	            "id":273242,
	            "name":"糖尿病"
	        },
	        {
	            "id":229808,
	            "name":"宫颈糜烂"
	        },
	        {
	            "id":273383,
	            "name":"高血压"
	        },
	        {
	            "id":273296,
	            "name":"肺炎"
	        },
	        {
	            "id":271667,
	            "name":"鼻炎"
	        },
	        {
	            "id":229727,
	            "name":"宫外孕"
	        },
	        {
	            "id":216869,
	            "name":"乙肝"
	        },
	        {
	            "id":273341,
	            "name":"艾滋病"
	        },
	        {
	            "id":268796,
	            "name":"颈椎病"
	        },
	        {
	            "id":273236,
	            "name":"盆腔炎"
	        },
	        {
	            "id":233339,
	            "name":"尖锐湿疣"
	        }
	    ],
	    "banner_list":[
	        {
	            "url":"https://weixin.chunyuyisheng.com/events/special/?config_id=76 ",
	            "start":"2017-11-15 00:00:00",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/14/c0bf/5052432f7df7_w1242_h350_.jpg",
	            "end":"2017-11-23 00:00:00"
	        },
	        {
	            "url":"https://www.chunyuyisheng.com/pc/article/112735/",
	            "start":"2017-11-16 00:00:00",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/20/11c3/17a80e0d4f3e_w1242_h350_.jpg",
	            "end":"2017-11-23 12:00:00"
	        },
	        {
	            "url":"https://www.chunyuyisheng.com/pc/article/112739/",
	            "start":"2017-11-16 00:00:00",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/20/8ca9/c4c66fc79833_w1242_h350_.jpg",
	            "end":"2017-11-23 12:00:00"
	        },
	        {
	            "url":"https://engine.lvehaisen.com/index/activity?appKey=2DdTGjZgCcyRTvUuZogkWB1nLUBv&adslotId=5192",
	            "start":"2017-11-18 00:00:00",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/17/0b6a/7e7e3fe7335a_w1242_h350_.jpg",
	            "end":"2017-11-26 00:00:00"
	        }
	    ],
	    "health_news":[
	        {
	            "favor_num":0,
	            "img":"https://media2.chunyuyisheng.com/@/media/images/2017/11/22/0ea2/7f1f0ea68235_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "title":"小皮听你说：有什么你特别喜欢但总被别人diss的食物？",
	            "date_str":"1小时前",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/22/0ea2/7f1f0ea68235_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "news_id":114115,
	            "channel_id":21,
	            "view_times":431,
	            "type":"news",
	            "id":114115,
	            "digest":"汝之蜜糖，彼之砒霜",
	            "channel_name":"生活"
	        },
	        {
	            "favor_num":1,
	            "img":"https://media2.chunyuyisheng.com/@/media/images/2017/11/22/d1a6/613e94d1359f_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "title":"雾霾不只伤肺，也许还会伤害你的“骨头”！",
	            "date_str":"2小时前",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/22/d1a6/613e94d1359f_w180_h150_.jpg?imageView2/1/w/120/h/116",
	            "news_id":114111,
	            "channel_id":21,
	            "view_times":883,
	            "type":"news",
	            "id":114111,
	            "digest":"美国哥伦比亚大学美尔曼公共卫生学院（Mailman School of Public Health）研究发现，空气中PM2.5颗粒的浓度升高的时候，因骨折而入院寻求治疗的患者人数也比较高，并且低收入社区当中，医院收治的骨折患者的数量也大大增加",
	            "channel_name":"生活"
	        },
	        {
	            "description":"",
	            "title":"备孕期间遭遇“排卵期ED”，该咋办？",
	            "url":"https://media2.chunyuyisheng.com/@/media/video/99ce33d1vodtransgzp1252638726/c485b3b49031868223496158398/v.f20.mp4",
	            "type":"video_segment",
	            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/07/254a/bf8a5d883182_w729_h684_.png",
	            "lecture_status":"已结束",
	            "play_count":0,
	            "seconds":"01:41",
	            "room_id":428,
	            "duration":"01:41",
	            "lecture_id":467,
	            "date_str":"11月7日",
	            "id":2696,
	            "subject":"有请大医生"
	        }
	    ],
	    "show_logo":true,
	    "opened_clinics":[
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>400</span>个<span class='greenText'>6</span>元的妇科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄、症状2.最后一次月经时间或孕周3.希望获得的帮助4.点<span class='greenText'>图片</span>上传照片、化验单图片受隐私保护，仅医生可见",
	            "rank":1,
	            "clinic_no":"1",
	            "tag_keywords":[
	                {
	                    "keywords":"子宫内膜异位症|内膜异位|内膜异位症|月经量少|月经量不太多|月经过多|痛经|经期腹痛|止痛药",
	                    "tag":"月经"
	                },
	                {
	                    "keywords":"宫颈炎|宫颈糜烂|性交痛|性交疼痛|性交后出血|同房后出血|同房后流血",
	                    "tag":"宫颈/盆腔炎"
	                },
	                {
	                    "keywords":"流产|人流|药流|清宫|引产|宫外孕|终止妊娠|米非司酮",
	                    "tag":"流产"
	                },
	                {
	                    "keywords":"孕期|孕周|胎动|宫缩|早产|足月|胎儿|胎心|分娩|临产|产后|侧切|过期产",
	                    "tag":"孕产期"
	                },
	                {
	                    "keywords":"阴道炎|阴道发炎|阴道感染|外阴感染|白带|豆腐渣|阴道瘙痒|阴部瘙痒",
	                    "tag":"阴道炎"
	                },
	                {
	                    "keywords":"月经推迟|停经|达英|可能怀孕|没来月经|没有来月经|没来例假|没有来例假|大姨妈没来|排卵期|体外射精|避孕",
	                    "tag":"避孕不孕备孕"
	                },
	                {
	                    "keywords":"癌|子宫肌瘤|肿瘤|囊肿|化疗|放疗|畸胎瘤|乳头瘤|乳头状瘤|卵巢囊肿",
	                    "tag":"肿瘤"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/02/98545dde51ef_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"妇科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>200</span>个<span class='greenText'>6</span>元的儿科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.宝宝性别、年龄、症状2.既往疾病、就医情况3.希望获得的帮助4.点<span class='greenText'>图片</span>上传照片、化验单(图片受隐私保护，仅医生可见)",
	            "rank":2,
	            "clinic_no":"2",
	            "tag_keywords":[
	                {
	                    "keywords":"发烧|感冒|咳嗽|咳痰|痰|流涕|喷嚏|鼻涕|发热|高热|惊厥|发烫|体温升高|体温高|咽炎|咽峡炎|鼻子堵|鼻塞|鼻子不通|嗓子|咽痛|板蓝根|美林|布洛芬|惠菲宁|退烧药|退热药|物理降温|寒战|寒颤|打哆嗦|着凉|受凉",
	                    "tag":"发烧感冒"
	                },
	                {
	                    "keywords":"疹|水泡|脱皮|水疱|豆豆|小红点|出血点|斑|过敏|哮喘|手足口|色素缺失|色素沉着|胎记",
	                    "tag":"皮疹过敏"
	                },
	                {
	                    "keywords":"磨牙|出牙|发育|体重|抬头|走路|身高|智力|生长|囟门|疫苗|接种|先心病|先天性心脏病|房缺|室缺|缺损",
	                    "tag":"发育"
	                },
	                {
	                    "keywords":"吐奶|干呕",
	                    "tag":"吐奶"
	                },
	                {
	                    "keywords":"拉肚子|腹泻|拉稀|大便|稀便|便秘|便便|肛门|屁眼|绿色便|发绿|干便",
	                    "tag":"大便异常"
	                },
	                {
	                    "keywords":"哺乳|母乳|喂养|辅食|钙|锌|补铁|缺铁|鱼肝油|DHA|维生素|奶粉",
	                    "tag":"哺乳营养"
	                },
	                {
	                    "keywords":"外伤|割伤|摔到了|碰到了|割到了|碰着了|擦伤|伤口|摔伤|磕着了|划伤|戳伤|戳着了|戳到了|骨折|刮伤|刮到了|脱臼",
	                    "tag":"外伤"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/02/879d107485b2_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"儿科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>100</span>个<span class='greenText'>6</span>元的皮肤性病科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.务必上传患病部位清晰照片2.性别、年龄、症状3.希望获得的帮助 图片受隐私保护，仅医生可见",
	            "rank":3,
	            "clinic_no":"4",
	            "tag_keywords":[
	                {
	                    "keywords":"麻疹|风团|过敏|湿疹|玫瑰|糠疹|皮肤瘙痒|红斑|红班|红疹|猩红热|痒疹|红色|火斑|酒糟鼻|神经性皮炎|日光性皮炎|接触性皮炎|牛皮癣|银屑病|红点|虫咬|蚊虫|蚊子|叮咬",
	                    "tag":"红色皮疹"
	                },
	                {
	                    "keywords":"股癣|脚气|灰指甲|真菌|脚癣|脚鲜|股鲜|头鲜|头癣|花斑藓|花斑鲜|足癣|足鲜|汗斑|霉菌|癣菌|手癣|手鲜|甲癣|甲鲜|体癣|体鲜|达克宁",
	                    "tag":"癣/脚气"
	                },
	                {
	                    "keywords":"痘|痤疮|冻疮|黑头|豆豆|粉刺|青春豆",
	                    "tag":"青春痘"
	                },
	                {
	                    "keywords":"性病|性传播|性行为|性传染|口交|性交|肛交|湿疣|淋病|梅毒|阴茎|阴囊|生殖器|外阴|阴部|阴道|阴唇|龟头|艾滋|HIV|STD|AIDS|爱滋|阴虱|鸡鸡|珍珠",
	                    "tag":"性病"
	                },
	                {
	                    "keywords":"疱疹|猴子|瘊子|寻常疣|扁平疣|软疣|赘疣|跖疣|疣状|疥疮|泡疹|水疱|水泡|水痘",
	                    "tag":"病毒感染"
	                },
	                {
	                    "keywords":"粉瘤|皮脂腺|腋臭|狐臭|汗腺|胳膊窝|毛囊炎|多毛|毛发|毛多|脱发|头发|头皮屑|头屑|鬼剃头|脂溢性皮炎|秃",
	                    "tag":"毛发汗腺"
	                },
	                {
	                    "keywords":"白斑|白班|白癜风|色素|雀斑|黄褐斑|老年斑|咖啡斑|痣|色斑|瘢痕|斑痕|黑眼圈",
	                    "tag":"色素斑"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/07/ce0d5f5e8e34_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"皮肤性病科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>200</span>个<span class='greenText'>6</span>元的内科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄、症状2.既往疾病、就医情况3.希望获得的帮助4.点<span class='greenText'>图片</span>上传照片、化验单图片受隐私保护，仅医生可见",
	            "rank":4,
	            "clinic_no":"3",
	            "tag_keywords":[
	                {
	                    "keywords":"发烧|发热|退烧药|退热药|物理降温|体温升高|低烧|高烧|低热|高热|体温高|身体发烫|寒战",
	                    "tag":"发烧感冒咳嗽"
	                },
	                {
	                    "keywords":"胸痛|胸口痛|胸口闷|胸闷|心前区|压榨感|胸口发紧|出不了气|憋|胸口疼|胸疼|胸部疼痛|胸口疼痛|心绞痛|冠心病|心肌缺血|冠状动脉|冠脉|呼吸困难|呼吸不畅|喘气费劲|哮喘|肋软骨炎|肋间神经炎|胸骨后|烧心|闷得慌|胸膜炎|心包炎|心肌炎|心梗|心肌梗死|心脏痛|心脏疼|心肌供血不足|心脏搭桥|PCI|CABG|二级预防",
	                    "tag":"胸痛"
	                },
	                {
	                    "keywords":"肝|胆|脾|奥抗|澳抗|胰腺",
	                    "tag":"肝胆脾"
	                },
	                {
	                    "keywords":"食欲下降|食欲不好|胃|恶心|呕吐|反酸|烧心|幽门螺旋杆菌|HP|呼气试验|呼气实验|GERD|食管|腹痛|腹泻|腹疼|腹部疼痛|腹部难受|肚子不舒服|腹部不适|肠|拉肚子|闹肚子|拉稀|稀便|稀水样便|大便|呕血|吐血|便血|黑便|息肉",
	                    "tag":"胃肠道"
	                },
	                {
	                    "keywords":"头痛|头疼|脑|晕|头很沉|头发沉|意识不清|神志|神智|失眠|睡不着|颈椎病|痴呆|头重脚轻|卒中|中风|偏瘫|失语|体位性低血压",
	                    "tag":"头晕头痛"
	                },
	                {
	                    "keywords":"小便|尿痛|尿疼|尿急|尿频|憋不住尿|尿不出来|憋尿|尿道|尿路|输尿管|泌尿系|尿血|尿中带血|尿中有血|尿中有浓|尿常规|尿沉渣|肾|膀胱|前列腺",
	                    "tag":"肾/尿液"
	                },
	                {
	                    "keywords":"血常规|贫血|白血病|淋巴瘤|骨髓|淋巴癌|凝血|白细胞减少|白细胞降低|白细胞偏低|白细胞下降|血小板|血红蛋白|血色素",
	                    "tag":"血液"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/07/e857a51e9ff4_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"内科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>100</span>个<span class='greenText'>6</span>元的男科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄、症状2.之前就医或手术的情况3.希望获得的帮助4.点<span class='greenText'>图片</span>上传照片、化验单图片受隐私保护，仅医生可见",
	            "rank":5,
	            "clinic_no":"8",
	            "tag_keywords":[
	                {
	                    "keywords":"早泄|做爱时间|几下就|分钟",
	                    "tag":"早泄"
	                },
	                {
	                    "keywords":"前列腺炎|起夜|尿|小便",
	                    "tag":"尿路/前列腺"
	                },
	                {
	                    "keywords":"包皮|包茎|环切|包皮过长",
	                    "tag":"包皮长"
	                },
	                {
	                    "keywords":"阳痿|软了|不硬|硬度不够|伟哥|万艾可|硬度差|ED|勃起功能障碍|勃起功能差|勃起差|不能勃起|勃不起",
	                    "tag":"阳痿"
	                },
	                {
	                    "keywords":"长度|阴茎小|鸡鸡短小|弟弟小|弟弟短小|弟弟短|鸡鸡短|阴茎短|阴茎短小|海绵体|厘米",
	                    "tag":"阴茎短小"
	                },
	                {
	                    "keywords":"精子检查|精子常规|精液检查|精液常规|检查了精液|查了精液|检查精液|A级|B级|C级|成活指数|存活指数|排精量|密度|酸碱度|不育|不孕",
	                    "tag":"男性不育"
	                },
	                {
	                    "keywords":"结石|尿血|尿中带血|尿中有血|小便有血|小便里有血",
	                    "tag":"结石"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/07/faa913e7353f_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"男科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>400</span>个<span class='greenText'>6</span>元的产科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄、症状2.最后一次月经时间或孕周3.希望获得的帮助 4.点<span class='greenText'>图片</span>上传照片、化验单图片受隐私保护，仅医生可见",
	            "rank":6,
	            "clinic_no":"21",
	            "tag_keywords":[
	                {
	                    "keywords":"流产|人流|药流|清宫|引产|宫外孕|终止妊娠|米非司酮",
	                    "tag":"流产"
	                },
	                {
	                    "keywords":"孕期|孕周|胎动|宫缩|早产|足月|胎儿|胎心|分娩|临产|产后|侧切|过期产|预产期|唐筛|妊娠糖尿病|妊高症|妊娠高血压|胎盘|哺乳|恶露|顺产|剖腹产|剖宫产",
	                    "tag":"孕产期"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/02/d95ec39eba1e_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"产科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>100</span>个<span class='greenText'>6</span>元的外科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄、症状2.之前就医或手术的情况3.希望获得的帮助4.点<span class='greenText'>图片</span>上传照片、化验单图片受隐私保护，仅医生可见",
	            "rank":7,
	            "clinic_no":"9",
	            "tag_keywords":[
	                {
	                    "keywords":"痔",
	                    "tag":"痔疮"
	                },
	                {
	                    "keywords":"阑尾|盲肠",
	                    "tag":"阑尾炎"
	                },
	                {
	                    "keywords":"外伤|撞|磕|割|摔|戳",
	                    "tag":"外伤"
	                },
	                {
	                    "keywords":"肝|胆",
	                    "tag":"肝胆"
	                },
	                {
	                    "keywords":"烫|烧伤|被火烧了",
	                    "tag":"烧伤烫伤"
	                },
	                {
	                    "keywords":"胃|肠",
	                    "tag":"胃肠道"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/07/fbd1e76940b8_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"外科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>100</span>个<span class='greenText'>6</span>元的中医科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄、症状2.希望获得的帮助3.点<span class='greenText'>图片</span>上传舌苔照片等图片受隐私保护，仅医生可见",
	            "rank":8,
	            "clinic_no":"12",
	            "tag_keywords":[
	                {
	                    "keywords":"虚弱|脾|肺|肾",
	                    "tag":"脾肺肾"
	                },
	                {
	                    "keywords":"气血",
	                    "tag":"气血不足"
	                },
	                {
	                    "keywords":"脉",
	                    "tag":"脉象"
	                },
	                {
	                    "keywords":"湿热|上火",
	                    "tag":"上火"
	                },
	                {
	                    "keywords":"中药|汤药|中成药",
	                    "tag":"中药"
	                },
	                {
	                    "keywords":"手脚|冰冷",
	                    "tag":"手脚冰凉"
	                },
	                {
	                    "keywords":"舌",
	                    "tag":"舌苔"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/07/92916e1100f2_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"中医科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>100</span>个<span class='greenText'>6</span>元的骨伤科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄、症状2.之前就医或手术的情况3.希望获得的帮助4.点<span class='greenText'>图片</span>上传化验单、影像片图片受隐私保护，仅医生可见",
	            "rank":9,
	            "clinic_no":"7",
	            "tag_keywords":[
	                {
	                    "keywords":"骨折|骨裂|摔断|折了",
	                    "tag":"骨折"
	                },
	                {
	                    "keywords":"颈椎|头晕|眩晕",
	                    "tag":"颈椎病"
	                },
	                {
	                    "keywords":"关节很痛|关节很疼|关节非常痛|关节非常疼|关节有肿痛|关节肿了|关节痛|关节疼|关节肿|风湿|关节肿痛|关节积液|关节红肿|关节压痛|关节疼痛",
	                    "tag":"关节炎"
	                },
	                {
	                    "keywords":"腰|椎间盘|背部|后背",
	                    "tag":"腰背痛"
	                },
	                {
	                    "keywords":"运动损伤|外伤|摔伤|扭伤|拉伤|软组织|扭了|崴了|崴脚|半月板|十字韧带|交叉韧带|肩袖|网球肘|肩周炎|撕裂|断裂|肌腱|跟腱",
	                    "tag":"运动损伤"
	                },
	                {
	                    "keywords":"脚|足部|足后跟|足面|足心|足背",
	                    "tag":"足部问题"
	                },
	                {
	                    "keywords":"脱臼|脱位",
	                    "tag":"脱臼"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/02/a10fc7b265ab_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"骨伤科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>200</span>个<span class='greenText'>6</span>元的精神心理科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄2.描述症状或困扰3.希望获得的帮助",
	            "rank":10,
	            "clinic_no":"17",
	            "tag_keywords":[
	                {
	                    "keywords":"焦虑|烦躁",
	                    "tag":"焦虑"
	                },
	                {
	                    "keywords":"精神病|疯子|羊癫疯|精神分裂症|发疯|歇斯底里|被害妄想",
	                    "tag":"精神失常"
	                },
	                {
	                    "keywords":"情绪低落|抑郁|伤心|自杀",
	                    "tag":"抑郁"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/07/440a3f168a2b_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"精神心理科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>50</span>个<span class='greenText'>6</span>元的口腔颌面科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄2.详细症状3.希望获得的帮助4.点<span class='greenText'>图片</span>上传口腔照片图片受隐私保护，仅医生可见",
	            "rank":11,
	            "clinic_no":"13",
	            "tag_keywords":[
	                {
	                    "keywords":"口腔溃疡|溃疡",
	                    "tag":"口腔溃疡"
	                },
	                {
	                    "keywords":"出血",
	                    "tag":"牙龈出血"
	                },
	                {
	                    "keywords":"坏牙|龋",
	                    "tag":"龋齿"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/07/5f4c7f46aadc_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"口腔颌面科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>50</span>个<span class='greenText'>6</span>元的眼科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄2.详细症状及发病时间3.希望获得的帮助4.点<span class='greenText'>图片</span>上传照片、化验单图片受隐私保护，仅医生可见",
	            "rank":12,
	            "clinic_no":"15",
	            "tag_keywords":[
	                {
	                    "keywords":"近视|远视|散光|屈光不正",
	                    "tag":"近视远视散光"
	                },
	                {
	                    "keywords":"充血|结膜|血丝|红眼",
	                    "tag":"结膜炎"
	                },
	                {
	                    "keywords":"针眼|麦粒肿|眼睑|霰粒肿|眼皮",
	                    "tag":"眼睑"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/07/9fafb304d166_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"眼科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>50</span>个<span class='greenText'>6</span>元的耳鼻咽喉科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄2.详细症状及发病时间3.希望获得的帮助 4.点<span class='greenText'>图片</span>上传化验单、影像片图片受隐私保护，仅医生可见",
	            "rank":13,
	            "clinic_no":"14",
	            "tag_keywords":[
	                {
	                    "keywords":"过敏性鼻炎",
	                    "tag":"过敏性鼻炎"
	                },
	                {
	                    "keywords":"咽炎",
	                    "tag":"咽炎"
	                },
	                {
	                    "keywords":"中耳炎",
	                    "tag":"中耳炎"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/02/b3831b990afe_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"耳鼻咽喉科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>100</span>个<span class='greenText'>6</span>元的肿瘤及防治科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄2.详细症状及发病时间3.希望获得的帮助4.点<span class='greenText'>图片</span>上传化验单、影像片图片受隐私保护，仅医生可见",
	            "rank":14,
	            "clinic_no":"11",
	            "tag_keywords":[
	                {
	                    "keywords":"肺|胸水|胸膜",
	                    "tag":"肺"
	                },
	                {
	                    "keywords":"乳腺|乳房",
	                    "tag":"乳腺"
	                },
	                {
	                    "keywords":"肝|胆",
	                    "tag":"肝胆"
	                },
	                {
	                    "keywords":"淋巴瘤|淋巴癌",
	                    "tag":"淋巴瘤"
	                },
	                {
	                    "keywords":"胃",
	                    "tag":"胃"
	                },
	                {
	                    "keywords":"前列腺",
	                    "tag":"前列腺"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/10/24/ac0444cf493b_w60_h60_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"肿瘤及防治科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>200</span>个<span class='greenText'>6</span>元的整形美容科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄2.希望获得的帮助3.上传所需清晰照片 图片受隐私保护，仅医生可见",
	            "rank":15,
	            "clinic_no":"16",
	            "tag_keywords":[
	                {
	                    "keywords":"双眼皮|单眼皮",
	                    "tag":"拉双眼皮"
	                },
	                {
	                    "keywords":"隆胸|罩杯|乳房下垂",
	                    "tag":"隆胸"
	                },
	                {
	                    "keywords":"抽脂|减肥手术",
	                    "tag":"抽脂"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/09/07/e369262e4271_w40_h40_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"整形美容科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>200</span>个<span class='greenText'>6</span>元的报告解读科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄、既往疾病2.饮食情况和生活习惯3.希望获得的帮助4.点<span class='greenText'>图片</span>上传照片、化验单图片受隐私保护，仅医生可见",
	            "rank":16,
	            "clinic_no":"22",
	            "tag_keywords":[

	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/10/24/cedde7901951_w60_h60_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"报告解读科"
	        },
	        {
	            "clinic_free_quota_info":"春雨每日赠送<span class='greenText'>100</span>个<span class='greenText'>6</span>元的营养科问诊号",
	            "doctor_recommends":[

	            ],
	            "ask_welcome_info":"请输入:1.性别、年龄、既往疾病2.饮食情况和生活习惯3.希望获得的帮助4.点<span class='greenText'>图片</span>上传照片、化验单图片受隐私保护，仅医生可见",
	            "rank":17,
	            "clinic_no":"6",
	            "tag_keywords":[
	                {
	                    "keywords":"减肥|太胖|减体重|减肚子|变瘦",
	                    "tag":"减肥"
	                },
	                {
	                    "keywords":"太瘦|增加肌肉|增体重|增加体重|长胖点",
	                    "tag":"增体重"
	                },
	                {
	                    "keywords":"怀孕|孕妇|孕期|胎儿|保胎",
	                    "tag":"孕期"
	                },
	                {
	                    "keywords":"糖尿病|血糖",
	                    "tag":"糖尿病"
	                },
	                {
	                    "keywords":"儿童|宝宝|婴儿|幼儿|小孩",
	                    "tag":"小儿营养"
	                },
	                {
	                    "keywords":"胃炎|胃溃疡|胃癌",
	                    "tag":"胃炎"
	                },
	                {
	                    "keywords":"贫血|血色素|血红蛋白",
	                    "tag":"贫血"
	                }
	            ],
	            "clinic_icon":"https://media2.chunyuyisheng.com/@/media/images/2016/10/24/518d18bca7c3_w60_h60_.png",
	            "symptom_desc_info":"春雨医生均为工作间歇或休息时间给您提供咨询服务，请耐心等待并互敬互爱。谢谢！",
	            "clinic_name":"营养科"
	        }
	    ],
	    "hot_problems":[
	        {
	            "ask":"你好 性交阴道出血 是什么原因（女，30岁）",
	            "answer":"你好，每次同房都有出血吗？",
	            "title":"你好，性交阴道出血，是什么原因？",
	            "id":"S2qyx4ji1Xwu3sUsi604CA",
	            "doctor":{
	                "hospital":"山东泰安煤矿医院",
	                "name":"徐颖"
	            }
	        },
	        {
	            "ask":"牙龈肿痛，怎么快速消肿？（女，24岁）",
	            "answer":"你好 很高兴为您解答",
	            "title":"牙龈肿痛，怎么快速消肿？",
	            "id":"W9nMwLYQPl9sWNkAh3YBig",
	            "doctor":{
	                "hospital":"东营鸿港医院（民营）",
	                "name":"孟庆丹"
	            }
	        },
	        {
	            "ask":"五个多月的婴儿，自己翻身摔到了床下，床大概半米多高，地板是木质的。由于摔下床的时候没人在场，不知道具体是怎么着地的，听到哭声进来看的时候孩子是趴在地上的。目前观察，手脚活动正常，头上没有青肿，也停止了哭闹，就是感觉额头（囟门）似乎比以前更凸了，不知道是不是心理作用。（女，29岁）",
	            "answer":"录音回复",
	            "title":"手脚活动正常，头上没有青肿，不知道是不是心理作用？",
	            "id":"7sALJ81jFBbJxri5HJGP1g",
	            "doctor":{
	                "hospital":"广州和睦家门诊部",
	                "name":"徐小彩"
	            }
	        }
	    ],
	    "is_login":false
	}
	var contentStr = res.free_problem_count;
	// console.log(contentStr);
	$(".problem-count").text(contentStr);
	var hotStr = "";
	for(var i = 0;i < res.hot_problems.length;i++){
		hotStr+= '<a href="#" class="hot-qu-list"><h6 class="title"><span class="title-tag">问</span>'+res.hot_problems[i].title+'</h6><p class="hot-qu-user">'+res.hot_problems[i].ask+'</p></a>';
	}
	$(".hot-question").html(hotStr);
	var diseasesStr = "";
	for(var i = 0;i < res.popular_diseases.length;i++){
		diseasesStr+='<li><a href="#">'+res.popular_diseases[i].name+'</a></li>';
	}
	$(".symptom-list").html(diseasesStr);
	var healthStr = "";
	for(var i = 0;i < res.health_news.length;i++){
		healthStr+='<a href="#" class="health-info-item clearfix"><img class="info-pic" src="images/info-pic-1.jpg" /><div class="info-detail"><h6 class="title">'+res.health_news[i].title+'</h6><div class="info-footer"><span>'+res.health_news[i].channel_name+'</span><span>'+res.health_news[i].date_str+'</span></div></div></a>';
	}
	$(".health-info").html(healthStr);
	var imgStr = "";
	for(var i = 0;i < res.banner_list.length;i++){
		imgStr+='<div class="swiper-slide"><img src="'+res.banner_list[i].image+'"></div>'
	}
	$(".swiper-wrapper").html(imgStr);
	var mySwiper = new Swiper('.swiper-container',{
			loop: true,
	    	//初⃓始⃓化的⃓时⃓候⃓Slide的⃓值⃓为⃓0
			// initialSlide: 1,
			//滑⃓动⃓方⃓向⃓
			//horizontal 水⃓平⃓
			//vertical 垂⃓直⃓
		    direction: 'vertical',
		    //滑⃓动⃓的⃓速⃓度⃓手⃓指⃓松⃓开⃓至⃓silde贴⃓合⃓的⃓时⃓间⃓
		    // speed: 3000,
		    //自⃓动⃓播⃓放⃓时⃓间⃓间⃓隔⃓
		    // autoplay: 2000,
		    //可⃓显⃓示⃓数⃓量⃓
		    // slidesPerView: 2,
		    //滑⃓块⃓居⃓中⃓
		    // centeredSlides: true,
		    observer:true,
		    observeParents:true,
		    mousewheelControl : true,
        	mousewheelReleaseOnEdges : true,
        	spaceBetween: 50
	})

})