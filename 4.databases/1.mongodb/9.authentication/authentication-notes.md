# Authentication vs Authorization: 
    # Authentication is the process of verifying the identity of a user or system. It answers the question: "Who are you?" 
    # Authorization, on the other hand, is the process of determining what actions a user is allowed to perform within a system or application.

# Hashing:
    # We never store the plain text passwords. 
    # Hashing are functions that takes arbitrary size input and converts it into fixed size output values (called hash code/hash value). (That is input may be different size but the output will always be of same length)
        1. Hashing is a one-way function. That is if we have the hashed output, we can’t figure out the original input data. Example of one-way function abs. abs (-100) is 100. With that output can we figure the input? No. It could be either 100 or -100. It has just 2 possibilities. So it might sound silly. But this example will help you to understand about one-way functions.
            # When you create an account, your password is hashed and stored. When you log in, your password is hashed again and compared to the stored hash. If they match, you’re in!
            # Now lets say that someone has stolen information of your database. They can't figure out anything with password. Why? They are stored in hash values and they are one-way functions. So we can't trace back to the input.
        2. Small change in the input leads to large change in the output
        3. Deterministic - Same input gives the same output. So its not that we are generating random values when a hashing function runs.
        4. Unlikely to find two same outputs with same value. 1.2 * sqrt(2^n) where n changes depending on the hash function. for SHA-256, n is 256. The choice of hash size often involves a trade-off between security and performance. Larger hashes provide more security against collisions but require more computational resources to generate and store.
        5. Password hashings are deliberately slow as hackers try billions of combinations in a short period of time. When the function is slow it will increase the total time taken significantly higher (many many years)
            # But SHA-256 is generally fast. So we cannot use that for passwords

# Salting:
    # It is a process used in cryptography to add an additional layer of security to hashed data.
        1. Generation of Salt: A salt is a random string of characters that is generated for each password. This salt is unique for each user or even each password instance.
        2. Combining Salt and Password: The salt and the password are combined, typically through concatenation. This means that even if two users have the same password, their salted passwords will be different.
        3. Hashing: The combined salt and password are then passed through a hash function. This produces a hashed output that is unique to the salted password.
        4. Storing the Salt and Hash: The salt and the hashed output are stored in the database. The salt can be stored in plaintext, as knowing the salt alone is not enough for an attacker.
    # When a user tries to authenticate, the same process is repeated: the salt is added to the entered password, the result is hashed, and the output is compared to the stored hash. If the two hashes match, the password is correct.
    # So why salting is required?
        # 4% of the entire passwords are commonly used passwords like qwerty, 123456, abcdef, etc.
        # So the attackers will make a table called rainbow table which is filled with most commonly used passwords and their corresponding hash values.
            # To do this, the attacker needs to know which type of hashing function is used. Since there are few hashing functions, a well trained hacker will be able to spot the type of hashing function just by looking at the hash value. So when the database is stolen, they can certainly figure the type of hashing function.
        # Now without salting, they can compare the hash values stored in the database and their rainbow table. When the values match , they can figure-out the password. 
        # Salting prevents this. Since it adds a string, qwerty will have a completely different hash value than what is it is present in their rainbow table.

# Bcrypt:
    # It is a password hashing function.
    # It helps us to hash the password and also takes care of salting.
    # Installation: There are 2 packages for bcrypt.
        # bcryptjs: Made entirely from JS. Can run on both client and server side
        # bycrypt: Can run only on server side (we will use this). It is made for node. It is built on top of c++.
            # npm i bcrypt