import pandas as pd
import numpy as np

import pandas as pd

# considerando os dados da receita de uma loja de cosméticos
dados_logistica = {
    'Produto': ['Chapinha', 'Escova secadora', 'Hidratante facial', 'Base Cosmos', 'Sérum', 'Perfume Floratta'],
    'Quantidade': [10, 20, 15, 5, 30, 6],
    'Preco': [100, 150, 200, 50, 300, 180]
}

df = pd.DataFrame(dados_logistica)

df['Vendas'] = df['Quantidade'] * df['Preco']

print(df)
