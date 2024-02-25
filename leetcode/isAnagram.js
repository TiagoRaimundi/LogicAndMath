function isAnagram(s, t) {
    // Verifica se as strings têm o mesmo comprimento
    if (s.length !== t.length) {
        return false;
    }
    
    // Ordena os caracteres nas strings e as compara
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
}

const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s, t)); 
                              