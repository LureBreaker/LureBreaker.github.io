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


var transport2012 = [
    {
        "Indonesia": [
            {
                "key": "Air",
                "y": 1752591
            },
            {
                "key": "Sea",
                "y": 259075
            },
            {
                "key": "Land",
                "y": 825871
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
      y: 1128478
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