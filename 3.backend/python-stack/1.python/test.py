# Simple assignments
first_name = "Bharath"
last_name = "Srinath"
full_name = first_name + " " + last_name
age = 30
height = 175
print (type(age)) # It gives you the data-type
#print("Hello" + " " + full_name + age) You can't combine str and int. To achieve this you have to use typecasting (converting one data type to another). This is because you can concatenate only similar data types.
print("Hello" + " " + full_name + ". Your age is " + str(age))

# Multiple assignments
name, age, attractive = "Bharath ", 29, True
greet = "Hi Bharath! How are you?"
Bharath = Aravind = Margrave = 29
print(len(name)) #Finds the length of the string
print(name.find("B")) #Finds the index position of "B". Returns -1 if it is not present 
print(name.capitalize()) #Capitalizes the first letter
print(name.upper()) #upper-case the entire string
print(name.lower()) #lower-case the entire string
print(name.isdigit()) #returns true if it contains only digits
print(name.isalpha()) #returns true if it contains only alphabets (not even spaces are accepted)
print(name.count("a")) #counts the number of a's
print(name.replace("B", "S")) #replaces B with S
print(name.strip()) #removes the space before and after the name
print(greet.split()) #splits the string into different words based on spaces
# Output: ['Hi', 'Bharath!', 'How', 'are', 'you?']
# You can use for loop to print every word and store than in a variable like for word in words print(word). When you again use a for-loop, it will loop over individual characters
print(name*3) #multiplies the string

# User input
name = input ("What is your name?: ")
age = int(input ("What is your age?: "))
height = float (input ("How tall are you?: "))
# Just like in JS, everything user input will be considered string.
# But here we are converting them to int and float respectively
# Then while printing them, we are converting back to string 

print("Hello "+name)
print("You are "+str(age)+" years old")
# In Java we dont need to convert age/height to string as it happens automatically
print("You are "+str(height)+" cm tall")

# Mathematical functions
import math
pi = -3.14
x, y, z = 1, 2, 3
print(round(pi)) #upper/lower end depending upon the numbers after decimal point.
print(math.ceil(pi)) #upper end (For a negative number, you know what the higher end is right?)
print(math.floor(pi)) #lower end
print(abs(pi)) # It tells how far the number is from 0. So if the number is 299 or -299, it will result in 299 
print(pow(pi, 2)) #power of pi
print(math.sqrt(49))
print(max(x,y,z)) #Finds the maximum of given numbers
print(min(x,y,z)) #Finds the minimum of given numbers

# Slicing - It can be achieved in 2 ways. Through indexing or through slice()
# 1. Indexing: It can accept 3 arguments
    # first - starting index (inclusive)
    # second - ending index (exclusive)
    # third - step (if it is 2, every second character will be printed)
name = "Aravind Sharma" 
first_name = name [0:7] #shorthand is name [:7] => meaning name[start:end]
last_name = name [8:14] #shorthand is name [8:] => meaning name[8:end]
funky_name = name [0:14:2] #shorthand is name[::2] => meaning name[start:end:2]
reversed_name = name [0:14:-1] #shorthand is name[::-1] => meaning name[start:end:-1]
last_char = name [-1] #Simply prints the last character. -2 will print last before character and so on

print(name)
print(first_name)
print(last_name)
print(funky_name)
print(reversed_name)

# 2. Slice()
website1 = "http://google.com"
website2 = "http://edX.com"
# Syntax: sequence[start:stop:step]
print(website1[slice(7, -4)]) #In JS we used method operator (like website1.slice(7, -4))
print(website2[slice(7, -4)]) #-4 means from the end 

# Conditionals
age = int(input ("What is your age?: "))
if age >= 18: #Don't forget the colon
    print ("You can vote")
elif age >=60:
    print ("Just go and die if you dont vote")
else:
    print ("You cannot vote")

temp = int(input ("What is the temperature outside?: "))
if temp >=0 and temp <= 30:
    print("Hey you can go outside")
elif (temp > 30 and temp < 50) or temp < 0:
    print ("Oh no! You cannot go outside")
elif not(temp < 50):
    print ("You should seek shelter")

#Loops
# 1. While (There is no do-while in Python)
name  = None #None is a key word that could be used in place of an empty string ("")
while not name:
    name = input ("Enter your name: ")
print("Hello "+name)
# As long as the user enters something, it will keep prompting their name

# 2. for
import time
for i in range (10): # range keyword is mandatory for integers but not for strings
    print(i)
# range syntax:
    # range(start, stop, step)
    # if step is negative, we can reverse the range 
for i in range (50, 100, 2): #starts from 50 and end at 98 and counts every second number
    print (i)
for i in "Bharath Srinath": #prints every character line by line
    print (i)
for seconds in range (10, 0 , -1): #-1 means, it goes in reverse direction
    print (seconds)
    time.sleep(1) #1 second delay for every iteration. As you can see, we are not using curly braces. As long as the indendation is right, it will stay with in the for-loop. Next line is placed outside the loops
print ("Happy New year!")

# Nested loops
rows = int (input ("How many rows?: "))
columns = int (input ("How many columns?: "))
symbol = input ("Enter a symbol to use: ")

for i in range(rows): 
    for j in range(columns):
        print (symbol, end="") #end = "" will prevent the new line
    print()

# Control statements
# 1. break - terminates the loop entirely
# 2. continue - skips to the next iteration of the loop. Once the word continue is encountered, next lines are ingnored and it moves to the next iteration
# 3. pass = does nothing, acts as a placeholder. Similar to continue except that it continues the execution of the next lines.
while True:
    name = input("Enter your name: ")
    if name != "":
        break

phone_number = "123-456-7890"
for i in phone_number:
    if i == "-":
        continue #Whenever i = -, it will skip that, Hence the phone number will be printed without -
    print (i, end="")

for i in range (1, 21): #Say that i dont want to print 10
    if i == 10:
        pass
    else:
        print (i)
