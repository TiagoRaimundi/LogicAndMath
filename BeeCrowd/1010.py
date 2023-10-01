
nome = input("Digite seu nome: ")
SALARY = float(input("Digte seu salário:"))
totalVendas = float(input("Valor das vendas mensais: "))

bonus = (totalVendas * 15)/100

totalSalary = SALARY + bonus

print(f"TOTAL = {totalSalary:.2f}")