// collectStrings
// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.

function collectStrings(obj) {
    let newArr = [];

    function helper(helperInput) {
        for (let key in helperInput) {
            if (typeof helperInput[key] === 'string') {
                newArr.push(helperInput[key]);
            }
            if (typeof helperInput[key] === 'object') {
                helper(helperInput[key]);
            }
        }
    }

    helper(obj);

    return newArr;
}

const obj = {
    stuff: 'foo',
    data: {
      val: {
        thing: {
          info: 'bar',
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: 'baz'
            }
          }
        }
      }
    }
  };
  
  console.log(collectStrings(obj));
