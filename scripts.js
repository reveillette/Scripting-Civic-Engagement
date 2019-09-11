$(document).ready(function() {
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

	generateCards(fall18, $("#fall-18>.row"));
	generateCards(fall17, $("#fall-17>.row"));

function generateCards(cardsList, targetDiv) {

	for (i=0; i<cardsList.length; i++) {
		$(targetDiv).append("<div class='card-container col-lg-3 col-md-4 col-sm-6 col-xs-12'><div class='card'><img src='" + "img/" + cardsList[i].image + "'class='card-img-top'><div class='card-body'><h5 class='card-title'>" + cardsList[i].name + "</h5><p class='card-text'>" + cardsList[i].project + "</p><a href='" + cardsList[i].url + "' class='btn btn-primary'>View Project</a></div></div></div>");
	}
}	

});