# continue vs pass: Use continue when you want to skip certain iterations in a loop based on a condition and use pass pass when a statement is syntactically required, but no code needs to be executed. 

# Lists (in C and JS we call them arrays)
food = ["idli", "dosa", "sambar", "red chutney", "green chutney"]
print(food)
for i in food:
    print(i)
food.append ("rasam") #adds to the list in the last position
print(food)
food.remove("idli")
print(food)
food.pop()  # removes the the element at the last position
print(food)
food.insert(0, "cake")  # inserts at the 0th position
print(food)
food.sort()
print(food)
food.clear() #empties the lists
print(food)

# 2D lists/multi-dimensional lists
drinks = ["coffee", "soda", "tea"]
dinner = ["pizza", "ham", "hotdog"]
dessert = ["cake", "ice-cream"]

food  = [drinks, dinner, dessert]
print (food)
for i in food:
    print(i)
    i.sort()
    print(i)
# We are printing the inner list - both unsorted an sorted
# Why not print(i.sort())? Because sort() doesnt return anything. Rather it modifies the original list
# That is why we need to use print(i) to print the sorted list 
# If we don't want to modify the original list and instead create a new sorted list, we can use the built-in sorted() function, which returns a new sorted list.

# tuple
# Tuples are Ordered, immutable collection of elements.
# We use () not []
# List v Tuple
    # |----------------------|---------------------------------|--------------------------------|
    # |Feature               |List                             |Tuple                           |
    # |----------------------|---------------------------------|--------------------------------|
    # |Definition            |Ordered, mutable collection of   |Ordered, immutable collection of|
    # |                      |elements.                        |elements.                       |
    # |----------------------|---------------------------------|--------------------------------|
    # |Methods               |Has methods like append(),       |Limited methods, e.g., count(), |
    # |                      |remove().                        |index().                        |
    # |----------------------|---------------------------------|--------------------------------|
    # |Hashable              |Not hashable; cannot be used as a|Hashable (if elements are       |
    # |                      |key in dictionaries.             |hashable), usable as dictionary |
    # |                      |                                 |keys.                           |
    # |----------------------|---------------------------------|--------------------------------|

student = ("Bharath", 21, "male")
print(student.count("Bharath")) # Number of times a specified value appears in the tuple. Here "Bharath" appears only once but "Srinath" doesnt appear (so returns 0).
print(student.count("Srinath"))
print(student.index("male")) # Gives the index value

for i in student:
    print (i)
if "Bharath" in student:
    print("Bharath is here")

# Set - Enclosed in {}
# It is an unordered (no indices - means no defined position or order) collection of unique elements
    # So when we try to access an element from the set, it may not be same as the order in which they were added.
    # So it means unlike lists and tuples, we cannot access elements in a set using an index (e.g., set[0]) or perform slicing (set[1:3]).  
# They are useful when you need to store distinct values and perform operations like union, intersection, and difference.
# They are mutable and heterogeneous
# No duplicate values

utensils = {"fork", "spoon", "knife"}
dishes = {"bowl", "plate", "cup", "knife"}

utensils.add("napkin")
print(utensils)
utensils.remove("fork")
print(utensils)  # utensils.clear() This doesn't print an empty {}. Rather it prints set()
dishes.update(utensils)  # update() is used to update dictionaries or sets. Adds from one dictionary/set to another 
print(dishes)
dinner_table = utensils.union(dishes) # removes duplicates and returns everything else
print(dinner_table)
dishes.difference(utensils) # finds the uncommon elements
print(dishes)  
common = utensils.intersection(dishes)  # finds the common elements
print(common)

# Dictionary - They are like objects in JS (Key-value pair). We don't use quotes for keys in JS unless we have special characters like 'dining_table'.
# They are changeable, unordered collection of unique key-value pairs
# They are fast because, they use hashing and hence allow us to access values quickly
capitals = {
    'India': 'Delhi',
    'Pakistan': 'Karachi',
    'Nepal': 'Kathmandu',
    'SriLanka': 'Colombo'
}
capitals.update({'Germany': 'Berlin'})
capitals.update({'USA': 'Washington DC'})
capitals.pop('Pakistan')  # It will remove the key-value pair

print(capitals['India'])  # Don't use this method. use get() instead. If you request with a key that don't exist, it will throw an error. Rather using get methods will return us 'none'
print(capitals.get('India'))
print(capitals.keys())  # prints the key's alone
print (capitals.values())  # prints the values alone
capitals.clear()

books = []
for i in range(3):
    book = dict()
    book["Title"] = input("Title: ").strip().capitalize()
    book["Author"] = input("Author: ").strip().capitalize()
    books.append(book)
print(books)

for book in books:
    print(book["Title"])

# Functions - Declared with keyword 'def'
def add(a, b):
    c = a + b
    print(c)
add(5, 2)

def name (first, last, age):
    print("Hello " +first + " " +last + ". Your age is "+str(age))
name ("Bharath", "Srinath", 29)

# Now these arguments are called positional arguments. Because the arguments and received should be in same position
# But there are arguments knows as keyowrd arguments. They are accompanied with an id. Hence their positions doesn't matter.

def hello (first, middle, last):
    print ("Hello "+first+" "+middle+" "+last )
hello(last = "Srinath", first = "Bharath", middle = "Srinivasan")

# *args - It is a parameter that will pack all arguments into a tuple
# When we pass 2 arguments, we need to have 2 variables to receive those arguments in a function declaration
# But with args we can just use one variable name preceded with *

def add(*args):
    sum = 0
    for i in args:
        sum += i
    return sum
print(add(1,2,3,4,5,6))
# You have to keep in mind that unlike lists (arrays in JS), tuple cannot be changed.
# We have to convert that into lists like below

def add1(*args):
    sum = 0
    # args[0] = 7  (This is not possible. Error will be "TypeError: 'tuple' object does not support item assignment")
    args = list(args)  # convert them to list
    args[0] = 7
    for i in args:
        sum += i
    return sum
