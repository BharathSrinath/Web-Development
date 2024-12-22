# What is Superset?
    # It is a data exploration and visualization platform designed to handle large-scale business intelligence (BI) needs.
    # While it offers charting capabilities, its core functionality revolves around making data accessible, interactive, and analyzable for organizations.
    # It’s designed for data analysts and data scientists, offering advanced features like SQL-based data querying, role-based access control, and integration with diverse databases.
    # Unlike charting libraries like Chart.js, D3.js, or Plotly, which focus on rendering charts, Superset is a full-stack application that handles:
        # Data Connectivity: Connects to databases via SQLAlchemy.
        # Data Exploration: Provides query editors and data exploration tools.
        # Visualization: Offers pre-built visualization options with customization.
        # Dashboards: Lets you create and share dashboards for analytics.

# Primary features:
    # Supports SQLAlchemy, which allows you to connect to almost any SQL-based database (PostgreSQL, MySQL, Snowflake, Presto, etc.) and supports non-SQL databases like Google Sheets (with plugins).
    # Users can write custom SQL queries or use a visual interface to explore data interactively. Aggregations, filters, and advanced transformations are possible without writing much code.
    # Build dashboards for business intelligence and reporting.

# Disadvantages:
    # For very large datasets, performance can degrade, especially when querying databases without optimization.
    # Requires careful tuning of the connected database and caching to handle high concurrency.
    # While Superset offers interactivity, it’s less customizable in real-time interactions compared to libraries like D3.js, which allow highly tailored, programmatic control over interactivity.
    # While Superset offers interactivity, it’s less customizable in real-time interactions compared to libraries like D3.js, which allow highly tailored, programmatic control over interactivity.

# Installation for Windows:
    # Its installation is complex unlike other charting libraries. This is because, Superset isn't a simple JS library; it's a web application with a backend (Python/Flask), a frontend (React/TypeScript), and a metadata database (e.g., SQLite, MySQL).
    # Steps:
        1. Install 'ubuntu' from windows store
        2. powershell - run as admin
        3. Execute 

            wsl --install 
        
        4. Restart the system and we will be prompted with CLI showing the installation status
        5. Enter the username and password once installation is completed
        6. Execute

            sudo apt update -y & sudo apt upgrade -y
        
            sudo apt-get install build-essential libssl-dev libffi-dev python3-dev python3-pip libsasl2-dev libldap2-dev default-libmysqlclient-dev

            sudo apt install -y software-properties-common

            sudo add-apt-repository ppa:deadsnakes/ppa

            sudo apt update

            sudo apt install -y python3.10 python3.10-venv python3.10-dev

            sudo mkdir /app

            sudo chown user /app

            cd /app

            mkdir superset

            cd superset

            python3 -m venv superset_env

            . superset_env/bin/activate

            pip install --upgrade setuptools pip wheel

            pip install pillow

            pip install apache-superset

            touch superset_config.py

            export SUPERSET_CONFIG_PATH=/app/superset/superset_config.py

            nano superset_config.py

        7. Copy the paste the following lines of code
            
# Superset specific config

ROW_LIMIT = 5000

# Flask App Builder configuration
# Your App secret key will be used for securely signing the session cookie
# and encrypting sensitive information on the database
# Make sure you are changing this key for your deployment with a strong key.
# Alternatively you can set it with `SUPERSET_SECRET_KEY` environment variable.
# You MUST set this for production environments or the server will not refuse
# to start and you will see an error in the logs accordingly.
SECRET_KEY = 'YOUR_OWN_RANDOM_GENERATED_SECRET_KEY'

# The SQLAlchemy connection string to your database backend
# This connection defines the path to the database that stores your
# superset metadata (slices, connections, tables, dashboards, ...).
# Note that the connection information to connect to the datasources
# you want to explore are managed directly in the web UI
# The check_same_thread=false property ensures the sqlite client does not attempt
# to enforce single-threaded access, which may be problematic in some edge cases
SQLALCHEMY_DATABASE_URI = 'sqlite:////app/superset/superset.db?check_same_thread=false'

TALISMAN_ENABLED = False
WTF_CSRF_ENABLED = False

# Set this API key to enable Mapbox visualizations
MAPBOX_API_KEY = ''

        8. ctrl+s and ctrl+x 
        9. Execute
            
            openssl rand -base64 42

        10. copy the code that looks like below
        XdBEKh76ymMYRoNYBypTZ30QSxmKewAzEaT2VyKBZJ4rsDoOq0Nejz2G
        11. Execute

            nano superset_config.py

        12. Paste the code, then ctrl+s and ctrl+x
        13. Execute

            export FLASK_APP=superset

            pip install marshmallow_enum

            superset db upgrade

            superset fab create-admin
        
        14. Enter any username and password (username can be left as 'admin' too). Note this credentials as we will need it later to login.
        15. Execute (optional step that shows examples. Feel free to skip this step as it takes some time to complete)

            superset load_examples

        16. Execute

            superset init

            nano run_superset.sh

        17. Copy paste the following
        
#!/bin/bash
export SUPERSET_CONFIG_PATH=/app/superset/superset_config.py
 . /app/superset/superset_env/bin/activate
