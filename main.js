var input = prompt("請輸入數字");
for (var index = 2; index < input; index++) {
    if (input % index == 0) {
        alert("不是質數");
        break;
    } else if (index == input - 1) {
        alert("是質數");
    }
}
