import matplotlib
print(matplotlib.__version__)

import matplotlib.pyplot as plt
# matplotlib.pyplot is a module in the Matplotlib library used for creating plots and visualizations.
import numpy as np
# numpy is a library used for numerical operations in Python, such as working with arrays and mathematical functions.
    
xpoints = np.array([0, 6, 9, 12])
ypoints = np.array([0, 250, 300, 600])
# np.array Creates a NumPy array, which is a data structure optimized for numerical computations. It is similar to a Python list but more efficient for numerical operations.

plt.plot(ypoints, color='r', marker='o',linestyle=':')
# Syntax: plot(x, y, fmt, **kwargs)
    # x - The data for the x-axis
    # y - The data for the y-axis
    # fmt - (optional) A format string to specify color, line style, and marker
    # kwargs - (optional) Additional keyword arguments for customization, e.g., color, linewidth, etc.
# keyword arguments(kwargs) allow you to pass additional styling options beyond the basic format string (fmt)
# Subsequent parameters deal with stylings

# Plotting x and y points
    # plot() draws a line from point to point.
    # It accepts an array with 'n' values (points to be marked on x and y axis)
    # 'n' should be same for both x and y points to obtain the coordinates
    # Example: Say n=3 (means 3 plotting points in both x and y axis)
        # array for xpoints [0,6,9] 
        # array for ypoints [0,250,300]  
    # If we do not specify the points on the x-axis, they will get the default values 0, 1, 2, 3 etc., depending on the length of the y-points. 

plt.show()

# show method generates an image that can be saved in different formats
# To integrate this into website directly, save the image using plt.savefig(img, format='png') and send this as a response when the user submits the form with coordinates.  

# fmt and kwargs Parameters
    # 1. marker: .(Point), ,(Pixel), o(Circle), v(Triangle Down), ^(Triangle Up), <(Triangle Left), >(Triangle Right), 1(Tri Down), 2(Tri Up), 3(Tri Left), 4(Tri Right), s(Square), p(Pentagon), *(Star), h(Hexagon1), H(Hexagon2), +(Plus), x(X), D(Diamond), d(Thin Diamond), |(Vertical Line), _(Horizontal Line)
        # Example: marker = 'o'
    # 2. linestyle/ls: -(Solid), --(Dashed), :(Dotted), -.(Dash-dot), None
    # 3. color/c: Example: color = 'r'
    # 4. markersize/ms: Example: 20
    # 5. markeredgecolor/mec: Example: mec = 'r'
    # 6. markerfacecolor/mfc: Example: mfc= 'r'
    # 7. linewidth: Example: linewidth = '20'

# Multiple Lines:
    # We can draw 'n' lines
    # Example:
    
x1 = np.array([1,2,3,4])
x2 = np.array([1,2,3,4])
y1 = np.array([3, 8, 1, 10])
y2 = np.array([6, 2, 7, 11])

plt.plot(x1,y1,x2,y2)

plt.show()

# Matplotlib Labels and Title
# Syntax for title, xlabel and ylabel
    # plt.title(label, **kwargs)
    # plt.xlabel(label, **kwargs)
    # plt.ylabel(label, **kwargs)

x = np.array([80, 85, 90, 95, 100, 105, 110, 115, 120, 125])
y = np.array([240, 250, 260, 270, 280, 290, 300, 310, 320, 330])

plt.plot(x, y)

font1 = {'family':'serif','color':'blue','size':20,}
font2 = {'family':'serif','color':'darkred','size':15}


plt.title("Sports Watch Data", font1, loc='left')
    # default location value is center
plt.xlabel("Average Pulse", font2)
plt.ylabel("Calorie Burnage", font2)

plt.grid(axis='x', color = 'green', linestyle = '--', linewidth = 0.5)
# grid() shows a grid at the background
# We can specify which grid lines to display (default is both)
# The grid can also be customised too
plt.show()

# Subplot
    # We can draw as many graphs/plots we need in one figure.
    # We have to just describe the number of rows, columns, and the index of the plot.
    # Lets say we need 6 plots. It can be achieved with different combinations.
        # a) 1 row and 6 columns
        # b) 2 rows and 3 columns
        # c) 3 rows and 2 columns
        # d) 3 rows and 3 columns
        # e) 6 rows and 1 column
    # syntax: plt.subplot(nrows, ncols, index)
    # Example: 3 rows and 2 columns (say option c) is our choice) and when index is 3, this is where the plot will occupy its position in the image.
        # -----------------------
        # |      |      | This  |
        # |      |      | is our|
        # |      |      | plot  |
        # -----------------------
        # |      |      |       |
        # |      |      |       |
        # |      |      |       |
        # -----------------------

