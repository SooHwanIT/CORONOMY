(this.webpackJsonpsunrin_t2=this.webpackJsonpsunrin_t2||[]).push([[0],{25:function(a,e,i){},36:function(a,e,i){},37:function(a,e,i){},38:function(a,e,i){},48:function(a,e,i){},49:function(a,e,i){},70:function(a,e,i){},71:function(a,e,i){},72:function(a,e,i){},84:function(a,e,i){"use strict";i.r(e);var s=i(1),c=i.n(s),o=i(28),n=i.n(o),m=(i(36),i(10)),t=i(2),N=(i(37),i(38),i(0)),r=function(){return Object(N.jsxs)("div",{className:"header",children:[Object(N.jsx)("img",{src:"https://i.ibb.co/HgptDCG/logo.png",alt:"header logo"}),Object(N.jsx)("p",{}),Object(N.jsx)(m.b,{to:"/",children:Object(N.jsx)("p",{children:"Home"})}),Object(N.jsx)(m.b,{to:"/analysis",children:Object(N.jsx)("p",{children:"Country analysis"})}),Object(N.jsx)(m.b,{to:"/compare",children:Object(N.jsx)("p",{children:"Country compare"})}),Object(N.jsx)(m.b,{to:"/Map",children:Object(N.jsx)("p",{children:"Map"})})]})},l=(i(48),i(9)),d=function(){return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"footer",children:[Object(N.jsx)("p",{children:"github address"}),Object(N.jsxs)("a",{href:"https://github.com/SooHwanIT",children:["\ucd5c\uc218\ud658\xa0",Object(N.jsx)(l.a,{})]}),"\xa0",Object(N.jsxs)("a",{href:"https://github.com/butdory",children:["\uc815\uc6d0\uc601\xa0",Object(N.jsx)(l.a,{})]}),"\xa0",Object(N.jsxs)("a",{href:"https://github.com/Green050121",children:["\uc724\ub3c4\ud604\xa0",Object(N.jsx)(l.a,{})]}),"\xa0",Object(N.jsxs)("a",{href:"https://github.com/SooHwanIT",children:["\ucd5c\ud604\uc815\xa0",Object(N.jsx)(l.a,{})]}),"\xa0",Object(N.jsx)("p",{children:"made by sunrin internet highschool \ucd5c\uc218\ud658 \ucd5c\ud604\uc815 \uc815\uc6d0\uc601 \uc724\ub3c4\ud604"}),Object(N.jsx)("p",{children:"Contact webmaster for more information. @gmail.com"}),Object(N.jsx)("p",{children:'Pixabay License, last modified 7, 17, 2021, "https://pixabay.com/ko/"'}),Object(N.jsx)("img",{src:"https://i.ibb.co/HgptDCG/logo.png",alt:"footer logo"})]})})};i(49);var u=function(){return Object(N.jsxs)("div",{className:"background",children:[Object(N.jsx)(r,{}),Object(N.jsx)("div",{className:"background_deco"}),Object(N.jsxs)("div",{className:"main_text",children:[Object(N.jsx)("img",{src:"https://i.ibb.co/zbpsF3W/v2.png",alt:"contents logo",className:"contents_logo"}),Object(N.jsx)("p",{className:"explane",children:"'CORONOMY'\ub294 CORONA\uc640 ECONOMY\uc758 \ud569\uc131\uc5b4\ub85c \ucf54\ub85c\ub098\ub85c \uc778\ud574 \uacbd\uc81c\uac00 \uc5b4\ub5bb\uac8c \ubcc0\ud654\ud558\uc600\ub294\uc9c0 \uc2dc\uac01 \uc790\ub8cc\ub97c \uc81c\uacf5\ud558\ub294 \uc0ac\uc774\ud2b8 \uc785\ub2c8\ub2e4."})]}),Object(N.jsxs)("div",{className:"bt",children:[Object(N.jsx)("a",{href:"/analysis",className:"A",children:Object(N.jsx)("span",{className:"country_analysis",children:"Go To Country Analysis"})}),Object(N.jsx)("a",{href:"/compare",className:"C",children:Object(N.jsx)("span",{className:"country compare",children:"Go To Country Compare"})}),Object(N.jsx)("a",{href:"/map",className:"M",children:Object(N.jsx)("span",{className:"map",children:"Go To Map"})})]}),Object(N.jsx)(d,{})]})},j=i(8),b=function(a){var e=["Population","Total Tests","Total Deaths","Active Cases","Total Cases","Total Recovered"],c=Object(s.useState)(""),o=Object(j.a)(c,2),n=o[0],m=o[1],t=i(50).default,r={method:"GET",url:"https://worldometers.p.rapidapi.com/api/coronavirus/country/".concat(a.name),headers:{"x-rapidapi-key":"fcb0e402d7mshc5c03f6430070b2p126faejsnc1e229da87f1","x-rapidapi-host":"worldometers.p.rapidapi.com"}};return t.request(r).then((function(i){m(i.data.data[e[a.value]].replace(/,/g,""))})).catch((function(a){console.error(a)})),Object(N.jsx)("p",{children:n})},h=[{iso:"AF",cName:"Afghanistan"},{iso:"AX",cName:"Aland Islands"},{iso:"AL",cName:"Albania"},{iso:"DZ",cName:"Algeria"},{iso:"AS",cName:"American Samoa"},{iso:"AD",cName:"Andorra"},{iso:"AO",cName:"Angola"},{iso:"AI",cName:"Anguilla"},{iso:"AQ",cName:"Antarctica"},{iso:"AG",cName:"Antigua And Barbuda"},{iso:"AR",cName:"Argentina"},{iso:"AM",cName:"Armenia"},{iso:"AW",cName:"Aruba"},{iso:"AU",cName:"Australia"},{iso:"AT",cName:"Austria"},{iso:"AZ",cName:"Azerbaijan"},{iso:"BS",cName:"Bahamas"},{iso:"BH",cName:"Bahrain"},{iso:"BD",cName:"Bangladesh"},{iso:"BB",cName:"Barbados"},{iso:"BY",cName:"Belarus"},{iso:"BE",cName:"Belgium"},{iso:"BZ",cName:"Belize"},{iso:"BJ",cName:"Benin"},{iso:"BM",cName:"Bermuda"},{iso:"BT",cName:"Bhutan"},{iso:"BO",cName:"Bolivia"},{iso:"BA",cName:"Bosnia And Herzegovina"},{iso:"BW",cName:"Botswana"},{iso:"BV",cName:"Bouvet Island"},{iso:"BR",cName:"Brazil"},{iso:"IO",cName:"British Indian Ocean Territory"},{iso:"BN",cName:"Brunei Darussalam"},{iso:"BG",cName:"Bulgaria"},{iso:"BF",cName:"Burkina Faso"},{iso:"BI",cName:"Burundi"},{iso:"KH",cName:"Cambodia"},{iso:"CM",cName:"Cameroon"},{iso:"CA",cName:"Canada"},{iso:"CV",cName:"Cape Verde"},{iso:"KY",cName:"Cayman Islands"},{iso:"CF",cName:"Central African Republic"},{iso:"TD",cName:"Chad"},{iso:"CL",cName:"Chile"},{iso:"CN",cName:"China"},{iso:"CX",cName:"Christmas Island"},{iso:"CC",cName:"Cocos (Keeling) Islands"},{iso:"CO",cName:"Colombia"},{iso:"KM",cName:"Comoros"},{iso:"CG",cName:"Congo"},{iso:"CD",cName:"Congo, Democratic Republic"},{iso:"CK",cName:"Cook Islands"},{iso:"CR",cName:"Costa Rica"},{iso:"CI",cName:'Cote D"Ivoire'},{iso:"HR",cName:"Croatia"},{iso:"CU",cName:"Cuba"},{iso:"CY",cName:"Cyprus"},{iso:"CZ",cName:"Czech Republic"},{iso:"DK",cName:"Denmark"},{iso:"DJ",cName:"Djibouti"},{iso:"DM",cName:"Dominica"},{iso:"DO",cName:"Dominican Republic"},{iso:"EC",cName:"Ecuador"},{iso:"EG",cName:"Egypt"},{iso:"SV",cName:"El Salvador"},{iso:"GQ",cName:"Equatorial Guinea"},{iso:"ER",cName:"Eritrea"},{iso:"EE",cName:"Estonia"},{iso:"ET",cName:"Ethiopia"},{iso:"FK",cName:"Falkland Islands (Malvinas)"},{iso:"FO",cName:"Faroe Islands"},{iso:"FJ",cName:"Fiji"},{iso:"FI",cName:"Finland"},{iso:"FR",cName:"France"},{iso:"GF",cName:"French Guiana"},{iso:"PF",cName:"French Polynesia"},{iso:"TF",cName:"French Southern Territories"},{iso:"GA",cName:"Gabon"},{iso:"GM",cName:"Gambia"},{iso:"GE",cName:"Georgia"},{iso:"DE",cName:"Germany"},{iso:"GH",cName:"Ghana"},{iso:"GI",cName:"Gibraltar"},{iso:"GR",cName:"Greece"},{iso:"GL",cName:"Greenland"},{iso:"GD",cName:"Grenada"},{iso:"GP",cName:"Guadeloupe"},{iso:"GU",cName:"Guam"},{iso:"GT",cName:"Guatemala"},{iso:"GG",cName:"Guernsey"},{iso:"GN",cName:"Guinea"},{iso:"GW",cName:"Guinea-Bissau"},{iso:"GY",cName:"Guyana"},{iso:"HT",cName:"Haiti"},{iso:"HM",cName:"Heard Island & Mcdonald Islands"},{iso:"VA",cName:"Holy See (Vatican City State)"},{iso:"HN",cName:"Honduras"},{iso:"HK",cName:"Hong Kong"},{iso:"HU",cName:"Hungary"},{iso:"IS",cName:"Iceland"},{iso:"IN",cName:"India"},{iso:"ID",cName:"Indonesia"},{iso:"IR",cName:"Iran, Islamic Republic Of"},{iso:"IQ",cName:"Iraq"},{iso:"IE",cName:"Ireland"},{iso:"IM",cName:"Isle Of Man"},{iso:"IL",cName:"Israel"},{iso:"IT",cName:"Italy"},{iso:"JM",cName:"Jamaica"},{iso:"JP",cName:"Japan"},{iso:"JE",cName:"Jersey"},{iso:"JO",cName:"Jordan"},{iso:"KZ",cName:"Kazakhstan"},{iso:"KE",cName:"Kenya"},{iso:"KI",cName:"Kiribati"},{iso:"KR",cName:"Korea"},{iso:"KW",cName:"Kuwait"},{iso:"KG",cName:"Kyrgyzstan"},{iso:"LA",cName:'Lao People"s Democratic Republic'},{iso:"LV",cName:"Latvia"},{iso:"LB",cName:"Lebanon"},{iso:"LS",cName:"Lesotho"},{iso:"LR",cName:"Liberia"},{iso:"LY",cName:"Libyan Arab Jamahiriya"},{iso:"LI",cName:"Liechtenstein"},{iso:"LT",cName:"Lithuania"},{iso:"LU",cName:"Luxembourg"},{iso:"MO",cName:"Macao"},{iso:"MK",cName:"Macedonia"},{iso:"MG",cName:"Madagascar"},{iso:"MW",cName:"Malawi"},{iso:"MY",cName:"Malaysia"},{iso:"MV",cName:"Maldives"},{iso:"ML",cName:"Mali"},{iso:"MT",cName:"Malta"},{iso:"MH",cName:"Marshall Islands"},{iso:"MQ",cName:"Martinique"},{iso:"MR",cName:"Mauritania"},{iso:"MU",cName:"Mauritius"},{iso:"YT",cName:"Mayotte"},{iso:"MX",cName:"Mexico"},{iso:"FM",cName:"Micronesia, Federated States Of"},{iso:"MD",cName:"Moldova"},{iso:"MC",cName:"Monaco"},{iso:"MN",cName:"Mongolia"},{iso:"ME",cName:"Montenegro"},{iso:"MS",cName:"Montserrat"},{iso:"MA",cName:"Morocco"},{iso:"MZ",cName:"Mozambique"},{iso:"MM",cName:"Myanmar"},{iso:"NA",cName:"Namibia"},{iso:"NR",cName:"Nauru"},{iso:"NP",cName:"Nepal"},{iso:"NL",cName:"Netherlands"},{iso:"AN",cName:"Netherlands Antilles"},{iso:"NC",cName:"New Caledonia"},{iso:"NZ",cName:"New Zealand"},{iso:"NI",cName:"Nicaragua"},{iso:"NE",cName:"Niger"},{iso:"NG",cName:"Nigeria"},{iso:"NU",cName:"Niue"},{iso:"NF",cName:"Norfolk Island"},{iso:"MP",cName:"Northern Mariana Islands"},{iso:"NO",cName:"Norway"},{iso:"OM",cName:"Oman"},{iso:"PK",cName:"Pakistan"},{iso:"PW",cName:"Palau"},{iso:"PS",cName:"Palestinian Territory, Occupied"},{iso:"PA",cName:"Panama"},{iso:"PG",cName:"Papua New Guinea"},{iso:"PY",cName:"Paraguay"},{iso:"PE",cName:"Peru"},{iso:"PH",cName:"Philippines"},{iso:"PN",cName:"Pitcairn"},{iso:"PL",cName:"Poland"},{iso:"PT",cName:"Portugal"},{iso:"PR",cName:"Puerto Rico"},{iso:"QA",cName:"Qatar"},{iso:"RE",cName:"Reunion"},{iso:"RO",cName:"Romania"},{iso:"RU",cName:"Russian Federation"},{iso:"RW",cName:"Rwanda"},{iso:"BL",cName:"Saint Barthelemy"},{iso:"SH",cName:"Saint Helena"},{iso:"KN",cName:"Saint Kitts And Nevis"},{iso:"LC",cName:"Saint Lucia"},{iso:"MF",cName:"Saint Martin"},{iso:"PM",cName:"Saint Pierre And Miquelon"},{iso:"VC",cName:"Saint Vincent And Grenadines"},{iso:"WS",cName:"Samoa"},{iso:"SM",cName:"San Marino"},{iso:"ST",cName:"Sao Tome And Principe"},{iso:"SA",cName:"Saudi Arabia"},{iso:"SN",cName:"Senegal"},{iso:"RS",cName:"Serbia"},{iso:"SC",cName:"Seychelles"},{iso:"SL",cName:"Sierra Leone"},{iso:"SG",cName:"Singapore"},{iso:"SK",cName:"Slovakia"},{iso:"SI",cName:"Slovenia"},{iso:"SB",cName:"Solomon Islands"},{iso:"SO",cName:"Somalia"},{iso:"ZA",cName:"South Africa"},{iso:"GS",cName:"South Georgia And Sandwich Isl."},{iso:"ES",cName:"Spain"},{iso:"LK",cName:"Sri Lanka"},{iso:"SD",cName:"Sudan"},{iso:"SR",cName:"Suriname"},{iso:"SJ",cName:"Svalbard And Jan Mayen"},{iso:"SZ",cName:"Swaziland"},{iso:"SE",cName:"Sweden"},{iso:"CH",cName:"Switzerland"},{iso:"SY",cName:"Syrian Arab Republic"},{iso:"TW",cName:"Taiwan"},{iso:"TJ",cName:"Tajikistan"},{iso:"TZ",cName:"Tanzania"},{iso:"TH",cName:"Thailand"},{iso:"TL",cName:"Timor-Leste"},{iso:"TG",cName:"Togo"},{iso:"TK",cName:"Tokelau"},{iso:"TO",cName:"Tonga"},{iso:"TT",cName:"Trinidad And Tobago"},{iso:"TN",cName:"Tunisia"},{iso:"TR",cName:"Turkey"},{iso:"TM",cName:"Turkmenistan"},{iso:"TC",cName:"Turks And Caicos Islands"},{iso:"TV",cName:"Tuvalu"},{iso:"UG",cName:"Uganda"},{iso:"UA",cName:"Ukraine"},{iso:"AE",cName:"United Arab Emirates"},{iso:"GB",cName:"United Kingdom"},{iso:"US",cName:"United States"},{iso:"UM",cName:"United States Outlying Islands"},{iso:"UY",cName:"Uruguay"},{iso:"UZ",cName:"Uzbekistan"},{iso:"VU",cName:"Vanuatu"},{iso:"VE",cName:"Venezuela"},{iso:"VN",cName:"Viet Nam"},{iso:"VG",cName:"Virgin Islands, British"},{iso:"VI",cName:"Virgin Islands, U.S."},{iso:"WF",cName:"Wallis And Futuna"},{iso:"EH",cName:"Western Sahara"},{iso:"YE",cName:"Yemen"},{iso:"ZM",cName:"Zambia"},{iso:"ZW",cName:"Zimbabwe"}],O=function(a){var e=h.findIndex((function(e){return e.cName===a.name})),i="";return console.log(e),-1!==e&&(i=h[e].iso),console.log(i),console.log("https://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(i,".svg")),Object(N.jsx)("div",{children:Object(N.jsx)("img",{width:"100px",height:"50px",src:"https://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(i,".svg"),alt:"flag"})})};O.defaultProps={name:"Korea"};var x=O,p=function(a){var e=a.first,i=a.second;return Object(N.jsx)("div",{className:"table_main_info_div",children:Object(N.jsxs)("table",{className:"table_main_info",children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e}),Object(N.jsx)("td",{colSpan:2,children:"VS"}),Object(N.jsx)("td",{children:i})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"\uad6d\uae30"}),Object(N.jsx)("td",{children:Object(N.jsx)("p",{className:"table_main_info_td_p",children:"\uc778\uad6c \uc218"})}),Object(N.jsx)("td",{children:Object(N.jsx)("p",{className:"table_main_info_td_p",children:"\uc778\uad6c \uc218"})}),Object(N.jsx)("td",{children:"\uad6d\uae30"})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)(x,{name:e})}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:0,name:e})}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:0,name:i})}),Object(N.jsx)("td",{children:Object(N.jsx)(x,{name:i})})]})]})})},S=function(a){return Object(N.jsxs)("table",{className:"table_sub_info",children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:1,name:a.first})})," ",Object(N.jsx)("td",{children:"\ucd1d \uac80\uc0ac\uc790"}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:1,name:a.second})})," "]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:2,name:a.first})})," ",Object(N.jsx)("td",{children:"\ucd1d \uc0ac\ub9dd\uc790"}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:2,name:a.second})})," "]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:3,name:a.first})})," ",Object(N.jsx)("td",{children:"\ud604\uc7ac \ud655\uc9c4\uc790"}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:3,name:a.second})})," "]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:4,name:a.first})})," ",Object(N.jsx)("td",{children:"\ucd1d \ud655\uc9c4\uc790"}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:4,name:a.second})})," "]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:5,name:a.first})})," ",Object(N.jsx)("td",{children:"\uaca9\ub9ac\ud574\uc81c"}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:5,name:a.second})})," "]})]})},M=i(30),g=[{iso:"AF",cName:"Afghanistan"},{iso:"AX",cName:"Aland Islands"},{iso:"AL",cName:"Albania"},{iso:"DZ",cName:"Algeria"},{iso:"AS",cName:"American Samoa"},{iso:"AD",cName:"Andorra"},{iso:"AO",cName:"Angola"},{iso:"AI",cName:"Anguilla"},{iso:"AQ",cName:"Antarctica"},{iso:"AG",cName:"Antigua And Barbuda"},{iso:"AR",cName:"Argentina"},{iso:"AM",cName:"Armenia"},{iso:"AW",cName:"Aruba"},{iso:"AU",cName:"Australia"},{iso:"AT",cName:"Austria"},{iso:"AZ",cName:"Azerbaijan"},{iso:"BS",cName:"Bahamas"},{iso:"BH",cName:"Bahrain"},{iso:"BD",cName:"Bangladesh"},{iso:"BB",cName:"Barbados"},{iso:"BY",cName:"Belarus"},{iso:"BE",cName:"Belgium"},{iso:"BZ",cName:"Belize"},{iso:"BJ",cName:"Benin"},{iso:"BM",cName:"Bermuda"},{iso:"BT",cName:"Bhutan"},{iso:"BO",cName:"Bolivia"},{iso:"BA",cName:"Bosnia And Herzegovina"},{iso:"BW",cName:"Botswana"},{iso:"BV",cName:"Bouvet Island"},{iso:"BR",cName:"Brazil"},{iso:"IO",cName:"British Indian Ocean Territory"},{iso:"BN",cName:"Brunei Darussalam"},{iso:"BG",cName:"Bulgaria"},{iso:"BF",cName:"Burkina Faso"},{iso:"BI",cName:"Burundi"},{iso:"KH",cName:"Cambodia"},{iso:"CM",cName:"Cameroon"},{iso:"CA",cName:"Canada"},{iso:"CV",cName:"Cape Verde"},{iso:"KY",cName:"Cayman Islands"},{iso:"CF",cName:"Central African Republic"},{iso:"TD",cName:"Chad"},{iso:"CL",cName:"Chile"},{iso:"CN",cName:"China"},{iso:"CX",cName:"Christmas Island"},{iso:"CC",cName:"Cocos (Keeling) Islands"},{iso:"CO",cName:"Colombia"},{iso:"KM",cName:"Comoros"},{iso:"CG",cName:"Congo"},{iso:"CD",cName:"Congo, Democratic Republic"},{iso:"CK",cName:"Cook Islands"},{iso:"CR",cName:"Costa Rica"},{iso:"CI",cName:'Cote D"Ivoire'},{iso:"HR",cName:"Croatia"},{iso:"CU",cName:"Cuba"},{iso:"CY",cName:"Cyprus"},{iso:"CZ",cName:"Czech Republic"},{iso:"DK",cName:"Denmark"},{iso:"DJ",cName:"Djibouti"},{iso:"DM",cName:"Dominica"},{iso:"DO",cName:"Dominican Republic"},{iso:"EC",cName:"Ecuador"},{iso:"EG",cName:"Egypt"},{iso:"SV",cName:"El Salvador"},{iso:"GQ",cName:"Equatorial Guinea"},{iso:"ER",cName:"Eritrea"},{iso:"EE",cName:"Estonia"},{iso:"ET",cName:"Ethiopia"},{iso:"FK",cName:"Falkland Islands (Malvinas)"},{iso:"FO",cName:"Faroe Islands"},{iso:"FJ",cName:"Fiji"},{iso:"FI",cName:"Finland"},{iso:"FR",cName:"France"},{iso:"GF",cName:"French Guiana"},{iso:"PF",cName:"French Polynesia"},{iso:"TF",cName:"French Southern Territories"},{iso:"GA",cName:"Gabon"},{iso:"GM",cName:"Gambia"},{iso:"GE",cName:"Georgia"},{iso:"DE",cName:"Germany"},{iso:"GH",cName:"Ghana"},{iso:"GI",cName:"Gibraltar"},{iso:"GR",cName:"Greece"},{iso:"GL",cName:"Greenland"},{iso:"GD",cName:"Grenada"},{iso:"GP",cName:"Guadeloupe"},{iso:"GU",cName:"Guam"},{iso:"GT",cName:"Guatemala"},{iso:"GG",cName:"Guernsey"},{iso:"GN",cName:"Guinea"},{iso:"GW",cName:"Guinea-Bissau"},{iso:"GY",cName:"Guyana"},{iso:"HT",cName:"Haiti"},{iso:"HM",cName:"Heard Island & Mcdonald Islands"},{iso:"VA",cName:"Holy See (Vatican City State)"},{iso:"HN",cName:"Honduras"},{iso:"HK",cName:"Hong Kong"},{iso:"HU",cName:"Hungary"},{iso:"IS",cName:"Iceland"},{iso:"IN",cName:"India"},{iso:"ID",cName:"Indonesia"},{iso:"IR",cName:"Iran, Islamic Republic Of"},{iso:"IQ",cName:"Iraq"},{iso:"IE",cName:"Ireland"},{iso:"IM",cName:"Isle Of Man"},{iso:"IL",cName:"Israel"},{iso:"IT",cName:"Italy"},{iso:"JM",cName:"Jamaica"},{iso:"JP",cName:"Japan"},{iso:"JE",cName:"Jersey"},{iso:"JO",cName:"Jordan"},{iso:"KZ",cName:"Kazakhstan"},{iso:"KE",cName:"Kenya"},{iso:"KI",cName:"Kiribati"},{iso:"KR",cName:"Korea"},{iso:"KW",cName:"Kuwait"},{iso:"KG",cName:"Kyrgyzstan"},{iso:"LA",cName:'Lao People"s Democratic Republic'},{iso:"LV",cName:"Latvia"},{iso:"LB",cName:"Lebanon"},{iso:"LS",cName:"Lesotho"},{iso:"LR",cName:"Liberia"},{iso:"LY",cName:"Libyan Arab Jamahiriya"},{iso:"LI",cName:"Liechtenstein"},{iso:"LT",cName:"Lithuania"},{iso:"LU",cName:"Luxembourg"},{iso:"MO",cName:"Macao"},{iso:"MK",cName:"Macedonia"},{iso:"MG",cName:"Madagascar"},{iso:"MW",cName:"Malawi"},{iso:"MY",cName:"Malaysia"},{iso:"MV",cName:"Maldives"},{iso:"ML",cName:"Mali"},{iso:"MT",cName:"Malta"},{iso:"MH",cName:"Marshall Islands"},{iso:"MQ",cName:"Martinique"},{iso:"MR",cName:"Mauritania"},{iso:"MU",cName:"Mauritius"},{iso:"YT",cName:"Mayotte"},{iso:"MX",cName:"Mexico"},{iso:"FM",cName:"Micronesia, Federated States Of"},{iso:"MD",cName:"Moldova"},{iso:"MC",cName:"Monaco"},{iso:"MN",cName:"Mongolia"},{iso:"ME",cName:"Montenegro"},{iso:"MS",cName:"Montserrat"},{iso:"MA",cName:"Morocco"},{iso:"MZ",cName:"Mozambique"},{iso:"MM",cName:"Myanmar"},{iso:"NA",cName:"Namibia"},{iso:"NR",cName:"Nauru"},{iso:"NP",cName:"Nepal"},{iso:"NL",cName:"Netherlands"},{iso:"AN",cName:"Netherlands Antilles"},{iso:"NC",cName:"New Caledonia"},{iso:"NZ",cName:"New Zealand"},{iso:"NI",cName:"Nicaragua"},{iso:"NE",cName:"Niger"},{iso:"NG",cName:"Nigeria"},{iso:"NU",cName:"Niue"},{iso:"NF",cName:"Norfolk Island"},{iso:"MP",cName:"Northern Mariana Islands"},{iso:"NO",cName:"Norway"},{iso:"OM",cName:"Oman"},{iso:"PK",cName:"Pakistan"},{iso:"PW",cName:"Palau"},{iso:"PS",cName:"Palestinian Territory, Occupied"},{iso:"PA",cName:"Panama"},{iso:"PG",cName:"Papua New Guinea"},{iso:"PY",cName:"Paraguay"},{iso:"PE",cName:"Peru"},{iso:"PH",cName:"Philippines"},{iso:"PN",cName:"Pitcairn"},{iso:"PL",cName:"Poland"},{iso:"PT",cName:"Portugal"},{iso:"PR",cName:"Puerto Rico"},{iso:"QA",cName:"Qatar"},{iso:"RE",cName:"Reunion"},{iso:"RO",cName:"Romania"},{iso:"RU",cName:"Russian Federation"},{iso:"RW",cName:"Rwanda"},{iso:"BL",cName:"Saint Barthelemy"},{iso:"SH",cName:"Saint Helena"},{iso:"KN",cName:"Saint Kitts And Nevis"},{iso:"LC",cName:"Saint Lucia"},{iso:"MF",cName:"Saint Martin"},{iso:"PM",cName:"Saint Pierre And Miquelon"},{iso:"VC",cName:"Saint Vincent And Grenadines"},{iso:"WS",cName:"Samoa"},{iso:"SM",cName:"San Marino"},{iso:"ST",cName:"Sao Tome And Principe"},{iso:"SA",cName:"Saudi Arabia"},{iso:"SN",cName:"Senegal"},{iso:"RS",cName:"Serbia"},{iso:"SC",cName:"Seychelles"},{iso:"SL",cName:"Sierra Leone"},{iso:"SG",cName:"Singapore"},{iso:"SK",cName:"Slovakia"},{iso:"SI",cName:"Slovenia"},{iso:"SB",cName:"Solomon Islands"},{iso:"SO",cName:"Somalia"},{iso:"ZA",cName:"South Africa"},{iso:"GS",cName:"South Georgia And Sandwich Isl."},{iso:"ES",cName:"Spain"},{iso:"LK",cName:"Sri Lanka"},{iso:"SD",cName:"Sudan"},{iso:"SR",cName:"Suriname"},{iso:"SJ",cName:"Svalbard And Jan Mayen"},{iso:"SZ",cName:"Swaziland"},{iso:"SE",cName:"Sweden"},{iso:"CH",cName:"Switzerland"},{iso:"SY",cName:"Syrian Arab Republic"},{iso:"TW",cName:"Taiwan"},{iso:"TJ",cName:"Tajikistan"},{iso:"TZ",cName:"Tanzania"},{iso:"TH",cName:"Thailand"},{iso:"TL",cName:"Timor-Leste"},{iso:"TG",cName:"Togo"},{iso:"TK",cName:"Tokelau"},{iso:"TO",cName:"Tonga"},{iso:"TT",cName:"Trinidad And Tobago"},{iso:"TN",cName:"Tunisia"},{iso:"TR",cName:"Turkey"},{iso:"TM",cName:"Turkmenistan"},{iso:"TC",cName:"Turks And Caicos Islands"},{iso:"TV",cName:"Tuvalu"},{iso:"UG",cName:"Uganda"},{iso:"UA",cName:"Ukraine"},{iso:"AE",cName:"United Arab Emirates"},{iso:"GB",cName:"United Kingdom"},{iso:"US",cName:"United States"},{iso:"UM",cName:"United States Outlying Islands"},{iso:"UY",cName:"Uruguay"},{iso:"UZ",cName:"Uzbekistan"},{iso:"VU",cName:"Vanuatu"},{iso:"VE",cName:"Venezuela"},{iso:"VN",cName:"Viet Nam"},{iso:"VG",cName:"Virgin Islands, British"},{iso:"VI",cName:"Virgin Islands, U.S."},{iso:"WF",cName:"Wallis And Futuna"},{iso:"EH",cName:"Western Sahara"},{iso:"YE",cName:"Yemen"},{iso:"ZM",cName:"Zambia"},{iso:"ZW",cName:"Zimbabwe"}],A=[{value:"ny_gdp_pcap_cd",data:"1\uc778\ub2f9 GDP"},{value:"fr_inr_lndp",data:"\uac00\uc0b0\uae08\ub9ac"},{value:"cm_mkt_trad_cd",data:"\uac70\ub798 \uc8fc\uc2dd, \ucd1d \uae08\uc561"},{value:"ms_mil_xpnd_zs",data:"\uad6d\ubc29\ube44"},{value:"trade_current_us",data:"\ubb34\uc5ed\uc561 \uc9c0\uc218"},{value:"st_int_rcpt_cd",data:"\uad6d\uc81c \uad00\uad11 \uc218\uc785"},{value:"sp_dyn_le00_in",data:"\uae30\ub300\uc218\uba85"},{value:"labor_force",data:"\ub178\ub3d9\ub825"},{value:"sp_pop_totl",data:"\uc778\uad6c \uc218"}],C=function(a){var e=a.iso1,s=a.iso2,c=a._data;console.log(A);var o=i(69),n=g.findIndex((function(a){return a.cName===e})),m=g.findIndex((function(a){return a.cName===s})),t=A.findIndex((function(a){return a.data===c})),r="",l="",d="";-1!==n&&(r=o(r=g[n].iso)),-1!==m&&(l=o(l=g[m].iso)),-1!==t&&(d=A[t].value);var u="https://www.google.co.kr/publicdata/embed?ds=d5bncppjof8f9_&ctype=l&strail=false&bcs=d&nselm=h&met_y=".concat(d,"&scale_y=lin&ind_y=false&rdim=world&idim=country:").concat(r,":").concat(l,"&ifdim=world&hl=ko&dl=ko&ind=false");return Object(N.jsx)("div",{className:"graph_iframe_div",children:Object(N.jsx)(M.a,{className:"graph_iframe",width:"400",height:"325",scrolling:"no",url:u})})},v=(i(25),function(a){var e=a.name,i=a.iso;return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e}),Object(N.jsx)("td",{children:i})]})}),G=[{iso:"AF",cName:"Afghanistan"},{iso:"AX",cName:"Aland Islands"},{iso:"AL",cName:"Albania"},{iso:"DZ",cName:"Algeria"},{iso:"AS",cName:"American Samoa"},{iso:"AD",cName:"Andorra"},{iso:"AO",cName:"Angola"},{iso:"AI",cName:"Anguilla"},{iso:"AQ",cName:"Antarctica"},{iso:"AG",cName:"Antigua And Barbuda"},{iso:"AR",cName:"Argentina"},{iso:"AM",cName:"Armenia"},{iso:"AW",cName:"Aruba"},{iso:"AU",cName:"Australia"},{iso:"AT",cName:"Austria"},{iso:"AZ",cName:"Azerbaijan"},{iso:"BS",cName:"Bahamas"},{iso:"BH",cName:"Bahrain"},{iso:"BD",cName:"Bangladesh"},{iso:"BB",cName:"Barbados"},{iso:"BY",cName:"Belarus"},{iso:"BE",cName:"Belgium"},{iso:"BZ",cName:"Belize"},{iso:"BJ",cName:"Benin"},{iso:"BM",cName:"Bermuda"},{iso:"BT",cName:"Bhutan"},{iso:"BO",cName:"Bolivia"},{iso:"BA",cName:"Bosnia And Herzegovina"},{iso:"BW",cName:"Botswana"},{iso:"BV",cName:"Bouvet Island"},{iso:"BR",cName:"Brazil"},{iso:"IO",cName:"British Indian Ocean Territory"},{iso:"BN",cName:"Brunei Darussalam"},{iso:"BG",cName:"Bulgaria"},{iso:"BF",cName:"Burkina Faso"},{iso:"BI",cName:"Burundi"},{iso:"KH",cName:"Cambodia"},{iso:"CM",cName:"Cameroon"},{iso:"CA",cName:"Canada"},{iso:"CV",cName:"Cape Verde"},{iso:"KY",cName:"Cayman Islands"},{iso:"CF",cName:"Central African Republic"},{iso:"TD",cName:"Chad"},{iso:"CL",cName:"Chile"},{iso:"CN",cName:"China"},{iso:"CX",cName:"Christmas Island"},{iso:"CC",cName:"Cocos (Keeling) Islands"},{iso:"CO",cName:"Colombia"},{iso:"KM",cName:"Comoros"},{iso:"CG",cName:"Congo"},{iso:"CD",cName:"Congo, Democratic Republic"},{iso:"CK",cName:"Cook Islands"},{iso:"CR",cName:"Costa Rica"},{iso:"CI",cName:'Cote D"Ivoire'},{iso:"HR",cName:"Croatia"},{iso:"CU",cName:"Cuba"},{iso:"CY",cName:"Cyprus"},{iso:"CZ",cName:"Czech Republic"},{iso:"DK",cName:"Denmark"},{iso:"DJ",cName:"Djibouti"},{iso:"DM",cName:"Dominica"},{iso:"DO",cName:"Dominican Republic"},{iso:"EC",cName:"Ecuador"},{iso:"EG",cName:"Egypt"},{iso:"SV",cName:"El Salvador"},{iso:"GQ",cName:"Equatorial Guinea"},{iso:"ER",cName:"Eritrea"},{iso:"EE",cName:"Estonia"},{iso:"ET",cName:"Ethiopia"},{iso:"FK",cName:"Falkland Islands (Malvinas)"},{iso:"FO",cName:"Faroe Islands"},{iso:"FJ",cName:"Fiji"},{iso:"FI",cName:"Finland"},{iso:"FR",cName:"France"},{iso:"GF",cName:"French Guiana"},{iso:"PF",cName:"French Polynesia"},{iso:"TF",cName:"French Southern Territories"},{iso:"GA",cName:"Gabon"},{iso:"GM",cName:"Gambia"},{iso:"GE",cName:"Georgia"},{iso:"DE",cName:"Germany"},{iso:"GH",cName:"Ghana"},{iso:"GI",cName:"Gibraltar"},{iso:"GR",cName:"Greece"},{iso:"GL",cName:"Greenland"},{iso:"GD",cName:"Grenada"},{iso:"GP",cName:"Guadeloupe"},{iso:"GU",cName:"Guam"},{iso:"GT",cName:"Guatemala"},{iso:"GG",cName:"Guernsey"},{iso:"GN",cName:"Guinea"},{iso:"GW",cName:"Guinea-Bissau"},{iso:"GY",cName:"Guyana"},{iso:"HT",cName:"Haiti"},{iso:"HM",cName:"Heard Island & Mcdonald Islands"},{iso:"VA",cName:"Holy See (Vatican City State)"},{iso:"HN",cName:"Honduras"},{iso:"HK",cName:"Hong Kong"},{iso:"HU",cName:"Hungary"},{iso:"IS",cName:"Iceland"},{iso:"IN",cName:"India"},{iso:"ID",cName:"Indonesia"},{iso:"IR",cName:"Iran, Islamic Republic Of"},{iso:"IQ",cName:"Iraq"},{iso:"IE",cName:"Ireland"},{iso:"IM",cName:"Isle Of Man"},{iso:"IL",cName:"Israel"},{iso:"IT",cName:"Italy"},{iso:"JM",cName:"Jamaica"},{iso:"JP",cName:"Japan"},{iso:"JE",cName:"Jersey"},{iso:"JO",cName:"Jordan"},{iso:"KZ",cName:"Kazakhstan"},{iso:"KE",cName:"Kenya"},{iso:"KI",cName:"Kiribati"},{iso:"KR",cName:"Korea"},{iso:"KW",cName:"Kuwait"},{iso:"KG",cName:"Kyrgyzstan"},{iso:"LA",cName:'Lao People"s Democratic Republic'},{iso:"LV",cName:"Latvia"},{iso:"LB",cName:"Lebanon"},{iso:"LS",cName:"Lesotho"},{iso:"LR",cName:"Liberia"},{iso:"LY",cName:"Libyan Arab Jamahiriya"},{iso:"LI",cName:"Liechtenstein"},{iso:"LT",cName:"Lithuania"},{iso:"LU",cName:"Luxembourg"},{iso:"MO",cName:"Macao"},{iso:"MK",cName:"Macedonia"},{iso:"MG",cName:"Madagascar"},{iso:"MW",cName:"Malawi"},{iso:"MY",cName:"Malaysia"},{iso:"MV",cName:"Maldives"},{iso:"ML",cName:"Mali"},{iso:"MT",cName:"Malta"},{iso:"MH",cName:"Marshall Islands"},{iso:"MQ",cName:"Martinique"},{iso:"MR",cName:"Mauritania"},{iso:"MU",cName:"Mauritius"},{iso:"YT",cName:"Mayotte"},{iso:"MX",cName:"Mexico"},{iso:"FM",cName:"Micronesia, Federated States Of"},{iso:"MD",cName:"Moldova"},{iso:"MC",cName:"Monaco"},{iso:"MN",cName:"Mongolia"},{iso:"ME",cName:"Montenegro"},{iso:"MS",cName:"Montserrat"},{iso:"MA",cName:"Morocco"},{iso:"MZ",cName:"Mozambique"},{iso:"MM",cName:"Myanmar"},{iso:"NA",cName:"Namibia"},{iso:"NR",cName:"Nauru"},{iso:"NP",cName:"Nepal"},{iso:"NL",cName:"Netherlands"},{iso:"AN",cName:"Netherlands Antilles"},{iso:"NC",cName:"New Caledonia"},{iso:"NZ",cName:"New Zealand"},{iso:"NI",cName:"Nicaragua"},{iso:"NE",cName:"Niger"},{iso:"NG",cName:"Nigeria"},{iso:"NU",cName:"Niue"},{iso:"NF",cName:"Norfolk Island"},{iso:"MP",cName:"Northern Mariana Islands"},{iso:"NO",cName:"Norway"},{iso:"OM",cName:"Oman"},{iso:"PK",cName:"Pakistan"},{iso:"PW",cName:"Palau"},{iso:"PS",cName:"Palestinian Territory, Occupied"},{iso:"PA",cName:"Panama"},{iso:"PG",cName:"Papua New Guinea"},{iso:"PY",cName:"Paraguay"},{iso:"PE",cName:"Peru"},{iso:"PH",cName:"Philippines"},{iso:"PN",cName:"Pitcairn"},{iso:"PL",cName:"Poland"},{iso:"PT",cName:"Portugal"},{iso:"PR",cName:"Puerto Rico"},{iso:"QA",cName:"Qatar"},{iso:"RE",cName:"Reunion"},{iso:"RO",cName:"Romania"},{iso:"RU",cName:"Russian Federation"},{iso:"RW",cName:"Rwanda"},{iso:"BL",cName:"Saint Barthelemy"},{iso:"SH",cName:"Saint Helena"},{iso:"KN",cName:"Saint Kitts And Nevis"},{iso:"LC",cName:"Saint Lucia"},{iso:"MF",cName:"Saint Martin"},{iso:"PM",cName:"Saint Pierre And Miquelon"},{iso:"VC",cName:"Saint Vincent And Grenadines"},{iso:"WS",cName:"Samoa"},{iso:"SM",cName:"San Marino"},{iso:"ST",cName:"Sao Tome And Principe"},{iso:"SA",cName:"Saudi Arabia"},{iso:"SN",cName:"Senegal"},{iso:"RS",cName:"Serbia"},{iso:"SC",cName:"Seychelles"},{iso:"SL",cName:"Sierra Leone"},{iso:"SG",cName:"Singapore"},{iso:"SK",cName:"Slovakia"},{iso:"SI",cName:"Slovenia"},{iso:"SB",cName:"Solomon Islands"},{iso:"SO",cName:"Somalia"},{iso:"ZA",cName:"South Africa"},{iso:"GS",cName:"South Georgia And Sandwich Isl."},{iso:"ES",cName:"Spain"},{iso:"LK",cName:"Sri Lanka"},{iso:"SD",cName:"Sudan"},{iso:"SR",cName:"Suriname"},{iso:"SJ",cName:"Svalbard And Jan Mayen"},{iso:"SZ",cName:"Swaziland"},{iso:"SE",cName:"Sweden"},{iso:"CH",cName:"Switzerland"},{iso:"SY",cName:"Syrian Arab Republic"},{iso:"TW",cName:"Taiwan"},{iso:"TJ",cName:"Tajikistan"},{iso:"TZ",cName:"Tanzania"},{iso:"TH",cName:"Thailand"},{iso:"TL",cName:"Timor-Leste"},{iso:"TG",cName:"Togo"},{iso:"TK",cName:"Tokelau"},{iso:"TO",cName:"Tonga"},{iso:"TT",cName:"Trinidad And Tobago"},{iso:"TN",cName:"Tunisia"},{iso:"TR",cName:"Turkey"},{iso:"TM",cName:"Turkmenistan"},{iso:"TC",cName:"Turks And Caicos Islands"},{iso:"TV",cName:"Tuvalu"},{iso:"UG",cName:"Uganda"},{iso:"UA",cName:"Ukraine"},{iso:"AE",cName:"United Arab Emirates"},{iso:"GB",cName:"United Kingdom"},{iso:"US",cName:"United States"},{iso:"UM",cName:"United States Outlying Islands"},{iso:"UY",cName:"Uruguay"},{iso:"UZ",cName:"Uzbekistan"},{iso:"VU",cName:"Vanuatu"},{iso:"VE",cName:"Venezuela"},{iso:"VN",cName:"Viet Nam"},{iso:"VG",cName:"Virgin Islands, British"},{iso:"VI",cName:"Virgin Islands, U.S."},{iso:"WF",cName:"Wallis And Futuna"},{iso:"EH",cName:"Western Sahara"},{iso:"YE",cName:"Yemen"},{iso:"ZM",cName:"Zambia"},{iso:"ZW",cName:"Zimbabwe"}],I=function(a){var e=G.filter((function(e){return!0===(i=e.cName,s=(s=a.keyword).toLowerCase(),(i=i.toLowerCase().substring(0,s.length))===s&&0!==s.length);var i,s})).map((function(a,e){return Object(N.jsx)(v,{name:a.cName,iso:a.iso},e)}));return Object(N.jsx)("div",{className:"search_result_div",children:Object(N.jsx)("table",{className:"search_result",children:e})})},y=function(){var a=i(26),e=Object(s.useState)(""),c=Object(j.a)(e,2),o=c[0],n=c[1],m=Object(s.useState)(""),t=Object(j.a)(m,2),r=t[0],d=t[1],u=Object(s.useState)(""),b=Object(j.a)(u,2),h=b[0],O=b[1];console.log(a.byCountry("United Kingdom"));return console.log(o),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"div_input",children:[Object(N.jsxs)("div",{className:"div_inputOnly",children:[Object(N.jsx)("input",{tabIndex:1,placeholder:"\uccab\ubc88\uc9f8 \uad6d\uac00\ub97c \uc785\ub825\ud558\uc138\uc694(\uc601\ubb38)",type:"text",className:"input_first",onChange:function(a){return n(a.target.value)}}),Object(N.jsx)(I,{keyword:o}),Object(N.jsx)("button",{type:"submit",className:"input_btn",onClick:function(){""!==o||""!==r?console.log("aa"):console.log("bb")},children:Object(N.jsx)(l.b,{})}),Object(N.jsx)("input",{tabIndex:2,placeholder:"\ub450\ubc88\uc9f8 \uad6d\uac00\ub97c \uc785\ub825\ud558\uc138\uc694(\uc601\ubb38)",type:"text",className:"input_last",onChange:function(a){return d(a.target.value)}}),Object(N.jsx)(I,{keyword:r})]}),Object(N.jsx)("div",{className:"Flag_div"}),Object(N.jsx)(p,{first:o,second:r}),Object(N.jsx)("div",{className:"div_info",children:Object(N.jsx)(S,{first:o,second:r})}),Object(N.jsxs)("div",{className:"div_select",children:[Object(N.jsx)("input",{type:"text",onChange:function(a){return O(a.target.value)},className:"option_input"}),Object(N.jsxs)("select",{children:[Object(N.jsx)("option",{value:"ny_gdp_pcap_cd",children:"1\uc778\ub2f9 GDP"}),Object(N.jsx)("option",{value:"fr_inr_lndp",children:"\uac00\uc0b0\uae08\ub9ac"}),Object(N.jsx)("option",{value:"cm_mkt_trad_cd",children:"\uac70\ub798 \uc8fc\uc2dd, \ucd1d \uae08\uc561"}),Object(N.jsx)("option",{value:"ms_mil_xpnd_zs",children:"\uad6d\ubc29\ube44"}),Object(N.jsx)("option",{value:"trade_current_us",children:"\ubb34\uc5ed\uc561 \uc9c0\uc218"}),Object(N.jsx)("option",{value:"st_int_rcpt_cd",children:"\uad6d\uc81c \uad00\uad11 \uc218\uc785"}),Object(N.jsx)("option",{value:"sp_dyn_le00_in",children:"\uae30\ub300\uc218\uba85"}),Object(N.jsx)("option",{value:"labor_force",children:"\ub178\ub3d9\ub825"}),Object(N.jsx)("option",{value:"sp_pop_totl",children:"\uc778\uad6c \uc218"})]})]}),Object(N.jsx)("div",{className:"div_graph",children:Object(N.jsx)(C,{iso1:o,iso2:r,_data:h})})]})})};i(70);var T=function(){return Object(N.jsxs)("div",{className:"compaaaare",children:[Object(N.jsx)(r,{}),Object(N.jsx)(y,{}),Object(N.jsx)(d,{})]})},B=function(a){var e=a.name;return Object(N.jsx)("div",{className:"table_main_info_div",children:Object(N.jsxs)("table",{className:"table_main_info",children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"\uad6d\uac00 \uc774\ub984"}),Object(N.jsx)("td",{children:e})]}),Object(N.jsx)("tr",{}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"\uad6d\uae30"}),Object(N.jsx)("td",{children:Object(N.jsx)(x,{name:e})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"\uc778\uad6c\uc218"}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:0,name:e})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"\uac80\uc0ac\uc790"}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:1,name:e})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"\ucd1d \uc0ac\ub9dd\uc790"}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:2,name:e})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"\ud604\uc81c \ud655\uc9c4\uc790"}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:3,name:e})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"\ucd1d \ud655\uc9c4\uc790"}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:4,name:e})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"\uaca9\ub9ac \ud574\uc81c"}),Object(N.jsx)("td",{children:Object(N.jsx)(b,{value:5,name:e})})]})]})})},f=(i(71),function(){var a=Object(s.useState)(""),e=Object(j.a)(a,2),c=e[0],o=e[1],n=i(26);console.log(n.byCountry(c));return Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"div_input2",children:[Object(N.jsx)("input",{tabIndex:1,placeholder:"\uad6d\uac00\ub97c \uc785\ub825\ud558\uc138\uc694(\uc601\ubb38)",type:"text",className:"input_first2",onChange:function(a){return o(a.target.value)}}),Object(N.jsx)("button",{type:"submit",className:"input_btn2",onClick:function(){},children:Object(N.jsx)(l.b,{})}),Object(N.jsx)(I,{keyword:c})]}),Object(N.jsx)("div",{className:"table_main_info_div",children:Object(N.jsx)("table",{className:"table_main_info",children:Object(N.jsx)(B,{name:c})})})]})});var P=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(r,{}),Object(N.jsx)(f,{}),Object(N.jsx)(d,{})]})},L=(i(72),i(31));var R=function(){var a=Object(s.useState)({cName:"Select Country",iso:"",val:"",pre:"",suff:""}),e=Object(j.a)(a,2),i=e[0],c=e[1];return Object(N.jsxs)("div",{className:"Map",children:[Object(N.jsx)(r,{}),Object(N.jsxs)("div",{className:"Main",children:[Object(N.jsx)(L.WorldMap,{title:"The ten highest GDP per capita countries",size:"xl",data:[{country:"cn",value:1389618778},{country:"in",value:1311559204},{country:"us",value:331883986},{country:"id",value:264935824},{country:"br",value:210301591},{country:"ng",value:208679114},{country:"ru",value:141944641},{country:"mx",value:127318112}],onClickFunction:function(a,e,i,s,o,n){var m=function(a,e){var i,s=[{value:1,symbol:""},{value:1e3,symbol:" thousand "},{value:1e6,symbol:" million "},{value:1e9,symbol:" billion "}];for(i=s.length-1;i>0&&!(a>=s[i].value);i--);return(a/s[i].value).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+s[i].symbol}(parseInt(s,10),2);return c({cName:e,iso:i,val:m,pre:"",suff:""}),Object(N.jsx)("div",{})},color:"red"}),Object(N.jsx)("div",{className:"world_map",children:Object(N.jsxs)("table",{children:[Object(N.jsx)("th",{children:"\ub098\ub77c \uc815\ubcf4"}),Object(N.jsx)("tr",{children:Object(N.jsxs)("td",{children:["Country: ",i.cName]})}),Object(N.jsx)("tr",{children:Object(N.jsxs)("td",{children:["Iso Code: ",i.iso]})}),Object(N.jsx)("tr",{children:Object(N.jsxs)("td",{children:["flag: ",Object(N.jsx)("img",{width:"100px",src:"https://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(i.iso,".svg"),alt:"test"})]})}),Object(N.jsx)("tr",{children:Object(N.jsx)("td",{children:Object(N.jsxs)("p",{children:["GDP per capita: ",i.val]})})})]})})]}),Object(N.jsx)("div",{children:Object(N.jsx)(d,{})})]})};var _=function(){return Object(N.jsx)("div",{className:"display",children:Object(N.jsx)(m.a,{children:Object(N.jsxs)(t.c,{children:[Object(N.jsx)(t.a,{path:"/Compare",component:T}),Object(N.jsx)(t.a,{path:"/Analysis",component:P}),Object(N.jsx)(t.a,{path:"/Map",component:R}),Object(N.jsx)(t.a,{path:"/",component:u}),Object(N.jsx)(t.a,{render:function(){return Object(N.jsx)("div",{className:"error",children:"\uc5d0\ub7ec \ud398\uc774\uc9c0"})}})]})})})},E=function(a){a&&a instanceof Function&&i.e(3).then(i.bind(null,85)).then((function(e){var i=e.getCLS,s=e.getFID,c=e.getFCP,o=e.getLCP,n=e.getTTFB;i(a),s(a),c(a),o(a),n(a)}))};n.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(_,{})}),document.getElementById("root")),E()}},[[84,1,2]]]);
//# sourceMappingURL=main.ee88b075.chunk.js.map