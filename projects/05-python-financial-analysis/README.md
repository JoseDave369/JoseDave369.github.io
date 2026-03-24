# 💹 Monthly Financial Analysis – Python

**Author:** José David Murillo Gómez  
**Tool:** Python · Jupyter Notebook  
**Category:** Financial Analysis · Data Science · Automation

---

## 📋 Project Overview

Python script that automates monthly financial statement analysis for an organisation. Calculates net profit, after-tax profit, and profit margins from raw revenue and expense vectors.

## 📊 Dataset

```python
ingresos = [200, 210, 250, 300, 310, 260, 270, 280, 290, 300, 310, 320]  # Monthly revenue ($K)
gastos   = [180, 190, 240, 290, 305, 250, 260, 270, 285, 295, 305, 310]  # Monthly expenses ($K)
```

## 🔑 Calculations Performed

| Metric | Formula | Output |
|---|---|---|
| Monthly Utility | `ingresos - gastos` | `[20,20,10,10,5,10,10,10,5,5,5,10]` ($K) |
| After-Tax Profit (UDI) | `utility × (1 - 0.30)` | `[14,14,7,7,4,7,7,7,4,4,4,7]` ($K) |
| Profit Margin (%) | `UDI / ingresos × 100` | `[7,7,3,2,1,3,3,2,1,1,1,2]` % |
| Good Months | `UDI > annual average` | Months **1 & 2** |
| Bad Months | `UDI < annual average` | Months **5, 9, 10, 11** |
| Best Month | `max(UDI)` | Month **1** ($14K) |
| Worst Month | `min(UDI)` | Month **5** ($4K) |

## 💡 Key Insights

- **Best performing period:** Q1 (months 1–2) with highest margins (7%)
- **Worst performing period:** Mid-year (months 5, 9–11) — highest cost-to-revenue ratio
- **Tax note:** Negative UDI values would represent deferred tax assets (tax benefit)

## 📁 Files

```
05-python-financial-analysis/
├── README.md
├── Proyecto Financiero.ipynb          ← Full Jupyter Notebook
└── Escenario_DataScientist.pdf       ← Project brief / scenario
```

## 🛠️ Technologies

`Python 3` · `NumPy` · `Pandas` · `Matplotlib` · `Jupyter Notebook` · `Financial Modelling`

---

> 📌 Part of the **IBM Python for Data Science** curriculum — demonstrates applied financial analysis using Python automation.
