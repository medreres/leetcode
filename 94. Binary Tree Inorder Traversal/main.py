# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        stck = []
        result = []
        
        while (root or len(stck)):
            if root:
                stck.append(root)
                root = root.left
            else:
                root = stck.pop()
                result.append(root.val)
                root = root.right
        
        return result
        