print(add1(1,2,3,4,5,6))

# **kwargs - Similar to args. But it will pack arguments into dictionary.
# args are for positional arguments, kwargs are for keyword arguments.

def hello(**kwargs):
    print("Hello "+kwargs["first"]+" "+kwargs["last"])

hello(first="Bharath", last="Srinath")

def hello(**kwargs):
    print("Hello ", end="")
    for key,value in kwargs.items():
        print(value, end="")
hello(title="Mr.", first="Bharath ", middle="Srinivasan ", last="Srinath")

# str.format() = optional method that gives users more control when displaying output

animal = "cow"
item = "moon"

print("The {} jumped over the {}". format(animal, item))  # Positional arguments
print("The {1} jumped over the {1}". format(animal, item))  # Arguments based on index
print("The {animal} jumped over the {item}". format(animal="cow", item="moon"))  # Keyword arguments

text = "The {} jumped over the {}"
print(text.format(animal, item))

name = "Bharath"
print("Hello, my name is {}".format(name))
print("Hello, my name is {:10}. Nice to meet you".format(name))  # It adds padding
print("Hello, my name is {:<10}. Nice to meet you". format(name))  # It adds padding and left align
print("Hello, my name is {:>10}. Nice to meet you". format(name))  # It adds padding and right align
print("Hello, my name is {:^10}. Nice to meet you".format(name))  # It adds padding and center align
print("Hello, my name is {0:10}. Nice to meet you".format(name))  # It adds positional argument and padding
print("Hello, my name is {name:10}. Nice to meet you".format(name="Bharath"))  # It adds keyword argument and padding

number = 3.14159
print("The number pi is: {:.2f}".format(number))  # Displays only the first 2 digits
print("The number is {number:,}". format(number=1000000))  # This is will add comma
print("The number is {number:b}".format(number=7))  # This will give you the binary value
print("The number is {number:o}".format(number=7))  # This will give you the octo value
print("The number is {number:x}".format(number=1000))  # This will give you the hexa-decimal value. (lower/upper case)
print("The number is {number:e}".format(number=2000))  # This will give you the scientific notation. (lower/upper case)


# Random numbers

import random
x = random.randint(1, 6)  # Generates a random integer
print(x)
y = random.random()  # Generates a random number (float)
print(y)
myList = ['rock', 'paper', 'scissors']
print(myList)
z = random.choice(myList)  # Picks a random a choice from a list
print(z)
cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"]
random.shuffle(cards)  # Randomly re-arranges
print(cards)

# exception = events detected during execution that interrupt the flow of a program
# We will execute them under try and make exceptions to the error so that they do not interfere with rest of the code
# To achieve this we should the type of error that will occur (like zeroDivisionError, ValueError, etc.)
try:
    numerator = int(input("Enter a number to divide: "))
    denominator = int(input("Enter a number to divide by: "))
    result = numerator / denominator
except ZeroDivisionError as e:  # 'as e' will also print the actual error apart from the customised error statement below
    print(e)
    print("You can't divide by zero! idiot!")
except ValueError as e:
    print(e)
    print("Enter only numbers plz")
except Exception as e:
    print(e)
    print("something went wrong :(")
else:  # If no error, then print this else statement
    print(result)
finally:  # 'finally' will execute irrespective of whether there are errors or we have arrived at a solution
    # Generally used for closing files which we will deal later
    print("This line will execute no matter what")

# Note about else
# Generally they are used in conjunction with if. But in Python they are used in other places too.
    # with try - above example
    # with for loop
        # for i in range(5):
        #   print(i)
        #   if i == 2:
        #        break
        # else: # It will be executed if the loop doesn't break
        #     print("Loop completed without a break.")
    # with while loop
        # for i in range(5):
        #     print(i)
        #     if i == 2:
        #         break
        # else:
        #     print("Loop completed without a break.")

# File detection
import os
path = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\web-development\\python\\dummy.py"
# You will have single backslash in the file path. But with in a string, you need double backslashes (\\) to escape a single backslash.
if os.path.exists(path):
    print("That location exists!")
    if os.path.isfile(path):
        print("That is a file")
    elif os.path.isdir(path):
        print("That is a directory!")
else:
    print("That location doesn't exist!")

# File reading, writing and appending
try:
    with open('test.txt') as file:
        # This command will open the file and will automatically close it once read ('with' keyword is reponsible for this )
        # 'with' is accompanied by 'as' followed by a variable name. Now the file will accessed with this variable name
        # 'with open' can take second argument. By default, it is 'r' meaning 'read' It can take 'w' or 'a'
        # test.txt is within the same folder as our dummy.py. Hence specifying the file name is sufficient. If not, you have to specify the entire path.
        print(file.read())
    print(file.closed)  # This will return 'true' if the file is closed. The file is closed automatically when the with block is exited.
except FileNotFoundError:
    print("That file was not found :(")

text = "Have a nice day! See ya"
with open('test.txt', 'a') as file:
    # 'w' will over-ride everything (You have read that i C)
    file.write(text)

# File copying
# copyfile() = copies contents of a file
# copy() = above + permission mode + destination can be a directory
# copy2() = above + copies metadata (file's creation and modification times)
import shutil
shutil.copyfile('test.txt', 'dest.txt')
# First argument is source file and second argument is destination file.
# Destination file will automatically created if doesn't exist

# Moving a file
import os
source = "test.txt"
destination = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\web-development\\python\\dummy.py"
try:
    if os.path.exists(destination):
        print("There is already a file with same name there")
    else:
        os.replace(source, destination)
        print(source+" was moved")
except FileNotFoundError:
    print(source+" was not found")

# Deleting a file
import os
import shutil
path = "test.txt"
try:
    os.remove(path)  # delete a file
    os.rmdir(path)  # delete an empty directory
    shutil.rmtree(path)  # delete a directory containing files
