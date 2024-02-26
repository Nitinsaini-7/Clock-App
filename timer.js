    document.querySelector(".pause-btn").disabled = true;
    document.querySelector(".stop-btn").disabled = true;

    var timer = null; 
    var h = 0; 
    var m = 0; 
    var s = 0; 

var inputh = document.querySelector("#inputh");
inputh.addEventListener("input", function() { 
    inputh.value = parseInt(inputh.value||0);
    if (inputh.value > 24) inputh.value = 24;
    if (inputh.value < 0) inputh.value = 0;
});

var inputm = document.querySelector("#inputm");
inputm.addEventListener("input", function() {
    inputm.value = parseInt(inputm.value||0);
    if (inputm.value > 59) inputm.value = 59;
    if (inputm.value < 0) inputm.value = 0;
});

var inputs = document.querySelector("#inputs");
inputs.addEventListener("input", function() {
    inputs.value = parseInt(inputs.value||0);
    if (inputs.value > 59) inputs.value = 59;
    if (inputs.value < 0) inputs.value = 0;
});

    function start_counting() {
        h = +document.querySelector("#inputh").value || h;
        m = +document.querySelector("#inputm").value || m;
        s = +document.querySelector("#inputs").value || s;

        if (
            (h == 0 && m == 0 && s == 0) ||
            (h < 0 || m < 0 || s < 0)
        ) {
            alert("The time entered is illegal!");
            return;
        }

        timer = setInterval(counting, 1000);

h = h.toString();
m = m.toString();
s = s.toString();
if (h.match(/^\d$/)) {
    h = "0" + h;
}
if (m.match(/^\d$/)) {
    m = "0" + m;
}
if (s.match(/^\d$/)) {
    s = "0" + s;
}
      
        document.querySelector(".start-btn").disabled = true;
        document.querySelector(".pause-btn").disabled = false;
        document.querySelector(".stop-btn").disabled = false;
        document.querySelector("#inputh").disabled = true;
        document.querySelector("#inputm").disabled = true;
        document.querySelector("#inputs").disabled = true;
    }

    function pause_counting() {
        document.querySelector(".start-btn").disabled = false;
        document.querySelector(".pause-btn").disabled = true;
        document.querySelector(".stop-btn").disabled = false;
        document.querySelector("#inputh").disabled = false;
        document.querySelector("#inputm").disabled = false;
        document.querySelector("#inputs").disabled = false;

        clearInterval(timer);
    }

    function end_counting() {
        document.querySelector(".start-btn").disabled = false;
        document.querySelector(".pause-btn").disabled = true;
        document.querySelector(".stop-btn").disabled = true;
        document.querySelector("#inputh").disabled = false;
        document.querySelector("#inputm").disabled = false;
        document.querySelector("#inputs").disabled = false;

        clearInterval(timer);

        h = 0;
        m = 0;
        s = 0;
        document.querySelector(".currentTime").innerHTML = "Timer stopped";
    }

    function counting() {
        if (s == 0) {
            if (m == 0) {
                h--;
                m = 59;
                s = 59;
            } else {
                
                m--;
                s = 59;
            }
        } else {

            s--;
        }

        document.querySelector(".currentTime").innerHTML = "current time: " + h + " h " + m + " m " + s + " s";
        document.querySelector("#inputh").value = h;
        document.querySelector("#inputm").value = m;
        document.querySelector("#inputs").value = s;

        if (s == 0) {
            if (m == 0) {
                if (h == 0) {
                    end_counting();
                    setTimeout(function () {
                        alert("The time is up!");
                    }, 0);
                    return;
                }
            }
        }
    }

