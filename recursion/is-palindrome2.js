function isPalindrome(str) {

    function helper (helperInput) {
        if (helperInput.length <= 1) return helperInput;

        return helperInput[helperInput.length - 1] + helper(helperInput.slice(0, helperInput.length - 1));
    }

    const backward = helper(str);
    return backward === str;
    

}

console.log(isPalindrome('mr'));
console.log(isPalindrome('manam'));

