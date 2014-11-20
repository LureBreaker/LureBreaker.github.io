var testdata = [
    {
      key: "One",
      y: 5
    },
    {
      key: "Two",
      y: 2
    },
    {
      key: "Three",
      y: 9
    }
  ];



  
  var expenditure = [
	{
		"key":"Indonesia",
		"values": [
			{ x: "2013" , y:"964"},
			{ x: "2012" , y:"1107"},
			{ x: "2011" , y:"2853"},
			{ x: "2010" , y:"2604"},
			{ x: "2009" , y:"1599"}
		]
	},{
		"key":"China",
		"values": [
			{ x: "2013" , y:"1313"},
			{ x: "2012" , y:"1237"},
			{ x: "2011" , y:"2110"},
			{ x: "2010" , y:"1644"},
			{ x: "2009" , y:"1052"}
		]
	},
	{
		"key":"Malaysia",
		"values": [
			{ x: "2013" , y:"694"},
			{ x: "2012" , y:"782"},
			{ x: "2011" , y:"893"},
			{ x: "2010" , y:"767"},
			{ x: "2009" , y:"513"}
		]
	},
	{
		"key":"Australia",
		"values": [
			{ x: "2013" , y:"958"},
			{ x: "2012" , y:"988"},
			{ x: "2011" , y:"1095"},
			{ x: "2010" , y:"1002"},
			{ x: "2009" , y:"617"}
		]
	},
	{
		"key":"India",
		"values": [
			{ x: "2013" , y:"1311"},
			{ x: "2012" , y:"1255"},
			{ x: "2011" , y:"1103"},
			{ x: "2010" , y:"911"},
			{ x: "2009" , y:"590"}
		]
	},
	{
		"key":"Japan",
		"values": [
			{ x: "2013" , y:"1094"},
			{ x: "2012" , y:"1254"},
			{ x: "2011" , y:"796"},
			{ x: "2010" , y:"609"},
			{ x: "2009" , y:"368"}
		]
	},
	{
		"key":"Philippines",
		"values": [
			{ x: "2013" , y:"994"},
			{ x: "2012" , y:"1167"},
			{ x: "2011" , y:"840"},
			{ x: "2010" , y:"628"},
			{ x: "2009" , y:"485"}
		]
	},
	{
		"key":"UK",
		"values": [
			{ x: "2013" , y:"1115"},
			{ x: "2012" , y:"1078"},
			{ x: "2011" , y:"538"},
			{ x: "2010" , y:"542"},
			{ x: "2009" , y:"373"}
		]
	},
	{
		"key":"USA",
		"values": [
			{ x: "2013" , y:"1270"},
			{ x: "2012" , y:"1375"},
			{ x: "2011" , y:"618"},
			{ x: "2010" , y:"647"},
			{ x: "2009" , y:"431"}
		]
	},
	{
		"key":"Thailand",
		"values": [
			{ x: "2013" , y:"1242"},
			{ x: "2012" , y:"1302"},
			{ x: "2011" , y:"570"},
			{ x: "2010" , y:"549"},
			{ x: "2009" , y:"386"}
		]
	}
  ];
  
 //horizontal bar chart 
  number_visitor_data = 
 [
 {
    "key": "2009",
    "color": "#d67777",
    "values": [
      { 
        "label" : "Indonesia" ,
        "value" : 1745330
      } , 
      { 
        "label" : "China" ,
        "value" : 936747
      } , 
      { 
        "label" : "Malaysia" ,
        "value" : 764309
      } , 
      { 
        "label" : "Australia" ,
        "value" : 830299
      } , 
      {
        "label" : "India" ,
        "value" : 725624
      } , 
      { 
        "label" : "Japan" ,
        "value" : 489987
      } ,      
      {
        "label" : "Philippines" ,
        "value" : 432072
      } , 
	  { 
        "label" : "UK" ,
        "value" : 469756
      } ,
	  { 
        "label" : "USA" ,
        "value" : 370704
      } ,
      { 
        "label" : "Thailand" ,
        "value" : 317905
      }  
      
    ]
  },{
    "key": "2010",
    "color": "#d67777",
    "values": [
      { 
        "label" : "Indonesia" ,
        "value" : 2306243
      } , 
      { 
        "label" : "China" ,
        "value" : 1171493
      } , 
      { 
        "label" : "Malaysia" ,
        "value" : 1037489
      } , 
      { 
        "label" : "Australia" ,
        "value" : 880558
      } , 
      {
        "label" : "India" ,
        "value" : 828994
      } , 
      { 
        "label" : "Japan" ,
        "value" : 528951
      } , 
	  {
        "label" : "Philippines" ,
        "value" : 544449
      } ,
      { 
        "label" : "UK" ,
        "value" : 461769
      } ,
	  { 
        "label" : "USA" ,
        "value" : 417195
      },       
      { 
        "label" : "Thailand" ,
        "value" : 430067
      } 
    ]
  },{
    "key": "2011",
    "color": "#d67777",
    "values": [
      { 
        "label" : "Indonesia" ,
        "value" : 2592222
      } , 
      { 
        "label" : "China" ,
        "value" : 1577522
      } , 
      { 
        "label" : "Malaysia" ,
        "value" : 1140935
      } , 
      { 
        "label" : "Australia" ,
        "value" : 956039
      } , 
      {
        "label" : "India" ,
        "value" : 868991
      } , 
      { 
        "label" : "Japan" ,
        "value" : 656417
      } , 
	  {
        "label" : "Philippines" ,
        "value" : 677723
      },
      { 
        "label" : "UK" ,
        "value" : 442611
      } , 
	  { 
        "label" : "USA" ,
        "value" : 440576
      } ,
      { 
        "label" : "Thailand" ,
        "value" : 472708
      }     
    ]
  },{
    "key": "2012",
    "color": "#d67777",
    "values": [
      { 
        "label" : "Indonesia" ,
        "value" : 2837537
      } , 
      { 
        "label" : "China" ,
        "value" : 2034177
      } , 
      { 
        "label" : "Malaysia" ,
        "value" : 1231686
      } , 
      { 
        "label" : "Australia" ,
        "value" : 1050373
      } , 
      {
        "label" : "India" ,
        "value" : 894993
      } , 
      { 
        "label" : "Japan" ,
        "value" : 757116
      } , {
        "label" : "Philippines" ,
        "value" : 656804
      } ,
      { 
        "label" : "UK" ,
        "value" : 446497
      } , 
       { 
        "label" : "USA" ,
        "value" : 477213
      } ,
      { 
        "label" : "Thailand" ,
        "value" : 477654
      }  
      
    ]
  },{
    "key": "2013",
    "color": "#d67777",
    "values": [
      { 
        "label" : "Indonesia" ,
        "value" : 3088859
      } , 
      { 
        "label" : "China" ,
        "value" : 2269870
      } , 
      { 
        "label" : "Malaysia" ,
        "value" : 1280942
      } , 
      { 
        "label" : "Australia" ,
        "value" : 1125179
      } , 
      {
        "label" : "India" ,
        "value" : 933553
      } , 
      { 
        "label" : "Japan" ,
        "value" : 832845
      } , {
        "label" : "Philippines" ,
        "value" : 687794
      },
      { 
        "label" : "UK" ,
        "value" : 461459
      } ,  
	  { 
        "label" : "USA" ,
        "value" : 491946
      } ,
      { 
        "label" : "Thailand" ,
        "value" : 497409
      }  
      
    ]
  }
 
]
;

