let counter = document.querySelectorAll('.counter-box .number');
let counterBox = document.getElementById("count");
let begining = false;
console.log(counterBox)
console.log(counter)
window.onscroll = function() {
    if (window.scrollY >= counterBox.offsetTop - 200) {
        if (!begining)
            counter.forEach((ele) => {
                let startValue = 0;
                let endValue = ele.dataset.count;
                let countFun = setInterval(() => {
                    startValue++;
                    ele.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(countFun)
                    }
                }, 2000 / endValue)

            })
        begining = true;


        // if (!begining) {
        //     counter.forEach((ele) => {
        //         let countValue = ele.dataset.count;
        //         let countFun = setInterval(() => {
        //             ele.textContent++;
        //             if (ele.textContent == countValue) {
        //                 countFun = clearInterval(countFun)
        //             }
        //         }, 2000 / countValue)
        //     })
        //     begining = true;
        // }

    }
}