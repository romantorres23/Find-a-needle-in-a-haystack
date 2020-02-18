/**
 * Removes the needle from the haystack
 */
function remove(needle, haystack) {
  // Turn Haystack into an array
  let arr = haystack.split('');
  
  // Go through the whole array
  for (let i = 0; i < arr.length; i++) {
    // Get a few characters to check if it matchs the needle
    let check = arr.slice(i, i + needle.length);

    // If check matches the needle
    if (check.join('') === needle) {
      // Remove the needle from the haystack
      arr.splice(i, needle.length); 
    }
  }
  
  // Make the array into a string
  return arr.join('');
}

$('#result').val(remove('SPAM!', 'HelSPAM!lo, WoSPAM!rld!'));
