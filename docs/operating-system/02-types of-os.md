---
sidebar_position: 2
title: Types of Operating System
author: Heera Singh Lodhi
date: 30-11-2024
slug: "types-of-operating-system"
keywords: ["types of os in hindi", "operating system"]
---

## Operating System

Operating System एक प्रकार का system software जो कंप्यूटर हार्डवेयर और सॉफ्टवेयर resources के मैनेजमेंट का कार्य करता है या responsibility है, Windows , Linux, मैक (mac) एवं एंड्राइड (android ) आदि तो सुना ही होगा ये सभी ऑपरेटिंग सिस्टम के उदाहरण है।

## Types of Operating System

ऑपरेटिंग सिस्टम निम्नलिखित प्रकार के होते है, जो की हर एक ऑपरेटिंग सिस्टम एक स्पेसिफिक पर्पस एवं डिवाइस प्रकार के डिवाइस के लिए डेवेलोप किये जाते है, जैसे एंड्राइड (मोबाइल के लिए), ubuntu, debian (लैपटॉप के लिए), MacOS (Apple लैपटॉप) आदि | Operating System कार्य एवं architecture के अनुसार बहुत से प्रकार के हो सकते है, जिसमे से मुख्य प्रकार निम्न है –

- Batch Operating System
- Multi-Programming System
- Multi-Processing System
- Multi-Tasking Operating System
- Distributed Operating System
- Network Operating System
- Real-Time Operating System

### 1. Batch Operating System

बैच ऑपरेटिंग सिस्टम एक प्रकार एक ऑपरेटिंग सिस्टम है जो बहुत उपयोग किया था, अब यह अस्तित्व में नहीं है। इस प्रकार के ऑपरेटिंग सिस्टम यूजर से directly इंटरैक्ट नहीं करते थे, बल्कि एक ऑपरेटर रहता है जो सामान प्रकार की jobs को group एवं sort करता था जरुरत के हिसाब से और sequencially प्रोसेस करता था।
यह ऑपरेटिंग सिस्टम मुख्यतः 1950-1960s के दशक में उपयोग होता था।

यह एक Job Sequencing आधारित ऑपरेटिंग सिस्टम है जिसमे एक job load एवं execute हो जाने के बाद दूसरी जॉब के प्रोसेस करता था बिना किसी human interaction के।

- इस प्रकार के ऑपरेटिंग सिस्टम में साधारण scheduling का उपयोग (FIFO) किया जाता था।

शुरुआती batch OSs में एडवांस मेमोरी मैनेजमेंट की नहीं थी।
उदाहरण – IBM mainframe systems. 2. Multi-Programming Operating System

इस भी एक प्रकार ऑपरेटिंग सिस्टम है जिसमे एक टाइम पर एक से अधिक प्रोग्राम मेमोरी में प्रेजेंट होते है और इनमे से एक
execution के लिए जाता है। CPU के time को efficiently उपयोग करने के लिए process execution दौरान के बीच switching होती रहती है जरुरत के हिसाब से।

इस प्रकार के ऑपरेटिंग सिस्टम कॉन्टेक्स्ट switching का उपयोग किया जाता है।

Scheduling
मेमोरी मैनेजमेंट
Maximum CPU Utilization

### 3. Multi-Processing Operating System

multi-processing ऑपरेटिंग सिस्टम, एक प्रकार का ऑपरेटिंग सिस्टम है जिसमे एक से अधिक CPU उपयोग होते है program execution के लिए।

एक ऑपरेटिंग सिस्टम का throughput बहुत अच्छा होता है।
इस प्रकार के ऑपरेटिंग सिस्टम में एक से अधिक प्रोसेस एक टाइम पर रन हो सकती है।

यह कंप्यूटर के भीतर एक अधिक सीपीयू (सेंट्रल प्रोसेसिंग यूनिट) या सीपीयू Cores का उपयोग करके प्राप्त किया जाता है।
यदि एक Processor fail हो जाये तो दूसरे Processor काम करते रहते जिससे सिस्टम की रिलायबिलिटी बढ़ जाती है।

Parallel Processing: इस प्रकार के OS में एक साथ processing होती है जिससे एक से अधिक process रन हो सके।

Resource Sharing: Multiple processes शेयर्ड resources को एक्सेस करती है जैसे मेमोरी एवं फाइल्स।

High Throughput: tasks को multiple CPUs के बीच डिस्ट्रीब्यूट कर दिया जाता है जिससे एक ही समय एक से अधिक टास्क कम्पलीट हो जाते है और Throughput बढ़ जाता है।

**Types of Multi-Processing Operating System**

Symmetric Multi-Processing (SMP) – हर एक प्रोसेसर के पास OS की एक कॉपी होती है और बराबर एक्सेस होता है हार्डवेयर resources का, हर एक के पास एक ही मेमोरी होती है और equal workload भी। SMP आधुनिक multi-core प्रोसेसरों में पाया जाता है।

