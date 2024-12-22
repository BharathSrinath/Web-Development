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