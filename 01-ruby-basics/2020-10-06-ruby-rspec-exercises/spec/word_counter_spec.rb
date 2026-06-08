require_relative '../lib/word_counter'

dictionnary = ["below", "down", "go", "going", "horn", "how", "howdy", "it", "i", "low", "own", "part", "partner", "sit"]


describe "the word counter method" do
  it "should return the number of dictionnary word inside a string" do
    expect(word_counter("below", dictionnary)).to eq({"below"=>1, "low"=>1})
  end
  it "should return two best value day" do
    expect(word_counter("Howdy partner, sit down! How's it going?", dictionnary)).to eq({"down"=>1, "how"=>2, "howdy"=>1,"go"=>1, "going"=>1, "it"=>2, "i"=> 3, "own"=>1,"part"=>1,"partner"=>1,"sit"=>1})
  end
end