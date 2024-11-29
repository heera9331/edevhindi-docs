---
sidebar_position: 6
title: "SQL in Hindi"
author: Heera Singh Lodhi
date: 30-11-2024
slug: "sql-in-hindi"
description: "जैसे कि DBMSएक सॉफ्टवेयर है जिससे बात करने के लिए एक language की जरूरत होती है बो है SQL जिससे हम अपने अनुरूप dbms software काम करा सके। SQL एक query language है जिसका उपयोग database से query (query/ask something from database) करने के लिए करते है। SQL में बहुत से commands होती जिनका specific उपयोग होता है।"
---



# SQL क्या है ?

जैसे कि DBMSएक सॉफ्टवेयर है जिससे बात करने के लिए एक language की जरूरत होती है बो है SQL जिससे हम अपने अनुरूप dbms software काम करा सके। SQL एक query language है जिसका उपयोग database से query (query/ask something from database) करने के लिए करते है। SQL में बहुत से commands होती जिनका specific उपयोग होता है।

- QL का full form है Structured Query Language.
- QL एस क्यू एल या sequal भी पड़ा जाता है।
- QL एक query language है जो बहुत से RDBMS में उपयोग होती है।
- QL एक मानक language है database से बात करने के लिए।
- SQL बहुत सी commands provide करता है जिससे हम database पर operation perform करते है जैसे query, insert, update एवं delete आदि।

## Categories/types of SQL Commands

SQL commands को 4 वर्ग (category) में विभाजित किया गया है, जो निम्नलिखित है –

DDL - Data Definition Lagguage
DML - Data Manipulation Language
DCL - Data Control Language
TCL - Transaction Control Language

### Data Definition Language (DDL)

इस category की commands, डाटा को परिभाषित (define) करने के लिए उपयोग होती है, प्रमुख commands कुछ इस प्रकार है –

- **CREATE**: इस command का उपयोग database, table, views आदि create करने की लिए किया जाता है।
- **ALTER**: इस command का उपयोग existing database, table आदि modify करने की लिए किया जाता है
- **DROP**: इस command का उपयोग existing database, table, column, tuple आदि delete करने की लिए किया जाता है।
- **TRUNCATE**: इस command का उपयोग table से सभी rows को delete करने की लिए किया जाता है
- **RENAME**: : इस command का उपयोग existing database, table, column आदि rename करने की लिए किया जाता है।

### Data Manipulation Language (DML)

इस category की commands, डाटा को database में manage करने के लिए उपयोग होती है, प्रमुख commands कुछ इस प्रकार है –

- **SELECT**: इस command/clause का उपयोग dataretrieve (एक table या एक से अधित टेबल ) करने के लिए करते है।
- **INSERT**: इस command का उपयोग table में dataइन्सर्ट (insert) करने के लिए करते है।
- **UPDATE**: इस command का उपयोग table में existing data को modify/update करने करने के लिए करते है।
- **DELETE**: इस command का उपयोग table से row को delete करने की लिए किया जाता है

## Data Control Language (DCL)

इस category की commands, डाटा को database में access control करने के लिए उपयोग होती है, प्रमुख commands कुछ इस प्रकार है –

- **GRANT** : इस command/clause का उपयोग user को specific permission या role देने के लिए करते है।
- **Revoke**: इस command का उपयोग का granted permissions को रोकने के लिए करते है।

### Transaction Control Language (TCL)

इस category की commands, डाटा को डेटाबेस में datatransactions manage करने के लिए उपयोग होती है, प्रमुख commands कुछ इस प्रकार है –

- **COMMIT**: इस command का उपयोग, current transaction द्वारा किये गए बदलाव को permanently save करने के लिए होता है।
- **ROLLBACK**: इस command का उपयोग, current transaction द्वारा किये गए बदलाव को undo करने के लिए होता है।
- **SAVEPOINT**: इस command का उपयोग, savepoint set करने के लिए करते है (within transaction) , ताकि बाद में इस point से rollback किया जा सके।
- **SET TRANSACTION**: इस command का उपयोग, transaction के characteristics को set करने के लिए करते है (characteristics जैसे isolation level)
