const main = document.querySelector("#main")

let delay = 1500

function createTarget () {
    const target = document.createElement("div")
    let topTarget = Math.random() * (90 - 5) + 5
    let leftTarget = Math.random() * (95 - 2.5) + 2.5
    target.style.top = topTarget + "vh"
    target.style.left = leftTarget + "vw"
    target.classList.add("target")
    target.innerHTML = `<img src="target.png" alt="target" class="image">`
    main.append(target)

    target.onclick = (e) => {
        e.target.style.display = "none"
    }
}

const changeDelay = function() {
    delay = delay - 25
    if (delay < 400) {
        delay = 400
    }
    createTarget()
    setTimeout(changeDelay, delay);
}
setTimeout(changeDelay, delay);