except FileNotFoundError:
    print("That file was not found")
except PermissionError:
    print("You do not have permission to delete that")
except OSError:
    print("You cannot delete that using that function")
else:
    print(path+" was deleted")

# module = a file containing python code. May contain functions classes etc.
# Used with modular programming, which is to separate a program into parts
import messages
messages.hello()
# import messages as m #  This uses a variable name so that we can use m.hello()
# from messages import hello,bye #  This will import only necessary functions from the module
# from messages import *  # this one is dangerous because it imports everything from the module and we can have naming conflict
# help("modules")  # This provides the inbuilt modules that python uses (Example: 'math')

# CSV module - It has DictReader(), DictWriter, reader, writer
import csv

books = []
with open("books.csv") as file:
    file_reader = csv.DictReader(file) # This will parse everything into dictionary format
    # if we use csv.reader(file), the output will be a simple list. There are no seggregation based on key/value like above.
    for book in file_reader:
        print (book) # This will print everything
        print (book["Title"]) # Here, we are printing only the values with the key "Title"

import csv

with open("favorites.csv", 'r') as file:
    reader = csv.DictReader(file)
    counts = {}
    for row in reader:
        favorite = row["language"] # Here favorite will the name of the language
        if favorite in counts:
            counts[favorite] += 1
        else:
            counts[favorite] = 1
            # counts [favorite] means counts ['Python'] or counts [C] or counts [scratch]
            # Here we are assigning the value 1. Now the key-value pair becomes Python: 1 or C: 1 or Scratch: 1
            # From now on, the if condition will be satisfied and the value will be updated

print (counts)
print (counts.items())
for favorite in counts:
    data = f"{favorite}: {counts[favorite]}"
    print(data)

sorted_counts = dict(sorted(counts.items(), key= lambda items: items[1]))
print(sorted_counts)

for favorite in sorted_counts:
    data = f"{favorite}: {sorted_counts[favorite]}"
    print(data)



# Another way to do it
# def get_value(language):
#     return counts[language]
#
# for favorite in sorted (counts, key = get_value):
#     data = f"{favorite}: {counts[favorite]}"
#     print(data)

# or without converting into dict

# for favorite in sorted(counts, key= lambda language: counts[language]):
#     print(f"{favorite}: {counts[favorite]}")

# Lets say you just want the user their favorite langauge and now you have to show how many people have chosen that language alone?
while True:
    favorite_input = input("\nWhat is your favorite language?: ").capitalize()
    if favorite_input in counts:
        break
    print("Invalid input. Please enter a valid favorite language.")

print(f"{favorite_input}: {counts[favorite_input]}")

# OOP
# Classes by convention starts with capital letter
# You remember how we add/remove/alter a property to an object in JS? We use method operator and go its prototype property and we add/delete/alter
# We can do this for objects that we have created too.
# In JS, we directly create an object and inheritance is based on the prototype chain. In Python, objects are explicitly defined using the class keyword, and objects are instantiated (creating an instance) from these classes.
    # Example: You can create a class names Animal. Now different animals like dog, cat, tiger, lion can be created as objects and can inherit some of the characteristics of Animals from Animal class
# Below examples are exactly similar to constructor functions with classes in JS. But under the hood, JS follows proto-type based inheritance. Structurally they look the same.

class Point:
    def move(self):
        print("move")
    def draw(self):
        print("draw")

# point1 is the new instance of the class Point. i.e., point1 is the 'object' of Point class
# You remember how we do the same thing with JS? We create a constructor function with keyword'new' 
point1 = Point()
point1.x = 10
point1.y = 20
print(point1.x)
point1.draw()

point2 = Point()
# print(point2.x)  This line throw us an error because x is associated only with the object named point1 and not with point2

# In JS, we have 'this' keyword which refer to that instance of an object. Similarly in Python we have 'self' keyword
# In JS, 'this' is implicitly set based on how a function is invoked, whereas in Python, 'self' is explicitly passed as the first parameter to methods within a class.
# In JS, we use 'new' keyword while creating the instance and 'constructor' keyword under the class. In Python, we dont use anything while creating an instance. But we use __init__ under the class.
# The __init__ method is a special method in Python classes that is automatically called when an object is created.
# It is used for initializing the attributes or properties of an object with values provided during instantiation.
# It runs once when a new object is created from the class.

class Person:
    def __init__ (self, name):
        self.name = name
    def talk(self):
        print(f"Hi! I am {self.name}")
# In JS we use ${} known as template literal achieves exactly the same thing as in Python f"{}" known as formatted string.
person1 = Person("Bharath")
person1.talk()

person2 = Person("Aravind")
person2.talk()


class Car:

    wheels = 4 
    # All the objects instanc will have the same value. This is know as class variables. 
    # You can change this for a particualr instance too. Liek car2.wheels = 2. Now car1 will have wheels = 2, while other instances will have wheels = 4. This is known as over-riding

    def __init__(self, make, model, year, color):
        self.make = make
        self.model = model
        self.year = year
        self.color = color
    # make, model, year and color are know as instance varaibels as their values depend on that particular instance
    def drive(self):
        print (f"{self.model} car is driving")
    def stop(self):
        print (f"{self.model} car has stopped")

car1 = Car("Chevy", "Corvette", 2021, "blue")
print(car1.make)
print(car1.model)
print(car1.year)
print(car1.color)
car1.drive()

car2 = Car("Tata", "Nixon", 2022, "white")
print(car2.make)
print(car2.model)
print(car2.year)
print(car2.color)
car2.stop()

# Classes can be in one file and objects can be in other file too. 
# We can just import it using the command => imprt className from fileName 

# Inheritance
class Mammal:
    def walk(self):
        print("Walk")

class Dog(Mammal):
    def bark(self):
        print("bark")

class Cat(Mammal):
    def meow(self):
        print("meowww")

