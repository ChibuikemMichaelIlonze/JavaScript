const numbers= arrayFromRange (10, 20);

function arrayFromRange(min,max){
    const output =[];
    for (let i=min; i<=max; i++)
    output.push(i);
    return output;
}
console.log(numbers);