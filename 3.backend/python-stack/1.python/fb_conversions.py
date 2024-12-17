import pymysql
import pandas as pd
import matplotlib.pyplot as plt

# Database connection setup
try:
    connection = pymysql.connect(
        host="localhost",
        user="root",
        password="",
        database="fb_conversion_charts"
    )
    print("Connected to MySQL database")
    
##### Query to calculate opted-out percentage per store

    query = """
    SELECT 
        s.name AS store_name,
        SUM(CASE WHEN JSON_UNQUOTE(JSON_EXTRACT(c.request, '$.data[0].opt_out')) = 'true' THEN 1 ELSE 0 END) AS opted_out_count,
        COUNT(c.id) AS total_count,
        (SUM(CASE WHEN JSON_UNQUOTE(JSON_EXTRACT(c.request, '$.data[0].opt_out')) = 'true' THEN 1 ELSE 0 END) / COUNT(c.id)) * 100 AS opted_out_percentage
    FROM fb_conversions c
    JOIN store s ON c.storeid = s.storeid
    GROUP BY s.name;
    """
    
    # Fetch the data using pandas
    data = pd.read_sql(query, connection)

    # Check the data fetched
    print("Fetched data:")
    print(data)

    # Plotting the bar chart
    plt.figure(figsize=(10, 6))
    data.set_index('store_name')['opted_out_percentage'].plot(kind='bar', color='lightcoral')
    plt.title('Opted-Out Percentage by Store')
    plt.xlabel('Store')
    plt.ylabel('Opted-Out Percentage')
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    plt.show()

##### Query to represent users browser name for all products
    query = """
    SELECT 
    s.name AS store_name,
    TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(
        JSON_UNQUOTE(JSON_EXTRACT(c.request, '$.data[0].user_data.client_user_agent')), ') ', -1), '/', 1)) AS browser_name,
    (COUNT(c.id) / total_count.total) * 100 AS browser_percentage
    FROM fb_conversions c
    JOIN store s ON c.storeid = s.storeid
    JOIN (
    SELECT COUNT(*) AS total
    FROM fb_conversions c2
    JOIN store s2 ON c2.storeid = s2.storeid
    WHERE s2.name = 'Tamil-T-Shirts'
      AND JSON_UNQUOTE(JSON_EXTRACT(c2.request, '$.data[0].user_data.client_user_agent')) IS NOT NULL
    ) AS total_count
    WHERE s.name = 'Tamil-T-Shirts'
    AND JSON_UNQUOTE(JSON_EXTRACT(c.request, '$.data[0].user_data.client_user_agent')) IS NOT NULL
    GROUP BY s.name, browser_name, total_count.total
    ORDER BY browser_percentage DESC;
    """
 # Fetch the data using pandas
    data = pd.read_sql(query, connection)

    # Check the data fetched
    print("Fetched data:")
    print(data)

    # Plotting the bar chart for browser distribution
    plt.figure(figsize=(12, 6))
    
    # Grouping by browser and summing the counts for all stores
    data_grouped = data.groupby('browser_name')['browser_percentage'].sum().sort_values(ascending=False)
    
    # Plotting the data
    data_grouped.plot(kind='bar', color='skyblue')
    plt.title('Browser Distribution Across All Stores')
    plt.xlabel('Browser')
    plt.ylabel('Percentage')
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    plt.show()

##### Query to fetch top 5 most frequent search_string for the store "Tamil-T-Shirts"
    query = """
    SELECT 
        JSON_UNQUOTE(JSON_EXTRACT(c.request, '$.data[0].custom_data.search_string')) AS search_string,
        COUNT(*) AS search_count
    FROM fb_conversions c
    JOIN store s ON c.storeid = s.storeid
    WHERE s.name = 'Tamil-T-Shirts'
      AND JSON_UNQUOTE(JSON_EXTRACT(c.request, '$.data[0].custom_data.search_string')) IS NOT NULL
    GROUP BY search_string
    ORDER BY search_count DESC
    LIMIT 5;
"""

    # Fetch the data using pandas
    data = pd.read_sql(query, connection)

    # Check the data fetched
    print("Fetched data:")
    print(data)

    # Calculate total search count for percentage calculation
    total_search_count = data['search_count'].sum()

    # Calculate the percentage for each search string
    data['search_percentage'] = (data['search_count'] / total_search_count) * 100

    # Plotting the bar chart for search_string distribution
    plt.figure(figsize=(12, 6))

    # Plotting the data
    plt.bar(data['search_string'], data['search_percentage'], color='skyblue')
    plt.title('Top 5 Most Frequent Search Strings for Tamil-T-Shirts')
    plt.xlabel('Search String')
    plt.ylabel('Percentage')
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    plt.show()

##### Most visited pages in tamil-t-shirts (events)
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

    # Plotting the bar chart for the event with the most occurrences
    plt.figure(figsize=(8, 6))

    # Plotting the data
    plt.bar(data['event'], data['event_count'], color='skyblue')
    plt.title('Most Frequent Event')
    plt.xlabel('Pages')
    plt.ylabel('Visit counts')
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    plt.show()

# Query to fetch the event counts for "Purchase" and other events
    query = """
        SELECT 
        event,
        COUNT(c.id) AS event_count
        FROM fb_conversions c
        JOIN fb_conversions_events e ON c.event_id = e.id
        WHERE c.storeid = 2
        GROUP BY e.event
        HAVING event = 'Purchase' OR event_count = (
            SELECT MAX(event_count) 
            FROM (
                SELECT COUNT(c2.id) AS event_count
                FROM fb_conversions c2
                JOIN fb_conversions_events e2 ON c2.event_id = e2.id
                WHERE c2.storeid = 2
                AND e2.event != 'Purchase'
                GROUP BY e2.event
            ) AS max_event_count
        )
        ORDER BY event_count DESC;

    """

    # Fetch the data using pandas
    data = pd.read_sql(query, connection)

    # Check the data fetched
    print("Fetched data:")
    print(data)

    # Plotting the pie chart
    plt.figure(figsize=(6, 6))

    # Pie chart, where the slices will be ordered in descending order
    plt.pie(data['event_count'], labels=data['event'], autopct='%1.1f%%', startangle=140)

    # Equal aspect ratio ensures that pie is drawn as a circle.
    plt.title('Event Distribution: Purchase vs Maximum Occurred Event for Store ID 2')
    plt.tight_layout()
    plt.show()

except Exception as e:
    print(f"Error: {e}")
finally:
    if 'connection' in locals() and connection:
        connection.close()
        print("Connection closed.")