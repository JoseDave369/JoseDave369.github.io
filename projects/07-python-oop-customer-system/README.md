# 🐍 Customer Management System – Python OOP

**Author:** José David Murillo Gómez  
**Tool:** Python 3  
**Category:** Backend Development · Object-Oriented Programming · CLI Application

---

## 📋 Project Overview

Command-line customer management application built with Python using solid Object-Oriented Programming (OOP) principles. Demonstrates modular architecture, class design, and encapsulation — skills directly applicable to data pipeline and ETL development.

## 🏗️ Architecture

```
07-python-oop-customer-system/
├── main.py                  ← Entry point: CLI menu and application logic
├── gestion_clientes.py      ← Client class definition and business methods
└── README.md
```

## 🔑 OOP Concepts Applied

| Concept | Implementation |
|---|---|
| **Classes** | `Cliente` class with properties and methods |
| **Encapsulation** | Private attributes with getter/setter methods |
| **Modular Design** | Separated logic into two modules (`main`, `gestion_clientes`) |
| **Methods** | `agregar_cliente()`, `listar_clientes()`, `buscar_cliente()`, `eliminar_cliente()` |
| **CLI Interface** | Menu-driven user interaction loop |

## 📋 Features

- ➕ **Add** new customers with validation
- 📋 **List** all registered customers
- 🔍 **Search** customers by name or ID
- ✏️ **Update** customer information
- 🗑️ **Delete** customer records
- 💾 **In-memory storage** with dictionary structure

## 📁 Files

```python
# main.py — Entry point
from gestion_clientes import GestorClientes

gestor = GestorClientes()
# Menu-driven CLI loop

# gestion_clientes.py — Core module
class Cliente:
    def __init__(self, nombre, email, telefono): ...
    
class GestorClientes:
    def agregar(self, cliente): ...
    def listar(self): ...
    def buscar(self, nombre): ...
```

## 🛠️ Technologies

`Python 3` · `OOP` · `Classes & Objects` · `Encapsulation` · `Modular Architecture` · `CLI Design`

---

> 📌 Demonstrates software engineering fundamentals applicable to building ETL pipelines, data processing scripts, and backend data tools.
