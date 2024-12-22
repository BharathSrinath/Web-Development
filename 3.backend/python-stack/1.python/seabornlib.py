import pymysql
import pandas as pd
# pandas is a library used for data manipulation and analysis, often for working with data in tabular form (like SQL results or CSV files).
import matplotlib.pyplot as plt
import seaborn as sns
# A data visualization library built on top of matplotlib, which provides a higher-level interface for drawing attractive and informative statistical graphics.
import numpy as np
from scipy.interpolate import make_interp_spline
# scipy/Scientific python is built on top of the numpy library and provides a wide range of functionalities for mathematical algorithms, linear algebra, optimization, integration, interpolation, and more.

# Database connection setup
try:
    connection = pymysql.connect(
        host="localhost",
        user="root",
        password="",
        database="fb_conversion_charts"
    )
    print("Connected to MySQL database")

    # Query to get the event data
    query = """
    SELECT 
        e.event,
        COUNT(c.event_id) AS event_count
    FROM fb_conversions c
    JOIN fb_conversions_events e ON c.event_id = e.id
    WHERE c.storeid = 2 AND e.event IN ('Product List', 'PageView', 'Purchase','Add To Cart')
    GROUP BY c.event_id, e.event
    ORDER BY FIELD(e.event, 'Product List', 'PageView', 'Add To Cart', 'Purchase')
    """

    # Fetch the data using pandas
    data = pd.read_sql(query, connection)
    # read_sql method from pandas executes the SQL query and stores the result in a DataFrame, which is an in-memory 2D table-like structure for data. The result (data) will have columns event and event_count.
    # Here data represents the data frame

    # Check the data fetched
    print("Fetched data:")
    print(data)

    # Set up Seaborn style
    sns.set_theme(style="whitegrid")
    #  sets a background grid with white space for better readability.

    # Prepare the data
    xpoints = data['event']
    ypoints = data['event_count']
    # Extracts the event column from the 'data' DataFrame to represent the x-axis (events).
    # Extracts the event_count column from the 'data' DataFrame to represent the y-axis (number of occurrences for each event).

    # Calculate new max y-axis value (50% higher than the max value in y-axis so that actual graph occupies less space, giving more space to labels)
    max_count = max(ypoints)
    # max(ypoints): Finds the maximum count value from ypoints to determine the y-axis range and multiply that by 1.5. Now we will ymax
    ymax = max_count * 1.5

    # Convert xpoints to categorical indices
    x_indices = np.arange(len(xpoints))
    # np.arange creates an array of indices (0, 1, 2, ...) corresponding to each event in xpoints. This allows for smooth interpolation later.
    
    # Interpolation for smooth curve
    x_new = np.linspace(x_indices.min(), x_indices.max(), 300)
    # linspace() generates 300 evenly spaced points between the minimum and maximum values of x_indices to create a smooth curve.
    spl = make_interp_spline(x_indices, ypoints, k=3)
    # make_interp_spline() creates a cubic spline (a smooth curve) that interpolates between the data points. The parameter k=3 specifies that the spline should be cubic.
    y_smooth = spl(x_new)

    # Plotting the smooth curve
    plt.figure(figsize=(10, 6))
    plt.plot(x_new, y_smooth, color='r', linestyle='solid')

    # Fill the area below the curve with light red color
    plt.fill_between(x_new, y_smooth, color='lightcoral', alpha=0.5)

    # Adding vertical lines for each event, stopping at the curve
    for idx, event in zip(x_indices, ypoints):
        plt.axvline(x=idx, ymax=1, color='white', linestyle='solid')

    # Hide x and y axes
    plt.gca().spines['top'].set_visible(False)
    plt.gca().spines['right'].set_visible(False)
    plt.gca().spines['left'].set_visible(False)
    plt.gca().spines['bottom'].set_visible(False)
    plt.gca().get_xaxis().set_ticks([])
    plt.gca().get_yaxis().set_ticks([])

    
    # Adding title
    plt.title('Sales Funnel Visualization', fontsize=16, pad=175)

    # Add event names and counts at the top of the plot with customization
    for i, (event, count) in enumerate(zip(xpoints, ypoints)):
    # Customizing the event names
        plt.text(
            i, 
            ymax * 1.12, 
            event, 
            ha='center', 
            va='bottom', 
            fontsize=12,
            fontweight='bold',
            color='blue',
            bbox=dict(facecolor='blue', alpha=0.2, edgecolor='none', boxstyle='round,pad=0.8')
        )
    
    # Customizing the event counts
        plt.text(
            i, 
            ymax * 1.02, 
            f"{count} visits",
            ha='center', 
            va='bottom', 
            fontsize=10,
        )


    # Show the plot
    plt.tight_layout()
    plt.show()

except Exception as e:
    print(f"Error: {e}")
