### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

# Ultimate Tic-Tac-Toe

This was my first project for the General Assembly Software Engineering Immersive course. I chose to build ‘Ultimate Tic-Tac-Toe’ which is inspired by the classic children’s game. 
In this variation, each cell of the Tic-Tac-Toe board is a game of Tic-Tac-Toe. These players have to win a row of three of the smaller cells to win the ultimate game.
The lucky first player can choose to go anywhere they want on the board. The second player, however, must go to the corresponding cell that the first player previously went in.
This makes it quite a complex game to win, as well as code.

# Deployment Link

https://robsness23.github.io/project-1/

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662840695/Screenshot_2022-09-09_at_15.54.47_li37ot.png)











    
## Timeframe & Team

We were given 3 weeks to complete this solo project. As I work full time, I only worked on it in the evenings and weekends.
## Tech Stack

• JavaScript

• HTML

• CSS

• Git

• GitHub

• Google Fonts

• Excalidraw







## Project Brief

• The game should be playable for two players on the same computer, taking turns to make their moves 

• The winner should be displayed when the game is over

• Include separate HTML, CSS and JavaScript files

• Deploy your game online


## Planning

My planning for this project was based on reaching MVP and then scaling things up from there. One of my biggest errors looking back was giving myself over a week and a half to reach MVP, and I completely underestimated that my MVP (one normal Tic Tac-Toe board with normal Tic-Tac-Toe logic) would be incredibly difficult to scale up to the Ultimate Tic-Tac-Toe.

**Week One**

MVP Goal

•Grid is generated, initially only one 3 * 3 grid for basic Tic-Tac-Toe game

•JavaScript logic works as per the game rules on only one Tic-Tac-Toe grid

•Basic styling

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662841911/Screenshot_2022-09-01_at_18.08.52_dtymaf.png)

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662842068/Screenshot_2022-09-01_at_17.17.11_akdlw3.png)

**Week Two**

The Ultimate Goal

•Full 3 * 3 grid, each with 3 * 3 grid nested within them

•JavaScript logic works for smaller grid games and the larger, ultimate game

•JavaScript logic covers small winner, big winner as well as when players can go anywhere on the board

•Simplistic styling which emulates the nature of the game, with 80s inspired pastel palette 🎨

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662842184/Screenshot_2022-09-01_at_18.11.12_yikjdo.png)


![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662842567/Screenshot_2022-09-01_at_17.18.25_tkgrzb.png)

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662842578/Screenshot_2022-09-01_at_17.18.33_zpmhk0.png)

**Week Three**

•Polishing

•Styling 

•Bug fixes

•Music player with calming soundtrack





## Build Process

My initial step was to create a function that would generate my grid in a for loop. This had to be a for loop with a nested for loop inside of it to account for the “bigGrid” and the smaller grids with each of the “bigGrids” cells.

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662842903/Screenshot_2022-09-01_at_18.17.06_a7cdeb.png)

Above you can see the function is creating the bigGrid and pushing on a cell which has the attribute id as the index number. This is what creates the 3 * 3 big grid. From within that “for” loop which creates the big grid, I added a nested for loop which consisted of weeCells, which live inside cells. At this point, I really should have reconsidered my naming convention as things got confusing. I then added the weeCell into each cell, which creates the smaller 3 * 3 grid inside the cells. Importantly here, I added an eventListener to each weeCell. The game is played in the weeCells and not the cells hence the reason for this being placed on weeCells and not cells. 

An interesting bug that I came across with this function is that it would allow me to click several times on the same weeCell (and manage to change the ‘X’ to an ‘O’). I turned to Google on this and was able to find a really simple, DRY solution by adding the {once: true} within the eventListener. I was quite proud of this. 

Another element of the nested logic was setting up arrays for the winning combinations. So each weeCell would need to have a ‘winning combo’ and then every cell would also need to have a winning combo. These combos linked to the index numbers that were on each of the cells and weeCells. 

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662842989/Screenshot_2022-09-01_at_18.31.14_pb8f7t.png)

These arrays basically set out the diagonal, horizontal and vertical winning combinations.

The function where all the magic lives is my playGame function. First, I have had to set up some global variables so I could set some restrictions in playGame.

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662843215/Screenshot_2022-09-01_at_18.48.49_mlway8.png)

The first if statement is basically setting up the logic which restricts the players for playing any weeCell which does not match the cell index that the previous player played:

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662843270/Screenshot_2022-09-01_at_18.52.02_lzsjft.png)

If the above if statement conditions are not met then we move to the next if statement:

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662843321/Screenshot_2022-09-01_at_18.55.08_pm5ml4.png)

The above sets up the parameters in which the player can actually play, and where they can play. It also ensures that the weeCell they are playing in does not match the index of any of the disabledCells (this is an empty array in the global variables which is filled up with winning array indexes to ensure once a cell has been won, no players can play any other weeCells in that cell). 

Inside the if statement where isCellClickable === true, I set out the ‘symbols’ for each player which linked back to my global variables and player1 = ‘X’ and player2 = ‘O’. I enjoyed implementing this using modular.

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662843712/Screenshot_2022-09-01_at_19.08.44_lctokh.png)

From the above, you can see that I am adding ‘symbols’ to weeCell, these are ‘X’ and ‘O’. They are only added to weeCell when the game has started (isGameStarted = true). The if else if statement sets out whether the first click is player 1 or player 2.  Here you can see if click % 2 doesn’t  equal 0 then it is player 2 which takes the symbol of ‘O’ - this means that the second click will be player 2. Another interesting thing happening in the if statement is that the weeCellId is being pushed into a player2WeeCellArray - this is later checked against winning combos to determine winners. 

![App Screenshot](https://res.cloudinary.com/dlxbte5xh/image/upload/v1662843810/Screenshot_2022-09-01_at_19.21.10_zxlbyz.png)

 
## Challenges

The two if statements in the playGame function, one of which had two nested if statements inside of it really challenged me. I had to take a lot of time to ‘speak’ it through to myself to try to grasp it. A lot of this came down to not fully planning/spending time on understanding all the elements of the logic of the game itself and how to implement that in code. I feel if I had spent more time focused on the game logic, this code would have been a lot easier to execute. 




## Wins

• A deployed site

• Simple, effective design

• Working game






## Key Learnings

I struggled quite a bit with this project but I learnt so much from it on many levels. 
I think my initial step in the ‘wrong’ direction was choosing a project that was very heavily reliant on JavaScript logic, and nested logic. Looking back I was not prepared for that and the complexity that brought with it. I think I also should have really researched it a bit more, as finding inspiration or assistance was tough especially when it came to the nested logic. 
I learnt that planning is incredibly important, knowing exactly how long I should spend on the MVP and looking to what comes after that. I think I zeroed in on getting the MVP right, and once I had I had lost more than a week and then really struggled with the additional logic for the ultimate goal.


## Bugs

• No guidance for players to show them where they can next play 

• No guidance for players to see when a cell has been won except an alert




## Future Improvements 

• Game ‘rules’ are easier to understand for players. At the moment, the player has to track where to move next, nothing currently shows them (through highlighting weeCells and cells) where they have to move next

• Mobile responsive

• Score board

• Calm music to play in background

• Nicer alerts for winners
