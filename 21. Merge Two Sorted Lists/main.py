# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        
        if not list1 and not list2:
            return None
        elif not list1:
            return list2
        elif not list2:
            return list1
        
        if list1.val > list2.val:
            root = list2
            list2 = list2.next
        else:
            root = list1
            list1 = list1.next
            
        node = root
            
            
        while list1 and list2:
            if list1.val > list2.val:
                node.next = list2
                list2 = list2.next
            else:
                node.next = list1
                list1 = list1.next
            
            node = node.next
        
        while list1:
            node.next = list1
            list1 = list1.next
            node = node.next
            
        while list2:
            node.next = list2
            list2 = list2.next
            node = node.next
        
        return root
            
                
        
        