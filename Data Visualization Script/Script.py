import matplotlib.pyplot as plt

# Sample data
x = [1, 2, 3, 4, 5]
y = [10, 12, 8, 15, 7]

# Line chart
plt.plot(x, y, marker="o")
plt.xlabel("X-axis Label")
plt.ylabel("Y-axis Label")
plt.title("Sample Line Chart")
plt.grid(True)
plt.show()

# Bar chart
categories = ["A", "B", "C", "D", "E"]
values = [25, 18, 30, 15, 22]
plt.bar(categories, values, color="skyblue")
plt.xlabel("Categories")
plt.ylabel("Values")
plt.title("Sample Bar Chart")
plt.show()

# Scatter plot
import random

x = [random.randint(0, 100) for _ in range(50)]
y = [random.randint(0, 100) for _ in range(50)]
plt.scatter(x, y, color="green", marker="x")
plt.xlabel("X-axis Label")
plt.ylabel("Y-axis Label")
plt.title("Sample Scatter Plot")
plt.show()