gunicorn \
      -w 10 \
      -k gevent \
      --timeout 120 \
      -b  0.0.0.0:8088 \
      --limit-request-line 0 \
      --limit-request-field_size 0 \
      --statsd-host localhost:8125 \
      "superset.app:create_app()"

      18. Save and exit by ctrl+s and ctrl+x
      19. Execute

            chmod +x run_superset.sh

            pip install gevent

            sh run_superset.sh

        20. Above step will start the server. Go to http://localhost:8088/ to test it. Login with credentials that we have created in step 15. Once working ctrl+c to exit.
        21. Execute
            
            sudo nano /etc/systemd/system/superset.service
            (and enter password)

        22. Copy paste the following and ctrl+s and ctrl+x

[Unit]
Description = Apache Superset Webserver Daemon
After = network.target

[Service]
PIDFile = /app/superset/superset-webserver.PIDFile
Environment=SUPERSET_HOME=/app/superset
Environment=PYTHONPATH=/app/superset
Environment=SUPERSET_CONFIG_PATH=/app/superset/superset_config.py
WorkingDirectory = /app/superset
ExecStart = /app/superset/run_superset.sh
ExecStop = /bin/kill -s TERM $MAINPID
User=bharathsrinath

[Install]
WantedBy=multi-user.target

        23. Execute the following

            nano /app/superset/superset_env/bin/activate

            copy-paste the following below the lines (export VIRTUAL_ENV)

                export FLASK_APP=superset

            ctrl+c and then ctrl+o

        24. Execute the following

            sudo systemctl daemon-reload

            sudo systemctl enable superset.service

            sudo systemctl start superset.service
        
        25. Thats the local server always runs our superset application in the port 8088. When we set this up for the first time it may take some time. So to check the status execute the following command

            sudo systemctl status superset.service


# Steps in connecting super to MySQL DB
    1. Execute the following
        
        sudo apt update

        sudo apt install mysql-server

        sudo service mysql start

        sudo mysql

        SELECT user, host, plugin FROM mysql.user;

        ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

        FLUSH PRIVILEGES;

        SELECT user, host, plugin FROM mysql.user;
        (To check whether plugin detail is updated)

        EXIT;

        mysql -u root -p
        (Enter password set by you in couple commands before)

        CREATE DATABASE superset_demo;
        (superset_demo is the db name)

        CREATE USER 'bharathsrinath'@'localhost' IDENTIFIED BY '1234';
        (replace username and password accordingly)

        GRANT ALL PRIVILEGES ON superset_demo.* TO 'bharathsrinath'@'localhost';

        FLUSH PRIVILEGES;

        EXIT;

        . /app/superset/superset_env/bin/activate

        sudo apt-get update

        sudo apt-get install pkg-config libmysqlclient-dev

        pip install mysqlclient

        mysql -u bharathsrinath -p superset_demo
        (Enter password and now you can write queries)

        EXIT;
        (and move to http://localhost:8088/)

    2. Now in superset application,
        # Click the '+' icon -> Data -> Connect database -> MySQL
        # Click connect this database with a SQLAlchemy URI string instead (by scrolling to the last)
        # Display Name - Any name (preferably the same name as the database name - superset_demo in our case)
        # SQLAlchemy URI - mysql://bharathsrinath:1234@localhost/superset_demo
            (replace the username, password and database name accordingly)
        # Click "Test connection"
            # Once the flash message appears as "Connection looks good!", click on "Connect"

# Transferring files from local system to virtual system
(Example with .sql file that contains data)
Execute the following

    1. In your virtual machine execute,
        
        ip addr
        (Note down the ip address of your virtual machine under eth0: <BROADCAST,MULTICAST,UP,LOWER_UP>)
        Example: 172.23.207.127

        one time installation step

            sudo apt update

            sudo apt install openssh-server

        sudo service ssh start

    2. Open powershell and execute

        scp /path/to/your/file.sql username@ip_address_of_your_virtual_machine:/path/to/destination
        Example: scp "C:\Users\Bharath Srinath\Downloads\fb_conversion.sql" bharathsrinath@172.23.207.127:/app/superset
            (Here fb_conversion.sql is the name of the sql file)
        (Enter yes when prompted - happens once)
        (Enter password of your superset login)

    3. Now open virtual machine and execute

        ls
        (You can see the .sql in your virtual machine now)


# Importing sql file
Execute the following,

    mysql -u root -p database_name_given_while_connecting < fileName.sql
        (there is less than (<) symbol in the command)
    Example: mysql -u root -p fb_conversion_charts < fb_conversion.sql
        (Enter password when prompted)

# Activating the superset environment after the initial setup
(You have to do this if you want to edit/configure files in future)
Execute the following

    cd /app/superset

    . /app/superset/superset_env/bin/activate

To execuet any commands preceded with the keyword 'superset', export the following in every session 

    export SUPERSET_CONFIG_PATH=/app/superset/superset_config.py


# Creating Datasets
    # To create a chart we need datasets which can be created in two ways.
        1. If the data needed can be obtained from any one table,
            # Go to Datasets section and click + DATASET
            # Choose the Database type (mysql, postgresql, etc.)
            # Choose the database name (displayed as schema)
            # Choose the table from which you want to obtain the data
            # Click "CREATE DATASET AND CREATE CHART"
        2. If the data needed can be obtained from multiple tabes,
            # Go to SQL -> SQL Lab
            # Write the query to get the data   
    # Go to charts section and click "+ CHART" button
    # Select the chart type and click "CREATE NEW CHART" button
        # Type of chart can be changed in the next step too.
    # 

