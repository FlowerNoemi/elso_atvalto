var volumeInput = document.getElementById('volumeInput');
var volumeSelector1 = document.getElementById('volumeSelector1');
var volumeSelector2 = document.getElementById('volumeSelector2');
var resultVolume = document.getElementById('resultVolume');

var lengthInput = document.getElementById('lengthInput');
var lengthSelector1 = document.getElementById('lengthSelector1');
var lengthSelector2 = document.getElementById('lengthSelector2');
var resultLength = document.getElementById('resultLength');


var weightInput = document.getElementById('weightInput');
var weightSelector1 = document.getElementById('weightSelector1');
var weightSelector2 = document.getElementById('weightSelector2');
var resultWeight = document.getElementById('resultWeight');

 function szamolVolume() {
   var volumeValue = parseFloat(volumeInput.value); 
   var resultVolumeValue;
    if ((isNaN(volumeValue))) {
        resultVolume.innerHTML = '<p>Nincs eredmény</p>';
    } else if ((volumeSelector1.value == 'liter') && (volumeSelector2.value == 'liter') ) {
        resultVolume.innerHTML = '<p>'+ volumeValue +' l</p>';
    } else if ((volumeSelector1.value == 'mililiter') && (volumeSelector2.value == 'mililiter') ) {
        resultVolume.innerHTML = '<p>'+ volumeValue +' ml</p>';
    } else if ((volumeSelector1.value == 'gallon') && (volumeSelector2.value == 'gallon') ) {
        resultVolume.innerHTML = '<p>'+ volumeValue +' gal</p>';
    } else if ((volumeSelector1.value == 'pint') && (volumeSelector2.value == 'pint') ) {
        resultVolume.innerHTML = '<p>'+ volumeValue +' pt</p>';
    }  else if ((volumeSelector1.value == 'liter') && (volumeSelector2.value == 'mililiter') ){
        resultVolumeValue = volumeValue * 1000;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' ml</p>';   
    } else if ((volumeSelector1.value == 'mililiter') && (volumeSelector2.value == 'liter') ){
        resultVolumeValue = volumeValue / 1000;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' l</p>';  
    }  else if ((volumeSelector1.value == 'liter') && (volumeSelector2.value == 'gallon') ){
        resultVolumeValue = volumeValue * 0.21997;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' gal</p>';   
    } else if ((volumeSelector1.value == 'gallon') && (volumeSelector2.value == 'liter') ){
        resultVolumeValue = volumeValue * 4.5461;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' l</p>';  
    }  else if ((volumeSelector1.value == 'liter') && (volumeSelector2.value == 'pint') ){
        resultVolumeValue = volumeValue * 1.75975;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' pt</p>';   
    } else if ((volumeSelector1.value == 'pint') && (volumeSelector2.value == 'liter') ){
        resultVolumeValue = volumeValue * 0.56826;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' l</p>'; 
    } else if ((volumeSelector1.value == 'mililiter') && (volumeSelector2.value == 'gallon') ){
        resultVolumeValue = volumeValue * 0.00022;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' gal</p>';  
    }  else if ((volumeSelector1.value == 'gallon') && (volumeSelector2.value == 'mililiter') ){
        resultVolumeValue = volumeValue * 4546;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' ml</p>';   
    } else if ((volumeSelector1.value == 'mililiter') && (volumeSelector2.value == 'pint') ){
        resultVolumeValue = volumeValue * 0.002;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' pt</p>';  
    }  else if ((volumeSelector1.value == 'pint') && (volumeSelector2.value == 'mililiter') ){
        resultVolumeValue = volumeValue * 568;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' ml</p>';   
    } else if ((volumeSelector1.value == 'gallon') && (volumeSelector2.value == 'pint') ){
        resultVolumeValue = volumeValue * 8;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' pt</p>';  
    }  else if ((volumeSelector1.value == 'pint') && (volumeSelector2.value == 'gallon') ){
        resultVolumeValue = volumeValue * 0.125;
        resultVolume.innerHTML = '<p>'+ resultVolumeValue +' gal</p>';     
}}


volumeInput.oninput = function () { 
    szamolVolume();
}

volumeSelector1.oninput = function () { 
    szamolVolume();
}

volumeSelector2.oninput = function () { 
    szamolVolume();
}



