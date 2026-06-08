require_relative '../lib/michel_trader'

describe "the day_trader method" do
  it "should return two best value day" do
    expect(day_trader([17, 3, 6, 9, 15, 8, 6, 1, 10])).to eq([1,4])
  end
  it "should return two best value day" do
    expect(day_trader([1,2,3,4,6,7,8,9,10])).to eq([0,8])
  end
end