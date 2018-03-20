//create array of trolls for easy access
var arr = [
  {
    "name": "Aradia",
    "handle": "apocalypseArisen",
    "abbr": "[AA]",
    "color": "#a10000"
  },
  {
    "name": "Tavros",
    "handle": "adiosToreador",
    "abbr": "[AT]",
    "color": "#a15000"
  },
  {
    "name": "Sollux",
    "handle": "twinArmageddons",
    "abbr": "[TA]",
    "color": "#a1a100"
  },
  {
    "name": "Karkat",
    "handle": "carcinoGeneticist",
    "abbr": "[CG]",
    "color": "#626262"
  },
  {
    "name": "Nepeta",
    "handle": "arsenicCatnip",
    "abbr": "[AC]",
    "color": "#416600",
  },
  {
    "name": "Kanaya",
    "handle": "grimAuxiliatrix",
    "abbr": "[GA]",
    "color": "#008141",
  },
  {
    "name": "Terezi",
    "handle": "gallowsCalibrator",
    "abbr": "[GC]",
    "color": "#008282",
  },
  {
    "name": "Vriska",
    "handle": "arachnidsGrip",
    "abbr": "[AG]",
    "color": "#005682",
  },
  {
    "name": "Equius",
    "handle": "centaursTesticle",
    "abbr": "[CT]",
    "color": "#000056",
  },
  {
    "name": "Gamzee",
    "handle": "terminallyCapricious",
    "abbr": "[TC]",
    "color": "#2b0057",
  },
  {
    "name": "Eridan",
    "handle": "caligulasAquarium",
    "abbr": "[CA]",
    "color": "#6a006a",
  },
  {
    "name": "Feferi",
    "handle": "cuttlefishCuller",
    "abbr": "[CC]",
    "color": "#77003c",
  }
];

//find spans by style color and send them to the dequirk function
$("span").filter(function() {

  for(var i = 0; i < arr.length; i++) {
    if(findSpan(this, arr[i].color) !== -1) {
      return dequirk(this, i+1);
    }
  }

});


function findSpan(span, color) {
  return $(span).attr("style").indexOf(color);
}

function dequirk(text, index) {
  var temp;

  //exclude handles from queries
  if($(text).html() !== arr[index-1].abbr || $(text).html() !== arr[index-1].handle) {
    switch(index) {
     case 1:
      //for Aradia
        temp = $(text).html().replace(/0/g, "o");
        $(text).html(temp);
        break;

      case 2:
      //for Tavros
        if($(text).html().slice(0,4) !== "[AT]") {
          temp = $(text).html().slice(4).toLowerCase();
          $(text).html("AT: " + temp);
        }
        break;

      case 3:
      //for Sollux
        temp = $(text).html().replace(/i{2}/g, 'i').replace(/2/g, "s");
        $(text).html(temp);
        break;

      case 5:
      //for Nepeta
        temp = $(text).html().replace(/33/g, 'ee').replace(/:ee/g, ":33").replace(/</, "");
        $(text).html(temp);
        break;

      case 6:
      //for Kanaya
	  //Kanaya is currently experiencing issues; bypass code  
      /*  temp = $(text).html().toLowerCase();
        if(temp.length > 4) {
          temp = "GA: " + temp.substr(4).replace(/\b[a-z](?=\w+)/, temp.substr(4,1).toUpperCase());
        }
        $(text).html(temp); */
        break; 

      case 7:
      //for Terezi
        temp = $(text).html().replace(/4/g, "A").replace(/3/g, "E").replace(/1/g, "I");
        $(text).html(temp);
        break;

      case 9:
      //for Equius
        //note: the percentage replacement will not be perfect due the nature of its usage
        temp = $(text).html().replace(/100/g, "loo").replace(/001/g, "ool").replace(/%/g, "x");
        $(text).html(temp);
        break;

      case 10:
      //for Gamzee
        //for the future: make a check to see if he's typing lIkE tHiS and change it
        //so his text later on doesn't lose its impact
        temp = $(text).html().toLowerCase();
        $(text).html(temp);
        break;

      case 11:
      //for Eridan
        temp = $(text).html().replace(/vv/g, "v").replace(/VV/g, "V").replace(/ww/g, "w").replace(/WW/g, "W");
        $(text).html(temp);
        break;

      case 12:
      //for Feferi
        temp = $(text).html().replace(/\)\(/g, "h").replace(/-+E/g, "E");

        //excludes handle from queries, checks if word is uppercase
        temp = temp.replace(/h(?=[A-Z])|(?<=\b\w+[A-Z])h/g, "H");

        $(text).html(temp);
        break;
      }
  }

}
