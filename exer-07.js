//stage1

let name = ["j","o","h","n"];

for(let i=0; i<name.length; i++){
    console.log(name[i]);
}

//stage2

let name = ['j','o','3','h','n','a','10'];

for(let i=0; i<name.length; i++){
    if(name[i]=='a' || name[i]=='e' || name[i]=='i' || name[i]=='o' || name[i]=='u') {
        console.log("I've found a vowel: " + name[i]);
    } 
    else if (Number.isInteger(Number(name[i]))) {
        console.log("Names of persons don't have numbers: " + name[i]);
    } else {
        console.log("I've found a consonant: " + name[i]);
    }
}

//stage3

let name = ['j','o','3','h','n','o','10','j', 'o'];
let nameMap = new Map();

for(let i=0; i<name.length; i++){
    if(nameMap.has(name[i])){
        nameMap.set(name[i], nameMap.get(name[i])+1);
    } else {
        nameMap.set(name[i], 1);
    }
}

console.log(nameMap);

//stage4
let name = ['j','o','h','n'];
let surname = ['d','o','e'];
let fullName = [];

for(j=0; j<name.length; j++){
    fullName.push(name[j]);    
}
fullName.push(' ');
for(k=0; k<surname.length; k++){
    fullName.push(surname[k]);    
}

console.log(fullName);
