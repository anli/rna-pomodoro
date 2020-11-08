Feature: Home Screen

    Scenario: See Home Screen
        Given any
        When I am at Home Screen
        Then I should see 'Start Button'
        And I should see '25:00'

    Scenario: Start pomodoro countdown
        Given I am at Home Screen
        When I press 'Start Button'
        Then I should not see 'Start Button'
        And I should see 'Reset Button'

    Scenario: Reset pomodoro countdown
        Given I am at Home Screen
        And Countdown is 'Running'
        When I press 'Reset Button'
        Then I should see 'Start Button'
        And I should see '25:00'
