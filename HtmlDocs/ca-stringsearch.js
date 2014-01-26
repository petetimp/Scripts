/*jshint multistr:true */
var text="In JavaScript, there are two types of string data types: primitive strings and String objects. String objects have many methods for manipulating and parsing strings of text. Because these methods are available to primitive strings as well, in practice, there is no need to differentiate between the two types of strings. If you're feeling geeky, you can take a look at BuiltInObjects/Demos/stringsAndStrings.html, which compares primitive type strings to String objects.  Some common string properties and methods are shown below. In all the examples, the variable webucator is the string";

var myName=prompt("Please enter text for processing");
var hits=[];
var length=text.length;

for(i=0; i<length; i++){
    
    if(text[i]===myName[0]){
        var l=i;
        var letterCount=0;
    
        for (k=0; k<myName.length; k++){
            
            if (text[l]==myName[k]){
    
                letterCount=letterCount+1;
                alert("Found "+text[l]);
                alert("letterCount= "+letterCount);
                l++;
            }
        }
    
        if (letterCount==myName.length){
    
            for(j=i; j<(i+myName.length); j++){
            
                hits.push(text[j]);
            }
            
            hitsString=String(hits);
        }
    }   
}

if (hits.length===0){
    
    console.log("No matches were found.");
    
}else{
    
    console.log(hitsString);
    
}
