var solutions = ["Bez pracy nie ma kołaczy", "Dzielić włos na czworo", "Apetyt rośnie w miarę jedzenia", "Biednemu zawsze wiatr w oczy", "Być kulą u nogi", "Cel uświęca środki", "Jak sobie pościelesz tak się wyśpisz", "Jedna jaskółka wiosny nie czyni", "Kłamstwo ma krótkie nogi", "Nie ma dymu bez ognia", "Nieszczęścia chodzą parami", "Szukać igły w stogu siana", "Trafić z deszczu pod rynnę", "Wyszło szydło z worka", "Złego diabli nie biorą", "Z pustego i Salomon nie naleje", "Żeby kózka nie skakała, to by nóżki nie złamała", "Od przybytku głowa nie boli", "Pierwsze koty za płoty"];


var solution = solutions[Math.floor(Math.random() * solutions.length)];

solution = solution.toUpperCase();

var long = solution.length;
var faults = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var solution1 = "";

for (i = 0; i < long; i++) {
    if (solution.charAt(i) == " ") solution1 = solution1 + " ";
    else solution1 = solution1 + "-";
}

function write_solution() {
    document.getElementById("board").innerHTML = solution1;
}

window.onload = start;

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";


function start() {

    var indiv = "";

    for (i = 0; i < 35; i++) {
        var element = "lit" + i;
        indiv = indiv + '<div class="letter" onclick="check(' + i + ')" id="'+element+'">'+letters[i]+'</div>';
        if ((i+1) % 7 == 0)  indiv = indiv + '<div style="clear:both;"></div>'
    }
    document.getElementById("alphabet").innerHTML = indiv;

    write_solution();
}

String.prototype.setmark = function(place, mark)
{
	if (place > this.length - 1) return this.toString();
	else return this.substr(0, place) + mark + this.substr(place+1);
}


function check(nr) {

	var correct = false;
	
	for(i=0; i <long; i++)
	{
		if (solution.charAt(i) == letters[nr]) 
		{
			solution1 = solution1.setmark(i,letters[nr]);
			correct = true;
		}
	}
	
	if(correct == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		write_solution();
	}
    
	else
        
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//dead
		faults++;
		var image = "img/s"+ faults + ".jpg";
		document.getElementById("gibbet").innerHTML = '<img src="'+image+'" alt="" >';
	}
	
	//win
	if (solution == solution1)
	document.getElementById("alphabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+solution+'<br><br><span style="cursor:pointer"; class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	
	//lose
	if (faults >= 9)
	document.getElementById("alphabet").innerHTML  = '<span class="lose"> Przegrana! Prawidłowe hasło: </span>'+solution+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}
