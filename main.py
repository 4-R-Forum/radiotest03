def on_received_string(receivedString):
    global data_string, readings, temp, light2
    data_string = receivedString
    basic.show_string(data_string)
    readings = data_string.split(",")
    temp = parse_float(readings[0])
    light2 = parse_float(readings[1])
radio.on_received_string(on_received_string)

readings: List[str] = []
data_string = ""
temp = 0
light2 = 0
radio.set_group(1)
radio.set_frequency_band(0)
light2 = 0
temp = 0
data_string = ""