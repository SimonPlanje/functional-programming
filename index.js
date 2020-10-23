const deData = data;
console.log(data);

//fix empty strings
let dataList = fillEmptyStrings(deData);

function fillEmptyStrings(data){
    let cleanData = [];

    data.forEach(function(value){
        if(value.politiekeVoorkeur.length < 3){
            console.log(value.politiekeVoorkeur.length);
            cleanData.push("GEEN VOORKEUR");
        }else{
            cleanData.push(value.politiekeVoorkeur);
        }
    })
    console.log("dit is de nieuwe array", cleanData)
}


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





