function anchor(position) {
    document.getElementById("web-container").scrollTop = 0
    document.getElementById("web-container").scrollTop = document.getElementById("anchor".concat(position.toString())).getBoundingClientRect().y
}

function loaded() {
    setTimeout(function() {
        document.getElementById("body").scrollTop = 0
    }, 10)

    setTimeout(function() {
        let url = window.location.href
    
        if (url.search("#") != -1) {
            let id = url.split("#")[1]

            document.getElementById("web-container").scrollTop = 0
            document.getElementById("web-container").scrollTop = document.getElementById(id).getBoundingClientRect().y
        }
    }, 11)
}

function scrollUi(topic, left) {
    if (left == true) {
        document.getElementById(topic).scrollLeft -= 282
    } else {
        document.getElementById(topic).scrollLeft += 282
    }
}
