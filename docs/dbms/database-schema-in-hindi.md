---
sidebar_position: 8
title: Database Schema in Hindi
author: Heera Singh Lodhi
date: 30-11-2024
slug: "database-schema-in-hindi"
keywords: ["database schema in hindi", "database schema in dbms"]
description: "Database schema एक blueprint या architecture होता है डेटाबेस है का | जो यह define करता है कि डेटा किस तरह से स्टोर, मैनेज, एक्सेस एवं डेटा के बीच क्या या कैसे relationships रहेंगे।"
---

Database schema एक blueprint या architecture होता है डेटाबेस है का | जो यह define करता है कि डेटा किस तरह से स्टोर, मैनेज, एक्सेस एवं डेटा के बीच क्या या कैसे relationships रहेंगे।

- Database schema, database की संरचना का विस्तृत विवरण रखता है |

- Column/Field (डेटाबेस स्कीमा) – में table, views, column/fields, keys (primary keys and foreign keys), indexes, constraints, triggersऔर relationship शामिल रहती है |

- Table – टेबल database का मूल अव्यव है जो डेटा को स्टोर रखता है, table में row और कॉलम के form में डेटा स्टोर होता है।

- कॉलम/फ़ील्ड्स (column/field) – तालिका (table) में फ़ील्ड्स/fields या column को attribute (या entity की properties को हि table में attribute) कहा जाता है।

- Primary Key – ये unique identifiers है हर एक row के लिए किसी भी table में, primary key यह sure करती है कि टेबल में हर एक row अद्वितीय (unique) है।

- Foreign Key – यह की एक table से दूसरी table के रिलेशनशिप (relationship) स्थापित करती है।

- _Indexes_ – Indexes डेटाबेस से डेटा retrieval ऑपरेशन की speed को बढ़ाता है।

- _Constraints_ – ये एक प्रकार की प्रतिबंध होती है database स्तर पर apply होता है, जो NOT NULL , unique, CHECK और DEFUALT हो सकती है।

- _Trigger_ – ट्रिगर SQL Code है जो किसी विशेष (event) के घटित होने पर execute होता है।

## Types of database schema

Database schema निम्न तीन प्रकार होते हैं:-

- Physical Schema
- Logical Schema
- View/Conceptual Schema

![introduction to wordpress image](https://edevhindi.com/wp-content/uploads/2024/05/INTRODUCTION-TO-WORDPRESS-1.png)

### 1. Physical Schema

फिजिकल डेटाबेस स्कीमा (physical database schema) यूजर (user) को यह बताता है कि data स्टोरेज डिवाइस में किस प्रकार से स्टोर किया जाता है |Physical database schema यह define करता है कि data को database में किस प्रकार प्रस्तुत (represent) किया जाता है तथा डेटा को किस प्रकार स्टोर किया जाता है |Physical Schema में डाटा स्टोर करने वाले डिवाइस जैसे – हार्ड डिस्क, सॉलिड डिस्क ड्राइव (SSD) एवं pendrive है।

### 2. Logical Schema

Logical Schema database में या डिफाइन करता है की सम्पूर्ण (entire) डेटाबेस की क्या संरचना रहेंगी | कैसे डाटा स्टोर एवं ओर्गनइजे (organize) होगा। यह schema ही decide करता है की डेटाबेस टेबल में डाटा किस प्रकार स्टोर होगा, टेबल का संरचना (Schema) क्या होगा, एक टेबल से दूसरी टेबल किस प्रकार सम्बंधित रहेंगी।

इसी Schema पर DBA एवं डेवलपर काम करते है।

### 3. View/Conceptual Schema

Conceptual Schema एक abstract मॉडल (model) है डेटाबेस का, व्यवसाय की दृष्टि से।
यह end user एवं डेटाबेस के मध्य होने वाले interaction के डिटेल्स (details) प्रदान करता है।
