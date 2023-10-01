a, b, c = map(int, input().split())

def maior(a, b):
    return(a+b + abs(a-b))/2

maior_ab = maior(a, b)

maior_abc = maior(maior_ab, c)

print(f"{maior_abc:.0f} eh o maior")