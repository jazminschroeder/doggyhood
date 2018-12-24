class PagesController < ApplicationController
  def home
    @featured_dogs = [
      { name: "Henry"},
      { name: "Susan"},  
      { name: "Max"},
      { name: "Tommy"}
    ]
  end
end
