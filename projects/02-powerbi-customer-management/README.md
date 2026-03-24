# 📈 Customer Management Dashboard – Power BI

**Author:** José David Murillo Gómez  
**Tool:** Power BI Desktop  
**Category:** Business Intelligence · CRM Analytics · Dashboard Design

---

## 📋 Project Overview

Interactive Power BI dashboard analysing **2,237 clients** from a CRM dataset. Provides management with real-time KPIs and multi-dimensional segmentation to support marketing and customer strategy decisions.

## 📊 Key KPIs

| Metric | Value |
|---|---|
| Total Clients | **2,237** |
| Average Annual Income | **$52,000** |
| Total Customer Spend | **$1,355,048** |
| Average Purchase Value | **$40.73** |

## 🔍 Segmentation Dimensions

- **Education Level:** Graduation, PhD, Master, 2nd Cycle, Basic
- **Marital Status:** Married, Together, Single, Divorced, Widow, Alone
- **Number of Children:** 0, 1, 2
- **Customer Tenure:** 10–12 years distribution
- **Birth Year Groups:** Age cohort analysis

## 📐 DAX Measures Created

- Total Spend = `SUM(Clientes[MontoCompra])`
- Average Income = `AVERAGE(Clientes[Ingresos])`
- Client Count by Segment = `COUNTROWS(FILTER(...))`
- Year-over-Year comparison measures

## 📁 Files

```
02-powerbi-customer-management/
├── README.md
├── Proyecto Power BI.pbix             ← Main Power BI file
└── Gestión de clientes.pdf           ← Dashboard PDF export
```

## 🛠️ Technologies

`Power BI Desktop` · `DAX` · `Power Query (M)` · `KPI Cards` · `Slicers` · `Bar Charts` · `Pie Charts`

---

> 📌 Real CRM dataset — demonstrates skills directly applicable to Marketing Analytics and Customer Intelligence roles.
