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
        "color": "#CCCCCC"
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
        "color": "#FFFFFF"
    },
    {
        "region_name": "Tripura",
        "region_code": "5",
        "population": 4377487,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Tamil Nadu",
        "region_code": "6",
        "population": 4374052,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Sikkim",
        "region_code": "7",
        "population": 4050803,
        "color": "#FFFFFF"
    },
    {
        "region_name": "Rajasthan",
        "region_code": "8",
        "population": 3692828,
        "color": "#FFFFFF"
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
        "color": "#FFFFFF"
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
        "color": "#FFFFFF"
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
        "color": "#FFFFFF"
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
        "color": "#FFFFFF"
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
        "color": "#FFFFFF"
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
        "color": "#FFFFFF"
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
        "color": "#FFFFFF"
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
        "color": "#FFFFFF"
    },
    {
        "region_name": "Daman and Diu",
        "region_code": "27",
        "population": 127844,
        "color": "#FFFFFF"
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
        "color": "#FFFFFF"
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
        "color": "#FFFFFF"
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
        "color": "#FFFFFF"
    },
    {
        "region_name": "Andaman and Nicobar",
        "region_code": "35",
        "population": 127844,
        "color": "#FFFFFF"
    }
];

const currentMap = document.querySelectorAll('.map path')
for (const currentClick of currentMap) {
    currentClick.addEventListener('click', function(event) {
        document.querySelector('.map-popup').classList.add("active");
        document.querySelector('.popup-content h1').innerText = regions[this.id].region_name;
        document.querySelector('.popup-content p').innerText = regions[this.id].population;
  })
}

document.querySelector('.map-popupclose').addEventListener('click', function(){
    document.querySelector('.map-popup').classList.remove("active");
})


for(i = 0; i < regions.length; i++) {
    console.log()
    document.getElementById(i).style.fill= regions[i].color
}




// $(function() {

//     for(i = 0; i < regions.length; i++) {

//         $('#'+ regions[i].region_code)
//         .css({'fill': 'rgba(11, 104, 170,' + regions[i].population/highest_value +')'})
//         .data('region', regions[i]);
//     }

//     $('.map g').mouseover(function (e) {
//         var region_data=$(this).data('region');
//         $('<div class="info_panel">'+
//             region_data.region_name + '<br>' +
//           	'Population: ' + region_data.population.toLocaleString("en-UK") +
//           	'</div>'
//          )
//         .appendTo('body');
//     })
//     .mouseleave(function () {
//         $('.info_panel').remove();
//     })
//     .mousemove(function(e) {
//         var mouseX = e.pageX, //X coordinates of mouse
//             mouseY = e.pageY; //Y coordinates of mouse

//         $('.info_panel').css({
//             top: mouseY-50,
//             left: mouseX - ($('.info_panel').width()/2)
//         });
//     });

// });