/***********While Loop***********/
// var haystack = 'hello',
//     needle = 'e';
    
//     console.log(haystack.length);
    
// function remove (needle, haystack) {
//     var i = 0;
    
//     newhaystack = haystack.split("");
//     while (i < newhaystack.length) {
//         if (newhaystack[i] === needle) {
//             newhaystack.splice(i, 1);
//         }
//         i = i + 1;
//     };
//     return newhaystack.join("");
    
// }

// console.log(remove(needle, haystack));
// console.log(remove(needle, haystack));

/*********For Loop********/
// var haystack = 'hello',
//     needle = 'e';
    
//     console.log(haystack.length);
    
// function remove (needle, haystack) {
//     newhaystack = haystack.split("");

//     for (let i = 0; i < newhaystack.length; i = i + 1) {
//         if (newhaystack[i] === needle) {
//             newhaystack.splice(i, 1);
//         }
//     };
//     return newhaystack.join("");
// }

// console.log(remove(needle, haystack));
// console.log(remove(needle, haystack));

/*For Loop for a whole word*/
var haystack = 'Hello WSPAM!orld',
    needle = 'SPAM!';
    
    //console.log(haystack.length);
    
function remove (needle, haystack) {
    let newhaystack = haystack.split("");

    for (let i = 0; i < newhaystack.length; i = i + 1) {
        let check = newhaystack.slice(i,i + needle.length);

        if (check.join('') === needle) {
            newhaystack.splice(i, needle.length);
        }
    };
    return newhaystack.join("");
}
console.log(remove(needle, haystack));
console.log(remove(needle, haystack));