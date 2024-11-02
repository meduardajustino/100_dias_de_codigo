# Interface com Botões em Python

import tkinter as tk

def action1():
    print("Botão 1 pressionado")
    
def action2():
    print("Botão 2 pressionado")
    
def action3():
    print("Botão 3 pressionado")

root = tk.Tk()
root.title("Botões com Python")

btn1 = tk.Button(root, text="Botão 1", command=action1)
btn1.pack()

btn2 = tk.Button(root, text="Botao 2", command=action2)
btn2.pack()

btn3 = tk.Button(root, text="Botão 3", command=action3)
btn3.pack()

root.mainloop()