require 'sinatra'

get '/' do
  # erb :default
  # return 'I am testing'
  File.read(File.join('public', 'default.html'))
end
