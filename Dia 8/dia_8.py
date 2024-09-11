def converter_temperatura():
  temp_celsius = float(input("Digite sua temperatura (apenas o valor numérico) em Celsius: "))
  temp_fahrenheit = (temp_celsius * 1.8) + 32
  print(f'A temperatura {temp_celsius}°C em Fahrenheit é {temp_fahrenheit}°F.')

converter_temperatura()
