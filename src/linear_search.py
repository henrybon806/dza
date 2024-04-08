#              ___       __      __   ___       __   __
# |    | |\ | |__   /\  |__)    /__` |__   /\  |__) /  ` |__|
# |___ | | \| |___ /~~\ |  \    .__/ |___ /~~\ |  \ \__, |  |


# Starting very simple with linear_search and treating a list
# as an array in the core definition for simplicity

# Array: collection of items of same data type stored at
# contiguous memory locations

# This means you have a defined set of memory which does not grow

#     +---+---+---+---+---+
#     | A | U | F | D | E |
#     +---+---+---+---+---+
#       0   1   2   3   4

# ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~

# In linear_search we have a list of ints and will check if
# list contains provided int

# If found return True, else False

# An array of [3, 9 , 6, 1, 4] looking for 1 returns true

#     1 ----+---+---+---+
#           |   |   |   |
#         +-+-+-+-+-+-+-+-+---+
#         | 3 | 9 | 6 | 1 | 4 |
#         +---+---+---+---+---+
#           x   x   x   O
#                       |
#                       +-------- true

def linear_search(haystack: list[int], needle: int) -> bool:
  return True
