# functional-programming
Welkom op mijn repository!
Hier ga ik de komende weken bijhouden wat ik leer over Functional programming terwijl ik werk aan een datavisualisatie in opdracht van de [Volkskrant](www.volkskrant.nl).  

Ik heb deze repository onderverdeeld in twee delen.  
SurveyData en RDW-Data

### Survey-data

Bij [Survey-Data](https://github.com/SimonPlanje/functional-programming/tree/main/surveyData) focus ik me op de basis van functional programming en pas de eerste functional patterns toe. Ik maak hier kolommen van een enquete data schoon, zodat deze gebruikt zouden kunnen worden met d3. Ik gebruik hiervoor higher order functions. Klik [hier](https://github.com/SimonPlanje/functional-programming/wiki/Fundamentals) om daar meer over te lezen.  

### RDW-data

Bij [RDW-data](https://github.com/SimonPlanje/functional-programming/tree/main/RDW-Data) ga ik meer in op het daadwerkelijk visualiseren van de data van de RDW dataset. Hiervoor moet de data eerst worden ingeladen via een API en de juiste kolommen moeten worden schoon gemaakt, om vervolgens met d3 hier de eerste visualisaties te gaan maken. Deze opdracht is vanuit de volkskrantn en hiervoor heb ik de volgende onderzoeksvraag opgesteld. 

## Onderzoeksvraag
>**Waar in Nederland kan het best worden geparkeerd om direct bij een wandel- of fietsroute uit te komen?**  
> (Hoe kan je tijdens de corona crisis een leuk dagje uit met de auto en natuur?)

## Subvragen
* Waar lopen de wandelroutes door Nederland?
* Welke parkeerplaatsen liggen dichtbij wandelroutes?
* Bij welke parkeerplaatsen moet je betalen tijdens het wandelen?
* Bij welke parkeerplaatsen kunnen er invaliden mee met de wandeling?
* Bij welke parkeerplaatsen kan de elektrische auto worden opgeladen?
* Bij welke wandelroutes is de lucht het schoonst?

## Datasets
Om deze data te kunnen visualiseren heb ik uit de RDW data de data nodig die precies laat zien waar alle parkeerplaatsen zijn door heel Nederland.
Geokaart van alle parkeergarages

Ook heb ik een externe dataset nodig die de wandel- en fietsroutes laat zien door heel Nederland. Dit ga ik doen met de data van de Routedatabank, deze data is alleen niet voor iedereen beschikbaar en moet worden aangevraagd. Dit heb ik gedaan en ik wacht nog op reactie.

## Visualisatie
Het idee voor de visualisatie is een geografische kaart waar de parkeerplaatsen worden weergegeven waar je het best naartoe kan gaan om te gaan hardlopen of fietsen. Er kan op meerdere variabelen worden gefilterd. Ook zou een overzicht van welke wandelroutes en parkeerplaatsen de meeste luchtvervuiling hebben. Ook kan er worden gefilterd op of de parkeerplaats betaald of niet mag zijn. Ook zou de bezetting van de parkeerplaats erbij kunnen om aan te geven of er vaak plek is of niet. Er is in ieder geval genoeg interessante parkeerdata om aan de wandeldata toe te voegen.

Kijk in de [Wiki](https://github.com/SimonPlanje/functional-programming/wiki/Debrief) om de volledige debriefing te lezen van de opdracht en de onderzoeksvraag.