number_visitor_data = 
 [
 {
    "key": "Indonesia",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 1745330
      } , 
      { 
        "label" : "2010" ,
        "value" : 2306243
      } , 
      { 
        "label" : "2011" ,
        "value" : 2592222
      } , 
      { 
        "label" : "2012" ,
        "value" : 2837537
      } , 
      {
        "label" : "2013" ,
        "value" : 3088859
      } 
    ]
  },{
    "key": "China",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 936747
      } , 
      { 
        "label" : "2010" ,
        "value" : 1171493
      } , 
      { 
        "label" : "2011" ,
        "value" : 1577522
      } , 
      { 
        "label" : "2012" ,
        "value" : 2034177
      } , 
      {
        "label" : "2013" ,
        "value" : 2269870
      } 
    ]
  },{
    "key": "Malaysia",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 764309
      } , 
      { 
        "label" : "2010" ,
        "value" : 1037489
      } , 
      { 
        "label" : "2011" ,
        "value" : 1140935
      } , 
      { 
        "label" : "2012" ,
        "value" : 1231686
      } , 
      {
        "label" : "2013" ,
        "value" : 1280942
      } 
    ]
  },{
    "key": "Australia",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 830299
      } , 
      { 
        "label" : "2010" ,
        "value" : 880558
      } , 
      { 
        "label" : "2011" ,
        "value" : 956039
      } , 
      { 
        "label" : "2012" ,
        "value" : 1050373
      } , 
      {
        "label" : "2013" ,
        "value" : 1125179
      } 
    ]
  },{
    "key": "India",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 725624
      } , 
      { 
        "label" : "2010" ,
        "value" : 828994
      } , 
      { 
        "label" : "2011" ,
        "value" : 868991
      } , 
      { 
        "label" : "2012" ,
        "value" : 894993
      } , 
      {
        "label" : "2013" ,
        "value" : 933553
      } 
    ]
  },{
    "key": "Japan",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 489987
      } , 
      { 
        "label" : "2010" ,
        "value" : 528951
      } , 
      { 
        "label" : "2011" ,
        "value" : 656417
      } , 
      { 
        "label" : "2012" ,
        "value" : 757116
      } , 
      {
        "label" : "2013" ,
        "value" : 832845
      } 
    ]
  },{
    "key": "Philippines",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 432072
      } , 
      { 
        "label" : "2010" ,
        "value" : 544449
      } , 
      { 
        "label" : "2011" ,
        "value" : 677723
      } , 
      { 
        "label" : "2012" ,
        "value" : 656804
      } , 
      {
        "label" : "2013" ,
        "value" : 687794
      } 
    ]
  },{
    "key": "UK",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 469756
      } , 
      { 
        "label" : "2010" ,
        "value" : 461769
      } , 
      { 
        "label" : "2011" ,
        "value" : 442611
      } , 
      { 
        "label" : "2012" ,
        "value" : 446497
      } , 
      {
        "label" : "2013" ,
        "value" : 461459
      } 
    ]
  },{
    "key": "USA",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 370704
      } , 
      { 
        "label" : "2010" ,
        "value" : 417195
      } , 
      { 
        "label" : "2011" ,
        "value" : 440576
      } , 
      { 
        "label" : "2012" ,
        "value" : 477213
      } , 
      {
        "label" : "2013" ,
        "value" : 491946
      } 
    ]
  },{
    "key": "Thailand",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 317905
      } , 
      { 
        "label" : "2010" ,
        "value" : 430067
      } , 
      { 
        "label" : "2011" ,
        "value" : 472708
      } , 
      { 
        "label" : "2012" ,
        "value" : 656804
      } , 
      {
        "label" : "2013" ,
        "value" : 497409
      } 
    ]
  }
  ];
  
  var pie2009 = [
    {
      key: "Air",
      y: 5092916
    },
    {
      key: "Sea",
      y: 987747
    },
    {
      key: "Land",
      y: 1002070
    }
  ];
  
