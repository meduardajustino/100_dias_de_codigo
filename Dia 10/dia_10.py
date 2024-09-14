import pandas as pd
import numpy as np

# dados fictícios dos funcionários
dados_funcionarios = {
    'Nome': ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gustavo', 'Helena',
             'Igor', 'Juliana', 'Karen', 'Leonardo', 'Mariana', 'Natália', 'Otávio'],
    'Departamento': ['TI', 'Financeiro', 'RH', 'TI', 'Marketing', 'Financeiro', 'TI',
                     'RH', 'TI', 'Marketing', 'TI', 'Financeiro', 'Marketing', 'RH', 'TI'],
    'Salário': [4500, 5200, 4000, 4800, 4700, 5300, 4600, 4200, 4900, 4700, 5100, 5500, 4800, 4300, 5200]
}

df = pd.DataFrame(dados_funcionarios)


# filtrando os funcionários de TI
funcionarios_de_TI = df[df['Departamento'] == 'TI']
print(f'Os(as) funcionários(as) da área de TI são: \n {funcionarios_de_TI}')

# média salarial desses funcionários
media_salarial = funcionarios_de_TI['Salário'].mean()
print(f'A média salarial é de R${media_salarial:.2f}')
