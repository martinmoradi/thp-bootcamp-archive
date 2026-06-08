# frozen_string_literal: true

def swear_words
  dictionnary = []
  File.open('swear_words.txt', 'r') do |sw_f|
    sw_f.each_line { |sw_line| dictionnary << sw_line.chomp }

    counter = Hash.new(0)
    dictionnary.each do |entry|
      File.open('shakespeare.txt', 'r') do |f|
        f.each_line do |line|
          line.split(' ').each do |word|
            counter[entry] += 1 if word.include?(entry)
          end
        end
      end
      p counter
    end
  end
end

swear_words
