# 🛡️ Credit Card Fraud Detection – AI / Machine Learning

**Author:** José David Murillo Gómez  
**Platform:** Google Colab  
**Category:** Artificial Intelligence · Machine Learning · Classification · Cybersecurity

---

## 📋 Project Overview

Built a machine learning model to detect fraudulent credit card transactions using a real-world Kaggle dataset. Implemented a full ML pipeline from data ingestion to model evaluation using Python and Scikit-learn.

## 🗂️ Dataset

- **Source:** Kaggle — `creditcard.csv`
- **Size:** Highly imbalanced dataset (fraud cases are rare events)
- **Features:** Transaction amounts, anonymised PCA-transformed features (V1–V28), Time, Class (0=legit, 1=fraud)

## 🔬 ML Pipeline

```
1. Data Loading          → pd.read_csv('creditcard.csv')
2. Exploratory Analysis  → Fraud %, avg amounts, class distribution
3. Data Cleaning         → Drop missing values & duplicates
4. Visualisation         → Bar charts, histograms (Matplotlib / Seaborn)
5. Feature Scaling       → StandardScaler (normalise V1-V28, Amount)
6. Train/Test Split      → train_test_split (80/20 stratified)
7. Model Training        → SVC (Support Vector Classifier)
8. Evaluation            → Confusion Matrix + Classification Report
```

## 📊 Model Evaluation

| Metric | Description |
|---|---|
| **Precision** | Of predicted fraud cases, how many are real fraud |
| **Recall** | Of real fraud cases, how many were detected |
| **F1-Score** | Harmonic mean of precision & recall |
| **Confusion Matrix** | True Positives, True Negatives, False Positives, False Negatives |

## 🔑 Libraries Used

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import confusion_matrix, classification_report
```

## 📁 Files

```
06-ai-fraud-detection/
├── README.md
├── creditcard.csv.zip                              ← Dataset (compressed)
├── AI_CreditCardFraudDetection_Notebook.pdf       ← Colab notebook export
└── Contenido_ModeloDeteccionFraude.pdf            ← Reference material
```

## 🛠️ Technologies

`Python 3` · `Scikit-learn` · `SVM / SVC` · `Pandas` · `NumPy` · `Seaborn` · `StandardScaler` · `Google Colab` · `Kaggle`

---

> ⭐ **Featured Project** — Demonstrates practical AI/ML skills applied to a real business problem (financial fraud prevention). Highly relevant for Data Scientist, ML Engineer, and Data Analyst roles in fintech and banking.
