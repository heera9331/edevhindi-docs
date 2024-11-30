---
sidebar_position: 13
title: API in hindi
author: Heera Singh Lodhi
date: 30-11-2024
slug: "api-in-hindi"
keywords: ["dbms architecture in hindi", "dbms architecture notes in hindi"]
description: "Database administrator एक प्रकार का डेटाबेस यूजर है जो root या admin होता है, admin ही responsible होता है डेटाबेस performance, integrity एवं security के लिए।
"
---

# API in hindi

API ऐसा तंत्र है जो किन्ही दो softwares को एक दूसरे से communicate करने के लिए सुविधा प्रदान करते है इस कम्युनिकेशन के definitions and protocols पहले से सेट रहते है।साधारण शव्दों में कहा जाये तो API softwares ही है जो communication के सेवाएँ प्रदान करते है, API का उपयोग डाटा एक्सचेंज, फीचर्स, इनफार्मेशन तथा फंक्शनलिटी शेयर करने के लिए करते है।

- API का फुल फॉर्म Application Programming Interface है।

##

**उदाहरण**

जब भी रेस्टोरेंट में हम कभी जाते है तो देखा होगा की हमें आर्डर करने किये मेनू दे दी जाती है, उसमें हम बताते है की हम क्या-क्या चाहिए है वेटर ये आर्डर लेके कुक के पास जाता है एवं जो आर्डर किया था वो लेके वापस आता है, तो यहाँ पर वेटर एक API की तरह है जो सेवा प्रदान कर रह है ऐसे ही सॉफ्टवेयर किए मध्य में API का काम रहता है।

## How do APIs work?

API आर्किटेक्चर को आम तौर पर client एवं server के सन्दर्भ में समझा जा सकता है। यह पर सर्विस रिक्वेस्ट करने वाले को क्लाइंट कहते है एवं सर्विस देने वाले को सर्वर करते है। (इसे request-response मॉडल भी कहते है)

**उदाहरण**

यूट्यूब विडोज़ का डेटाबेस (सर्वर) एवं मोबाइल app (client)
गूगल मैप का डेटाबेस सर्वर जो सभी स्थानों की जानकारी रखा है (Server) एवं मोबाइल App जो ये मैप दिखा रहा है (Client) यह पर client हर बार मोबाइल app नहीं होगा, ये मैप https://maps.google.com/ लिंक से जा देखा जा सकता है लैपटॉप और कंप्यूटर आदि में। (तो यहाँ पर client लैपटॉप या कंप्यूटर में क्लाइंट ब्राउज़र होगें)

:::info
API जरुरी नहीं है की Web APIs ही हो, ये Data (or database) APIs, Operating system (local) APIs एवं Remote APIs आदि जो सकती है।
:::

## Types of API (based on architecture)

### REST APIs

REST का फुल फॉर्म है Representational State Transfer, ये एक API के प्रकार है जिसमे GET, PUT, DELETE, UPDATE आदि में डिफाइन रहती है, जिनके उपयोग क्लाइंट सर्वर को रिक्वेस्ट कर करता है डाटा के, इस API में client एवं सर्वर डाटा का exchange, http प्रोटोकॉल का उपयोग करते है।

REST API में डाटा JSON फॉर्मेट में शेयर किया जाता है।
REST API का उपयोग आजकल डेवेलोप किये जा रह है उनमे उपयोग हो रही है।

### SOAP APIs

SOAP का फुल फॉर्म है Simple Object Transfer Protocol, client एवं सर्वर डाटा का आदान-प्रदान XML का उपयोग से होता है, ये बहुत पहले उपयोह की जाती थी।

### Web Socket APIs

वेबसॉकेट APIs भी एक प्रकार की API है जो अभी उपयोग हो रही है, इसमें API में भी डाटा JSON फॉर्मेट में शेयर किया जाता है। वेबसॉकेट API two-way communication सपोर्ट करती है, जिसमे क्लाइंट एवं सर्वर दोनों एक दूसरे को डाटा शेयर कर सकते है।
Websocket API का उपयोग ज्यादातर रियल टाइम chat applications में किया जाता है। जैसे Whatsapp, Instagram आदि।

## Types of API (based on scope of use)

Architecture and scope of use दोनों आधार वर्गीकृत किया जा सकता है, हम पहले आर्किटेक्चर के आधार पर API के प्रकार देख चुके है।

### Private APIs

ये APIs केवल किसी कंपनी विशेष की होती है, जो बिज़नेस में उपयोग होती है, इन API का एक्सेस केवल organization के व्यकितयों को ही होता है। इन APIs का उपयोग internal सिस्टम को लिंक या कम्युनिकेशन में उपयोग करते है।

### Public APIs

ये public API होती है, जो किसी भी user के द्वारा उपयोग की जा सकती है। इन API के लिए न authorization की जरुरत, न ही कुछ pay करने की।

### Partner APIs

ये API केवल authorized external developers के को एक्सेसिबल होती है एक व्यवसाय को दूसरे व्यवसाय (partnerships) से जोड़ने के लिए।

### Composite APIs

ये API दो या दो से अधिक API का उपयोग करके develop की जाती है जटिल सिस्टम आवश्यकताओं या व्यवहारों को solve करने के लिए।

## Summary

## Referances
