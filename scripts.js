$(document).ready(function() {
	var fall19 = [
		{ 
			name: "Xinhui Chen",
			project: "Winneba Storyteller",
			image: "fall19/xchen.png",
			url: "https://xxinhuixx.github.io/LAR7415/"
		},
		{ 
			name: "Zhenfang Chen",
			project: "Agriculture+",
			image: "fall19/zchen.png",
			url: "https://zhenfangchen.github.io/agricultureplus/homepage.html"
		},
		{ 
			name: "Mengyuan Duan",
			project: "Ecotourism in Winneba",
			image: "fall19/mduan.png",
			url: "https://mengyuanduan7415.github.io/"
		},
		{ 
			name: "Junhong Fu",
			project: "Charlottesville Color Palette",
			image: "fall19/jfu.png",
			url: "https://bunnyjen.github.io/LAR7415-website/index.html"
		},
		{ 
			name: "Xitong He",
			project: "Madison, Indiana: Historic Site of the United States",
			image: "fall19/xhe.png",
			url: "https://shintonho.github.io/Madison/"
		},
		{ 
			name: "Jingjing Ji",
			project: "China, China!",
			image: "fall19/jji.png",
			url: "https://april1029.github.io/7415project/index.html"
		},
		{ 
			name: "Jingwei Jiang",
			project: "Best Run",
			image: "fall19/jjiang.png",
			url: "https://jingweijiang380.github.io/test-BR1/test%20BR.html"
		},
		{ 
			name: "Jingjing Lai",
			project: "Marijuana Justice",
			image: "fall19/jlai.png",
			url: "https://llleviner.github.io/marijuana/"
		},
		{ 
			name: "Chaoming Li",
			project: "Paperplane",
			image: "fall19/cli.png",
			url: "https://lcm1013.github.io/LAR7415_As2_Ex2_Chaoming/CSS%20Zen%20Garden_%20The%20Beauty%20of%20CSS%20Design.htm"
		},
		{ 
			name: "Xun Liu",
			project: "3rd Vision",
			image: "fall19/xliu.png",
			url: "https://xunliudesign.github.io/LAR7415_Final/index.html"
		},
		{ 
			name: "Xinyu Tu",
			project: "My Favourite Place",
			image: "fall19/xtu.png",
			url: "https://tikixzx.github.io/tour-helper/home.html"
		},
		{ 
			name: "Tian Wang",
			project: "Meet a Tree",
			image: "fall19/twang.png",
			url: "https://awesomebun.github.io/Assignment1205TW/Home.html"
		},
		{ 
			name: "Xinyu Wang",
			project: "Meet a Tree",
			image: "fall19/xwang.png",
			url: "https://xinyuxw6tg.github.io/walk-your-pet1204/index.html"
		},
		{ 
			name: "Zhilu Wang",
			project: "Donate and Rescue",
			image: "fall19/zwang.png",
			url: "https://zhiluwang545.github.io/Pages-All/index.html"
		},
		{ 
			name: "Haoyue Wu",
			project: "Seattle Insider",
			image: "fall19/hwu.png",
			url: "https://why0327.github.io/Seattle_Insider/home.html"
		},
		{ 
			name: "Binyu Yang",
			project: "City Recycling",
			image: "fall19/byang.png",
			url: "https://kurushimori.github.io/197415recycling/"
		},
		{ 
			name: "Xuefei Yang",
			project: "Trip to Oakland",
			image: "fall19/xyang.png",
			url: "https://xy6au.github.io/homepage/index.html"
		},
		{ 
			name: "Ziyuan Yang",
			project: "Equitable Mobility in Central Valley",
			image: "fall19/zyang.png",
			url: "https://yangzy0812.github.io/mywebproject/"
		},
		{ 
			name: "Qinmeng Yu",
			project: "Trip to Oakland",
			image: "fall19/qyu.png",
			url: "https://yuqinmeng2017.github.io/Jaipur-city-spine/"
		},
		{ 
			name: "Shurui Zhang",
			project: "Collective Memories",
			image: "fall19/szhang.png",
			url: "https://sz9na.github.io/collectivememories/Index.html"
		},
	];
	var fall18 = [
		{ 
			name: "Yangqianqian Hu",
			project: "Film San Francisco",
			image: "fall18/yhu.png",
			url: "https://yangqianqianhu.github.io/final_filmsf/"
		},
		{ 
			name: "Sam Johnson",
			project: "Tag It! View It!",
			image: "fall18/sjohnson.png",
			url: "https://samajo.github.io/Tag-It/"
		},
		{ 
			name: "Qiyao Li",
			project: "Virginia Demography Map",
			image: "fall18/qli.png",
			url: "https://liqiyao1124.github.io/1037/"
		},
		{ 
			name: "Wanyi Li",
			project: "Boston Landmarks",
			image: "fall18/wli.png",
			url: "https://wl2pc.github.io/Boston-Landmarks-D3/"
		},
		{ 
			name: "Zehui Li",
			project: "San Francisco Shared Infrastructure",
			image: "fall18/zli.png",
			url: "https://zehuilouisli.github.io/LAR7415/"
		},
		{ 
			name: "Xiaowei Lin",
			project: "Food Deserts in Charlottesville",
			image: "fall18/xlin.png",
			url: "https://xiaoweivivi.github.io/FOODDESERTINCHARLOTTESVILLE/"
		},
		{ 
			name: "Liwei Liu",
			project: "Charlottesville Parking",
			image: "fall18/lliu.png",
			url: "https://lllliwei.github.io/Charlottesville-Parking/"
		},
		{ 
			name: "Tong Liu",
			project: "Rental Places in Walkable Distance for A-School Students",
			image: "fall18/tliu.png",
			url: "https://tongliuuuuu.github.io/ruunnn/"
		},
		{ 
			name: "Huiru Shen",
			project: "Charlottesville Green Infrastructure",
			image: "fall18/hshen.png",
			url: "https://huiru0519.github.io/Assignment4/"
		},
		{ 
			name: "Vida Shen",
			project: "Urban Hiking in San Francisco",
			image: "fall18/vshen.png",
			url: "https://vidashen.github.io/UrbanHiking/#"
		},
		{ 
			name: "Yuchen Sun",
			project: "Public Art Spots in Seattle",
			image: "fall18/ysun.png",
			url: "https://ycsun1917.github.io/yuchen-sea/"
		},
		{ 
			name: "Qiuheng Xu",
			project: "Sitting with WiFi",
			image: "fall18/qxu.png",
			url: "https://xqiuheng.github.io/Sitting-with-WIFI/"
		},
		{ 
			name: "Ziqing Ye",
			project: "Mumbai Religious Places",
			image: "fall18/zye.png",
			url: "https://yeziqing1212.github.io/Mumbai_Map/"
		},
		{ 
			name: "Chenyu Zhang",
			project: "New York Hydrology",
			image: "fall18/czhang.png",
			url: "https://cz2xu.github.io/nycfinalfinal/"
		},
		{ 
			name: "Fangli Zhang",
			project: "CANDY",
			image: "fall18/fzhang.png",
			url: "https://fanglizhang.github.io/CANDY/"
		}
	];
	var fall17 = [ 
		{ 
			name: "Liz Camuti",
			project: "Understanding Youngstown's Vacant Land",
			image: "fall17/lcamuti.png",
			url: "https://lzcamuti.github.io/finalmap/"
		},
		{ 
			name: "Liza Court",
			project: "Leaf Morphology by Latitude",
			image: "fall17/lcourt.png",
			url: "https://egc8sj.github.io/leaf-morph/"
		},
		{ 
			name: "Kirk Gordon",
			project: "69 Parasols",
			image: "fall17/kgordon.png",
			url: "https://kirkgordo.github.io/caac_components_visualization/"
		},
		{ 
			name: "Erica Mutschler-Nielsen",
			project: "Bhalswa Lake",
			image: "fall17/emutschlernielsen.png",
			url: "https://elm5bc.github.io/Bhalswa/"
		},
		{ 
			name: "Jiayue Peng",
			project: "How Dogs Distribute in NYC",
			image: "fall17/jpeng.png",
			url: "https://pppfrank.github.io/FinalProject-NYCDogs/"
		},
		{ 
			name: "Hangyu Shi",
			project: "The Future of Winneba Sacred Lagoon",
			image: "fall17/hshi.png",
			url: "https://shyrvp.github.io/Final-Assignment/"
		},
		{ 
			name: "Zhilan Song",
			project: "Waste in Delhi",
			image: "fall17/zsong.png",
			url: "https://zhilansong.github.io/Delhiwaste/"
		},
		{ 
			name: "Siddarth Velamakanni",
			project: "Yamuna River Project",
			image: "fall17/svelamakanni.png",
			url: "https://sid-velamakanni.github.io/YRP/"
		},
		{ 
			name: "Pia von Barby",
			project: "A Flower's Journey",
			image: "fall17/pvonbarby.png",
			url: "https://pvonbarby.github.io/flower-journey/"
		},
		{ 
			name: "Xingyu Yang",
			project: "Clay Material Investigation",
			image: "fall17/xyang.png",
			url: "https://ogoubuli.github.io/Clay/"
		},
		{ 
			name: "Zhaowei Yu",
			project: "Citi Bikes in New York",
			image: "fall17/zyu.png",
			url: "https://wayneyue.github.io/nyc_bike_map/"
		},
		{ 
			name: "Zihao Zhang",
			project: "What Does It Take To Keep Me Warm?",
			image: "fall17/zzhang.png",
			url: "https://zihaoooo.github.io/AIO/"
		},
	];

	generateCards(fall19, $("#fall-19>.row"));
	generateCards(fall18, $("#fall-18>.row"));
	generateCards(fall17, $("#fall-17>.row"));

function generateCards(cardsList, targetDiv) {

	for (i=0; i<cardsList.length; i++) {
		$(targetDiv).append("<div class='card-container col-lg-3 col-md-4 col-sm-6 col-xs-12'><div class='card'><img src='" + "img/" + cardsList[i].image + "'class='card-img-top'><div class='card-body'><h5 class='card-title'>" + cardsList[i].name + "</h5><p class='card-text'>" + cardsList[i].project + "</p><a href='" + cardsList[i].url + "' class='btn btn-primary'>View Project</a></div></div></div>");
	}
}	

});