var pie2010 = [
    {
      key: "Air",
      y: 6367169
    },
    {
      key: "Sea",
      y: 1072704
    },
    {
      key: "Land",
      y: 1164807
    }
  ];  

var pie2011 = [
    {
      key: "Air",
      y: 7378908
    },
    {
      key: "Sea",
      y: 1128478
    },
    {
      key: "Land",
      y: 1318358
    }
  ];
 
var pie2012 = [
    {
      key: "Air",
      y: 8105108
    },
    {
      key: "Sea",
      y: 1243288
    },
    {
      key: "Land",
      y: 1515654
    }
  ];

var pie2013 = [
    {
      key: "Air",
      y: 8666823
    },
    {
      key: "Sea",
      y: 1302427
    },
    {
      key: "Land",
      y: 1700606
    }
  ];
  
var Indonesia2012 = [
    {
      key: "Air",
      y: 1752591
    },
    {
      key: "Sea",
      y: 825871
    },
    {
      key: "Land",
      y: 259075
    }
  ];

var Indonesia2013 = [
    {
      key: "Air",
      y: 1889222
    },
    {
      key: "Sea",
      y: 855550
    },
    {
      key: "Land",
      y: 344087
    }
  ];

var Indonesia2011 = [
    {
      key: "Air",
      y: 1616498
    },
    {
      key: "Sea",
      y: 745274
    },
    {
      key: "Land",
      y: 230450
    }
  ];  

