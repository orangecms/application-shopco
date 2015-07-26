Feature: Home page

  As a cat on the web
  I want to see a useful list of stuff
  So that I can feel overwhelmed

  Background:
    Given I am on "/list"

    @dev
    Scenario: A first glance
      When I look at the page
      Then I should see the title "Demo for ShopCo"
      And I should see the heading "A short list"
