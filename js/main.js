var haystack = 'hello',
    needle = 'e';
    
    console.log(haystack.length);
    
function remove (needle, haystack) {
    var i = 0;
    
    newhaystack = haystack.split("");
    while (i < newhaystack.length) {
        if (newhaystack[i] === needle) {
            newhaystack.splice(i, 1);
        }
        i = i + 1;
    };
    return newhaystack.join("");
    
}

console.log(remove(needle, haystack));
console.log(remove(needle, haystack));