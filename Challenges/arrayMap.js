function checkSum(arr, target) {
    var correct_array = arr.sort();
    var result = false;
    var sum = correct_array[0];
    if (correct_array.includes(target)) {
      result = true;
    } else {
      for (let i = 0; i < correct_array.length; i++) {
        if (i > 0) {
          if (arr[i - 1] + 1 == arr[i]) {
            sum += arr[i];
          } else {
            sum = arr[i];
          }
        }
        if (sum == target) {
          result = true;
          break;
        }
      }
    }
    return result;
  }
  
  document
    .getElementById("form_sum_check")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      const arrayInput = document.getElementById("arrayInput").value;
      const targetInput = parseInt(document.getElementById("targetInput").value);
      const array = arrayInput.split(",").map(Number);
      const result = checkSum(array, targetInput);
      document.getElementById("result").innerText = result
        ? "True"
        : "False";
    });
  