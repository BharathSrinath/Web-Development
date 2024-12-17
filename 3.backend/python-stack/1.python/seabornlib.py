import pymysql
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
from scipy.interpolate import make_interp_spline

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
    WHERE c.storeid = 2
    GROUP BY c.event_id, e.event
    ORDER BY event_count DESC
    """

    # Fetch the data using pandas
    data = pd.read_sql(query, connection)

    # Check the data fetched
    print("Fetched data:")
    print(data)

    # Set up Seaborn style
    sns.set_theme(style="whitegrid")

    # Prepare the data
    xpoints = data['event']
    ypoints = data['event_count']

    # Convert xpoints to categorical indices
    x_indices = np.arange(len(xpoints))
    
    # Interpolation for smooth curve
    x_new = np.linspace(x_indices.min(), x_indices.max(), 300)
    spl = make_interp_spline(x_indices, ypoints, k=3)
    y_smooth = spl(x_new)

    # Plotting the smooth curve
    plt.figure(figsize=(10, 6))
    plt.plot(x_new, y_smooth, color='r', linestyle='solid')

    # Fill the area below the curve with light red color
    plt.fill_between(x_new, y_smooth, color='lightcoral', alpha=0.5)

    # Adding vertical lines for each event, stopping at the curve
    for idx, event in zip(x_indices, ypoints):
        plt.axvline(x=idx, ymax=(event / max(ypoints)), color='gray', linestyle='--', alpha=0.5)

    # Hide x and y axes
    plt.gca().spines['top'].set_visible(False)
    plt.gca().spines['right'].set_visible(False)
    plt.gca().spines['left'].set_visible(False)
    plt.gca().spines['bottom'].set_visible(False)
    plt.gca().get_xaxis().set_ticks([])
    plt.gca().get_yaxis().set_ticks([])

    # Add details to the legend
    legend_labels = [f'{event}: {count}' for event, count in zip(xpoints, ypoints)]
    plt.legend(legend_labels, title="Events and Counts", loc="upper center", bbox_to_anchor=(0.5, -0.05), ncol=2)

    # Adding titles
    plt.title('Sales Funnel Visualization', fontsize=16, pad=20)

    # Show the plot
    plt.tight_layout()
    plt.show()

except Exception as e:
    print(f"Error: {e}")
