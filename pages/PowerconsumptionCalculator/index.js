


function CalculateKwhs()
{
    let watts = document.getElementById("watts-txt").value
    console.log("input value: "+watts)
    let result = document.getElementById("result-lbl").value
    
    let kwh = (watts * 730)/1000
    console.log("watts "+ watts)
    console.log("Kwhs "+ kwh)
    
    document.getElementById("result-lbl").innerHTML = "Result: "+kwh+" Kwhs"
}