require_relative '../lib/app_twitter.rb'

describe "the login_twitter method" do
  it "should return client, and client is not nil" do
    expect(login_twitter).not_to be_nil
  end
end

describe "the random picker method" do 
  it "should return 5 handles from the hanles array" do 
    expect(random_picker).not_to be_nil
  end
end