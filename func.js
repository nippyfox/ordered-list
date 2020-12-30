function order() {
    const originalText = document.getElementById("enter").value
    let textArray = originalText.split(/\r|\n/)
    for (i = 0; i < textArray.length; i++) {
        if (textArray[i].length > 1) {
            let str = textArray[i]
            textArray[i] = str[0].toUpperCase() + str.substring(1)
        }
        else if (textArray[i].length == 1) {
            textArray[i] = textArray[i].toUpperCase()
        }
    }
    let output = ""
    textArray = textArray.sort()
    for (i = 0; i < textArray.length; i++) {
        output += textArray[i] + "\n"
    }
    document.getElementById("result").innerHTML = output
}