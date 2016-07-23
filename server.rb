require 'sinatra'

set :bind, "0.0.0.0"

get '/' do
  # erb :default
  # return 'I am testing'
  File.read(File.join('public', 'default.html'))
end
