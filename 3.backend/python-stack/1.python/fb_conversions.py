import mysql.connector

# Connect to the MySQL server
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="fb_conversion_charts"
)
if connection.is_connected():
    print("Connected to MySQL database")
else:
    print("failed to connect")

cursor = connection.cursor()
# Fetch Data
print("Fetching data...")
cursor.execute("SELECT * FROM store;")
rows = cursor.fetchall()
for row in rows:
    print(f"Id: {row[0]}, Storeid: {row[1]}, Name: {row[2]}, Created at: {row[3]}, Updated at: {row[4]}")

# Close the connection
connection.close()
