Feature: Verify user can guess correct words

@test
 Scenario: Verify to find correct Word
       Given all Chacracters from keyboard
        When enter all text from keyboard to guess present text
        Then program will permute postion of them until get correct word
        