var Indonesia2010 = [
    {
      key: "Air",
      y: 1391130
    },
    {
      key: "Sea",
      y: 695929
    },
    {
      key: "Land",
      y: 218090
    }
  ];  

var Indonesia2009 = [
    {
      key: "Air",
      y: 932647
    },
    {
      key: "Sea",
      y: 608369
    },
    {
      key: "Land",
      y: 204314
    }
  ]; 

var China2013 = [
    {
      key: "Air",
      y: 1626501
    },
    {
      key: "Sea",
      y: 76759
    },
    {
      key: "Land",
      y: 566610
    }
  ];   
  
var China2012 = [
    {
      key: "Air",
      y: 1455978
    },
    {
      key: "Sea",
      y: 62352
    },
    {
      key: "Land",
      y: 515847
    }
  ];
  
var China2011 = [
    {
      key: "Air",
      y: 1152802
    },
    {
      key: "Sea",
      y: 55509
    },
    {
      key: "Land",
      y: 369211
    }
  ]; 

var China2010 = [
    {
      key: "Air",
      y: 878117
    },
    {
      key: "Sea",
      y: 38571
    },
    {
      key: "Land",
      y: 254649
    }
  ]; 

var China2009 = [
    {
      key: "Air",
      y: 689992
    },
    {
      key: "Sea",
      y: 34976
    },
    {
      key: "Land",
      y: 211779
    }
  ]; 
  
var Malaysia2013 = [
    {
      key: "Air",
      y: 975070
    },
    {
      key: "Sea",
      y: 78782
    },
    {
      key: "Land",
      y: 227090
    }
  ]; 

var Malaysia2012 = [
    {
      key: "Air",
      y: 931233
    },
    {
      key: "Sea",
      y: 76257
    },
    {
      key: "Land",
      y: 224196
    }
  ];   
  
var Malaysia2011 = [
    {
      key: "Air",
      y: 862935
    },
    {
      key: "Sea",
      y: 67948
    },
    {
      key: "Land",
      y: 210052
    }
  ];   
  
var Malaysia2010 = [
    {
      key: "Air",
      y: 769234
    },
    {
      key: "Sea",
      y: 71499
    },
    {
      key: "Land",
      y: 196185
    }
  ];
  
var Malaysia2009 = [
    {
      key: "Air",
      y: 581417
    },
    {
      key: "Sea",
      y: 70227
    },
    {
      key: "Land",
      y: 112665
    }
  ];

var Australia2013 = [
    {
      key: "Air",
      y: 1015769
    },
    {
      key: "Sea",
      y: 50735
    },
    {
      key: "Land",
      y: 58675
    }
  ];
  
var Australia2012 = [
    {
      key: "Air",
      y: 956683
    },
    {
      key: "Sea",
      y: 46349
    },
    {
      key: "Land",
      y: 47341
    }
  ];

  var Australia2011 = [
    {
      key: "Air",
      y: 864981

    },
    {
      key: "Sea",
      y: 49353

    },
    {
      key: "Land",
      y: 41705

    }
  ];

