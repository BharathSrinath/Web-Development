import mysql.connector

print("a")
# Connect to the MySQL server
connection = mysql.connector.connect(
    host="localhost", 
    user="root",
    password="",
    database="fb_conversion_charts"
)
print(connection)
if connection.is_connected():
    print("Connected to MySQL database")
else:
    print("failed to connect")

# Close the connection
connection.close()