# class Dog and Cat inherits the attributes and methods of Mammal

dog1 = Dog()
dog1.walk()
cat1 = Cat()
cat1.meow()

# Multi-level inheritance: 
# In a simple inheritance child inherits from parents
# In multi-level inheritance child inherits parents, grand-parents, etc.
# Technically, in multi-level inheritance, derived (child) class inherits another derived (child) class
    # The second class (mentioned above) is a parent for the first class but the second itself a child for another class which makes the second as a derived class too. Hence both of them are derived class.

class Organism:

    alive = True

class Animal(Organism):

    def eat(self):
        print("This animal is eating")

class Dog(Animal):

    def bark(self):
        print("This dog is barking")


dog = Dog()
print(dog.alive)    # inherited from the Organism class
dog.eat()           # inherited from the Animal class
dog.bark()          # defined in Dog class

# Multiple inheritance
# Here, a child class is derived from more than one parent class

class Prey: # Parent 1

    def flee(self):
        print("This animal flees")

class Predator: # Parent 2

    def hunt(self):
        print("This animal is hunting")

class Rabbit(Prey):
    pass

class Hawk(Predator):
    pass

class Fish(Prey, Predator): # Multiple inheritance
    pass


rabbit = Rabbit()
hawk = Hawk()
fish = Fish()

# Method over-riding

class Animal:
    
    #overriden method
    def eat(self):
        print("This animal is eating")

class Rabbit(Animal):
    
    #overriding method
    def eat(self):
        print("This rabbit is eating a carrot")


rabbit = Rabbit()
rabbit.eat()

# Method Chaining
# Calling multiple methods sequentially
# In JS, method chaining is often done implicitly without the need for explicit return this statements. But in Python, self needs to be returned explicitly.

class Car:

    def turn_on(self):
        print("You start the engine")
        return self

    def drive(self):
        print("You drive the car")
        return self

    def brake(self):
        print("You step on the brakes")
        return self

    def turn_off(self):
        print("You turn off the engine")
        return self


car = Car()

car.turn_on()\
    .drive()\
    .brake()\
    .turn_off()
# In JS, we just press enter to take it to the next line. But in python we have use backslash as a continuation character


# super() = Function used to give access to the methods of a parent class.
# It returns a temporary object of a parent class when used
# very important note:
    # If we do not define an __init__ method in the child class, it will inherit the __init__ method from the parent class automatically. That is what has happened in Square class
    # However, if we define your own __init__ in the child class, it overrides the parent class's __init__, and we need to use super() if we want to invoke the parent class's __init__ within the child class's __init__. This is what is happening in Cube class.
        # Actually without __init__ Cube will have access to length and width. But there is no height attribute. To initialize property we have to def __init__.
        # But when we def __init__ in child, it over-rides the def __init__ of parent. To access that we need used super()

class Rectangle:

    def __init__(self, length, width):
        self.length = length
        self.width = width

class Square(Rectangle):
    def area(self):
        return self.length*self.width

class Cube(Rectangle):
    def __init__(self, length, width, height):
        super().__init__(length, width)
        self.height = height

    def volume(self):
        return self.length*self.width*self.height


square = Square(3, 3)
cube = Cube(3, 3, 3)

print(square.area())
print(cube.volume())

# Abstract Classes
# Purpose: They are used when you want to define a common interface for a group of related classes. 
# A class becomes an abstract class when it has atleast one abstract method in it.
# It prevents a user from creating an object of that class
# It compels a user to override abstract methods in a child class. When an abstract method is inherited, the child compulsorily needs to provide a definition for that method 
# Hence, they are particularly useful in situations where you want to ensure that certain methods are implemented by all subclasses.

# abstract class = a class which contains one or more abstract methods. But it can also have concrete methods(methods with definition). But even the one abstract makes the class an abstract class.
# abstract method = a method that has a declaration but does not have an implementation.

from abc import ABC, abstractmethod
# abc means abstract base clasee

class Vehicle(ABC):

    @abstractmethod
    def go(self):
        pass
    # We cannot have any definition for an abstract class. Hence we can only use pass.

    @abstractmethod
    def stop(self):
        pass

class Car(Vehicle):

    def go(self):
        print("You drive the car")

    def stop(self):
        print("This car is stopped")

class Motorcycle(Vehicle):

    def go(self):
        print("You ride the motorcycle")

    def stop(self):
        print("This motorcycle is stopped")


#vehicle = Vehicle() - Cannot do this
car = Car()
motorcycle = Motorcycle()

#vehicle.go() - Cannot do this
car.go()
motorcycle.go()

#vehicle.stop() - Cannot do this
car.stop()
motorcycle.stop()

# Passing objects as arguments

class Car:

    color = None

class Motorcycle:

    color = None

def change_color(vehicle,color):

    vehicle.color = color


car_1 = Car()
car_2 = Car()
car_3 = Car()

bike_1 = Motorcycle()

change_color(car_1,"red")
change_color(car_2,"white")
change_color(car_3,"blue")
change_color(bike_1,"black")

print(car_1.color)
print(car_2.color)
print(car_3.color)
print(bike_1.color)

# duck typing = concept where the class of an object is less important than the methods/attributes
# Class type is not checked if minimum methods/attributes are present
# “If it walks like a duck, and it quacks like a duck, then it must be a duck.”

class Duck:

    def walk(self):
        print("This duck is walking")

    def talk(self):
        print("This duck is qwuacking")

class Chicken:

    def walk(self):
        print("This chicken is walking")

    def talk(self):
        print("This chicken is clucking")

class Person():

    def catch(self, duck):
        duck.walk()
        duck.talk()
        print("You caught the critter!")

# very simple. Look both duck and chicken 2 functions defined with them and both has same name.
# We have passed duck to catch() under class Person. But when we call the function we have passed chicken.
# duck.walk() and duck.talk() is what defined under catch(). But since we have passed chicken and both has same number of attributes with same name, chicken.walk() and chicken.talk() is executed.
        # Now this statemenet will make more sense to you => "Class type is not checked if minimum methods/attributes are present"
