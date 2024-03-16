const sleep = ( time ) => {
    return new Promise(resolve => setTimeout(resolve,time))
}

function sortAlgo(arr, n, speed, sort)
{
    switch(sort) {
        case "bubble":
            bubbleSort(arr,n,speed)
            break;
        case "selection":
            selectionSort(arr,n,speed)
            break;
        case "insertion":
            insertionSort(arr,n,speed)
            break;    
        case "quick":
            quickSort(arr,0,n-1,speed)
            displayGraph(arr)
            console.log(100)
            break;
        }
}


async function bubbleSort(arr,n,speed){
    var i, j, temp;
        var swapped;
        for (i = 0; i < n - 1; i++) 
        {
            swapped = false;
            for (j = 0; j < n - i - 1; j++) 
            {
                if (arr[j] > arr[j + 1]) 
                {
                    await sleep(speed)
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                    displayGraph(arr)
                }
            }
            if (swapped == false) break;
        }
}

async function selectionSort(arr,n,speed) 
{ 
    var i, j, min_idx; 
  
    // One by one move boundary of unsorted subarray 
    for (i = 0; i < n-1; i++) 
    { 
        // Find the minimum element in unsorted array 
        min_idx = i; 
        for (j = i + 1; j < n; j++) 
        if (arr[j] < arr[min_idx]) 
            min_idx = j; 
  
        // Swap the found minimum element with the first element 
        await sleep(speed)
        var temp = arr[min_idx]; 
        arr[min_idx] = arr[i]; 
        arr[i] = temp;     
        displayGraph(arr)
    } 
} 

async function insertionSort(arr, n, speed)  
{  
    let i, key, j;  
    for (i = 1; i < n; i++) 
    {  
        key = arr[i];  
        j = i - 1;  
        await sleep(speed)
        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key; 
        displayGraph(arr) 
    }  
}

// Function to partition the array and return the partition index
function partition(arr, low, high) {
    // Choosing the pivot
    let pivot = arr[high];
   
    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;
   
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
   
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
    return i + 1; // Return the partition index
}
 
// The main function that implements QuickSort
async function quickSort(arr, low, high, speed ) {
    if (low < high) {
        await sleep(speed)
        displayGraph(arr)
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi = partition(arr, low, high);
   
        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}