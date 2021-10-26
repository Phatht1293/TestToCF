
/* A1. Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10)
[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function adjacentElementsProduct(inputArray) {
    
}

*/


let arr = [2, 3, -5, -2, 4]

const adjacentElementsProduct= (inputArray) => {
    let product = inputArray[0] * inputArray[1];
    for(let i = 0; i < inputArray.length - 1; i++) {
        let tmpNo = inputArray[i]*inputArray[i + 1];
        if(tmpNo > product){
            product = tmpNo;
        }
    }
    return product;
}

document.write("Tích lớn nhất của 2 số liền kề là : "+adjacentElementsProduct(arr))