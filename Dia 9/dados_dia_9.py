import pandas as pd
import numpy as np

# considerando os dados da receita de uma loja de cosméticos
dados_logistica = {
    'Produto': ['Chapinha', 'Escova secadora', 'Hidratante facial', 'Base Cosmos', 'Sérum', 'Perfume Floratta'],
    'Quantidade': [10, 20, 15, 5, 30, 6],
    'Preco': [100, 150, 200, 50, 300, 180]
}

df = pd.DataFrame(dados_logistica)

df['Vendas'] = df['Quantidade'] * df['Preco']

print(df)

# Estatística descritiva da receita (df.describe())
media = df['Vendas'].mean()
mediana = df['Vendas'].median()
desvio_padrao = df['Vendas'].std()
maximo = df['Vendas'].max()
minimo = df['Vendas'].min()

print('˚˖𓍢ִ໋🌷͙֒✧˚.🎀༘⋆  Os dados estatísticos semanais da empresa estão disponíveis abaixo  ˚˖𓍢ִ໋🌷͙֒✧˚.🎀༘⋆')
print(f'🩰 A receita média foi {media:.3f};')
print(f'🪞  A mediana é {mediana:.0f};')
print(f'🦢 O desvio padrão é de {desvio_padrao:.3f};')
print(f'🫧  A receita máximo foi de {maximo};')
print(f'🍯 A receita mínima foi de {minimo}.')