var Australia2010 = [
    {
      key: "Air",
      y: 784806
    },
    {
      key: "Sea",
      y: 55320
    },
    {
      key: "Land",
      y: 40360
    }
  ];
  
var Australia2009 = [
    {
      key: "Air",
      y: 725803
    },
    {
      key: "Sea",
      y: 61217
    },
    {
      key: "Land",
      y: 43279
    }
  ];
  
var India2013 = [
    {
      key: "Air",
      y: 732258
    },
    {
      key: "Sea",
      y: 92172
    },
    {
      key: "Land",
      y: 109123
    }
  ];
  
var India2012 = [
    {
      key: "Air",
      y: 685808
    },
    {
      key: "Sea",
      y: 86473
    },
    {
      key: "Land",
      y: 122712
    }
  ];
  
var India2011 = [
    {
      key: "Air",
      y: 652060
    },
    {
      key: "Sea",
      y: 75850
    },
    {
      key: "Land",
      y: 141081
    }
  ];
  
var India2010 = [
    {
      key: "Air",
      y: 612291
    },
    {
      key: "Sea",
      y: 73481
    },
    {
      key: "Land",
      y: 143131
    }
  ];
  
var India2009 = [
    {
      key: "Air",
      y: 525598
    },
    {
      key: "Sea",
      y: 68657
    },
    {
      key: "Land",
      y: 131369
    }
  ];
  
var Japan2013 = [
    {
      key: "Air",
      y: 687820
    },
    {
      key: "Sea",
      y: 38375
    },
    {
      key: "Land",
      y: 106650
    }
  ];
  
var Japan2012 = [
    {
      key: "Air",
      y: 623322
    },
    {
      key: "Sea",
      y: 38904
    },
    {
      key: "Land",
      y: 94890
    }
  ];
  
var Japan2011 = [
    {
      key: "Air",
      y: 534169
    },
    {
      key: "Sea",
      y: 37493
    },
    {
      key: "Land",
      y: 84755
    }
  ];
  
var Japan2010 = [
    {
      key: "Air",
      y: 419945
    },
    {
      key: "Sea",
      y: 35282
    },
    {
      key: "Land",
      y: 73590
    }
  ];

var Japan2009 = [
    {
      key: "Air",
      y: 375417
    },
    {
      key: "Sea",
      y: 36406
    },
    {
      key: "Land",
      y: 78164
    }
  ];
  
var Philippines2013 = [
    {
      key: "Air",
      y: 539691
    },
    {
      key: "Sea",
      y: 33346
    },
    {
      key: "Land",
      y: 114757
    }
  ];
  
var Philippines2012 = [
    {
      key: "Air",
      y: 539422
    },
    {
      key: "Sea",
      y: 33466
    },
    {
      key: "Land",
      y: 83916
    }
  ];
  
var Philippines2011 = [
    {
      key: "Air",
      y: 567420
    },
    {
      key: "Sea",
      y: 33957
    },
    {
      key: "Land",
      y: 76346
    }
  ];

var Philippines2010 = [
    {
      key: "Air",
      y: 444150
    },
    {
      key: "Sea",
      y: 28416
    },
    {
      key: "Land",
      y: 71778
    }
  ];
  
var Philippines2009 = [
    {
      key: "Air",
      y: 335692
    },
    {
      key: "Sea",
      y: 28635
    },
    {
      key: "Land",
      y: 67745
    }
  ];
  
var UK2013 = [
    {
      key: "Air",
      y: 395566
    },
    {
      key: "Sea",
      y: 31129
    },
    {
      key: "Land",
      y: 34764
    }
  ];
  
var UK2012 = [
    {
      key: "Air",
      y: 380189
    },
    {
      key: "Sea",
      y: 33554
    },
    {
      key: "Land",
      y: 32754
    }
  ];
  
