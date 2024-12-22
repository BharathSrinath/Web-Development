# Simple rock, paper, scissor program.
# Whoever gets first 3 points, wins the game

import random

computer_points, player_points = 0, 0 

while True:
    choices = ["rock","paper","scissors"]

    computer = random.choice (choices)
    player = None

    while player not in choices:
        player = input ("rock, paper, or scissors?: ").lower ()

    if player == computer:
        print("computer: ", computer)
        print("player: ",player)
        computer_points += 0.5
        player_points += 0.5

    elif player == "rock":
        if computer == "paper":
            print("computer: ", computer)
            print("player: ", player)
            computer_points += 1
    if computer == "scissors":
        print("computer: ", computer)
        print("player: ", player)
        player_points += 1

    elif player == "scissors":
        if computer == "rock":
            print("computer: ", computer)
            print("player: ", player)
            computer_points += 1
        if computer == "paper":
            print("computer: ", computer)
            print("player: ", player)
            player_points += 1

    elif player == "paper":
        if computer == "scissors":
            print("computer: ", computer)
            print("player: ", player)
            computer_points += 1
        if computer == "rock":
            print("computer: ", computer)
            print("player: ", player)
            player_points += 1
    
    if player_points >= 3 or computer_points >= 3:
        if player_points >= 3:
            print("You win!", str(player_points)+ " vs " + str(computer_points))
        if computer_points >= 3: 
            print ("You loose!", str(player_points)+ " vs " + str(computer_points))
        if player_points == computer_points:
            print("Tie!", str(player_points)+ " vs " + str(computer_points))
        play_again = input("Play again? (yes/no): ").lower()
        computer_points, player_points = 0, 0
        if play_again != "yes":
            break
    
print("Bye!")