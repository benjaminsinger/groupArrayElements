function groupArrayElements(arr, size) {

    // 1. Create a new array to contain the child arrays that 
    // will be produced by the following 'for of' loop.
    const parentArray = [];
    
    // 2. Loop through the given 'arr' array and create our child arrays.
    for (let num of arr) {

        // Get the last element in the parentArray - i.e. the array that we are currently building.
        const lastEl = parentArray[parentArray.length - 1];

        // If no element yet exists in the parentArray that we have created -- 
        // OR An array element exists AND it is already the length defined in the 'size' argument of the function.
        // We push a new array element with an initial value to begin a new number array.
        if ( !lastEl || lastEl.length == size) {
            parentArray.push([num])
        } else {
            // Otherwise, we push another value to our most recently created lastEl entry
            lastEl.push(num)
        }
    }

    return parentArray;
}

function printResult(result) {
    resultContent = document.createTextNode(result);
    /* Create result container */
    resultContainer = document.createElement('div');
    resultContainer.id = 'result';
    /* Append result to resultContainer element */
    resultContainer.appendChild(resultContent);
    /* Append result container to body */
    document.body.appendChild(resultContainer);
}

/* Very basic UI for example functionality */
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const numArray = document.getElementById('arr').value.split(',');
    const sizeInt = document.getElementById('size').value;

    return printResult(JSON.stringify(groupArrayElements(numArray, sizeInt)));
});
