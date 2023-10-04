N = int(input())

# Lê o valor inteiro e verifica as notas necessárias
notas = [100, 50, 20, 10, 5, 2, 1]
qtd_notas = []

print(N)
for nota in notas:
    qtd = N // nota
    qtd_notas.append(qtd)
    N -= qtd * nota

for nota, qtd in zip(notas, qtd_notas):
    print(f"{qtd} nota(s) de R$ {nota},00")
