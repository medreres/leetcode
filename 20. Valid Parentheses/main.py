class Solution:
    def isValid(self, s: str) -> bool:
        stck = []
        opening = ['(', '[', '{']
        closing = [')', ']', '}']
        for ch in s:
            if ch in opening:
                stck.append(ch)
            elif ch in closing:
                if not len(stck):
                    return False
                last = stck.pop()
                index = closing.index(ch)
                if last != opening[index]:
                    return False
        
        return len(stck) == 0
                
            
        