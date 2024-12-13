import matplotlib.pyplot as plt
import numpy as np

categories = np.array(['Employee A', 'Employee B', 'Employee C', 'Employee D', 'Employee E', 'Employee F', 'Employee G', 'Employee H', 'Employee I', 'Employee J'])
performance = np.array([98, 91, 79, 63, 51, 92, 87, 73, 45, 66])
leaves_taken = np.array([9, 10, 20, 17, 20, 6, 16, 16, 1, 19])
age = np.array([21, 24, 24, 60, 30, 40, 42, 57, 44, 27])
extra_curricular = np.array([0, 0, 4, 2, 1, 0, 1, 5, 1, 5])
team_size = np.array([6, 3, 4, 6, 8, 6, 6, 9, 10, 3])

plt.suptitle("Employee Performance Assessment")

# Helper function to sort data for plotting
def sort_data(x, y, z):
    sorted_indices = np.argsort(x)
        # np.argsort is a function that returns the indices that would sort an array. It doesn't directly sort the array but provides the order in which the elements should be arranged to achieve a sorted array.
    return x[sorted_indices], y[sorted_indices], z[sorted_indices]

# Subplots
# Plot 1: Leaves taken vs Performance
plt.subplot(2, 2, 1)
sorted_leaves_taken, sorted_performance, sorted_categories = sort_data(leaves_taken, performance, categories)
for x, y, name in zip(sorted_leaves_taken, sorted_performance, sorted_categories):
    plt.text(x, y, name, fontsize=8, ha='right', va='bottom')
# The zip function is a Python built-in that combines multiple iterables (like lists, tuples, etc.) into a single iterable of tuples.
# Without zip we have to use indices
    # for i in range(len(sorted_team_size)):
    # x = sorted_team_size[i]
    # y = sorted_performance[i]
    # name = sorted_categories[i]
    # plt.text(x, y, name, fontsize=8, ha='right', va='bottom')

plt.plot(sorted_leaves_taken, sorted_performance, c='red', marker='o')
plt.xlabel("Leaves taken", c='blue')
plt.ylabel("Performance", c='blue')
plt.grid(color='green', linestyle='--', linewidth=0.5)

# Plot 2: Age vs Performance
plt.subplot(2, 2, 2)
sorted_age, sorted_performance, sorted_categories = sort_data(age, performance, categories)
for x, y, name in zip(sorted_age, sorted_performance, sorted_categories):
    plt.text(x, y, name, fontsize=8, ha='right', va='bottom')
plt.plot(sorted_age, sorted_performance, c='red', marker='o')
plt.xlabel("Age", c='blue')
plt.ylabel("Performance", c='blue')
plt.grid(color='green', linestyle='--', linewidth=0.5)

# Plot 3: Extra Curricular Activities vs Performance
plt.subplot(2, 2, 3)
sorted_extra_curricular, sorted_performance, sorted_categories = sort_data(extra_curricular, performance, categories)
for x, y, name in zip(sorted_extra_curricular, sorted_performance, sorted_categories):
    plt.text(x, y, name, fontsize=8, ha='right', va='bottom')
plt.plot(sorted_extra_curricular, sorted_performance, c='red', marker='o')
plt.xlabel("Extra Curricular Activities", c='blue')
plt.ylabel("Performance", c='blue')
plt.grid(color='green', linestyle='--', linewidth=0.5)

# Plot 4: Team Size vs Performance
plt.subplot(2, 2, 4)
sorted_team_size, sorted_performance, sorted_categories = sort_data(team_size, performance, categories)
for x, y, name in zip(sorted_team_size, sorted_performance, sorted_categories):
    plt.text(x, y, name, fontsize=8, ha='right', va='bottom')
plt.plot(sorted_team_size, sorted_performance, c='red', marker='o')
plt.xlabel("Team Size", c='blue')
plt.ylabel("Performance", c='blue')
plt.grid(color='green', linestyle='--', linewidth=0.5)

plt.show()

# ----------------------------------------------------------------------------------------
# Leaves taken by employee - bar graph

month = np.array(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
leaves_taken_by_an_employee = np.array([4,0,0,1,1,2,3,5,0,1,2,3])
font = {'family':'serif','color':'blue','size':16}
plt.xlabel("Month", font)
plt.ylabel("Leaves taken", font)
plt.grid(axis='y', c='green', linestyle='--', linewidth=0.5)
plt.bar(month, leaves_taken_by_an_employee, color='red')
plt.title("Leaves taken by an Employee")

plt.show()