duck = Duck()
chicken = Chicken()
person = Person()

person.catch(chicken)

# walrus operator :=
# assignment expression aka walrus operator
# assigns values to variables as part of a larger expression

# happy = True
# print(happy) This code will print True
# print(happy = True) This code will throw us error. Because we need to assign the variable aa value first (like above)

print(happy := True) # This is where warlus operator comes in handy. Does this definition makes sense to you? (assigns values to variables as part of a larger expression)

# Without warlus operator:

# foods = list()
# while True:
#   food = input("What food do you like?: ")
#       if food == "quit":
#           break
#   foods.append(food)

# With warlus operator:

foods = list()
while food := input("What food do you like?: ") != "quit":
    foods.append(food)

# Higher order functions
# They either accepts functions as an argument or returns a function
# Just like JS, in Python too functions are treated as objects

# ----- 1. accepts a function as an argument -----
def loud(text):
   return text.upper()

def quiet(text):
   return text.lower()

def hello(func):
   text = func("Hello")
   print(text)


hello(loud)
hello(quiet)
# ------------ 2. returns a function -------------
def divisor(x):
   def dividend(y):
       return y / x
   return dividend


divide = divisor(2)
print(divide(10))  

# lambda function = function written in 1 line using lambda keyword
# Accepts any number of arguments, but only has one expression. (think of it as a shortcut)
# Useful if needed for a short period of time and then throw-away
#
# Syntax: lambda parameters:expression

double = lambda x: x * 2
print(double(1))

multiply = lambda x, y: x * y
print(multiply(1,2))

add = lambda x, y, z: x + y + z
print(add(1,2,3))

full_name = lambda first_name, last_name: first_name+" "+last_name
print(full_name("Bro","Code"))

age_check = lambda age: True if age >= 18 else False
print(age_check(18))

# sort() method   = used only with lists
# sorted() function = used with any iterables

students = ["Squidward", "Sandy", "Patrick", "Spongebob", "Mr.Krabs"]
students.sort(reverse=True)

for i in students:
    print(i)

students = (("Squidward", "F", 60),
            ("Sandy", "A", 33),
            ("Patrick", "D", 36),
            ("Spongebob", "B", 20),
            ("Mr.Krabs", "C", 78))

stud_grade = lambda grades: grades[1]
stud_age = lambda age: age[2]

sorted_students_grade = sorted(students,key=stud_grade, reverse=True)
for i in sorted_students_grade:
    print(i)

sorted_students_age = sorted(students,key=stud_age)
for i in sorted_students_age:
    print(i)
    
# Look carefully. When you pass key=grade to sorted, the sorted function internally calls the key function (grade in this case) with each element of the iterable (students). The lambda function is designed to accept one argument (grades), but when used as a key function with sorted, it is implicitly called with each element of students as an argument. 
# This ("Squidward", "F", 60) will be value of grades when passed to lambda. From this grades[1] will be returned. Now this will be done for all the students.
    
# map(): Different in JS and Python
# Python: 
    # It is a built-in function that applies a specified function to all items in an input iterable (e.g., a list)
    # It returns an iterator. You often need to convert it to a list or another iterable type to see the results.
    # Syntax: result = map(function, iterable)
# JavaScript: 
    # It is a method available on arrays. It creates a new array with the results of calling a provided function on every element in the calling array.     
    # It returns a new array
    # Syntax: const newArray = array.map(callback)

store = [("shirt",20.00),
         ("pants",25.00),
         ("jacket",50.00),
         ("socks",10.00)]

to_euros = lambda data: (data[0],data[1]*0.82)
# to_dollars = lambda data: (data[0],data[1]/0.82)

store_euros = list(map(to_euros, store))
# Here, each element from store will be passed the lambda function(to_euros)
# In first iteration, data will be ("shirt",20.00)
# lambda function will return the oth element as it is and perform some computation on the 1st element and then return
for i in store_euros:
    print(i)

# filter() - The difference in JS and Pythin is similar to map() 
# It creates a collection of elements from an iterable for which a function returns true
# Syntax: filter(function, iterable)

friends = [("Rachel",19),
           ("Monica",18),
           ("Phoebe",17),
           ("Joey",16),
           ("Chandler",21),
           ("Ross",20)]

age = lambda data:data[1] >= 18

drinking_buddies = list(filter(age, friends))

for i in drinking_buddies:
    print(i)

# reduce()
# Applies a function to an iterable and reduce it to a single cumulative value.
# It performs function on first two elements and repeats process until 1 value remains
# Syntax: result = reduce(function, iterable, initial)
    # An optional initial value. If provided, the function is first applied to the initial value and the first item in the iterable.

import functools

letters = ["H","E","L","L","O"]
word = functools.reduce(lambda x, y,:x + y,letters, "Hi. ")
print(word)

factorial = [5,4,3,2,1]
result = functools.reduce(lambda x, y,:x * y,factorial)
print(result)


# list comprehension =  a way to create a new list with less syntax
# Can mimic certain lambda functions, easier to read
# Syntax:
    # list = ['expression' 'for item in iterable']
    # list = ['expression' 'for item in iterable' 'if conditional']
    # list = ['expression' 'if/else' 'for item in iterable']

# Without list comprehension
squares = []                
for i in range(1,11):       
    squares.append(i * i)   
print(squares)

# With list comprehension
squares = [i * i for i in range(1,11)]
print(squares)

students = [100,90,80,70,60,50,40,30,0]

passed_students1 = list(filter(lambda x: x >= 60, students)) # Using filter and lambda
passed_students2 = [i for i in students if i >= 60] # Using list comprehension

passed_students3 = [i if i >= 60 else "FAILED" for i in students] 
# Using list comprehension where FAILED be printed for students less than 60 and marks will be printed for others
passed_students4 = ["PASSED" if i >= 60 else "FAILED" for i in students] 
# Using list comprehension where FAILED be printed for students less than 60 and PASSED for students > 60

