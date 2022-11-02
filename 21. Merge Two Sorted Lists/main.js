/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if (!list1) 
        return list2;
    else if (!list2)
        return list1;
    
    let root = {val: null, next: null};
    if (list1.val > list2.val) {
        root.val = list2.val;
        list2 = list2.next;
    }
    else {
        root.val = list1.val;
        list1 = list1.next;
    }
    
    let node = root;
    while (list1 && list2)
        {
            if (list1.val > list2.val) {
                node.next = list2;
                list2 = list2.next;
            }
            else {
                node.next = list1;
                list1 = list1.next;
            }
            node = node.next;
            
        }
    node.next = (list1) ? list1 : list2;
    
    return root;
    
};