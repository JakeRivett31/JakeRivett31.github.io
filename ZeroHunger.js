var countries = ["Yemen","Brazil","Russia","North Korea","China","Nepal"]

var GlobalHungerIndex = [45.9,5.3,5.8,27.7,6.5,20.8]





//BIG IDEA: USING DOM TO ACCESS ELEMENTS
document.getElementById("HungercountryInputButton").onclick = clicked;



//BIG IDEA: FUNCTIONS - LINKS TO OTHER LANGUAGES
function clicked() {


//BIG IDEA VARIABLES - LINKS TO OTHER LANGUAGES
var value = document.getElementById("HungercountryInputBox").value

//BIG IDEA LOOPS - LINKS TO OTHER LANGUAGES
for (i = 0; i < countries.length; i = i + 1) {
//BIG IDEA CONDITIONAL STATEMENTS - LINKS TO OTHER LANGUAGES
	if (value === countries[i]) {
//print out the population
		console.log(countries[i]+" has a Global Hunger Index (GHI) of "+GlobalHungerIndex[i]);
		document.getElementById("Hungerresults").innerHTML = (countries[i]+" has a Global Hunger Index (GHI) of "+GlobalHungerIndex[i]);
		}
    if (value != countries[i]) {
        console.log("Data for the Country you inputted is not available. Available Countries include Yemen, Brazil, Russia, North Korea, China, and Nepal. Please reload the page and try again.");
		document.getElementById("Hungerresults").innerHTML = ("Data for the Country you inputted is not available. Available Countries include Yemen, Brazil, Russia, North Korea, China, and Nepal. Please reload the page and try again.");
    }
	}
}
