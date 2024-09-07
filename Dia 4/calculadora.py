#Calculadora
import math

def calculadora():
    while True:
        try:
            x = float(input("Digite o primeiro número: "))
            y = float(input("Digite o segundo número: "))

            somar = x+y
            subtrair = x-y
            multiplicar = x*y
            dividir = x/y
            potencia = x**y
            raizx = round(math.sqrt(x), 4)
            raizy = round(math.sqrt(y),4)

            #imprimir resultados
            print(f'A soma de {x} e {y} é: {somar}')

            print(f'A subtração de {x} e {y} é: {subtrair}')

            print(f'A multiplicação de {x} e {y} é: {multiplicar}')

            print(f'A divisão de {x} e {y} é: {dividir}')

            print(f'{x} elevado a {y} é: {potencia}')

            print(f'A raiz quadrada de {x} é: {raizx}')

            print(f'A raiz quadrada de {y} é: {raizy}')
        except ValueError:
            print("Erro. Por favor, insira números válidos.")

        continuar = input("Deseja realizar outro cálculo? (s/n): ").lower()
        if continuar != 's':
            break

calculadora()

