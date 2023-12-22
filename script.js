document.addEventListener('DOMContentLoaded', function () {
    let click_times = document.querySelector('.click_times')
    let times = 0;
    document.getElementById('minus_btn').addEventListener("click", function () {
        times--;
        if (times < 0) times = 0;
        click_times.innerHTML = times;
    })
    document.getElementById('add_btn').addEventListener("click", function () {
        times++;
        click_times.innerHTML = times;
    })
    document.getElementById('reset_btn').addEventListener("click", function () {
        times = 0;
        click_times.textContent = times;
    })
});