/**
 * 242. Valid Anagram
Easy
Topics
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

var isAnagram = function(s, t){

    if(s.length !== t.length) return false;

    let map = {}

    for(let i = 0; i<s.length; i++){
        let letter = s[i];

        if(!map[letter]){
             map[letter] = 1
        }else {
            map[letter]++
        }

        for(let i =0; i<t.length; i++){
            let letter = t[i]

            if(map[letter] === undefined){
                return false
            }
            if(map[letter]<1){
                return false
            }

            map[letter]--
        }
    }
    return true
}