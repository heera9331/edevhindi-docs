---
sidebar_position: 4
author: Heera Singh Lodhi
date: 30-11-2024
slug: "no-sql"
description: "DBMS एक सॉफ्टवेयर है, जो की डाटा data को मैनेज करता है, डाटा मैनेज करने से तात्पर्य है डाटा को डेटाबेस में रखना, update करना, query करना (एक प्रकार से database डाटा निकलना)"
---

# NoSQL DBMS क्या है ?

NoSQL DBMS एक ऐसा DBMS है जो data को रिलेशनल टेबल के अलावा किसी अन्य प्रारूप (Format ) में संग्रहीत (Store ) करता है।

MongoDB, DynamoDB, Cassandra आदि NoSQL DBMS के उदाहरण है ।

- NoSQL DBMS - JSON Document आधारित होता है।
- NoSQL DBMS में कोई predefined schema नहीं hota है RDBMS की तरह।
- JSON Document में data key - value pair के रूप में store किया जाता है
- JSON Document में उदाहरण -

```js title="data.json"
{ "Name": "Heera Singh", "course": "BTech" }
```

## Advantages of NoSQL

NoSQL DBMS एक ऐसा DBMSहै जो data को रिलेशनल टेबल के अलावा किसी अन्य प्रारूप (Format ) में संग्रहीत (Store ) करता है।

- Flexible Schema – NoSQL database में आमतौर पर एक Flexible स्कीमा होता है, जो developers को बिना schema define किये data को store करने देता है अब चाहे डाटा structured, semi-structured और unstructured भी क्यों ना हो।

- Scalability – NoSQL DBMS को horizontal scale करने design किया गया है जो एक से से अधिक servers पर store कर सकते है।

- High Performance – NoSQL DBMS बहुत ही शक्तिशाली होता है विशिष्ट उपयोग के लिए जैसे – real-time analytics, caching, और high-speed data retrieval

- Ease of Development – NoSQL DBMS से डेवलपमेंट आसान, tradiional DBMS के मुकावले।
