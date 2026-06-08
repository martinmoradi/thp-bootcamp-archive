require_relative '../lib/caesar_cipher'

describe "the caesar cipher method" do 
  it "should" do
    expect(caesar_cipher("Bonjour", 1)).to eq("Cpokpvs")
  end

  it "should" do
    expect(caesar_cipher("Bonjour ceci est un test", 2)).to eq("Dqplqwt egek guv wp vguv")
  end

  it "should" do
    expect(caesar_cipher("Bonjour, il est 16h29!", 5)).to eq("Gtsotzw, nq jxy 16m29!")
  end
end

describe "the shift method" do 
  it "should" do
    expect(shift("y".ord, 122 , 97 , 10)).to eq("i")
    expect(shift("Z".ord, 90 , 65 , 8)).to eq("H")
    expect(shift("H".ord, 90 , 65 , 15)).to eq("W")
    expect(shift("s".ord, 122 , 97 , 25)).to eq("r")
  end
end




