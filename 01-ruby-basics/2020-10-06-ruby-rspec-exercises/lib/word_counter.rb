# frozen_string_literal: true

dictionnary = %w[below down go going horn how howdy it i low own part partner sit]

def word_counter(str, dictionnary)
  counter = Hash.new(0)

  str.downcase.split.each do |word|
    dictionnary.each do |entry|
      counter[entry] += 1 if word.include?(entry)
    end
  end
  counter
  # return nb occurences du mot en parametres
end

# ) -> itère dans le string
# -> itère dans le dictionnaire pour verif si le mot itéré du string est inclus dans le dictionnaire
