## Question 1: Normalization
Consider the following unnormalized table for a bookstore database:


| Book ID | Title                 | Author          | Genre       | Publisher         | ISBN           | Price  |
|---------|-----------------------|-----------------|-------------|-------------------|---------------|--------|
| 101     | To Kill a Mockingbird | Harper Lee      | Fiction     | HarperCollins     | 978-0061120084 | 10.99  |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction   | Scribner          | 978-0743273565 | 12.50  |
| 103     | Principles of Physics | Jearl Walker   | Science     | Wiley             | 978-0321976444 | 50.00  |
 
Normalize the table to 1NF, 2NF, and 3NF, explaining the steps you took at each normalization level.
### Solution
## 1NF
Give table is in 1NF since there are not multivalued attributes or repeating tuples.

## 2NF
If we consider Book ID and ISBN  as the primary key. We get some partial dependency
that is,
{ISBN} -> Author,Genre, Publisher
also,
{BookID} -> Author, Genre, Publisher
So, to remove partial dependency, we can split the attributes in two tables

Table 1 (bookid,title,author,genre,publisher,price), 
with FDs:
bookid --> title,author,genre,publisher,price
| Book ID | Title                 | Author          | Genre       | Publisher         | Price  |
|---------|-----------------------|-----------------|-------------|-------------------|--------|
| 101     | To Kill a Mockingbird | Harper Lee      | Fiction     | HarperCollins     | 10.99  |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction   | Scribner          | 12.50  |
| 103     | Principles of Physics | Jearl Walker   | Science     | Wiley              50.00  |
Table 2 (bookid,isbn)
| Book ID | ISBN           |
|---------|---------------|
| 101     | 978-0061120084 |
| 102     | 978-0743273565 |
| 103     | 978-0321976444 |

## 3NF
For a Relation to be in 3NF, it should be in 2NF and non prime attributes should not have transitive dependency on primary key.
There no non prime attributes which has transitive dependency on primary key. so both relations are in 3NF
## [Bonus]Question 2: Database Normalization Practice

Apply Normalization on the below table and return the list of tables after 1NF, 2NF, 3NF, 4NF, 5NF( if applicable)

### Table: Employee Information

| Employee ID | Employee Name | Department   | Project ID | Project Name | Start Date | End Date   | Salary  |
|-------------|---------------|--------------|------------|--------------|------------|------------|---------|
| 101         | John Doe      | HR           | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000    |
| 101         | John Doe      | HR           | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200    |
| 102         | Jane Smith    | Marketing    | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500    |
| 103         | Mike Johnson  | IT           | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000    |
| 103         | Mike Johnson  | IT           | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200    |
| 104         | Sarah Brown   | HR           | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800    |
| 105         | Robert Lee    | Finance      | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200    |
| 106         | Lisa Wang     | IT           | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800    |


### Step-by-Step Guidelines:

Assumptions to normalize the relation:
# 1. Since Project Names are not unique, the  functional dependency is Department, Project ID -> Project Name
# 2. It is unclear if Project IDs are unique, Following normalisation is based on assuming that they are not unique
### Step 1: First Normal Form (1NF)
The relation is in 1NF Form because each column contains atomic values.
and there are no repeating groups.

| Employee ID | Employee Name | Department   | Project ID | Project Name | Start Date | End Date   | Salary  |
|-------------|---------------|--------------|------------|--------------|------------|------------|---------|
| 101         | John Doe      | HR           | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000    |
| 101         | John Doe      | HR           | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200    |
| 102         | Jane Smith    | Marketing    | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500    |
| 103         | Mike Johnson  | IT           | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000    |
| 103         | Mike Johnson  | IT           | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200    |
| 104         | Sarah Brown   | HR           | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800    |
| 105         | Robert Lee    | Finance      | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200    |
| 106         | Lisa Wang     | IT           | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800    |

### Step 2: Second Normal Form (2NF)

Candidate key to uniquely identify each tuple is {employeeID, Department, ProjectName}
For a relation to be in 2NF, The non-prime attributes should not have functional dependency on 
the proper subset of candidate key.

This is not in 2NF form because,
employeeID -> employeeName, non prime attribute employeeName is functionally dependent on employeeID
and department, projectid -> project name

