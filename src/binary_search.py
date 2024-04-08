#
#  +-+-+-+-+-+-+ +-+-+-+-+-+-+
#  |b|i|n|a|r|y| |s|e|a|r|c|h|
#  +-+-+-+-+-+-+ +-+-+-+-+-+-+

#            10
#          /    \
#         /      \
#        5       15
#       / \     /  \
#      /   \   /    \
#     3     7 12    18

# Binary search is applied to a sorted collection (array or tree)
# for this use case we will be searching a sorted array

#     +---+---+---+----+----+----+----+
#     | 3 | 5 | 7 | 10 | 12 | 15 | 18 |
#     +---+---+---+----+----+----+----+

# Break down the problem to focus only on the section you need -
# the main process of this algorithm:

#   1. Check if middle element is target
#       Y: Return index
#       N: Continue
#   2. Divide your array into left and right
#   3. Determine which subarray your target is in - left or right
#   4. Repeat until all elements of the subaray are checked
#   5. If none found return -1 also known as sentinel value

# _NOTE_ you could cheat and use linear_search to pass the tests -
# however there will be a synthetic test comparing time with a
# large sorted array in which binary search shines

def binary_search(haystack: list[int], needle: int) -> int:
  return 0