Asymmetric Multi-Processing (AMP) – इस प्रकार के सिस्टम में एक मास्टर कण्ट्रोल होता है जो बाकि अन्य प्रोसेसर को कण्ट्रोल करता है (यह अन्य प्रोसेसर कोई-न-कोई एक स्पेसिफिक टास्क करते है) | AMP आजकल कम ही उपयोग होता है लेकिन specialized टास्क में इनका उपयोग होता है।

Examples of Multi-Processing OS

UNIX and Linux:
Windows Server
macOS

### 4. Time-Sharing/Multi-Tasking Operating System

multi-processing ऑपरेटिंग सिस्टम वह एक multi -programming ऑपरेटिंग सिस्टम होता है, जिसमे में राउंड रोबिन scheduling अल्गोरिथम उपयोग होती है। इस प्रकार के OS में एक साथ multiple users या टास्कस जो एक साथ सिस्टम resources शेयर कर सकते है।
यह multiple programs को एक साथ execute कर सकता है।
यह multiple users को allow करता है एक साथ system resources करने के लिए।
इस प्रकार के OS में Reponse Time बहुत कम होता है।
इस प्रकार के OS में Preemptive Task Scheduling का उपयोग किया जाता है।

**Time Slicing:** OS CPU के टाइम तो small intervals में devide कर देता जिसे slice कहते है, और इस slice को हर एक प्रोसेस के लिए assign किया जाता है task कम्पलीट न होने पर CPU टास्क दूसरी टास्क करने लगता है। (जिसे context switching कहा जाता है)

**Multi-User Support:** यह systems, multiple users को एक साथ एक काम करने देते एक ही सिस्टम पर terminal और network कनेक्शन के जरिये।

उदाहरण – UNIX, Linux, Windows. 5. Distributed Operating System
इस ऑपरेटिंग सिस्टम के नाम से ही पता चल रहा है की यह ऑपरेटिंग सिस्टम विस्तृत resouce से मिलके बना है, इसमें उपयोग होने वाले hardware resouces जरुरी नहीं है की वह एक हो स्थान पर हो, यह अलग अलग हो सकते है, फिर एक ऑपरेटिंग सिस्टम बनाने है।
यह ऑपरेटिंग सिस्टम एक से अधिक स्थान पर रह सकता है जरुरी नहीं है की कम्पलीट OS एक ही जगह हो।

### 6. Network Operating System

नेटवर्क ऑपरेटिंग सिस्टम (NOS) एक प्रकार का specialized सिस्टम सॉफ्टवेयर है जिसका उपयोग एक नेटवर्क में र्सोस मैनेजमेंट, रिसोर्स शेयरिंग एवं कम्युनिकेशन आदि के लिए किया जाता है।
यह ऑपरेटिंग सिस्टम entire नेटवर्क पर रन करता है।

यह ऑपरेटिंग सिस्टम नेटवर्क नेटवर्किंग फंक्शनलिटी को manage and support networking functions रन करने के लिए किया जाता है।

**NOS को में मुख्यतः** client-server architecture का उपयोग किया जाता है। इस architecture में एक सर्वर एवं एक से अधिक client रहते है जहाँ सर्वर resources एवं services प्रोवाइड करता है क्लाइंट के लिए। (like files, applications, or printers)

### 7. Network Operating System

**Resource Sharing** – इस ऑपरेटिंग सिस्टम की मदद हम किसी को भी file, pheripheral, एवं अन्य रिसोर्स शेयर कर सकते है।

**User Management** – इस ओस की मदद से यूजर मैनेजमेंट भी आसानी से किया जाता है एवं user authentication, authorization भी होता है।

**Security** – इस ऑपरेटिंग सिस्टम में security फीचर्स भी जय जैसे firewall, instrution detection एवं data एन्क्रिप्शन आदि।

### 8. Real Time Operating System

रियल टाइम ऑपरेटिंग सिस्टम एक स्पेशल पर्पस ऑपरेटिंग सिस्टम है जो की स्ट्रिक्ट टाइम बॉउंडेशन के साथ जॉब को कम्पलीट करता है।

ये ऑपरेटिंग सिस्टम वहाँ सबसे ज्यादा उपयोग होता है जहाँ accurate रिजल्ट bilkul फिक्स time पर चाहिए हो।

इन ऑपरेटिंग सिस्टम का उपयोग missile सिस्टम, मिलिटरी हथयार, राडार एवं ड्रोन आदि।

Real Time Operating System को शार्ट में RTOS भी कहा जाता है।
इस प्रकार के सिस्टम में टास्क की scheduling एवं execution priority के आधार पर की जाता है।

RTOS में efficient interrupt management है, जिससे यह उच्च प्राथमिकता वाली घटनाओं (events) पर quickly respond दे सकता है।
RTOS में शेड्यूलिंग System यह सुनिश्चित करती है कि कार्य अपेक्षित समय (deadline) सीमा के भीतर पूरे हो जाएं।
