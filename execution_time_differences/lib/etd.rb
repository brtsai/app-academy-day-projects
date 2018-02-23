def my_min_slow(array)
  array.each do |el|
    return el if array.all? { |other_el| el <= other_el }
  end
end
# The time and space complexity for the function are:
# - O(n**2) runtime and O(1) space

def my_min_fast(array)
  return nil if array.empty?
  min = array[0]

  index = 1
  until index == array.length
    min = array[index] if array[index] < min
    index += 1
  end

  min
end
# The time and space complexity for the function are:
# - O(n) runtime and O(1) space

def largest_contiguous_subsum_slow(array)
  subarrays = []
  array.each_index do |left_index|
    (left_index...array.length).each do |right_index|
      subarrays.push(array[left_index..right_index])
    end
  end
  subarrays.map! { |arr| arr.reduce(:+) }.max
end
# The time and space complexity for the function are:
# - O(n**3) runtime and O(n**3) space

def largest_contiguous_subsum_fast(array)
  return nil if array.empty?
  max_subsum = array[0]
  current_sum = array[0]

  index = 1
  until index == array.length
    if array[index] > current_sum + array[index]
      current_sum = array[index]
    else
      current_sum += array[index]
    end

    max_subsum = current_sum if current_sum > max_subsum
    index += 1
  end

  max_subsum
end
# The time and space complexity for the function are:
# - O(n) runtime and O(1) space
