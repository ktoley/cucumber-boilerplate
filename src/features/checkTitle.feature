Feature:
    To attract users to play
    The home page must contain each section heading

    Scenario: Check title of website includes brain games
        Given I open the url "https://www.lumosity.com/"
        Then I expect that the title contains the text "Brain Games"

    Scenario: Check that the logo is present
        Given I open the url "https://www.lumosity.com/"
        Then I expect that element "#logo" does exist

    Scenario: Check that the Carousel is displayed
        Given I open the url "https://www.lumosity.com/"
        When I scroll to element "#myCarousel"
        And  Element "#myCarousel" is visible
        Then I expect that element "#myCarousel" contains the text "1. Get your baseline"

