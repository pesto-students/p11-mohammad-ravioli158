--1.  Find the item that has the minimum weight.
select
    *
from
    items
where
    weight = (
        select
            min(weight)
        from
            items
    );

-- # ItemNo, Descr, weight, cost
-- '102', 'Smartphone', '0.50', '800'
-- 2. Find the different warehouses in "Pune".
SELECT
    DISTINCT WName
FROM
    Warehouses
WHERE
    Location = 'Pune';

-- 3. Find the details of items ordered by a customer named "Mr. Patil".
select
    *
from
    items
    inner join orderitems on items.itemno = orderitems.itemno;

-- Find an item that is ordered for a minimum number of times.
select
    items.itemno,
    count(orderitems.Ono)
from
    items
    left outer join orderitems on items.itemno = orderitems.itemno
group by
    items.itemno
order by
    count(orderitems.ono)
limit
    1;

-- Find the detailed orders given by each customer.
select
    *
from
    customers
    left outer join orders on customers.cno = orders.cno
    left outer join orderitems on orders.ono = orderitems.ono
    left outer join items on items.itemno = orderitems.itemno;

-- Find a Warehouse that has the maximum number of stores.
SELECT
    W.WID,
    W.WName,
    COUNT(S.SID) AS StoreCount
FROM
    Warehouses W
    LEFT JOIN Stores S ON W.Location = S.LocationCity
GROUP BY
    W.WID,
    W.WName
ORDER BY
    StoreCount DESC
LIMIT
    1;