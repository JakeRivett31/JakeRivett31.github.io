document.getElementById("countryInputButton").onclick = clicked;


var countries = ["Syria","Zimbabwe","Madagascar","Sierra Leone","Nigeria","Suriname","Guinea-Bissau","Sao Tome and Principe","South Sudan","Burundi","Democratic Republic of the Congo","Swaziland","Central African Republic","Guatemala","Haiti","Lesotho","Togo","Afghanistan","Zambia","Liberia","Yemen","Malawi","Eritrea","The Gambia", "Guinea","Chad","Senegal","Sudan","Republic of the Congo","Cote d'Ivoire","Mexico","Mozambique","Niger","Comoros","Equatorial Guinea","East Timor","Belize","Burkina Faso","Seychelles","Rwanda","Bolivia","Grenada","Papua New Guinea","Angola","Benin","Mali","Kenya","Greece","Guyana","Gabon","El Salvador","Kyrgyzstan","Armenia","Tajikistan","Fiji","Mauritania","Dominican Republic","Cameroon","Gaza Strip","Cape Verde","Italy","Mongolia","Nicaragua","Honduras","Ethiopia","Pakistan","Dominica","Virgin Islands","Namibia","Lebanon","Colombia","Egypt","Federated States of Micronesia","Tuvalu","Argentina","Burma","Latvia","Nepal","Palau","Bangladesh","Ghana","Bulgaria","Anguilla","Algeria","Guam","Djibouti","Panama","Iraq","Tanzania","Peru","Tonga","Romania","Paraguay","Lithuania","Israel","Laos","India","Turkey","Costa Rica","Philippines","Macedonia","Ecuador","Uganda","Estonia","Spain","Trinidad and Tobago","Hong Kong","French Polynesia","Venezuela","United Arab Emirates","Croatia","Botswana","Portugal","Iran","West Bank","Kosovo","Poland","Jamaica","New Caledonia","Bosnia and Herzegovina","Germany","South Africa","Malta","Greenland","Japan","Tunisia","United States","Belgium","Maldives","Sweden","United Kingdom","Hungary","Chile","South Korea","Albania","France","Jordan","Uzbekistan","Slovenia","Denmark","Russia","Slovakia","Bhutan","Bermuda","Indonesia","Faroe Islands","Czech Republic","Uruguay","Moldova","Canada","The Bahamas","Georgia","Serbia","Netherlands","Montenegro","Ireland","Mauritius","Vietnam","Thailand","Sri Lanka","Switzerland","Belarus","Azerbaijan","Brazil","Malaysia","Ukraine","China","Austria","Kazakhstan","Taiwan","Turkmenistan"]

var percentBelowPovertyLine = [82.5,72.3,70.7,70.2,70,70,67,66.2,66,64.6,63,63,62,59.3,58.5,57,55.1,54.5,54.4,54.1,54,50.7,50,48.4,47,46.7,46.7,46.5,46.5,46.3,46.2,46.1,45.4,44.8,44,41.8,41,40.1,39.3,39.1,38.6,38,37,36.6,36.2,36.1,36.1,36,35,34.3,32.7,32.1,32,31.5,31,31,30.5,30,30,30,29.9,29.6,29.6,29.6,29.6,29.5,29,28.9,28.7,28.6,28,27.8,26.7,26.3,25.7,25.6,25.5,25.2,24.9,24.3,24.2,23.4,23,23,23,23,23,23,22.8,22.7,22.5,22.4,22.2,22.2,22,22,21.9,21.9,21.7,21.6,21.5,21.5,21.4,21.1,21.1,20,19.9,19.7,19.7,19.5,19.5,19.3,19,18.7,18,17.6,17.6,17.1,17,16.9,16.7,16.6,16.5,16.3,16.2,16.1,15.5,15.1,15.1,15,15,15,15,14.9,14.4,14.4,14.3,14.2,14.2,14,13.9,13.4,13.3,12.3,12,11,10.9,10,9.7,9.7,9.6,9.4,9.3,9.2,8.9,8.8,8.6,8.2,8,8,7.2,6.7,6.6,5.7,4.9,4.2,3.8,3.8,3.3,3,2.6,1.5,0.2]


function clicked() {
	var value = document.getElementById("countryInputBox").value.toLowerCase()
	console.log(value);

	for(i = 0; i < countries.length; i = i + 1) {
		if (value === countries[i]) {
			console.log("Yes")
		}
	}
}



//BIG IDEA: USING DOM TO ACCESS ELEMENTS
document.getElementById("countryInputButton").onclick = clicked;



//BIG IDEA: FUNCTIONS - LINKS TO OTHER LANGUAGES
function clicked() {


//BIG IDEA VARIABLES - LINKS TO OTHER LANGUAGES
var value = document.getElementById("countryInputBox").value

//BIG IDEA LOOPS - LINKS TO OTHER LANGUAGES
for (i = 0; i < countries.length; i = i + 1) {
//BIG IDEA CONDITIONAL STATEMENTS - LINKS TO OTHER LANGUAGES
	if (value === countries[i]) {
//print out the population
		console.log(percentBelowPovertyLine[i]+"% of "+value+"'s population is below the International Poverty Line");
		document.getElementById("results").innerHTML = (percentBelowPovertyLine[i]+"% of "+value+"'s population is below the International Poverty Line");
		}
	}
}