R1- Employee
| Employee ID | Employee Name 
|-------------|---------------
| 101         | John Doe       
| 102         | Jane Smith    
| 103         | Mike Johnson  
| 104         | Sarah Brown   
| 105         | Robert Lee    
| 106         | Lisa Wang     

R2 - Project
| Department   | Project ID | Project Name |
| HR           | 001        | Project A    |
| HR           | 002        | Project B    |
| Marketing    | 001        | Project A    |
| IT           | 001        | Project A    |
| IT           | 002        | Project B    |
| IT           | 003        | Project C    |
| HR           | 002        | Project B    |
| Finance      | 001        | Project A    |

R3- Salary
Certainly, I can provide the table with only the specified attributes:

| Employee ID | Department   | Project ID | Start Date | End Date   | Salary  |
|-------------|--------------|------------|------------|------------|---------|
| 101         | HR           | 001        | 2023-01-15 | 2023-06-30 | 5000    |
| 101         | HR           | 002        | 2023-04-01 | 2023-08-31 | 5200    |
| 102         | Marketing    | 001        | 2023-02-01 | 2023-05-31 | 5500    |
| 103         | IT           | 002        | 2023-03-10 | 2023-08-15 | 6000    |
| 103         | IT           | 003        | 2023-06-15 | 2023-11-30 | 6200    |
| 104         | HR           | 002        | 2023-04-20 | 2023-07-31 | 4800    |
| 105         | Finance      | 001        | 2023-05-05 | 2023-09-30 | 5200    |
| 106         | IT           | 001        | 2023-06-01 | 2023-12-31 | 5800    |

This table contains only the Employee ID, Department, Project ID, Start Date, End Date, and Salary attributes as requested.

### Step 3: Third Normal Form (3NF)

For a Relation to be in 3NF, the non-prime attributes should not have transient depedency on 
the primary key
R1 satisfies the 3NF
R2 is in 3NF, the primary key for this table is {Department, Project ID}.
Since there are no transitive dependencies, the table is in 3rd Normal Form (3NF).
**Note Following normalisation is based on assumption that one employee can work in multiple department.Since it is not mentioned
In this table, there are no transitive dependencies. All non-prime attributes (Department, Start Date, End Date, and Salary) directly depend on the primary key, which is {Employee ID, Project ID}.

### Step 4: Fourth Normal Form (4NF)

The given table only contains information about employees, departments, projects, and their assignments, and there don't appear to be any multi-valued dependencies. Each row represents a unique assignment of an employee to a project, and there are no implied relationships that would lead to multi-valued dependencies.
R1- Employee
| Employee ID | Employee Name 
|-------------|---------------
| 101         | John Doe       
| 102         | Jane Smith    
| 103         | Mike Johnson  
| 104         | Sarah Brown   
| 105         | Robert Lee    
| 106         | Lisa Wang     

R2 - Project
| Department   | Project ID | Project Name |
| HR           | 001        | Project A    |
| HR           | 002        | Project B    |
| Marketing    | 001        | Project A    |
| IT           | 001        | Project A    |
| IT           | 002        | Project B    |
| IT           | 003        | Project C    |
| HR           | 002        | Project B    |
| Finance      | 001        | Project A    |

R3- Salary
Certainly, I can provide the table with only the specified attributes:

| Employee ID | Department   | Project ID | Start Date | End Date   | Salary  |
|-------------|--------------|------------|------------|------------|---------|
| 101         | HR           | 001        | 2023-01-15 | 2023-06-30 | 5000    |
| 101         | HR           | 002        | 2023-04-01 | 2023-08-31 | 5200    |
| 102         | Marketing    | 001        | 2023-02-01 | 2023-05-31 | 5500    |
| 103         | IT           | 002        | 2023-03-10 | 2023-08-15 | 6000    |
| 103         | IT           | 003        | 2023-06-15 | 2023-11-30 | 6200    |
| 104         | HR           | 002        | 2023-04-20 | 2023-07-31 | 4800    |
| 105         | Finance      | 001        | 2023-05-05 | 2023-09-30 | 5200    |
| 106         | IT           | 001        | 2023-06-01 | 2023-12-31 | 5800    |

## Question 3: What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?

