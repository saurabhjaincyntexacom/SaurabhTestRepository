let arr;
let arr1;
let arr2;
let sizeField;
let c;
let x;

function saveFunction(){
    sizeField = document.getElementById('sizeField').value;
    let timeField = document.getElementById('timeField').value;
    let movesField = document.getElementById('movesField').value;
    console.log(sizeField+':'+timeField+':'+movesField);
    if(sizeField == '' || timeField == '' || movesField == ''){
        window.alert('please fill all the fields');
    }else{
        document.getElementById('sizeField').value = '';
        document.getElementById('timeField').value = '';
        document.getElementById('movesField').value = '';
        document.getElementById('infoPage').style.display = 'none';
        document.getElementById('puzzlePage').style.display = 'block';
        document.getElementById('movesLeft').innerText = movesField;


        let p = parseInt(timeField)*60;
        x = setInterval(function () {
            if(p == 0){
                document.getElementById('timeLeft').innerText = p;
                clearInterval(x);
                window.alert('Game Over');
                document.getElementById('infoPage').style.display = 'block';
                document.getElementById('puzzlePage').style.display = 'none';
            }
            console.log(p);
            
            p = p-1;
            document.getElementById('timeLeft').innerText = p;
        }, 1000);

        let count = 0;
        arr = [];
        for(let i=0 ; i<parseInt(sizeField)*parseInt(sizeField) ; i++){
            count = count + 1;
            if(i == parseInt(sizeField)*parseInt(sizeField) - 1){
                arr.push('');
            }else{
                arr.push(count);
            }
        }
        arr2 = JSON.parse(JSON.stringify(arr));
        console.log(arr);
        c = 0;
        arr1 = shuffle(arr);
        enterPuzzle();
    }
}