var UK2011 = [
    {
      key: "Air",
      y: 379388
    },
    {
      key: "Sea",
      y: 28790
    },
    {
      key: "Land",
      y: 34433
    }
  ];
  
var UK2010 = [
    {
      key: "Air",
      y: 389852
    },
    {
      key: "Sea",
      y: 36728
    },
    {
      key: "Land",
      y: 35134
    }
  ];

var UK2009 = [
    {
      key: "Air",
      y: 390532
    },
    {
      key: "Sea",
      y: 40484
    },
    {
      key: "Land",
      y: 38740
    }
  ];
  
var USA2012 = [
    {
      key: "Air",
      y: 408597
    },
    {
      key: "Sea",
      y: 31564
    },
    {
      key: "Land",
      y: 37052
    }
  ];
  
var USA2013 = [
    {
      key: "Air",
      y: 418818
    },
    {
      key: "Sea",
      y: 35360
    },
    {
      key: "Land",
      y: 37768
    }
  ];
  
var USA2011 = [
    {
      key: "Air",
      y: 380469
    },
    {
      key: "Sea",
      y: 25070
    },
    {
      key: "Land",
      y: 35037
    }
  ];
  
var USA2010 = [
    {
      key: "Air",
      y: 356107
    },
    {
      key: "Sea",
      y: 27199
    },
    {
      key: "Land",
      y: 33684
    }
  ];
  
var USA2009 = [
    {
      key: "Air",
      y: 310484
    },
    {
      key: "Sea",
      y: 28315
    },
    {
      key: "Land",
      y: 31905
    }
  ];
  
var Thailand2012 = [
    {
      key: "Air",
      y: 371285
    },
    {
      key: "Sea",
      y: 8498
    },
    {
      key: "Land",
      y: 97871
    }
  ];
  
var Thailand2013 = [
    {
      key: "Air",
      y: 386108
    },
    {
      key: "Sea",
      y: 10219
    },
    {
      key: "Land",
      y: 101082
    }
  ];
  
var Thailand2011 = [
    {
      key: "Air",
      y: 368186
    },
    {
      key: "Sea",
      y: 9234
    },
    {
      key: "Land",
      y: 95288
    }
  ];
  
var Thailand2010 = [
    {
      key: "Air",
      y: 321537
    },
    {
      key: "Sea",
      y: 10279
    },
    {
      key: "Land",
      y: 98206
    }
  ];
  
var Thailand2009 = [
    {
      key: "Air",
      y: 225334
    },
    {
      key: "Sea",
      y: 10461
    },
    {
      key: "Land",
      y: 82110
    }
  ];
  
