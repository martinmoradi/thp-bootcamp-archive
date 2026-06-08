# frozen_string_literal: true

def is_multiple_of_3_or_5?(num)
  (num % 3).zero? || (num % 5).zero? ? true : false
end

def sum_of_3_or_5_multiples(final_number)
  final_sum = 0
  if final_number.is_a?(Integer) && final_number.positive?
    (0...final_number).each { |n| final_sum += n if is_multiple_of_3_or_5?(n) }
    final_sum
  else
    'Yo! Je ne prend que les entiers naturels. TG'
  end
end

sum_of_3_or_5_multiples(10)
sum_of_3_or_5_multiples(541)
