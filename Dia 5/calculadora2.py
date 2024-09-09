import math

def somar(x, y):
    return x + y

def subtrair(x, y):
    return x - y

def multiplicar(x, y):
    return x * y

def dividir(x, y):
    return x / y

def potencia(x, y):
    return x ** y

def raiz_quadrada(x):
    return math.sqrt(x)

def calculadora():
    while True:
        try:
            print("Opções de operação:")
            print("1. Adição\n2. Subtração\n3. Multiplicação\n4. Divisão\n5. Potenciação\n6. Raiz Quadrada")
            operacao = int(input("Operação escolhida: "))
            if operacao in [1, 2, 3, 4, 5]:
                x = float(input("Digite o primeiro número: "))
                y = float(input("Digite o segundo número: "))

                if operacao == 1:
                    print(f'A soma de {x} e {y} é: {somar(x, y)}')
                elif operacao == 2:
                    print(f'A subtração de {x} e {y} é: {subtrair(x, y)}')
                elif operacao == 3:
                    print(f'A multiplicação de {x} e {y} é: {multiplicar(x, y)}')
                elif operacao == 4:
                    print(f'A divisão de {x} e {y} é: {dividir(x, y)}')
                elif operacao == 5:
                    print(f'{x} elevado a {y} é: {potencia(x, y)}')
            elif operacao == 6:
                x = float(input("Digite o número: "))
                print(f'A raiz quadrada de {x} é: {raiz_quadrada(x)}')
            else:
                print("Operação inválida. Tente novamente.")
        except ValueError:
            print("Erro. Por favor, insira números válidos.")

        continuar = input("Deseja realizar outro cálculo? (s/n): ").lower()
        if continuar != 's':
            break

calculadora()
                  
