let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

let arrayDomains = [];

for(var i = 0; i < pronoun.length; i++)
{
     for(var j = 0; j < adj.length; j++)
     {
        //you would access the element of the array as array1[i] and array2[j]
        //create and array with as many elements as the number of arrays you are to combine
        //add them in
        //you could have as many dimensions as you need
         for (var k = 0; k < noun.length; k++) {
            arrayDomains.push(pronoun[i] + adj[j] + noun[k])
         }
     }
}

console.log(arrayDomains);