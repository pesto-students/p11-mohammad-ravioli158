-- Relation to store Cities 
Create Table Cities(
    City char(20) NOT NULL,
    State char(20),
    PRIMARY KEY(City)
);

-- Insert data
INSERT INTO
    cities (CITY, STATE)
VALUES
    ('Pune', 'Maharashtra'),
    ('Mumbai', 'Maharashtra'),
    ('Delhi', 'Delhi'),
    ('Bangalore', 'Karnataka'),
    ('Chennai', 'Tamil Nadu');

-- Create Table Warehouses
CREATE TABLE Warehouses(
    WID int,
    WName char(30),
    Location char(20),
    ExtraContext json,
    PRIMARY KEY (WID),
    FOREIGN KEY (Location) references Cities(City)
);

-- Insert data
INSERT INTO
    WAREHOUSES
VALUES
    (1, 'Warehouse A', 'Pune', '{"capacity": 1000}'),
    (2, 'Warehouse B', 'Mumbai', '{"capacity": 800}'),
    (3, 'Warehouse C', 'Delhi', '{"capacity": 1200}'),
    (
        4,
        'Warehouse D',
        'Bangalore',
        '{"capacity": 900}'
    );

-- Store
CREATE TABLE Stores(
    SID int,
    StoreName char(20),
    LocationCity char(20),
    primary key (SID),
    foreign key (LocationCity) references Cities(city)
);

-- Insert Data
INSERT INTO
    Stores
VALUES
    (1, 'Store 1', 'Pune'),
    (2, 'Store 2', 'Mumbai'),
    (3, 'Store 3', 'Pune'),
    (4, 'Store 4', 'Delhi');

-- Customer Table
create table customers (
    CNo int,
    CName char(50),
    Addr varchar(50),
    CuCity char(20),
    primary key (CNo),
    foreign key (CuCity) references Cities(City)
);

INSERT INTO
    customers
VALUES
    (101, 'Mr. Patil', '123 Main St', 'Pune'),
    (102, 'Mrs. Sharma', '456 Central Ave', 'Mumbai'),
    (103, 'Mr. Singh', '789 1st Street', 'Delhi'),
    (104, 'Ms. Gupta', '101 Second Road', 'Bangalore'),
    (105, 'Mr. Kumar', '456 Third Avenue', 'Chennai');

-- Orders 
Create table Orders (
    ONo int,
    CNo int,
    ODate date,
    primary key(ONo),
    foreign key(CNo) references Customers(CNo)
);

INSERT INTO
    Orders
VALUES
    (1, 101, '2023-06-15'),
    (2, 102, '2023-06-16'),
    (3, 104, '2023-06-17'),
    (4, 104, '2023-06-18'),
    (5, 105, '2023-06-19');

-- Items
create table items(
    ItemNo int,
    Descr text,
    weight decimal(5, 2),
    cost decimal(5.2),
    primary key (ItemNo)
);

INSERT INTO
    items
VALUES
    (101, 'Laptop', 2.5, 1200.50),
    (102, 'Smartphone', 0.5, 800.00),
    (103, 'TV', 15.0, 1000.00),
    (104, 'Microwave Oven', 10.0, 500.00),
    (105, 'Refrigerator', 25.0, 1500.00),
    (106, 'Washing Machine', 30.0, 1800.00);

--  Order Items 
create table OrderItems (
    ONo int,
    ItemNo int,
    Quantity int,


    
    primary key(Ono, ItemNo),
    foreign key (ItemNo) references Items(ItemNo),
    foreign key (ONo) references Orders(ONo)
);

insert into
    orderitems
values
    (1, 101, 2),
    (1, 104, 1),
    (4, 106, 5);