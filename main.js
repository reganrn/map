var regions=[
    {
        "region_name": "Telangana",
        "region_code": "0",
        "population": 9794525,
        "color": "#F1F1F1"
    },
    {
        "region_name": "Jammu and Kashmir",
        "region_code": "1",
        "population": 5769750,
        "color": "#F9F9F9"
    },
    {
        "region_name": "West Bengal",
        "region_code": "2",
        "population": 5557276,
        "color": "#5390d9"
    },
    {
        "region_name": "Uttaranchal",
        "region_code": "3",
        "population": 4999932,
        "color": "#DDDDDD"
    },
    {
        "region_name": "Uttar Pradesh",
        "region_code": "4",
        "population": 4881756,
        "color": "#72efdd"
    },
    {
        "region_name": "Tripura",
        "region_code": "5",
        "population": 4377487,
        "color": "#56cfe1"
    },
    {
        "region_name": "Tamil Nadu",
        "region_code": "6",
        "population": 4374052,
        "color": "#72efdd"
    },
    {
        "region_name": "Sikkim",
        "region_code": "7",
        "population": 4050803,
        "color": "#5390d9"
    },
    {
        "region_name": "Rajasthan",
        "region_code": "8",
        "population": 3692828,
        "color": "#56cfe1"
    },
    {
        "region_name": "Punjab",
        "region_code": "9",
        "population": 1958238,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Puducherry",
        "region_code": "10",
        "population": 1640379,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Orissa",
        "region_code": "11",
        "population": 1565127,
        "color": "#56cfe1"
    },
    {
        "region_name": "Nagaland",
        "region_code": "12",
        "population": 1545155,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Mizoram",
        "region_code": "13",
        "population": 1312507,
        "color": "#56cfe1"
    },
    {
        "region_name": "Meghalaya",
        "region_code": "14",
        "population": 1221860,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Manipur",
        "region_code": "15",
        "population": 1039934,
        "color": "#56cfe1"
    },
    {
        "region_name": "Maharashtra",
        "region_code": "16",
        "population": 886239,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Madhya Pradesh",
        "region_code": "17",
        "population": 576194,
        "color": "#5390d9"
    },
    {
        "region_name": "Molise",
        "region_code": "18",
        "population": 313341,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Kerala",
        "region_code": "19",
        "population": 127844,
        "color": "#5390d9"
    },
    {
        "region_name": "Karnataka",
        "region_code": "20",
        "population": 127844,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Jharkhand",
        "region_code": "21",
        "population": 127844,
        "color": "#5390d9"
    },
    {
        "region_name": "Himachal Pradesh",
        "region_code": "22",
        "population": 127844,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Haryana",
        "region_code": "23",
        "population": 127844,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Gujarat",
        "region_code": "24",
        "population": 127844,
        "color": "#5390d9"
    },
    {
        "region_name": "Goa",
        "region_code": "25",
        "population": 127844,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Delhi",
        "region_code": "26",
        "population": 127844,
        "color": "#5390d9"
    },
    {
        "region_name": "Daman and Diu",
        "region_code": "27",
        "population": 127844,
        "color": "#4ea8de"
    },
    {
        "region_name": "Val d'Aosta",
        "region_code": "28",
        "population": 127844,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Chhattisgarh",
        "region_code": "29",
        "population": 127844,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Val d'Aosta",
        "region_code": "30",
        "population": 127844,
        "color": "#4ea8de"
    },
    {
        "region_name": "Bihar",
        "region_code": "31",
        "population": 127844,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Assam",
        "region_code": "32",
        "population": 127844,
        "color": "#4ea8de"
    },
    {
        "region_name": "Arunachal Pradesh",
        "region_code": "33",
        "population": 127844,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Andhra Pradesh",
        "region_code": "34",
        "population": 127844,
        "color": "#80ffdb"
    },
    {
        "region_name": "Andaman and Nicobar",
        "region_code": "35",
        "population": 127844,
        "color": "#64dfdf"
    }
];

// Click
const currentMap = document.querySelectorAll('.map path')
for (const currentClick of currentMap) {
    currentClick.addEventListener('click', function(event) {
        document.querySelector('.map-popup').classList.add("active");
        document.querySelector('.popup-content h1').innerText = regions[this.id].region_name;
        document.querySelector('.popup-content p').innerText = regions[this.id].population;
  })
}


for (const currentClick of currentMap) {
// Mouseover
    currentClick.addEventListener('mousemove', function(e) {
        document.querySelector('.tooltip').classList.add("active");
        document.querySelector('.tooltip h2').innerText = regions[this.id].region_name;
        document.querySelector('.tooltip p').innerText = regions[this.id].population;
        var tootTip = document.querySelector('.tooltip');
        x = e.offsetX;
        y = e.offsetY;
        tootTip.style.left = 150 + x+"px";
        tootTip.style.top = 50 + y+"px";
  })
// mouseleave
  currentClick.addEventListener('mouseleave', function(e) {
    document.querySelector('.tooltip').classList.remove("active");
  });
}

document.querySelector('.map-popupclose').addEventListener('click', function(){
    document.querySelector('.map-popup').classList.remove("active");
});

for(i = 0; i < regions.length; i++) {
    console.log()
    document.getElementById(i).style.fill= regions[i].color
}
