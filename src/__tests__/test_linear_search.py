from context import linear_search

class TestLinearSearch:
  def test_empty_list(self):
      assert linear_search([], 5) == False

  def test_single_element_list_found(self):
      assert linear_search([5], 5) == True

  def test_single_element_list_not_found(self):
      assert linear_search([6], 5) == False

  def test_multiple_elements_list_found(self):
      assert linear_search([1, 2, 3, 4, 5], 3) == True

  def test_multiple_elements_list_not_found(self):
      assert linear_search([1, 2, 3, 4, 5], 6) == False
