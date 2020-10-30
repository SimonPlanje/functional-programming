const deData = data;
console.log(data);

//DOORGEEFLUIK SCHONE ARRAYS>>
//fix empty strings
let dataList = fillEmptyStrings(deData);
console.log("cleandata", dataList);

let setToCaptial = bringAllToUpper(dataList);
console.log("alles naar captial", setToCaptial);

let whiteSpace = removeWhiteSpace(setToCaptial);
console.log("whitespace", whiteSpace)


let splitMultiples = splitMultipleAns(whiteSpace);
console.log("splitted data", splitMultiples);


//check politieke partij
// let checkpolitics = removeStupidAwnsers(whiteSpace);


//function for fixen empty strings
function fillEmptyStrings(data){
    let cleanData = [];

    data.forEach(function(value){
        
        if(value.politiekeVoorkeur.length < 2 || value.politiekeVoorkeur.length > 22 ) {
            cleanData.push("GEENVOORKEUR");
        }
        else{
            cleanData.push(value.politiekeVoorkeur);
        }
    })

    return cleanData;
}

function bringAllToUpper(data){
    let dataUpperCase = [];
    data.map(function(value){
        dataUpperCase.push(value.toUpperCase())
        })
        return dataUpperCase;    
    }

function removeWhiteSpace(data){
    let dataNoSpaces = [];
    data.map(function(value){
        dataNoSpaces.push(value.replace(/\s/g, ''))
//https://flaviocopes.com/how-to-replace-whitespace-javascript/#:~:text=The%20%5Cs%20meta%20character%20in,occurrence%20of%20the%20white%20space.
    })
    return dataNoSpaces;
}


function splitMultipleAns(data){
    let splittedData = [];
    data.map(function(value){
        splittedData.push(value.split("," || "." || ";"));
    })
    return splittedData;
}



// function bringAllToUpper(data){
//     data.forEach(function(value){
//         if(value.politiekeVoorkeur)
//     })
// }

// console.log("allesInCapital", toUpperKees);

// let oogkleuren = deData.map(function(data){
//     return data.oogKleur

// })

// console.log(oogkleuren)

// //Code voor een leeg vlak als geen voorkeur



// let partijen = deData.map(function(data){
//     return data.politiekeVoorkeur.toUpperCase();

// })
// console.log('dit zijn de gekozen politieken partijen ', partijen)


// function emptyToSpecificString(data) {
//     var cleanData = data.map(
//         x => {
//             return x.replace(//, 'Geen voorkeur')
//         });
//     return cleanData; 
// }


// const columnName = "politiekeVoorkeur";
// let partijen = getData(deData, columnName);
// let replaceEmpty = partijen(singleData)

// function getData(answers, question) {
//     let singleData = [];
//     for (answer of answers) {
//         singleData.push(answer[question]);
//     }
//     return singleData; // Array with all the data in the specific column
// };

// function replaceEmptySlots(arr) {
//     var cleanData = arr.map(
//         x => {
//             return x

//                 .replace("", 'geen keuze');

//         });