var noVisitor = [
	{
		"key":"Indonesia",
		"values": [
			{ x: "2013" , y:"3088859"},
			{ x: "2012" , y:"2837537"},
			{ x: "2011" , y:"2592222"},
			{ x: "2010" , y:"2306243"},
			{ x: "2009" , y:"1745330"}
		]
	},{
		"key":"China",
		"values": [
			{ x: "2013" , y:"2269870"},
			{ x: "2012" , y:"2034177"},
			{ x: "2011" , y:"1577522"},
			{ x: "2010" , y:"1171493"},
			{ x: "2009" , y:"936747"}
		]
	},
	{
		"key":"Malaysia",
		"values": [
			{ x: "2013" , y:"1280942"},
			{ x: "2012" , y:"1231686"},
			{ x: "2011" , y:"1140935"},
			{ x: "2010" , y:"1037489"},
			{ x: "2009" , y:"764309"}
		]
	},
	{
		"key":"Australia",
		"values": [
			{ x: "2013" , y:"1125179"},
			{ x: "2012" , y:"1050373"},
			{ x: "2011" , y:"956039"},
			{ x: "2010" , y:"880558"},
			{ x: "2009" , y:"830299"}
		]
	},
	{
		"key":"India",
		"values": [
			{ x: "2013" , y:"933553"},
			{ x: "2012" , y:"894993"},
			{ x: "2011" , y:"868991"},
			{ x: "2010" , y:"828994"},
			{ x: "2009" , y:"725624"}
		]
	},
	{
		"key":"Japan",
		"values": [
			{ x: "2013" , y:"832845"},
			{ x: "2012" , y:"757116"},
			{ x: "2011" , y:"656417"},
			{ x: "2010" , y:"528951"},
			{ x: "2009" , y:"489987"}
		]
	},
	{
		"key":"Philippines",
		"values": [
			{ x: "2013" , y:"687794"},
			{ x: "2012" , y:"656804"},
			{ x: "2011" , y:"677723"},
			{ x: "2010" , y:"544449"},
			{ x: "2009" , y:"432072"}
		]
	},
	{
		"key":"UK",
		"values": [
			{ x: "2013" , y:"461459"},
			{ x: "2012" , y:"446497"},
			{ x: "2011" , y:"442611"},
			{ x: "2010" , y:"461769"},
			{ x: "2009" , y:"469756"}
		]
	},
	{
		"key":"USA",
		"values": [
			{ x: "2013" , y:"491946"},
			{ x: "2012" , y:"477213"},
			{ x: "2011" , y:"440576"},
			{ x: "2010" , y:"417195"},
			{ x: "2009" , y:"370704"}
		]
	},
	{
		"key":"Thailand",
		"values": [
			{ x: "2013" , y:"497409"},
			{ x: "2012" , y:"477654"},
			{ x: "2011" , y:"472708"},
			{ x: "2010" , y:"430067"},
			{ x: "2009" , y:"317905"}
		]
	}
  ];
  
  

var Indonesia2 = [
  {
    "key" : "Indonesia Vistors' Per Capital Expenditure" ,
    "bar": true,
    "values" : [ [ 2009 , 918] , [ 2010 , 1129] , [ 2011 , 1101] , [ 2012 , 1107] , [ 2013 , 964]]
  },
  

  {
    "key" : "Indonesia Vistors' Average Length of Stay" ,
    "values" : [ [ 2009 , 3.5] , [ 2010 , 3.35] , [ 2011 , 3.23] , [ 2012 , 2.97] , [ 2013 , 2.77] ]
  }

].map(function(series) {
  series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
  return series;
});



var Australia2 = [
  {
    "key" : "Australia Vistors' Per Capital Expenditure" ,
    "bar": true,
    "values" : [ [ 2009 , 747] , [ 2010 , 1138] , [ 2011 , 1146] , [ 2012 , 988] , [ 2013 , 958]]
  },
  

  {
    "key" : "Australia Vistors' Average Length of Stay" ,
    "values" : [ [ 2009 , 2.8] , [ 2010 , 2.89] , [ 2011 , 2.97] , [ 2012 , 2.85] , [ 2013 , 3] ]
  }
  ].map(function(series) {
  series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
  return series;
});

 

var China2 = [
  {
    "key" : "China Vistors' Per Capital Expenditure" ,
    "bar": true,
    "values" : [ [ 2009 , 918] , [ 2010 , 1129] , [ 2011 , 1101] , [ 2012 , 1107] , [ 2013 , 964]]
  },
  

  {
    "key" : "China Vistors' Average Length of Stay" ,
    "values" : [ [ 2009 , 3.5] , [ 2010 , 3.35] , [ 2011 , 3.23] , [ 2012 , 2.97] , [ 2013 , 2.77] ]
  }
  ].map(function(series) {
  series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
  return series;
});

  
  
var Malaysia2 = [
  {
    "key" : "Malaysia Vistors' Per Capital Expenditure" ,
    "bar": true,
    "values" : [ [ 2009 , 672] , [ 2010 , 739] , [ 2011 , 783] , [ 2012 , 782] , [ 2013 , 694]]
  },
  

  {
    "key" : "Malaysia Vistors' Average Length of Stay" ,
    "values" : [ [ 2009 , 2.2] , [ 2010 , 2.19] , [ 2011 , 2.12] , [ 2012 , 2.01] , [ 2013 , 2.02] ]
  }
  ].map(function(series) {
  series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
  return series;
});

  

