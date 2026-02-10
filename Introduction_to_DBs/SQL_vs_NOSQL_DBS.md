# SQL Vs NO-SQL
In this section we see the main difference or say oerview of Structured Query Language(SQL) vs Not Only Structured Query Language(NO-SQL)

## ✅ SQL Databases (Relational Databases)

- Data is stored in tables (rows & columns)

- Uses fixed schema

- Query language: SQL

- Best when data has clear relationships (users ↔ orders ↔ payments)

### Common SQL DB examples

- MySQL

- PostgreSQL

- Oracle Database

- Microsoft SQL Server

- SQLite

#### Example data (table style)

Users table

|id	|name|	email|
|---|----|-------|
|1	|Dipak|	dipak@gmail.com|
|2	|Rahul|	rahul@gmail.com|

👉 Strong consistency, joins, transactions (ACID).

## ✅ NoSQL Databases (Non-Relational)

Data stored as documents, key-value, graphs, or columns

- Flexible schema

- Designed for scalability & speed

- Great for modern apps, APIs, real-time data

### Common NoSQL DB examples

- MongoDB → Document-based

- Redis → Key-Value

- Cassandra → Wide-column

- Neo4j → Graph

- Amazon DynamoDB

#### Example data (document style – MongoDB)
```json
{
  "_id": 1,
  "name": "Dipak",
  "email": "dipak@gmail.com",
  "skills": ["React", "Node", "Docker"]
}
```


👉 No fixed columns, easy to evolve, very fast for reads/writes.

### ⚔️ SQL vs NoSQL (Quick Compare)

|Feature |SQL |NoSQL|
|--------|----|-----|
|Schema	| Fixed	| Flexible
|Structure	|Tables	|JSON / Key-Value
|Scaling	|Vertical	|Horizontal
|Relationships	|Strong	|Limited
|Best for	|Banking, ERP	|Web apps, real-time