const validation = (e) => {
    var input = document.getElementsByTagName("input")[0]
    var pattern = /([a-zA-Z0-9]+)\@([a-zA-Z]+)\.([a-zA-Z]{3})/;

    if (input.value != "" && input.value.match(pattern)) {
        alert("subimitted")
    }
    else {
        input.style.borderColor = "hsl(354, 100%, 66%)";
        input.placeholder = "example@email.com";
        document.getElementById("error-msg").innerHTML = "Please provide a valid email address";
        document.getElementById("error-msg").style.fontSize = '12px';
        document.getElementById("error-msg").style.color = 'red'
        return false
    }

}