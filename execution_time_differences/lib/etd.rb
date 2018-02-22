def my_min_slow(array)
  array.each do |el|
    return el if array.all? { |other_el| el <= other_el }
  end
end
# The time complexity for the function is:
# - O(n**2)

def my_min_fast(array)
  return nil if array.empty?
  min = array[0]
  array[1..-1].each do |el|
    min = el if el < min
  end
  min
end
# The time complexity for the function is:
# - O(n)
