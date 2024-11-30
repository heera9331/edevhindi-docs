---
sidebar_position: 7
title: "ER Models in hindi"
author: Heera Singh Lodhi
date: 30-11-2024
slug: "er-model-in-hindi"
description: "जैसे कि DBMSएक सॉफ्टवेयर है जिससे बात करने के लिए एक language की जरूरत होती है बो है SQL जिससे हम अपने अनुरूप dbms software काम करा सके। SQL एक query language है जिसका उपयोग database से query (query/ask something from database) करने के लिए करते है। SQL में बहुत से commands होती जिनका specific उपयोग होता है।"
keywords: ["er model in hindi", "er model in dbms", "er model mysql"]
---

ER data model एक प्रकार का data modelहै, जहाँ ER का full form है EntityRelationshipएवं Entity का मतलब object (or real world thing) है | किसी भी Entity की properties ही table में attributeलिखा जाता है, जैसे student एक Entity है , जिसका name, age, gender आदि properties हो सकते है |उदाहरण –

- यह एक high-level data model है।
- इस model से conceptual design तैयार होता है databaseके लिए।

## Component of ER Diagram

1. Entity
2. Attribute
3. Relationship

### 1. Entity

एक entity कोई भी object, class, व्यक्ति or स्थान हो सकता है। ER diagram में, entity को rectangle से represent करते है।उदहारण – student एक entityहै।

Weak Entity – ये एक प्रकार की entity ही है जो किसी दूसरी entity पर निर्भर रहती है। इस entity के पास कोई भी key attribute नहीं होता है।

Weak Entity को double rectangle से represent करते है।

### 2. Attribute

ER model में attributeएक property है किसी के specific entityकी, जिसे Eclipse द्वारा दर्शाया (represent) जाता है।उदाहरण – student का नाम एक attributeहै। एक entity के एक से अधिक attribute हो सकते है।

#### Types of Attribute

- Key Attribute
- Composite Attribute
- Derived Attribute
- Multivalued Attribute

#### Key Attribute

Key Attribute का उपयोग किसी Entity की मुख्य विशेषताओं को दर्शाने के लिए किया जाता है। यह primary key को represent करती है।

Key Attribute को ellipse से दर्शाते है underline text के साथ।

#### Composite Attribute

यह attribute एक से अधिक अन्य attribute से मिलके बना होता है, जो संयुक्त रूप से कम्पोजिट attribute कहलाता है।

Composite attribute को ellipse से denote करते है।
Example – student का full_name एक composite attribute है जो first_name एवं last_name से मिलके बना हुआ है।

#### Derived Attribute

ऐसा attribute जो की दूसरे attribute की मदद से संभव है derived attribute कहते है जैसे student की age उसकी birth के बिना नहीं निकली जा सकती है, ऐसे एट्रिब्यूट है derived कहलाते है।

derived attribute को dashed ellipse से दर्शाते है।

#### Multivalued Attribute

ऐसा attribute जिसकी एक से values हो muti-valued एट्रिब्यूट कहते है, जैसे student का मोबाइल नंबर जो एक से अधिक हो सकते है, तो यहाँ पे मोबाइल नंबर muti-valued attribute है।

### 3. Relationship

एक entityका दूसरे entityसे सम्बन्ध को ही relationshipकहते है, Diamond or rhombus से relationship को दर्शाया जाता है। (represent किया जाता है)उदहारण – teacher और student के मध्य पढ़ने/पढ़ाने का रिलेशनशिप (relationship) है।

## Entity Relationship Diagrams

ये Diagrams Entity, Attribute एवं उनके बीच रिलेशनशिप दर्शाते है, अच्छे से समझने के लिए नीचे उदाहरण दिया गया है –

![ER Relationship Diagrams](https://edevhindi.com/wp-content/uploads/2024/05/Entity-Relationship-Diagrams.png)

## Cardinality

![ER Cardinality Diagrams](https://edevhindi.com/wp-content/uploads/2024/05/Cardinality.png)

## Example - WordPress Database ER Model

![ER Cardinality Diagrams](https://edevhindi.com/wp-content/uploads/2024/05/Untitled-Workspace-1671x2048.png)
