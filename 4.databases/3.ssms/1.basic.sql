SELECT name FROM sys.databases
CREATE DATABASE sqlcommands
use sqlcommands
create table emp (id int , name varchar(20), mobile bigint ,dept varchar(20), salary money)
exec sp_help emp
alter table emp add city varchar(20)
alter table emp drop column city
alter table emp alter column salary int
exec sp_rename 'emp.mobile','mobileno'
exec sp_rename 'emp','employee'
insert into employee values (1,'ram',35432131,'IT', 25000)
insert into employee values (2,'ramesh',3421231,'sales', 28000),(3,'shiva',56435132,'Admin', 22000),
(4,'prem',524531,'HR', 29000),(5,'guna',324135413,'IT', 26000)
select * from employee