print(passed_students1)
print(passed_students2)
print(passed_students3)
print(passed_students4)

# dictionary comprehension = create dictionaries using an expression
# Can replace for loops and certain lambda functions
# Syntax:
    # dictionary = {key: 'expression' 'for (key,value) in iterable'}
    # dictionary = {key: 'expression' 'for (key,value) in iterable' 'if conditional'}
    # dictionary = {key: '(if/else)' 'for (key,value) in iterable'}
    # dictionary = {key: 'function(value)' 'for (key,value) in iterable'}

cities_in_F = {'New York': 32, 'Boston': 75, 'Los Angeles': 100, 'Chicago': 50}
cities_in_C = {key: round((value-32)*(5/9)) for (key,value) in cities_in_F.items()}
print(cities_in_C)

weather = {'New York': "snowing", 'Boston': "sunny", 'Los Angeles': "sunny", 'Chicago': "cloudy"}
sunny_weather = {key: value for (key,value) in weather.items() if value == "sunny"}
print(sunny_weather)

cities = {'New York': 32, 'Boston': 75, 'Los Angeles': 100, 'Chicago': 50}
desc_cities = {key: ("WARM" if value >= 40 else "COLD") for (key,value) in cities.items()}
print(desc_cities)

def check_temp(value):
    if value >= 70:
        return "HOT"
    elif 69 >= value >= 40:
        return "WARM"
    else:
        return "COLD"


cities1 = {'New York': 32, 'Boston': 75, 'Los Angeles': 100, 'Chicago': 50}
desc_cities1 = {key: check_temp(value) for (key,value) in cities.items()}
print(desc_cities1)

# zip(*iterables) =  aggregate elements from two or more iterables (list, tuples, sets, etc.)
    # Any number of iterables can be passed
# Creates a zip object with paired elements stored in tuples for each element

usernames = ["Dude", "Bro", "Mister"]
passwords = ("p@ssword", "abc123", "guest")
login_dates = ["1/1/2021","1/2/2021","1/3/2021"]

users1 = list(zip(usernames,passwords))
for i in users1:
    print(i)

users2 = dict(zip(usernames,passwords))
for (key,value) in users2.items():
    print(key+" : "+value)

users3 = zip(usernames,passwords,login_dates)
for i in users3:
    print(i)


# if __name__ == "__main__":
# You will see this condition in many projects. Lets see what it is.

# In file1, you have an add function() and also you have called that function in that file to obtain some result.  As you develop the project, you are in need of that function again in file2. You can define it and use it in file2. But we will always try to reuse the lines of code as many times as possible. Hence we will import the function from the file1 and call the function in file2. When the function gets called in file2, it will also be executed in file1 too. Hence, we will see two results. But in file2, we dont want the execution of file1's result. When this is the case, we will use if__name__ == "__main__" in file1 which tells the 'interpreter' to execute the lines of code only when that condition is satsified. (That is only when file1 is execited directly)
    # When you run a Python file directly, the special variable __name__ is set to "__main__". So, the code under the if __name__ == "__main__" condition will only run when the file is executed directly.

# In React we will always import components. But we dont face such an issue. Why?
# React, being a JavaScript library, does not have the same behavior. In JavaScript, when you import a module, only the variables, functions, or classes explicitly exported from that module are accessible. The code outside of those exports is not executed upon import.

import time

print(time.ctime(0))    # convert a time expressed in seconds since epoch to a readable string
# epoch = when your computer thinks time began (reference point)
print(time.time())      # return current seconds since epoch
print(time.ctime(time.time())) # will get current time

# time.strftime(format, time_object) = formats a time_object to a string
# time object provides a huge list of details whcih is not completely readable. So we can use the above function to format that. There are many types of parameters that can be passed as 'format' (first argument) 
time_object = time.localtime() # local time
time_object = time.gmtime()  # UTC time
local_time = time.strftime("%B %d %Y %H:%M:%S", time_object)
print(local_time)

# time.strptime(string_string, format) = parses a string representing time/date and returns a struct_time object
time_string = "20 April, 2020"
time_object = time.strptime(time_string,"%d %B, %Y")
print(time_object)

# time.asctime(time_tuple) = accepts a time_object or a tuple up to 9 elements and returns a string
# (year, month, day, hours, minutes, secs, #day of the week, #day of the year, dst)
time_tuple = (2020, 4, 20, 4, 20, 0, 0, 0, 0)
time_string = time.asctime(time_tuple)
print(time_string)

# time.mktime(time_tuple) = accepts a time_object or a tuple up to 9 elements and return seconds since epoch
# (year, month, day, hours, minutes, secs, #day of the week, #day of the year, dst)
time_tuple = (2020, 4, 20, 4, 20, 0, 0, 0, 0)
time_string = time.mktime(time_tuple)
print(time_string)

# Threading
# At the hardware level, a thread refers to a sequence of instructions that can be executed independently by a CPU core. At the software level, a thread is an abstraction that represents an independent flow of execution within a program (Like a separate order of instructions).
# However each thread takes a turn running to achieve concurrency
# GIL = (global interpreter lock) allows only one thread to hold the control of the Python interpreter at any one time

# Concurrency vs Parallelism
# Concurrency is like having your friends in the candy shop with you to fill your bag with different types of candies. But only one can put the candy in the bag. During that time, others need to wait. Even though we are all in the candy shop at the same time (concurrent), only one of us can fill the bag with candies at a time because of some rule (akin to the GIL in Python).   

# Parallelism, on the other hand, is like having your friends in the candy shop with you, and each of you starts filling your own bag with candies. You all are doing the same task (filling the bag with candies), but you’re doing it at the same time. So, the task of filling candies in the bag is done much faster.

import threading
import time


