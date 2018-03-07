
def first_anagram?(word_one, word_two)
  anagrams = word_one.chars.permutation(word_one.length).to_a
  anagrams.map! { |char_array| char_array.join }
  anagrams.include?(word_two)
end

# The time and space complexity for the function are:
# - O(n! * n**2) runtime and O(n! * n) space
