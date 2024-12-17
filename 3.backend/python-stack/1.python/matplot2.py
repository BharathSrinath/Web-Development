import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import make_interp_spline

# Original data points
xpoints = np.array([0, 6, 9, 12])
ypoints = np.array([0, 250, 300, 600])

# Create a smooth curve
x_new = np.linspace(xpoints.min(), xpoints.max(), 300)  # 300 points between min and max x
spl = make_interp_spline(xpoints, ypoints, k=3)  # Cubic spline interpolation
y_smooth = spl(x_new)

# Plot the smooth curve
plt.plot(x_new, y_smooth, color='r', marker='o', linestyle=':')
plt.title("Smooth Curved Line Plot")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.show()
