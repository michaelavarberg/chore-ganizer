from concurrent.futures.process import _chain_from_iterable_of_lists
from multiprocessing.connection import deliver_challenge
from tkinter.messagebox import YES


class bedroomClass:
    name = "Bedroom"
    chores = ["Make bed", "Clean"]

class bathroomClass:
    name =  "Bathroom"
    chores = ["Clear off counter and wipe down", "Clean bathtub", "Sweep and clear off floor", "Wash mirror and sink", "Clean toilet", "Empty trash"]

class livingroomClass:
    name = "Living Room"
    chores = ["Clean off coffee table and wipe down", "Clean off counter and wipe down", "Vaccuum", "Declutter for a cat"]
#totalChoresList = [bedroomChoresList, bathroomChoresList, livingRoomChoreList]

#room_list = [bedroomClass, bathroomClass, livingroomClass]

bedroom = bedroomClass()
bathroom = bathroomClass()
living_room = livingroomClass()

import random

#Asks user a series of prompts and randomly selects chore for them to do. Deletes this chore from the list. 
def choresChoice():
    bed = input("Do you want a bedroom chore?")
    if bed == "yes":
        if len(bedroom.chores) == 0:
            print("You've completed all bedroom chores!")
            choresChoice()
        else:
            randNum = random.randrange(0,len(bedroom.chores))
            print(bedroom.chores[randNum])
            deletedItem = bedroom.chores.pop(randNum)
            print(bedroom.name)
            print(deletedItem + " has been removed from your chores list.")
    elif input("Do you want a bathroom chore?") == "yes":
        if len(bathroom.chores) == 0:
            print("You've completed all bathroom chores!")
            choresChoice()
        else:
            randNum = random.randrange(0,len(bathroom.chores))
            print(bathroom.chores[randNum])
            deletedItem = bathroom.chores.pop(randNum)
            print(bathroom.name)
            print(deletedItem + " has been removed from your chores list.")
    else:
        if len(living_room.chores) == 0:
            print("You've completed all living room chores!")
            choresChoice()
        else: 
            print("Well, you're getting a living room chore then!")
            randNum = random.randrange(0,len(living_room.chores))
            print(living_room.chores[randNum])
            deletedItem = living_room.chores.pop(randNum)
            print(living_room.name)
            print(deletedItem + " has been removed from your chores list.")
            
    again = input("Would you like to keep cleaning?")
    if again == "yes":
        choresChoice()
    else:
        print("Goodbye mrs. lazy")


choresChoice()




