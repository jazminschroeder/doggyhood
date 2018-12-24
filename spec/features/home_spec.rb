require 'rails_helper'

RSpec.feature "Home feature", type: :feature do
  scenario "User visits root" do
    visit "/"
    expect(page).to have_current_path("/")
  end
end
