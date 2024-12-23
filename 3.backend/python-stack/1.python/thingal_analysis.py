from sqlalchemy import create_engine
import pandas as pd


try:

    db_connection_string = 'mysql+pymysql://bharathsrinath:1234@localhost/thingal'

    engine = create_engine(db_connection_string)

    print("Connected to MySQL database")

### 1. Customers Who Have Spent the Maximum Amount
    query = """
        SELECT 
        o.user_id AS customer_id,
        u.name AS customer_name,
        SUM(o.totalamt) AS total_spent
        FROM 
            orders o
        JOIN 
            users u ON o.user_id = u.id
        GROUP BY 
            o.user_id
        ORDER BY 
            total_spent DESC
    """

    data = pd.read_sql(query, engine)

    print("1. Customers Who Have Spent the Maximum Amount:")
    print(data)

### 2. Customers Who Have Placed the Maximum Number of Orders

    query = """
        SELECT 
            o.user_id AS customer_id,
            u.name AS customer_name,
            COUNT(o.id) AS total_orders
        FROM 
            orders o
        JOIN 
            users u ON o.user_id = u.id
        GROUP BY 
            o.user_id
        ORDER BY 
            total_orders DESC
    """
    data = pd.read_sql(query, engine)

    print("2. Customers Who Have Placed the Maximum Number of Orders:")
    print(data)

### 3. Customer's Per Day Expenditure

    query = """
        SELECT 
            o.user_id AS customer_id,
            u.name AS customer_name,
            SUM(o.totalamt) / DATEDIFF(CURDATE(), MIN(o.created_at)) AS daily_expenditure
        FROM 
            orders o
        JOIN 
            users u ON o.user_id = u.id
        GROUP BY 
            o.user_id
        ORDER BY 
            daily_expenditure DESC;
    """

    data = pd.read_sql(query, engine)

    print("3. Customers' Per Day Expenditure:")
    print(data)

### 4. Segregating Customers Based on Order Time Slots

    query = """
        SELECT 
            CASE
                WHEN HOUR(o.created_at) BETWEEN 7 AND 10 THEN '7AM-10AM'
                WHEN HOUR(o.created_at) BETWEEN 10 AND 13 THEN '10AM-1PM'
                WHEN HOUR(o.created_at) BETWEEN 13 AND 16 THEN '1PM-4PM'
                WHEN HOUR(o.created_at) BETWEEN 16 AND 18 THEN '4PM-6PM'
                WHEN HOUR(o.created_at) BETWEEN 18 AND 23 THEN '6PM-11PM'
                ELSE '11PM-7AM'
            END AS time_slot,
            COUNT(DISTINCT o.user_id) AS total_customers
        FROM 
            orders o
        GROUP BY 
            time_slot;
    """

    data = pd.read_sql(query, engine)

    print("4. Segregating Customers Based on Order Time Slots:")
    print(data)

### 5. Percentage of Orders Per Time Slot for Each Customer

    query = """
        SELECT
        o.user_id AS customer_id,
        u.name AS customer_name,
        SUM(CASE WHEN HOUR(o.created_at) BETWEEN 7 AND 10 THEN 1 ELSE 0 END) * 100 / COUNT(o.id) AS '7AM-10AM',
        SUM(CASE WHEN HOUR(o.created_at) BETWEEN 10 AND 13 THEN 1 ELSE 0 END) * 100 / COUNT(o.id) AS '10AM-1PM',
        SUM(CASE WHEN HOUR(o.created_at) BETWEEN 13 AND 16 THEN 1 ELSE 0 END) * 100 / COUNT(o.id) AS '1PM-4PM',
        SUM(CASE WHEN HOUR(o.created_at) BETWEEN 16 AND 18 THEN 1 ELSE 0 END) * 100 / COUNT(o.id) AS '4PM-6PM',
        SUM(CASE WHEN HOUR(o.created_at) BETWEEN 18 AND 23 THEN 1 ELSE 0 END) * 100 / COUNT(o.id) AS '6PM-11PM',
        SUM(CASE WHEN HOUR(o.created_at) >= 23 OR HOUR(o.created_at) < 7 THEN 1 ELSE 0 END) * 100 / COUNT(o.id) AS '11PM-7AM'
        FROM
            orders o
        JOIN
            users u ON o.user_id = u.id
        GROUP BY
            o.user_id;
    """

    data = pd.read_sql(query, engine)

    print("5. Percentage of Orders Per Time Slot for Each Customer:")
    print(data)

### 6. Segregating Customers Based on Order Categories

    query = """
        SELECT 
            o.user_id AS customer_id,
            u.name AS customer_name,
            SUM(CASE WHEN JSON_CONTAINS(o.cartinfodata, '{"category_id": 51}') THEN 1 ELSE 0 END) * 100 / COUNT(o.id) AS rice_percentage,
            SUM(CASE WHEN JSON_CONTAINS(o.cartinfodata, '{"category_id": 50}') THEN 1 ELSE 0 END) * 100 / COUNT(o.id) AS nourishment_percentage,
            SUM(CASE WHEN JSON_CONTAINS(o.cartinfodata, '{"category_id": 52}') THEN 1 ELSE 0 END) * 100 / COUNT(o.id) AS books_percentage
        FROM 
            orders o
        JOIN 
            users u ON o.user_id = u.id
        GROUP BY 
            o.user_id;
    """
    data = pd.read_sql(query, engine)

    print("6. Segregating Customers Based on Order Categories:")
    print(data)

### 7. Every Customer and Their Last Order Date

    query = """
        SELECT 
            o.user_id AS customer_id,
            u.name AS customer_name,
            MAX(o.created_at) AS last_order_date
        FROM 
            orders o
        JOIN 
            users u ON o.user_id = u.id
        GROUP BY 
            o.user_id;
    """
    data = pd.read_sql(query, engine)

    print("7. Every Customer and Their Last Order Date")
    print(data)

### 8. Customers who has never made a purchase

    query = """
        SELECT 
            u.id AS customer_id,
            u.name AS customer_name,
            u.email AS customer_email,
            u.mobile AS customer_mobile
        FROM 
            users u
        LEFT JOIN 
            orders o
        ON 
            u.id = o.user_id
        WHERE 
            o.user_id IS NULL;
    """

    data = pd.read_sql(query, engine)

    print("8. Customers who has never made a purchase")
    print(data)

except Exception as e:
    print(f"Error: {e}")