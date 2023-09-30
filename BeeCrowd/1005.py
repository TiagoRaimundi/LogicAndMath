while True:
    A = float(input())
    B = float(input())
    
    if 0 <= A <= 10 and 0 <= B <= 10:
        break
    else:
        print("Digite um valor de 0 a 10:" )
        
MEDIA = (A * 3.5 + B * 7.5) / 11

print(f"MEDIA = {MEDIA:.5f}")

