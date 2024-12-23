from sqlalchemy import create_engine
import pandas as pd


try:

    db_connection_string = 'mysql+pymysql://bharathsrinath:1234@localhost/thingal'

    engine = create_engine(db_connection_string)

    print("Connected to MySQL database")

### 1. Customers Who Have Spent the Maximum Amount
    query = """
        SELECT 
        u.id AS customer_id,
        u.mobile AS mobile_number,
        JSON_EXTRACT(cartinfo, '$.total') AS total_spent
        FROM users u
        ORDER BY total_spent DESC;
    """

    data = pd.read_sql(query, engine)

    print("1. Customers Who Have Spent the Maximum Amount:")
    print(data)

### 2. Customers who never made a purchase

    query = """
        SELECT * 
        FROM users 
        WHERE cartinfo IS NULL
    """

    data = pd.read_sql(query, engine)

    print("2. Customers who never made a purchase")
    print(data)

### 3. Customer's Per Day Expenditure

    query = """
        SELECT 
            u.id AS customer_id,
            u.mobile AS mobile_number,
            COALESCE(JSON_EXTRACT(cartinfo, '$.total'), 0) / DATEDIFF(CURDATE(), MIN(u.created_at)) AS daily_expenditure
        FROM 
            users u
        WHERE 
            YEAR(created_at) = 2024
        GROUP BY 
            u.id, u.mobile
        ORDER BY 
            daily_expenditure DESC;
    """

    data = pd.read_sql(query, engine)

    print("3. Customers' Per Day Expenditure:")
    print(data)

### 4. Number of orders based on order time

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
        FROM orders o
        GROUP BY time_slot
        ORDER BY total_customers DESC
    """

    data = pd.read_sql(query, engine)

    print("4. Segregating Customers Based on Order Time Slots:")
    print(data)

### 5. Percentage of Orders Per Time Slot for Each Customer and maximum number of orders that they have placed in a particular window

    query = """
        SELECT 
            u.id AS customer_id,
            u.mobile AS mobile_number,

            -- Number of orders in each time slot
            SUM(CASE WHEN HOUR(o.created_at) BETWEEN 7 AND 10 THEN 1 ELSE 0 END) AS '7AM-10AM_orders',
            SUM(CASE WHEN HOUR(o.created_at) BETWEEN 10 AND 13 THEN 1 ELSE 0 END) AS '10AM-1PM_orders',
            SUM(CASE WHEN HOUR(o.created_at) BETWEEN 13 AND 16 THEN 1 ELSE 0 END) AS '1PM-4PM_orders',
            SUM(CASE WHEN HOUR(o.created_at) BETWEEN 16 AND 18 THEN 1 ELSE 0 END) AS '4PM-6PM_orders',
            SUM(CASE WHEN HOUR(o.created_at) BETWEEN 18 AND 23 THEN 1 ELSE 0 END) AS '6PM-11PM_orders',
            SUM(CASE WHEN HOUR(o.created_at) >= 23 OR HOUR(o.created_at) < 7 THEN 1 ELSE 0 END) AS '11PM-7AM_orders',

            -- Time slot with maximum percentage of orders
            CASE 
                WHEN GREATEST(
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 7 AND 10 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 10 AND 13 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 13 AND 16 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 16 AND 18 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 18 AND 23 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) >= 23 OR HOUR(o.created_at) < 7 THEN 1 ELSE 0 END) * 100 / COUNT(o.id)
                ) = SUM(CASE WHEN HOUR(o.created_at) BETWEEN 7 AND 10 THEN 1 ELSE 0 END) * 100 / COUNT(o.id)
                THEN '7AM-10AM'
                WHEN GREATEST(
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 7 AND 10 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 10 AND 13 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 13 AND 16 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 16 AND 18 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 18 AND 23 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) >= 23 OR HOUR(o.created_at) < 7 THEN 1 ELSE 0 END) * 100 / COUNT(o.id)
                ) = SUM(CASE WHEN HOUR(o.created_at) BETWEEN 10 AND 13 THEN 1 ELSE 0 END) * 100 / COUNT(o.id)
                THEN '10AM-1PM'
                WHEN GREATEST(
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 7 AND 10 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 10 AND 13 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 13 AND 16 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 16 AND 18 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 18 AND 23 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) >= 23 OR HOUR(o.created_at) < 7 THEN 1 ELSE 0 END) * 100 / COUNT(o.id)
                ) = SUM(CASE WHEN HOUR(o.created_at) BETWEEN 13 AND 16 THEN 1 ELSE 0 END) * 100 / COUNT(o.id)
                THEN '1PM-4PM'
                WHEN GREATEST(
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 7 AND 10 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 10 AND 13 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 13 AND 16 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 16 AND 18 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 18 AND 23 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) >= 23 OR HOUR(o.created_at) < 7 THEN 1 ELSE 0 END) * 100 / COUNT(o.id)
                ) = SUM(CASE WHEN HOUR(o.created_at) BETWEEN 16 AND 18 THEN 1 ELSE 0 END) * 100 / COUNT(o.id)
                THEN '4PM-6PM'
                WHEN GREATEST(
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 7 AND 10 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 10 AND 13 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 13 AND 16 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 16 AND 18 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) BETWEEN 18 AND 23 THEN 1 ELSE 0 END) * 100 / COUNT(o.id),
                    SUM(CASE WHEN HOUR(o.created_at) >= 23 OR HOUR(o.created_at) < 7 THEN 1 ELSE 0 END) * 100 / COUNT(o.id)
                ) = SUM(CASE WHEN HOUR(o.created_at) BETWEEN 18 AND 23 THEN 1 ELSE 0 END) * 100 / COUNT(o.id)
                THEN '6PM-11PM'
                ELSE '11PM-7AM'
            END AS max_time_slot
        FROM 
            orders o
        JOIN 
            users u ON o.user_id = u.id
        WHERE 
            YEAR(o.created_at) > 2023
        GROUP BY 
            u.id
        ORDER BY 
            max_time_slot DESC;
    """

    data = pd.read_sql(query, engine)

    print("5. Percentage of Orders Per Time Slot for Each Customer and maximum number of orders that they have placed in a particular window:")
    print(data)

### 6. Segregating Customers Based on Order Categories

    query = """
        SELECT 
    u.id AS customer_id,
    u.mobile AS mobile_number,

    -- Last order category name
    (SELECT c.name 
     FROM orders o 
     JOIN category c 
       ON JSON_EXTRACT(o.cartinfodata, '$.category') = c.id
     WHERE o.user_id = u.id 
     ORDER BY o.created_at DESC 
     LIMIT 1) AS last_order_category_name,

    -- Category name with maximum orders
    (SELECT c.name 
     FROM orders o 
     JOIN category c 
       ON JSON_EXTRACT(o.cartinfodata, '$.category') = c.id
     WHERE o.user_id = u.id 
     GROUP BY c.id
     ORDER BY COUNT(c.id) DESC, c.name ASC 
     LIMIT 1) AS max_order_category_name

FROM 
    users u
WHERE 
    EXISTS (SELECT 1 
            FROM orders o 
            WHERE o.user_id = u.id);

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
            o.user_id
        ORDER BY 
            last_order_date DESC;
    """
    data = pd.read_sql(query, engine)

    print("7. Every Customer and Their Last Order Date")
    print(data)


except Exception as e:
    print(f"Error: {e}")