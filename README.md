# 2021-fall-cs160-team-groot
CS-160 Project


Front-end Testing Description 
-----------------------------
Path to automated tests: 2021-fall-cs160-team-groot/react-frontend/src/testing/cypress/integration

searchPageTest.js 
Test 1: Tests search functionality with both 'Diet' and 'Restrictions' filters along with a user text input. With these valid inputs, this test should successfully pass the test case
Test 2: Tests search functionality by providing user input with mixed caps. Mixed caps should not affect the search functionality and should return a recipe name if user input can be found in Recipe database
Test 3: Tests search functionality by providing invalid user input - a string consisting of only spaces. The search page should return an error mentioning that the recipe cannot be found
Test 4: Tests search functionality by clicking on a certain category to search by but inputting text of a completely different category. It should return an error because of the dissimilar categories. 

signInTests.js
Test 1: Tests sign in page by submitting both an empty username and password input. This should result in an unsuccessful sign in and an error message alert. 
Test 2: Tests sign in page by submitting a valid username and password input, which should redirect the user to a different page 
Test 3: Tests sign in page by submitting only the username input but a missing password input. This should result in an unsuccessful sign in and an error message alert.
Test 4: Tests sign in page by submitting only the password input but a missing username input. This should result in an unsuccessful sign in and an error message alert.
