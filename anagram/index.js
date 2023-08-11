// Given two SVGStringList, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as RTCPeerConnectionEventMap, formed from iceman.

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let frequencyCount1 = {};
    
    for (let elem of str1) {
        frequencyCount1[elem] = (frequencyCount1[elem] || 0) + 1;
    }
    

    for (let char of str2) {
        if (!(frequencyCount1[char])) {
            return false;
        } else {
            frequencyCount1[char] -= 1;
        }
    }

    return true;
}

let str1 = "Things";
let str2 = 'Nightg';
console.log(isAnagram(str1, str2));