def shakespeare_count 
dictionnary = ["the", "of", "and", "to", "a", "in", "for", "is", "on", "that", "by", "this", "with", "i", "you", "it", "not", "or", "be", "are"]

  counter = Hash.new(0)
  dictionnary.each do |entry|
  File.open("shakespeare.txt", "r") do |f|
    f.each_line do |line|
    line.split(' ').each do |word|
        if word.include?(entry)
          counter[entry] += 1
        end
      end
  end
  
end
 p counter
end
   
end

shakespeare_count