def eat_breakfast():
    time.sleep(3)
    print("You eat breakfast")


def drink_coffee():
    time.sleep(4)
    print("You drank coffee")


def study():
    time.sleep(5)
    print("You finish studying")

# If we simply call the functions like eat_breakfast(), drink_coffee(), study(), it will take 12 seconds for the completion. But now every function will be executed at the same time. Hence it will take 5 seconds on the whole. 

# Even though only one thread is running at a given time (due to GIL), first thread is executed and it is going to wait for 3 seconds. Since it is just going to wait, next thread will execute the function that it is associated with. All of the happening in micro-seconds by the way. Hencem it is like all the 3 threads are starting simultaneously. But in reality they are taking turns to execute the functions associated with them.
    
x = threading.Thread(target=eat_breakfast, args=())
x.start()

y = threading.Thread(target=drink_coffee, args=())
y.start()

z = threading.Thread(target=study, args=())
z.start()

# The above threads are called implicitly by a main thread. Generally main threads' job is to just call the other threads and then execute the rest of the program. 
# Here, join() makes the main thread wait for the completion of x, y and z before procedding to the rest of the code. 

x.join()
y.join()
z.join()

print(threading.active_count()) # Prints the number of active threads. Active doesn't mean they are al executing (which is not allowed due to GIL). Active means, threads have started and are not yet terminated. 
print(threading.enumerate()) # This line prints a list of all thread objects that are currently alive.
print(time.perf_counter()) # It gives us the execution time

# 3 differemt scenarios
# 1. No manual threading involved: Here, all functions are run sequentially on the main thread. That’s why threading.active_count() returns 1 - it’s counting the main thread.
# 2. With join(): By the time we call threading.active_count(), all of these threads have finished their work and ended, so the only active thread left is the main thread. See we are join() means we are waiting for one function to complete beofre proceeding to the next. That’s why threading.active_count() returns 1. 
# 3. Without join(): By the time we call threading.active_count(), all of these threads are still running due to the time 3s, 4s and 5s. Since there is no join(), we are not waiting for each one to complete.


# Threading in Python is commonly used in various scenarios to achieve concurrent execution of tasks. Some of them are, 
# 1. Improving Responsiveness in GUI Applications:
    # Example: Improving Responsiveness in GUI Applications
# 2. Network Programming: Each thread can manage a separate connection, allowing the application to handle multiple clients concurrently.
# 3. Asynchronous I/O Operations: To perform asynchronous I/O operations, such as reading and writing to files or interacting with external services. This allows the program to continue executing other tasks while waiting for I/O operations to complete.
# 4. Web Scraping and Crawling: It is employed in web scraping and crawling applications to fetch and process multiple web pages concurrently. Each thread can handle a different part of the scraping process.
# 5. Background Task Execution: In scenarios where certain tasks can be executed in the background without affecting the primary functionality of the application.
# 6. Timer Threads: They are used to execute specific functions or tasks at scheduled intervals. This is useful for scenarios where periodic execution of tasks is required.

# daemon thread = a thread that runs in the background, not important for the program to run.
    # Example tasks: background tasks, garbage collection, waiting for input, long running processes
# Our program will not wait for daemon threads to complete the task that they are performing before exiting.
# non-daemon threads (above threads) cannot normally be killed. They stay alive until task is complete

# With respect to our candy analogy, let’s say one of our friend is responsible for keeping the shop tidy while everyone else is filling the bags with candy. This friend is like a daemon thread. They’re doing a helpful task (tidying up the shop), but it’s not essential to the main goal (filling bags with candies).
# If the shop were to close suddenly, it wouldn’t matter if our friend hadn’t finished tidying up. What’s important is that everyone else had as much time as possible to fill their bags with candies. In the same way, a daemon thread in programming does work in the background, and it doesn’t prevent the main program from ending. On the other hand, if a friend is still filling their bag when the shop closes, they would have to stop, even if they haven’t finished. This is like a non-daemon thread, which must complete its task before the main program can end.

import threading
import time

# It's a simple timer. Lets say that we have assigned a normal thread to timer(). Also we have an input at the bottom. So the main program will end only when the user types something. 
# In this case, when user types something we want the program to exit. But while conidtion will always be True. Hence the normal thread will be alive. Hope you remember that we can't write a code to kill them. They will be alive until the task is complete. 
# This is where daemon threads comes into pictur. When you set the thread to be a daemon thread, it will be stopped once the main theads ends.

def timer():
    print()
    count = 0
    while True:
        time.sleep(1)
        count += 1
        print("logged in for: ", count, "seconds")


x = threading.Thread(target=timer, daemon=True)
x.start()


answer = input("Do you wish to exit?")

# multiprocessing = running tasks in parallel on different cpu cores, bypasses GIL used for threading
# It is better for cpu bound tasks (heavy cpu usage) where as multithreading = better for io bound tasks (waiting around)

from multiprocessing import Process, cpu_count
import time


def counter(num):
    count = 0
    while count < num:
        count += 1


def main():

    print("cpu count:", cpu_count())

    a = Process(target=counter, args=(500000000,))
    b = Process(target=counter, args=(500000000,))

    a.start()
    b.start()

    print("processing...")

    a.join()
    b.join()

    print("Done!")
    print("finished in:", time.perf_counter(), "seconds")

# This conidtion is necessary for multi-processing. Because, When a new process is created using multiprocessing on Windows, a new Python interpreter is started in this process and it tries to import the module with the target function that should be executed.
    
if __name__ == '__main__':
    main()

# GUI
# widgets: They are GUI elements like buttons, textboxes, labels and images
# windows: Serves as a container to hold these widgets

from tkinter import *

window = Tk() #instantiate an instance of a window
window.geometry("420x420")
window.title("Bro Code first GUI program")

icon = PhotoImage(file='logo.png')
window.iconphoto(True,icon)
window.config(background="#5cfcff")

window.mainloop() #place window on computer screen, listen for events