/*
1	Syria	82.5	
2	Zimbabwe	72.3	
3	Madagascar	70.7	
4	Sierra Leone	70.2	
5	Nigeria	70	
6	Suriname	70	
7	Guinea-Bissau	67	
8	Sao Tome and Principe	66.2	
9	South Sudan	66	
10	Burundi	64.6	
11	Congo, Democratic Republic of the	63	
12	Swaziland	63	
13	Central African Republic	62	
14	Guatemala	59.3	
15	Haiti	58.5	
16	Lesotho	57	
17	Togo	55.1	
18	Afghanistan	54.5	
19	Zambia	54.4	
20	Liberia	54.1	
21	Yemen	54	
22	Malawi	50.7	
23	Eritrea	50	
24	Gambia, The	48.4	
25	Guinea	47	
26	Chad	46.7	
27	Senegal	46.7	
28	Sudan	46.5	
29	Congo, Republic of the	46.5	
30	Cote d'Ivoire	46.3	
31	Mexico	46.2	
32	Mozambique	46.1	
33	Niger	45.4	
34	Comoros	44.8	
35	Equatorial Guinea	44	
36	East Timor	41.8	
37	Belize	41	
38	Burkina Faso	40.1	
39	Seychelles	39.3	
40	Rwanda	39.1	
41	Bolivia	38.6	
42	Grenada	38	
43	Papua New Guinea	37	
44	Angola	36.6	
45	Benin	36.2	
46	Mali	36.1	
47	Kenya	36.1	
48	Greece	36	
49	Guyana	35	
50	Gabon	34.3	
51	El Salvador	32.7	
52	Kyrgyzstan	32.1	
53	Armenia	32	
54	Tajikistan	31.5	
55	Fiji	31	
56	Mauritania	31	
57	Dominican Republic	30.5	
58	Cameroon	30	
59	Gaza Strip	30	
60	Cape Verde	30	
61	Italy	29.9	
62	Mongolia	29.6	
63	Nicaragua	29.6	
64	Honduras	29.6	
65	Ethiopia	29.6	
66	Pakistan	29.5	
67	Dominica	29	
68	Virgin Islands	28.9	
69	Namibia	28.7	
70	Lebanon	28.6	
71	Colombia	28	
72	Egypt	27.8	
73	Micronesia, Federated States of	26.7	
74	Tuvalu	26.3	
75	Argentina	25.7	
76	Burma	25.6	
77	Latvia	25.5	
78	Nepal	25.2	
79	Palau	24.9	
80	Bangladesh	24.3	
81	Ghana	24.2	
82	Bulgaria	23.4	
83	Anguilla	23	
84	Algeria	23	
85	Guam	23	
86	Djibouti	23	
87	Panama	23	
88	Iraq	23	
89	Tanzania	22.8	
90	Peru	22.7	
91	Tonga	22.5	
92	Romania	22.4	
93	Paraguay	22.2	
94	Lithuania	22.2	
95	Israel	22	
96	Laos	22	
97	India	21.9	
98	Turkey	21.9	
99	Costa Rica	21.7	
100	Philippines	21.6	
101	Macedonia	21.5	
102	Ecuador	21.5	
103	Uganda	21.4	
104	Estonia	21.1	
105	Spain	21.1	
106	Trinidad and Tobago	20	
107	Hong Kong	19.9	
108	French Polynesia	19.7	
109	Venezuela	19.7	
110	United Arab Emirates	19.5	
111	Croatia	19.5	
112	Botswana	19.3	
113	Portugal	19	
114	Iran	18.7	
115	West Bank	18	
116	Kosovo	17.6	
117	Poland	17.6	
118	Jamaica	17.1	
119	New Caledonia	17	
120	Bosnia and Herzegovina	16.9	
121	Germany	16.7	
122	South Africa	16.6	
123	Cambodia	16.5	
124	Malta	16.3	
125	Greenland	16.2	
126	Japan	16.1	
127	Tunisia	15.5	
128	United States	15.1	
129	Belgium	15.1	
130	Maldives	15	
131	Morocco	15	
132	Sweden	15	
133	United Kingdom	15	
134	Hungary	14.9	
135	Chile	14.4	
136	Korea, South	14.4	
137	Albania	14.3	
138	France	14.2	
139	Jordan	14.2	
140	Uzbekistan	14	
141	Slovenia	13.9	
142	Denmark	13.4	
143	Russia	13.3	
144	Slovakia	12.3	
145	Bhutan	12	
146	Bermuda	11	
147	Indonesia	10.9	
148	Faroe Islands	10	
149	Czech Republic	9.7	
150	Uruguay	9.7	
151	Moldova	9.6	
152	Canada	9.4	
153	Bahamas, The	9.3	
154	Georgia	9.2	
155	Serbia	8.9	
156	Netherlands	8.8	
157	Montenegro	8.6	
158	Ireland	8.2	
159	Mauritius	8	
160	Vietnam	8	
161	Thailand	7.2	
162	Sri Lanka	6.7	
163	Switzerland	6.6	
164	Belarus	5.7	
165	Azerbaijan	4.9	
166	Brazil	4.2	
167	Malaysia	3.8	
168	Ukraine	3.8	
169	China	3.3	
170	Austria	3	
171	Kazakhstan	2.6	
172	Taiwan	1.5	
173	Turkmenistan 0.2
*/