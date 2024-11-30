---
sidebar_position: 14
title: Normailzation in Hindi
author: Heera Singh Lodhi
date: 30-11-2024
slug: "normalization-hi-hindi"
keywords: ["normalization-hi-hindi", "normalization-in-hindi"]
description: ""
---

# Normalization

Normalization एक प्रोसेस है डेटाबेस में डाटा को organize करने की, जिससे redundancy काम हो एवं डाटा इंटीग्रिटी में सुधर हो। Normalization का मुख्य उद्देश्य एक टेबल को एक से अधिक टेबल में विभाजित करना है एवं सबंध (रिलेशनशिप) के आधार पर आपस में link किया जाता है।इस प्रकिया में normalization के नियमों का पालन किया जाता है (इन्ही नियमों को normalization के नियम कहते है) जिससे डेटाबेस कुशलता से structured रहे। structured डेटाबेस में डाटा query, updatation आदि operation के टाइम काम लगता है।

:::info PDF Link
NOTE – PDF लिंक निचे है – [Click Here](https://edevhindi.com/normalization-in-dbms-in-hindi/#pdf)
:::

## Types of Normalization

- First Normal Form (1NF)
- Second Normal Form (2NF)
- Third Normal Form (3NF)
- Boyce-Codd Normal Form (BCNF)
- Fourth Normal Form (4NF)

### First Normal Form (1NF)

Normalization के प्रथम नियमानुसार टेबल में एटॉमिक (atomic) values होनी चाहिए या टेबल के हर एक कॉलम में केवल और केवल एक वैल्यू होनी चाहिए।

**Example** (Normalization के बिना)

<table>
<tr>
  <td>OrderID</td>
  <td>CustomerName</td>
  <td>Quantity</td>
  <td>UnitPrice</td> 
  <td>UnitPrice</td> 
</tr>
<tr>
  <td>1</td>
  <td>Alice</td>
  <td>Pen</td>
  <td>1</td>
  <td>3</td>
</tr>
<tr>
  <td>1</td>
  <td>Alice</td>
  <td>Notebook, Laptop</td>
  <td>5</td>
  <td>3</td>
</tr>
<tr>
  <td>2</td>
  <td>Bob	</td>
  <td>Pencil</td>
  <td>20</td>
  <td>0.5</td>
</tr>
</table>

Normalization के बाद

<table>
  <tbody>
    <tr>
      <td><strong>OrderID</strong></td>
      <td><strong>CustomerName</strong></td>
      <td><strong>ProductName</strong></td>
      <td><strong>Quantity</strong></td>
      <td><strong>UnitPrice</strong></td>
    </tr>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>Pen</td>
      <td>10</td>
      <td>1</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>Notebook</td>
      <td>5</td>
      <td>3</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>Laptop</td>
      <td>5</td>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bob</td>
      <td>Pencil</td>
      <td>20</td>
      <td>0.5</td>
    </tr>
  </tbody>
</table>

### Second Normal Form (2NF)

Normalization के प्रथम नियमानुसार टेबल (relation) में First Normal Form में होने के साथ-साथ टेबल के सभी non-key attributre पूर्णतयः primary key पर निर्भर हो।Order Table (Not in 2NF)

<table>
  <thead>
    <tr>
      <th>OrderID</th>
      <th>CustomerName</th>
      <th>ProductName</th>
      <th>Quantity</th>
      <th>UnitPrice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>Pen</td>
      <td>10</td>
      <td>1</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>Notebook</td>
      <td>5</td>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bob</td>
      <td>Pencil</td>
      <td>20</td>
      <td>0.5</td>
    </tr>
  </tbody>
</table>

Issues with the Table (Not in 2NF)

Redundancy: CustomerName and CustomerAddress repeat हो रहे है product order के लिए।

Partial Dependency: CustomerName and CustomerAddress दोनों केवल OrderID पर depend है, जो की composite primary ((OrderID, ProductID)) का हिस्सा है।

Second Normal Form (2NF) के बाद Customers Table:

<table>
  <thead>
    <tr>
      <th>CustomerID</th>
      <th>CustomerName</th>
      <th>CustomerAddress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>123 Main St</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bob</td>
      <td>456 Oak St</td>
    </tr>
  </tbody>
</table>

Products Table:

<table>
  <thead>
    <tr>
      <th>ProductID</th>
      <th>ProductName</th>
      <th>UnitPrice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>101</td>
      <td>Pen</td>
      <td>1.00</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Notebook</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>103</td>
      <td>Pencil</td>
      <td>0.50</td>
    </tr>
  </tbody>
</table>

Orders Table:

<table>
  <thead>
    <tr>
      <th>OrderID</th>
      <th>CustomerID</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

OrderDetails Table:

<table>
  <thead>
    <tr>
      <th>OrderID</th>
      <th>ProductID</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>101</td>
      <td>10</td>
    </tr>
    <tr>
      <td>1</td>
      <td>102</td>
      <td>5</td>
    </tr>
    <tr>
      <td>2</td>
      <td>103</td>
      <td>20</td>
    </tr>
  </tbody>
</table>

### Third Normal Form (3NF)

टेबल तीसरे फॉर्म में होने के लिए पहले 1ंNF एवं 2NF में होनी चाहिए इसके साथ ही सभी attribute प्राइमरी key पर depend होने चाहिए है। इसमें फॉर्म में transitive dependancy (एक non-key attributes किसी दूसरे non-key attributes पर देपेंद न हो) नहीं होनी चाहिए।

Order Table (Not in 3NF):

<table>
  <tbody>
    <tr>
      <td><strong>OrderID</strong></td>
      <td><strong>CustomerID</strong></td>
      <td><strong>CustomerName</strong></td>
      <td><strong>CustomerAddress</strong></td>
      <td><strong>ProductID</strong></td>
      <td><strong>ProductName</strong></td>
      <td><strong>Quantity</strong></td>
      <td><strong>UnitPrice</strong></td>
      <td><strong>TotalPrice</strong></td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>Alice</td>
      <td>123 Main St</td>
      <td>101</td>
      <td>Pen</td>
      <td>10</td>
      <td>1</td>
      <td>10</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>Alice</td>
      <td>123 Main St</td>
      <td>102</td>
      <td>Notebook</td>
      <td>5</td>
      <td>3</td>
      <td>15</td>
    </tr>
    <tr>
      <td>2</td>
      <td>2</td>
      <td>Bob</td>
      <td>456 Oak St</td>
      <td>103</td>
      <td>Pencil</td>
      <td>20</td>
      <td>0.5</td>
      <td>10</td>
    </tr>
  </tbody>
</table>
 
Customers Table:

<table>
  <thead>
    <tr>
      <th>CustomerID</th>
      <th>CustomerName</th>
      <th>CustomerAddress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>123 Main St</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bob</td>
      <td>456 Oak St</td>
    </tr>
  </tbody>
</table>

Products Table:

<table>
  <thead>
    <tr>
      <th>ProductID</th>
      <th>ProductName</th>
      <th>UnitPrice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>101</td>
      <td>Pen</td>
      <td>1.00</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Notebook</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>103</td>
      <td>Pencil</td>
      <td>0.50</td>
    </tr>
  </tbody>
</table>

Orders Table:

<table>
  <thead>
    <tr>
      <th>OrderID</th>
      <th>CustomerID</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

OrderDetails Table:

<table>
  <thead>
    <tr>
      <th>OrderID</th>
      <th>ProductID</th>
      <th>Quantity</th>
      <th>UnitPrice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>101</td>
      <td>10</td>
      <td>1.00</td>
    </tr>
    <tr>
      <td>1</td>
      <td>102</td>
      <td>5</td>
      <td>3.00</td>
    </tr>
    <tr>
      <td>2</td>
      <td>103</td>
      <td>20</td>
      <td>0.50</td>
    </tr>
  </tbody>
</table>

### Boyce-Codd Normal Form (BCNF) इस नार्मल में टेबल 3NF होने के साथ-साथ, हर एक

functional dependancy (A -> B), जहाँ A एक सुपर key है। BCNF 3NF का stricter
version है।Example Without BCNFStudent Courses Table (Not in BCNF):

<table>
  <thead>
    <tr>
      <th>StudentID</th>
      <th>CourseID</th>
      <th>Instructor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>101</td>
      <td>Prof. Smith</td>
    </tr>
    <tr>
      <td>1</td>
      <td>102</td>
      <td>Prof. Jones</td>
    </tr>
    <tr>
      <td>2</td>
      <td>101</td>
      <td>Prof. Smith</td>
    </tr>
    <tr>
      <td>3</td>
      <td>103</td>
      <td>Prof. Adams</td>
    </tr>
  </tbody>
</table>

### Issues with the Table (Not in BCNF) Functional Dependency: यहाँ पर instructor

depends है CourseID, लेकिन CourseID एक सुपर key नहीं है। StudentID and CourseID
एक primary key बनाया जा सकता है। Students Table:

<table>
  <thead>
    <tr>
      <th>StudentID</th>
      <th>CourseID</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>101</td>
    </tr>
    <tr>
      <td>1</td>
      <td>102</td>
    </tr>
    <tr>
      <td>2</td>
      <td>101</td>
    </tr>
    <tr>
      <td>3</td>
      <td>103</td>
    </tr>
  </tbody>
</table>

Courses Table:

<table>
  <thead>
    <tr>
      <th>CourseID</th>
      <th>Instructor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>101</td>
      <td>Prof. Smith</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Prof. Jones</td>
    </tr>
    <tr>
      <td>103</td>
      <td>Prof. Adams</td>
    </tr>
  </tbody>
</table>

### Fourth Normal Form (4NF) टेबल को Fourth Normal Form में होने के लिए 3NF एवं

BCNF के साथ-साथ multi-valued dependencies न हो।Student Activities Table (Not in
4NF):

<table>
  <thead>
    <tr>
      <th>StudentID</th>
      <th>Activity</th>
      <th>Skill</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Football</td>
      <td>Painting</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Football</td>
      <td>Dancing</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Basketball</td>
      <td>Painting</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Basketball</td>
      <td>Dancing</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Football</td>
      <td>Singing</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Swimming</td>
      <td>Singing</td>
    </tr>
  </tbody>
</table>

Issues with the Table (Not in 4NF) Multi-Valued Dependency: एक स्टूडेंट की
multiple activities and multiple skills है, जो की redundancy and data anomalies
problem को क्रिएट करती है।

## Example With 4NF टेबल को 4NF में करने के लिए, हमें

multi-valued dependencies को रिमूव करने पड़ेंगे, जिसके के लिए टेबल को दो अलग-अलग
टेबल्स में विभाजित करेंगे किसी भी टेबल में multi-valued dependencies नहीं
रहेंगी।

StudentActivities Table:

<table>
  <thead>
    <tr>
      <th>StudentID</th>
      <th>Activity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Football</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Basketball</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Football</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Swimming</td>
    </tr>
  </tbody>
</table>

StudentSkills Table:

<table>
  <thead>
    <tr>
      <th>StudentID</th>
      <th>Skill</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Painting</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Dancing</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Singing</td>
    </tr>
  </tbody>
</table>

इस article में हमने नार्मल फॉर्म्स के बारें पढ़ा, यदि कोई doubt हो तो comment में
पूछ सकते है। आर्टिकल पसंद आये हो तो दोस्तों के साथ भी शेयर करें। धन्यवाद !

## PDF Download Link
