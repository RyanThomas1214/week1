const libraryChai = require('chai');
const expect = libraryChai.expect;
console.log(expect);




function getItem (arr, index){
    if (index === arr.length){
        return arr[0]
}
else if(index > arr.length){
    return arr[index - arr.length];
}
    return arr[index];
}

module.exports = getItem;
