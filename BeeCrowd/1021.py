
dias_total = int(input("Digite o total de dias: "))

anos = dias_total // 365
dias_restantes = dias_total % 365
meses = dias_restantes // 30
dias = dias_restantes % 30


print(f"{anos} ano(s)")
print(f"{meses} mes(es)")
print(f"{dias} dia(s)")
