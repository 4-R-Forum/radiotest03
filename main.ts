radio.onReceivedString(function (receivedString) {
    data_string = receivedString
    basic.showString(data_string)
    readings = data_string.split(",")
    temp = parseFloat(readings[0])
    light2 = parseFloat(readings[1])
    datalogger.log(
    datalogger.createCV("Temp", temp),
    datalogger.createCV("Light", light2)
    )
})
let readings: string[] = []
let data_string = ""
let temp = 0
let light2 = 0
radio.setGroup(1)
radio.setFrequencyBand(0)
light2 = 0
temp = 0
data_string = "21,128"