A primary key is an attribute or set of attributes of a relation(table) which can uniquly identiy a tuple in the relatoinship. 
For eg, StudentID is a primary key in StudentID, Name, Age relation. because it can uniquely identify each student in the relation

A foreign key is a column or a set of columns that references the primary key of another table. Primary keys and foreign keys are used to establish relationships between tables in a relational database.

For example, suppose we have two tables: Customer and Order. 
The Customer table has a primary key called CustomerID, which is a unique identifier for each customer. The Order table has a foreign key called CustomerID, which references the CustomerID of the Customer table. This way, we can link each order to the customer who placed it, and also retrieve information about the customer from the Customer table.

## Question 4: Explain the ACID properties in the context of database transactions.

ACID properties in database transactions provide reliability and consistency of transcations.
Consistency ensures that a transaction brings the database from one consistent state to another.

1. Atomicity ensures that a transaction is treated as one atomic unit, if a operation fails in a transaction whole transcation should be considered failed.
2. Consistency: Suppose we have two tables: Books and Borrowers. We want to enforce a business rule that a book can only be borrowed if it's available (not checked out) and a borrower has not reached their maximum borrowing limit.Consistency ensures that a transaction brings the database from one consistent state to another.
3. Isolation makes sure different transcation are isolated to each other and doest effect each  other. For eg, one transaction it to update quantity of product1 in inventory should not have effect on other trasaction of updating quantity of product2.
4. Durability ensures once a transcation is committed, its effects are permanent, even in the faceof system failures.

## Question 5: Describe the concept of indexing in a database. How does indexing improve query performance?
With help of indexing in database, we can optimize searching time of a database query. It helps
in faster query results and quick data retrieval from the database.
It does by creating a index table internally.
Usually it consists of Key and value. Here key is the search key(primary key or candidate key) and Value is the data reference in database.
This index helps helps to reduce number of disk calls.

Optimised sorting: indexes can provide presorted data. database can use Btrees to present sorted data.
Improved Query Planning: database management system use indexes in their query optimizers to create better execution plans for SQL queries.

## Question 6: Explain the concept of concurrency control, deadlocks in a multi-user database environment
Concurrency control in a multi-user database system ensures that concurrent execution of transactions doesn't lead to data inconsistencies. Problems such as Lost Updates, Dirty Reads, and Unrepeatable Reads can occur without proper control.

1. **Lost Update Problem**: This arises when two transactions concurrently modify the same data item, resulting in one update being overwritten and data inconsistency.

2. **Dirty Read Problem**: Occurs when a transaction reads data that has been modified by another transaction that later rolls back, leading to reading incorrect, "dirty" data.

3. **Unrepeatable Read Problem**: Involves a transaction reading the same data item multiple times but getting different values due to concurrent updates, causing inconsistency.

Concurrency control protocols ensure database consistency and include:
   
   - **Lock-Based**: Transactions acquire locks on data items to prevent conflicting access.
   
   - **Timestamp-Based**: Assigns timestamps to transactions and data items, ensuring a predefined order of execution.

   - **Validation-Based**: Transactions are validated before committing to ensure they won't cause conflicts.

These protocols maintain atomicity, consistency, isolation, durability (ACID properties), and serializability in concurrent database operations.
## Question 7: Read about Database sharding and explain couple of real time examples where, why, how it this concept is used
Data sharding is a technique in DBMS to allow divide a large database into small instance where 
each instance is called shard.
When database grows larger it requires a lot of computation power for single machine. so it 
is better to divide this into smaller shards.
They work together to store and process large volumes of data.

The database becomes slow if volume becomes too large and too many users attempt to use the application to read or save information.
Data sharding allows parallel processing of smaller datasets across shards

Benefits
1. Due to division of data into smaller chunks, each chunk gets smaller numberof rows so a query takes less time and is faster
2. If once shards , other shards can still provide serivce and therefore avoids total service failure
3. Using sharding it is easy to scale the database, instead of creating new database with increased size, in sharding we add new chunk/instance of database wihout stopping the previous databases.
All shards run on separate nodes but share the original database’s schema or design. 

Usually in online game servers, different shards of game servers are created to allow a huge nubmer
of players to be able to play. It gives an idea that all players are playing in single server connected to single database. but it is divided into shards.