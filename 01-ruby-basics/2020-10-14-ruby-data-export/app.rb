
require 'bundler'
Bundler.require

$:.unshift File.expand_path("./../lib", __FILE__)
require 'app/scrapper'


def save_as_JSON
  tempHash = Scrapper.new.perform
  File.open("db/emails.json","w") do |f|
    f.write(JSON.pretty_generate(tempHash))
  end  
end

def save_as_speadsheet
  session = GoogleDrive::Session.from_service_account_key("client_secret.json")  
  book = Spreadsheet::Workbook.new
  sheet1 = book.create_worksheet(name: 'Mairies du 95')
  tempHash = Scrapper.new.perform
  tempHash.each.with_index do |hashs, idx| 
    hashs.each {  |key, value| sheet1.row(idx+1).push(key, value) }
  end
  book.write('/Users/martin/Documents/Web_Dev/THP/W4/J3/Scrapping_Sheets/db/book.xls')
end

def save_as_csv
 
  tempHash = Scrapper.new.perform
   csv = CSV.open("db/mairies.csv", "a+") do |csv|
    tempHash.each do |hashs|
    hashs.each do |key, value|
       csv << [key, value]
      end
    end
  end
end

save_as_csv
#sheet1.row(idx).push(key, value)