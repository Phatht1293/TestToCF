/* A2.Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. 
Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như 
thế cho đến người cuối cùng.
Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu 
trả về mảng chưa tổng cân nặng của 2 team.

Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]
[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function alternatingSums(a) {
    
}

 */

let arr=[60,40,55,75,64]

function al_Sums(arr) {
    var sum = arr.reduce(function(acc, val,currentIndex) {
        if(currentIndex%2==0)
            acc[0] += val;
        else
            acc[1] += val;
        return acc;
    }, [0,0]);
    return sum;
}

document.write("Mảng chứa cân nặng của 2 team là : "+al_Sums(arr))