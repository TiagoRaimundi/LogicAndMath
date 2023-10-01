while True:
    A = float(input())
    B = float(input())
    C = float(input())
    
    if 0 <= A <= 10 and 0 <= B <= 10 and  0 <= C <= 10:
        break
    
    else:
        print("Digite um valor de 0 a 10")
        
MEDIA = (A*2 + B*3 + C*5) / 10

print(f"MEDIA = {MEDIA:.1f}")
        
    