function enterPuzzle(){
    c = 0;
    let index;
        for(let i=0 ; i<arr1.length ; i++){
            if(arr1[i] == ''){
                index = i;
                break;
            }
        }
        let indexArray = [];
        let rem = index % parseInt(sizeField);
        if(rem == 0){
            if(index < parseInt(sizeField)){
                indexArray.push(index+1);
                indexArray.push(index+parseInt(sizeField));
            }else if(index > (parseInt(sizeField))*(parseInt(sizeField)-1)){
                indexArray.push(index+1);
                indexArray.push(index-parseInt(sizeField));
            }else{
                indexArray.push(index+1);
                indexArray.push(index+parseInt(sizeField));
                indexArray.push(index-parseInt(sizeField));
            }
        }else if(rem == parseInt(sizeField)-1){
            if(index < parseInt(sizeField)){
                indexArray.push(index-1);
                indexArray.push(index+parseInt(sizeField));
            }else if(index > (parseInt(sizeField))*(parseInt(sizeField)-1)){
                indexArray.push(index-1);
                indexArray.push(index-parseInt(sizeField));
            }else{
                indexArray.push(index-1);
                indexArray.push(index+parseInt(sizeField));
                indexArray.push(index-parseInt(sizeField));
            }
        }else{
            if(index < parseInt(sizeField)){
                indexArray.push(index-1);
                indexArray.push(index+1);
                indexArray.push(index+parseInt(sizeField));
            }else if(index > (parseInt(sizeField))*(parseInt(sizeField)-1)){
                indexArray.push(index-1);
                indexArray.push(index+1);
                indexArray.push(index-parseInt(sizeField));
            }else{
                indexArray.push(index-1);
                indexArray.push(index+1);
                indexArray.push(index+parseInt(sizeField));
                indexArray.push(index-parseInt(sizeField));
            }
        }
        
        console.log('indexArray:'+indexArray);

        let str = '';
        for(let i=0 ; i<parseInt(sizeField) ; i++){
            str += '<tr>';
            for(let j=0 ; j<parseInt(sizeField) ; j++){
                if(arr1[c] == ''){
                    str += `<th style="border: 1px solid black;background-color: greenyellow;" name=${arr1[c]}>${arr1[c]}</th>`;
                }else{
                    let pi = 0;
                    for(let k=0 ; k<indexArray.length ; k++){
                        if(c == indexArray[k]){
                            pi = 1;
                            break;
                        }
                    }
                    if(pi == 1){
                        str += `<th style="border: 1px solid black;background-color: red;" class=${c} onclick="clickFunction(event)">${arr1[c]}</th>`;
                    }else{
                        str += `<th style="border: 1px solid black;background-color: skyblue;"">${arr1[c]}</th>`;
                    }
                    
                }
                c = c+1;    
            }
            str += '</tr>';
        }
        document.getElementById('table').innerHTML = str;
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function clickFunction(event){
    console.log(event.target.className);
    let val1 = event.target.className;
    let val2;
    for(let i=0 ; i<arr1.length ; i++){
        if(arr1[i] == ''){
            val2 = i;
            break;
        }
    }
    arr1[parseInt(val2)] = arr1[parseInt(val1)];
    arr1[parseInt(val1)] = '';
    console.log(arr1);
    enterPuzzle();
    let m = parseInt(document.getElementById('movesLeft').innerText) - 1;
    if(m == 0){
        window.alert('your moves is 0');
        clearInterval(x);
        document.getElementById('infoPage').style.display = 'block';
        document.getElementById('puzzlePage').style.display = 'none';
    }else{
        document.getElementById('movesLeft').innerText = m;
    }
    console.log(arr1);
    let flag = true;
    let cc = 0;
    for(let i=0 ; i<arr1.length-1 ; i++){
        cc = cc + 1;
        if(arr1[i] != cc){
            flag = false;
        }
    }
    if(flag){
        clearInterval(x);
        let p = 1;
        let y = setInterval(function () {
            if(p == 0){
                clearInterval(y);
                window.alert('you win');
                document.getElementById('infoPage').style.display = 'block';
                document.getElementById('puzzlePage').style.display = 'none';
            }
            console.log(p);
            p = p-1;
        }, 1000);
        
    }
}

function solveFunction(){
    c = 0;
    console.log(arr2);
    let str = '';
        for(let i=0 ; i<parseInt(sizeField) ; i++){
            str += '<tr>';
            for(let j=0 ; j<parseInt(sizeField) ; j++){
                if(arr2[c] == ''){
                    str += `<th style="border: 1px solid black;background-color: greenyellow;">${arr2[c]}</th>`;
                }else{
                    str += `<th style="border: 1px solid black;background-color: skyblue;">${arr2[c]}</th>`;
                }
                c = c+1;    
            }
            str += '</tr>';
        }
        document.getElementById('table').innerHTML = str;
        let p = 1;
        let y = setInterval(function () {
            if(p == 0){
                clearInterval(x);
                clearInterval(y);
                window.alert('Game Over');
                document.getElementById('infoPage').style.display = 'block';
                document.getElementById('puzzlePage').style.display = 'none';
            }
            console.log(p);
            p = p-1;
        }, 1000);

        
}

function shuffleFunction(){
    arr1 = shuffle(arr);
    let solvable = main();
    if(solvable){
        enterPuzzle();
    }else{
        shuffleFunction();
    }
}





function getInvCount(arr) {
    let inv_count = 0;
    for (let i = 0; i < sizeField * sizeField - 1; i++){
        for (let j = i + 1; j < sizeField * sizeField; j++){
            if (arr[j] && arr[i] && arr[i] > arr[j])
                inv_count++;
            }
        }
        return inv_count;
    }
   
    // find Position of blank from bottom
    function findXPosition(puzzle){
   
        // start from bottom-right corner of matrix
        for (let i = sizeField - 1; i >= 0; i--)
            for (let j = sizeField - 1; j >= 0; j--)
                if (puzzle[i][j] == 0)
                    return sizeField - i;
    }
   
    // This function returns true if given
    // instance of N*N - 1 puzzle is solvable
    function isSolvable(puzzle){
   
        // Count inversions in given puzzle
        let invCount = getInvCount(puzzle);
   
        // If grid is odd, return true if inversion
        // count is even.
        if (sizeField & 1)
            return !(invCount & 1);
   
        else{     // grid is even
            let pos = findXPosition(puzzle);
            if (pos & 1)
                return !(invCount & 1);
            else
                return invCount & 1;
        }
    }
   
    /* Driver program to test above functions */
    function main() {
        let puzzle = [];
        let c1 = 0;
        for(let i=0 ; i<sizeField ; i++){
            let p1 = [];
            for(let j=0 ; j<sizeField ; j++){
                if(arr1[c1] == ''){
                    p1.push(0);
                    c1 = c1+1;
                }else{
                    p1.push(arr1[c1]);
                    c1 = c1+1;
                }
            }
            puzzle.push(p1);
        }
        console.log('puzzle:'+puzzle);
   
        let cc = (isSolvable(puzzle)) ? 1 :
        0;
        return cc;
  }