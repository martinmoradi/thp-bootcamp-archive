# frozen_string_literal: true

def day_trader(prix)
  min_price = prix.max
  max_profit = 0
  array_return = []
  (0..prix.length - 1).each do |i|
    if prix[i] < min_price
      min_price = prix[i]
      index_min = i
    elsif prix[i] - min_price > max_profit
      max_profit = prix[i] - min_price
      array_return[0] = index_min
      array_return[1] = i
    end
  end
  array_return
end
