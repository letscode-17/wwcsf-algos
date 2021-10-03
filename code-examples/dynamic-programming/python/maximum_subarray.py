# Kadane algorithm
class Solution:
    def maxSubArray(self, A: List[int]) -> int:
        cur, s = -inf, -inf
        for a in A:
            cur = max(cur + a, a)
            s = max(s, cur)
        return s