#plot 1:
x = np.array([0, 1, 2, 3])
y = np.array([3, 8, 1, 10])

plt.subplot(2, 3, 3)
plt.plot(x,y)

plt.suptitle("Testing")
# Title for the entire image

plt.show()

# Scatter plots
    # Instead of using .plot(), we will be using .scatter()

x = np.array([5,7,8,7,2,17,2,9,4,11,12,9,6])
y = np.array([99,86,87,88,111,86,103,87,94,78,77,85,86])

plt.scatter(x, y, c='black')
# Individual dots can also be colored as follows
# colors = np.array(["red","green","blue","yellow","pink","black","orange","purple","beige","brown","gray","cyan","magenta"])
# plt.scatter(x, y, c=colors)
plt.show() 

# Colormap
    # They are used to map numerical data to colors. 
    # They are especially useful for visualizing continuous data, such as when plotting heatmaps, contour plots, or 3D surface plots.
    # A colormap is a range of colors (range is same as number of xy data) that can be mapped to values to make the visualization more informative.

x = np.array([5,7,8,7,2,17,2,9,4,11,12,9,6])
y = np.array([99,86,87,88,111,86,103,87,94,78,77,85,86])
colors = np.array([0, 10, 20, 30, 40, 45, 50, 55, 60, 70, 80, 90, 100])
sizes = np.array([20,50,100,200,500,1000,60,90,10,300,600,800,75])

plt.scatter(x, y, c=colors, cmap='viridis', s=sizes, alpha=0.5)
# cmap can have different values such as viridis, inferno, plasma, etc.
# Each of them will have different and starting and ending colors by which the range of colors also differ.
# Append the cmap value with '_r' to reverse the color change
# size can be represented as size/s
# alpha represents the transparency
plt.colorbar()
# If you want the colorbar to be shown along with the image, call the function colorbar()
plt.show()

# Bars

x = np.array(["A", "B", "C", "D"])
y = np.array([3, 8, 1, 10])

plt.bar(x,y, color='red', width=0.2)
# bar() can be represented in horizontal layout too (default value is vertical)
# for horizontal layout => bary(x,y)
# Also, when using bary, replace height with width
plt.show()

# Histograms    
    # It is used to represent the distribution of a dataset.
    # It divides the range of the data into intervals (bins). Each bin represents a range of values, and the height of the bar represents the number of data points within that range.
        # The x-axis represents the range of values into bins.  
        # The y-axis represents the frequency (count) of data points in each bin.
x = np.random.normal(170, 10, 250)
    # syntax: np.random.normal(mean, std, size):
        # Generates size (250 in this case) random numbers from a normal (Gaussian) distribution.
        # mean=170: The average value (center of the distribution).
        # std=10: The standard deviation, which controls the spread of the data.
        # The result is an array (x) of 250 values centered around 170, with most values falling within 10 units of 170.

plt.hist(x)
plt.show() 

# Pie Charts
    # Imagine a cirlce. From the center draw an x-axis (only the right side). By default this line is the start angle(reference line) from which the wedges (imagine a pizza) are added in counter-clockwise.
    # This start angle can be customised with a property called 'startangle'

y = np.array([35, 25, 25, 15])
mylabels = ["Apples", "Bananas", "Cherries", "Dates"]
myexplode = [0.2, 0, 0, 0]
mycolors = ["black", "green", "red", "yellow"]
# If you want to see the exploded view of one particular item use the explode property. Here Apples will be pulled away 0.2 fraction of the circle from the center  

plt.pie(y, labels = mylabels, startangle = 90, colors = mycolors, explode = myexplode, shadow = True)
# shadow property adds shadow to the pie (somewhat mimicks a 3d look)
plt.legend(title = "Four Fruits:", loc='upper right')
# A legend is a box that shows what each color, line, or symbol in a graph represents.
# loc='best',bbox_to_anchor=(1, 1.1) => This will make sure that the legend doesnt overlap the pie-chart or bar-graph
    # bbox_to_anchor=(x, y, width, height) where x and y are mandatory
        # x=0 is the left edge of the plot.
        # x=1 is the right edge of the plot.
        # y=0 is the bottom of the plot.
        # y=1 is the top of the plot.
plt.show()