var India2 = [
  {
    "key" : "India Vistors' Per Capital Expenditure" ,
    "bar": true,
    "values" : [ [ 2009 , 817] , [ 2010 , 1099] , [ 2011 , 1270] , [ 2012 , 1255] , [ 2013 , 1311]]
  },
  

  {
    "key" : "India Vistors' Average Length of Stay" ,
    "values" : [ [ 2009 , 5.8] , [ 2010 , 5.92] , [ 2011 , 6.03] , [ 2012 , 6.08] , [ 2013 , 6.38] ]
  }
    ].map(function(series) {
  series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
  return series;
});
  
  
    
var Japan2 = [
  {
    "key" : "Japan Vistors' Per Capital Expenditure" ,
    "bar": true,
    "values" : [ [ 2009 , 754] , [ 2010 , 1152] , [ 2011 , 1212] , [ 2012 , 1254] , [ 2013 , 1094]]
  },
  

  {
    "key" : "Japan Vistors' Average Length of Stay" ,
    "values" : [ [ 2009 , 2.3] , [ 2010 , 2.47] , [ 2011 , 2.55] , [ 2012 , 2.52] , [ 2013 , 2.5] ]
  }
   ].map(function(series) {
  series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
  return series;
});
  
   
var Philippines2 = [
  {
    "key" : "Philippines Vistors' Per Capital Expenditure" ,
    "bar": true,
    "values" : [ [ 2009 , 1128] , [ 2010 , 1153] , [ 2011 , 1239] , [ 2012 , 1167] , [ 2013 , 994]]
  },
  

  {
    "key" : "Philippines Vistors' Average Length of Stay" ,
    "values" : [ [ 2009 , 8.6] , [ 2010 , 7.8] , [ 2011 , 6.66] , [ 2012 , 6.95] , [ 2013 , 6.32] ]
  }  
     ].map(function(series) {
  series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
  return series;
});
  

  
var UK2 = [
  {
    "key" : "UK Vistors' Per Capital Expenditure" ,
    "bar": true,
    "values" : [ [ 2009 , 804] , [ 2010 , 1174] , [ 2011 , 1215] , [ 2012 , 1078] , [ 2013 , 1115]]
  },
  

  {
    "key" : "UK Vistors' Average Length of Stay" ,
    "values" : [ [ 2009 , 3.5] , [ 2010 , 3.69] , [ 2011 , 3.88] , [ 2012 , 3.8] , [ 2013 , 3.84] ]
  }  
      ].map(function(series) {
  series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
  return series;
});
  
   
   
var USA2 = [
  {
    "key" : "USA Vistors' Per Capital Expenditure" ,
    "bar": true,
    "values" : [ [ 2009 , 1166] , [ 2010 , 1550] , [ 2011 , 1403] , [ 2012 , 1375] , [ 2013 , 1270]]
  },
  

  {
    "key" : "USA Vistors' Average Length of Stay" ,
    "values" : [ [ 2009 , 4] , [ 2010 , 4.11] , [ 2011 , 4.14] , [ 2012 , 3.87] , [ 2013 , 3.88] ]
  }  
  ].map(function(series) {
  series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
  return series;
});
   
   
   
var Thailand2 = [
  {
    "key" : "Thailand Vistors' Per Capital Expenditure" ,
    "bar": true,
    "values" : [ [ 2009 , 1218] , [ 2010 , 1276] , [ 2011 , 1206] , [ 2012 , 1302] , [ 2013 , 1242]]
  },
  

  {
    "key" : "Thailand Vistors' Average Length of Stay" ,
    "values" : [ [ 2009 , 5.6] , [ 2010 , 4.68] , [ 2011 , 4.52] , [ 2012 , 4.32] , [ 2013 , 4.14] ]
  }  
  ].map(function(series) {
  series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
  return series;
});

