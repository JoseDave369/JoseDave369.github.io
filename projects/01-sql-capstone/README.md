# 📊 SQL Capstone – Customer & Campaign Database

**Author:** José David Murillo Gómez  
**Tool:** SQL Server Management Studio (SSMS)  
**Category:** Database Design · SQL · T-SQL

---

## 📋 Project Overview

Designed and implemented a fully normalised relational database in SQL Server to manage customer data, purchase transactions, marketing campaigns, product catalogues, and country/time reference tables.

## 🗄️ Database Schema

The database `JoseDavidGomez` contains **12+ interconnected tables**:

| Table | Description |
|---|---|
| `Clientes` | Customer master data (name, email, phone, country, birthdate) |
| `Pais` | Country reference (code, name, continent) |
| `Producto` | Product catalogue |
| `Compra` | Purchase transactions |
| `CompraCliente` | Purchase-to-customer relationship |
| `Campania` | Marketing campaigns |
| `CampaniaProducto` | Campaign-to-product relationship |
| `Record` | Activity records |
| `RecordCliente` | Record-to-client relationship |
| `HoraCaptacion` | Time slots for customer acquisition |
| `HoraCapClienteCampania` | Time-campaign-client bridge table |
| `HorarioEstado` | Schedule state lookup |
| `ConceptoCompra` | Purchase concepts/categories |

## 🔑 Key SQL Concepts Demonstrated

- `CREATE DATABASE` / `CREATE TABLE` with constraints (PK, FK, NOT NULL)
- `INSERT INTO` with sample data population
- Complex `SELECT` with `JOIN`, `WHERE`, `ORDER BY`, `TOP`
- `GROUP BY` with aggregate functions (`AVG`, `COUNT`, `MAX`, `MIN`)
- `CASE` statements for conditional logic
- `DISTINCT` queries for deduplication
- Date filtering with `BETWEEN`
- Stored procedure `Nuevo_cliente` for safe record insertion
- Foreign key relationships ensuring referential integrity

## 📁 Files

```
01-sql-capstone/
├── README.md                          ← This file
├── JoseDavidGomez_schema.sql         ← Full DDL (tables, constraints)
├── JoseDavidGomez_queries.sql        ← Sample analytical queries
└── Plantilla_Capstone_2024.txt       ← Project description & requirements
```

## 🛠️ Technologies

`SQL Server` · `SSMS` · `T-SQL` · `DDL/DML` · `Stored Procedures` · `Relational Database Design`

---

> 📌 Part of the **IBM Data Science Professional Certificate** curriculum — Database Management module.
