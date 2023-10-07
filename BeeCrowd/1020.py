N = int(input())

horas = N // 3600
valor_restante = N % 3600
minutos = valor_restante // 60
segundos = valor_restante % 60

print(f"{horas}:{minutos}:{segundos}")