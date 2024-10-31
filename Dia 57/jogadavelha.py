# Jogo da velha com o pygame

import pygame
import sys

pygame.init()
pygame.font.init() 

BEGE = (255, 228, 225)
PRETO = (0, 0, 0)
VERDE = (0, 255, 0)
VERMELHO = (255, 0, 0)

# dimensões da tela
LARGURA = 600
ALTURA = 600
TAMANHO_LINHA = 15
tela = pygame.display.set_mode((LARGURA, ALTURA))
pygame.display.set_caption('Jogo da Velha')

LINHAS = 3
COLUNAS = 3
tamanho_quadrado = LARGURA // COLUNAS
tabuleiro = [[None] * COLUNAS for _ in range(LINHAS)]
jogador_atual = "X"
vencedor = None
jogo_ativo = True

clock = pygame.time.Clock()

def desenha_tabuleiro():
    tela.fill(BEGE)
    for linha in range(1, LINHAS):
        pygame.draw.line(tela, PRETO, (0, linha * tamanho_quadrado), (LARGURA, linha * tamanho_quadrado), TAMANHO_LINHA)
    for coluna in range(1, COLUNAS):
        pygame.draw.line(tela, PRETO, (coluna * tamanho_quadrado, 0), (coluna * tamanho_quadrado, ALTURA), TAMANHO_LINHA)

def desenha_simbolo(linha, coluna, jogador):
    fonte = pygame.font.Font(None, 150)
    texto = fonte.render(jogador, True, PRETO)
    tela.blit(texto, (coluna * tamanho_quadrado + 50, linha * tamanho_quadrado + 25))

def verifica_vencedor():
    global vencedor, jogo_ativo
    # Verifica linhas
    for linha in tabuleiro:
        if linha[0] == linha[1] == linha[2] and linha[0] is not None:
            vencedor = linha[0]
            jogo_ativo = False
            return

    # Verifica colunas
    for coluna in range(COLUNAS):
        if tabuleiro[0][coluna] == tabuleiro[1][coluna] == tabuleiro[2][coluna] and tabuleiro[0][coluna] is not None:
            vencedor = tabuleiro[0][coluna]
            jogo_ativo = False
            return

    # Verifica diagonais
    if tabuleiro[0][0] == tabuleiro[1][1] == tabuleiro[2][2] and tabuleiro[0][0] is not None:
        vencedor = tabuleiro[0][0]
        jogo_ativo = False
        return
    if tabuleiro[0][2] == tabuleiro[1][1] == tabuleiro[2][0] and tabuleiro[0][2] is not None:
        vencedor = tabuleiro[0][2]
        jogo_ativo = False
        return

    # Verifica empate
    if all(all(celula is not None for celula in linha) for linha in tabuleiro):
        vencedor = "Empate"
        jogo_ativo = False

def reiniciar_jogo():
    global tabuleiro, jogador_atual, vencedor, jogo_ativo
    tabuleiro = [[None] * COLUNAS for _ in range(LINHAS)]
    jogador_atual = "X"
    vencedor = None
    jogo_ativo = True
    desenha_tabuleiro() 

def exibe_resultado():
    fonte = pygame.font.Font(None, 100)
    tela.fill(BEGE) 
    if vencedor == "Empate":
        texto = fonte.render("Empate!", True, VERMELHO)
    else:
        texto = fonte.render(f"{vencedor} venceu!", True, VERDE)
    tela.blit(texto, (LARGURA // 6, ALTURA // 3))

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

        if jogo_ativo:
            if event.type == pygame.MOUSEBUTTONDOWN:
                x, y = event.pos
                linha = y // tamanho_quadrado
                coluna = x // tamanho_quadrado
                
                if 0 <= linha < LINHAS and 0 <= coluna < COLUNAS and tabuleiro[linha][coluna] is None:
                    tabuleiro[linha][coluna] = jogador_atual
                    desenha_simbolo(linha, coluna, jogador_atual)
                    verifica_vencedor()
                    jogador_atual = "O" if jogador_atual == "X" else "X"
        else:
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_r:  # 'R' para reiniciar
                    reiniciar_jogo()

    desenha_tabuleiro()
    for linha in range(LINHAS):
        for coluna in range(COLUNAS):
            if tabuleiro[linha][coluna] is not None:
                desenha_simbolo(linha, coluna, tabuleiro[linha][coluna])

    if not jogo_ativo:
        exibe_resultado()

    pygame.display.update()
    clock.tick(60)
    

