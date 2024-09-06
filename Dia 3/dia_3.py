print("Descobrir se um número é par ou ímpar")

numero_escolhido = float(input("Digite o número: "))

num_resto = numero_escolhido%2
    
if num_resto == 0:
    resultado = "par"
else:
    resultado = "ímpar"

print(f'O número {numero_escolhido} é {resultado}.')