function szamolLength() {
    var lengthValue = parseFloat(lengthInput.value); 
    var resultlengthValue;
     if ((isNaN(lengthValue))) {
        resultLength.innerHTML = '<p>Nincs eredmény</p>';
     } else if ((lengthSelector1.value == 'kilometer') && (lengthSelector2.value == 'kilometer') ) {
        resultLength.innerHTML = '<p>'+ lengthValue +' km</p>';
     } else if ((lengthSelector1.value == 'meter') && (lengthSelector2.value == 'meter') ) {
        resultLength.innerHTML = '<p>'+ lengthValue +' m</p>';
     } else if ((lengthSelector1.value == 'decimeter') && (lengthSelector2.value == 'decimeter') ) {
        resultLength.innerHTML = '<p>'+ lengthValue +' dm</p>';
     } else if ((lengthSelector1.value == 'centimeter') && (lengthSelector2.value == 'centimeter') ) {
        resultLength.innerHTML = '<p>'+ lengthValue +' cm</p>';
     }  else if ((lengthSelector1.value == 'kilometer') && (lengthSelector2.value == 'meter') ){
        resultlengthValue = lengthValue * 1000;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' m</p>';   
     } else if ((lengthSelector1.value == 'meter') && (lengthSelector2.value == 'kilometer') ){
        resultlengthValue = lengthValue / 1000;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' km</p>';  
     }  else if ((lengthSelector1.value == 'kilometer') && (lengthSelector2.value == 'decimeter') ){
        resultlengthValue = lengthValue * 10000;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' dm</p>';   
     } else if ((lengthSelector1.value == 'decimeter') && (lengthSelector2.value == 'kilometer') ){
        resultlengthValue = lengthValue / 10000;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' km</p>';  
     }  else if ((lengthSelector1.value == 'kilometer') && (lengthSelector2.value == 'centimeter') ){
        resultlengthValue = lengthValue * 100000;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' cm</p>';   
     } else if ((lengthSelector1.value == 'centimeter') && (lengthSelector2.value == 'kilometer') ){
        resultlengthValue = lengthValue / 100000;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' cm</p>'; 
     } else if ((lengthSelector1.value == 'meter') && (lengthSelector2.value == 'decimeter') ){
        resultlengthValue = lengthValue * 10;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' dm</p>';  
     }  else if ((lengthSelector1.value == 'decimeter') && (lengthSelector2.value == 'meter') ){
        resultlengthValue = lengthValue / 10;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' m</p>';   
     } else if ((lengthSelector1.value == 'meter') && (lengthSelector2.value == 'centimeter') ){
        resultlengthValue = lengthValue * 100;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' cm</p>';  
     }  else if ((lengthSelector1.value == 'centimeter') && (lengthSelector2.value == 'meter') ){
        resultlengthValue = lengthValue / 100;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' m</p>';   
     } else if ((lengthSelector1.value == 'decimeter') && (lengthSelector2.value == 'centimeter') ){
        resultlengthValue = lengthValue * 10;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' cm</p>';  
     }  else if ((lengthSelector1.value == 'centimeter') && (lengthSelector2.value == 'decimeter') ){
        resultlengthValue = lengthValue / 10;
        resultLength.innerHTML = '<p>'+ resultlengthValue +' dm</p>';     
 }}


lengthInput.oninput = function () { 
    szamolLength();
}

lengthSelector1.oninput = function () { 
    szamolLength();
}

lengthSelector2.oninput = function () { 
    szamolLength();
}



function szamolWeight() {
    var weightValue = parseFloat(weightInput.value); 
    var resultWeightValue;
     if ((isNaN(weightValue))) {
        resultWeight.innerHTML = '<p>Nincs eredmény</p>';
     } else if ((weightSelector1.value == 'kilogramm') && (weightSelector2.value == 'kilogramm') ) {
        resultWeight.innerHTML = '<p>'+ weightValue +' kg</p>';
     } else if ((weightSelector1.value == 'gramm') && (weightSelector2.value == 'gramm') ) {
        resultWeight.innerHTML = '<p>'+ weightValue +' g</p>';
     } else if ((weightSelector1.value == 'centigramm') && (weightSelector2.value == 'centigramm') ) {
        resultWeight.innerHTML = '<p>'+ weightValue +' cg</p>';
     } else if ((weightSelector1.value == 'milligramm') && (weightSelector2.value == 'milligramm') ) {
        resultWeight.innerHTML = '<p>'+ weightValue +' mg</p>';
     }  else if ((weightSelector1.value == 'kilogramm') && (weightSelector2.value == 'gramm') ){
        resultWeightValue = weightValue * 1000;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' g</p>';   
     } else if ((weightSelector1.value == 'gramm') && (weightSelector2.value == 'kilogramm') ){
        resultWeightValue = weightValue / 1000;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' kg</p>';  
     }  else if ((weightSelector1.value == 'kilogramm') && (weightSelector2.value == 'centigramm') ){
        resultWeightValue = weightValue * 100000;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' cg</p>';   
     } else if ((weightSelector1.value == 'centigramm') && (weightSelector2.value == 'kilogramm') ){
        resultWeightValue = weightValue / 100000;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' kg</p>';  
     }  else if ((weightSelector1.value == 'kilogramm') && (weightSelector2.value == 'milligramm') ){
        resultWeightValue = weightValue * 1000000;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' mg</p>';   
     } else if ((weightSelector1.value == 'milligramm') && (weightSelector2.value == 'kilogramm') ){
        resultWeightValue = weightValue / 1000000;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' kg</p>'; 
     } else if ((weightSelector1.value == 'gramm') && (weightSelector2.value == 'centigramm') ){
        resultWeightValue = weightValue * 100;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' cg</p>';  
     }  else if ((weightSelector1.value == 'centigramm') && (weightSelector2.value == 'gramm') ){
        resultWeightValue = weightValue / 100;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' g</p>';   
     } else if ((weightSelector1.value == 'gramm') && (weightSelector2.value == 'milligramm') ){
        resultWeightValue = weightValue * 1000;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' mg</p>';  
     }  else if ((weightSelector1.value == 'milligramm') && (weightSelector2.value == 'gramm') ){
        resultWeightValue = weightValue / 1000;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' g</p>';   
     } else if ((weightSelector1.value == 'centigramm') && (weightSelector2.value == 'milligramm') ){
        resultWeightValue = weightValue * 10;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' mg</p>';  
     }  else if ((weightSelector1.value == 'milligramm') && (weightSelector2.value == 'centigramm') ){
        resultWeightValue = weightValue / 10;
        resultWeight.innerHTML = '<p>'+ resultWeightValue +' cg</p>';     
 }}


 weightInput.oninput = function () { 
    szamolWeight();
}

weightSelector1.oninput = function () { 
    szamolWeight();
}

weightSelector2.oninput = function () { 
    szamolWeight();
}