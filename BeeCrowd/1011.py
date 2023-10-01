
code1, num_pieces1, price1 = map(float, input().split())


code2, num_pieces2, price2 = map(float, input().split())


total = (num_pieces1 * price1) + (num_pieces2 * price2)


print(f"VALOR A PAGAR: R$ {total:.2f}")
