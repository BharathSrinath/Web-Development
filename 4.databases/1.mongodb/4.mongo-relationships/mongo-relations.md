# Mongo relations
There are multiple ways by which datas can be related. Lets consider an example of user details in twitter.
    1. One to few: Embedded - The most common way which we know. Just nest documents within documents within documents and so on.
        Example: user's properties - first name, last name, email, location, likes, comments, tweets, etc. Now location can few properties - street, city, country, pincode, etc.
    2. One to many: Separate documents but they are connected with a reference - Parent will hold childs reference
        Example: User (parent) - comment (child) => When you look at the user, we can find all the comments
    3. One to too many: Same as above. But here child will hold parents reference.
        Example: User (parent) - comment (child) => When you look at a comment, we can see user details.
With respect to 2 and 3, both can be combined too. That is both can hold each others reference. Depending up on the requirement we have to make our decisions to choose from above. Also, in SQL DB we avoid duplication of data. But here, we may duplicate things (which is technically called denormalization) if required. Denormalization is the process of duplicating fields or deriving new fields from existing ones.

# When does database denormalization make sense?
1. With denormalization you can avoid costly joins, at the expense of having more complex and expensive updates. Therefore, you should practice denormalization on only those fields that are read most often and are seldom updated since data redundancy is less of an issue.
2. If you frequently run $lookup operations, consider restructuring your schema through denormalization such that the your application can query a single collection to obtain all of the information it needs. Use embedded documents and arrays to capture relationships between data in a single document structure.
So embrace database denormalization for operational databases—the efficiency of reading or writing an entire record in a single operation outweighing any modest increase in storage requirements. A field that will mostly be read and only seldom updated is a good candidate for denormalization.

# When does database normalization make sense?
1. When embedding would result in duplication of data but would not provide sufficient read performance advantages to outweigh the implications of data duplication.
2. To represent more complex many-to-many relationships.
3. To model large hierarchical data sets.

# When deciding on database denormalization, consider the following factors:
We cannot perform an atomic update on denormalized data. (Atomicity property will be broken)
    Example: consider a monetary transfer from bank account A to account B. It consists of two operations: withdrawing the money from account A and saving it to account B. Performing these operations in an atomic transaction ensures that the database remains in a consistent state, i.e., money is neither lost nor created if either of those two operations fails. But denormalization can make atomic updates challenging because the same piece of data may exist in multiple places. If you update it in one place, you must also update it in all other places to maintain consistency. If any part of this multi-step update fails, it could lead to inconsistencies in the database
Denormalization only makes sense when you have a high read-to-write ratio.

# Official guidlines to ask questions before deciding in the type of realtionship that you want to maintain
1. What is the cardinality of the relationship? Is it “one-to-few,” “one-to-many,” or “one-to-squillions”?
2. Do you need to access the object on the “N” side separately, or only in the context of the parent object?
3. What is the ratio of updates-to-reads for a particular field?

