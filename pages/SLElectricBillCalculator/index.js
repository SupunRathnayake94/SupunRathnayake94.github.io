


function CalculateBillValue()
{
    let usedPower = document.getElementById("Kwhs-txt").value
    let billValue = 0

    console.log(" input value :"+ usedPower)

    if(usedPower < 31)
    {
       billValue = billValue + (7.85 * usedPower)
    }else if(usedPower > 0){  billValue = billValue + (7.85 * 31) }
    document.getElementById("1box-td").innerHTML =billValue

    console.log(" 1- 31 Cost :"+ billValue)

    if(usedPower < 62 && usedPower > 31)
    {
        billValue = billValue + ( 7.85 * (usedPower-31) )
    }else if(usedPower > 31) { billValue = billValue + ( 7.85 * 31 ) }
    console.log(" 32- 62 Cost :"+ billValue)
    document.getElementById("2box-td").innerHTML =billValue

    if(usedPower < 93 && usedPower > 62)
    {
        billValue = billValue + ( 10 * (usedPower-62) )
    }else if(usedPower > 62) { billValue = billValue + ( 10 * 31 )}
    console.log(" 63- 93 Cost :"+ billValue)
    document.getElementById("3box-td").innerHTML =billValue

    if(usedPower < 124 && usedPower > 93)
    {
        billValue = billValue + ( 27.75 * (usedPower-93) )
    }else if(usedPower > 93) {billValue = billValue + ( 27.75 * 31 )}
    console.log(" 94- 124 Cost :"+ billValue)
    document.getElementById("4box-td").innerHTML =billValue

    if(usedPower < 186 && usedPower > 124)
    {
        billValue = billValue + ( 32 * (usedPower-124) )
    }else if(usedPower > 124) { billValue = billValue + ( 32 * 62 )}
    console.log(" 125- 186 Cost :"+ billValue)
    document.getElementById("5box-td").innerHTML =billValue

    if(usedPower < 199999 && usedPower > 186)
    {
        billValue = billValue + ( 45 * (usedPower-186) )
    }else if(usedPower > 186){ billValue = billValue + ( 45 * 84 )}
    console.log(" 187- 199999 Cost :"+ billValue)
    document.getElementById("6box-td").innerHTML =billValue

    billValue = billValue +540
    document.getElementById("billValue-lbl").innerHTML ="Bill Value: "+billValue+"LKR"
    console.log("Bill value: "+ billValue)
}
