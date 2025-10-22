
var alpha = ["a", "b", "c", "d", "e", "f"]

 var digits = [
    '1','2','3','4','5','6','7','8','9','0'
 ]
var colorcode = document.getElementById('colorcode')


function colorChange() {


    var char1 = alpha[Math.floor(Math.random() * alpha.length)]
    var char2 = alpha[Math.floor(Math.random() * alpha.length)]
    var char3 = alpha[Math.floor(Math.random() * alpha.length)]
    var num1 = digits[Math.floor(Math.random() * digits.length)]
    var num2 = digits[Math.floor(Math.random() * digits.length)]
    var num3 = digits[Math.floor(Math.random() * digits.length)]     
    
    var code1 = `${char1}${num1}${char2}${num2}${char3}${num3}`
    var code2 = `${char2}${num1}${char1}${num3}${char2}${num1}`


    document.body.style.background =`linear-gradient( 45deg,#${code1.toString()},#${code2.toString()})`

    colorcode.innerText = `Color is : #${code1}, ${code2}`    
    
    
}

