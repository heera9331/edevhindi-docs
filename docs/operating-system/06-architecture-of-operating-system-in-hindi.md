---
sidebar_position: 6
title: Architecture of Operating System in Hindi
author: Heera Singh Lodhi
date: 30-11-2024
slug: "architecture-of-operating-system-in-hindi"
keywords: ["architecture-of-operating-system", "os architecture"]
---

# Architecture of Operating System in Hindi

जैसा की हम जानते है ऑपरेटिंग सिस्टम एक प्रकार का सिस्टम सॉफ्टवेयर जो इंटरफेस प्रोवाइड करता है कंप्यूटर एवं यूजर के मध्य।
यही आर्किटेक्चर लगभग सभी ऑपरेटिंग सिस्टम का होता है।
ऑपरेटिंग सिस्टम एक बहुत बड़ा सॉफ्टवेयर है तो इसका प्रॉपर आर्किटेक्चर है। इस आर्किटेक्चर ऑपरेटिंग सिस्टम को ऐसे कुछ कॉम्पोनेन्ट में विभाजित किया गया है जो निम्नवत है –

![os-architecture-in-hindi](https://edevhindi.com/wp-content/uploads/2024/06/Harware-1.png)

## Hardware

Hardware हमारे कंप्यूटर के फिजिकल डिवाइस है जैसे मेमोरी, RAM,ROM, CPU Printer, Monitor आदि।

## System Software and Utilities

सिस्टम सॉफ्टवेयर एवं यूटिलिटीज प्रोग्राम हार्डवेयर डायरेक्टली से कम्यूनिकेट करते है।
System सॉफ्टवेयर ही API प्रोवाइड करते है जिसकी मदद से ऍप्लिकेशन्स चल पते है।
सिस्टम सॉफ्टवेयर सॉफ्टवेयर एक abstraction लेयर है, जो हार्डवेयर को या कंप्यूटर के इंटरनल स्ट्रक्चर को छुपाये रहती है।

System ही हार्डवेयर को प्रोटेक्शन प्रोवाइडेड करता है, जितनी है प्रोटेक्शन सिस्टम सॉफ्टवेयर देगा उतना सिक्योर ऑपरेटिंग सिस्टम होगा।

यह सिस्टम सॉफ्टवेयर एवं यूटिलिटी प्रोग्राम्स ही कंप्यूटर में मेमोरी मैनेजमेंट, प्रोसेस मैनेजमेंट IO मैनेजमेंट आदि कार्य करते है।

## Responsibilities of System Software

Abstraction
Process Management
Process Synchronization
Memory Management
CPU Scheduling
File Management
I/O Management
Networking Subsystem
User Interface
Security

### Abstraction

Abstraction, Complex Details को छिपाने और केवल आवश्यक जानकारी को Display करने की प्रक्रिया है। यह Users को बिना आंतरिक Information को जाने सिस्टम या सॉफ़्टवेयर का उपयोग करने की अनुमति देता है। ऑपरेटिंग सिस्टम में, हार्डवेयर के Complex विवरणों को छिपाने के लिए Abstraction का उपयोग किया जाता है ताकि प्रोग्रामर और उपयोगकर्ता सिस्टम के संसाधनों का आसानी से उपयोग कर सकें।

### Process Manament

Process Manament ऑपरेटिंग सिस्टम का वह घटक है जो सिस्टम पर चलने वाली सभी Process को नियंत्रित और व्यवस्थित करता है। इसमें Process Creation, Execution, suspendऔर Terminate शामिल है। यह प्रक्रिया के लिए आवश्यक संसाधनों का Allocation करता है और उनके प्रदर्शन को अनुकूलित करने के लिए काम करता है।

### Process Synchronization

जब कई Processes एक ही संसाधन (Resource) साझा करती हैं, तो यह सुनिश्चित करने के लिए सिंक्रनाइज़ेशन की आवश्यकता होती है कि वे एक साथ सही ढंग से काम करते हैं। यह रेस कंडीशन (Race Condition) और डेडलॉक जैसी समस्याओं को रोकने के लिए महत्वपूर्ण है, ताकि संसाधनों का Efficiency से उपयोग किया जा सके और डेटा की integrity बनी रहे।

### Memory Management

मेमोरी प्रबंधन ऑपरेटिंग सिस्टम कार्य है जिसमे सिस्टम की मुख्य मेमोरी (RAM) को Manage किया जाता है। इसमें मेमोरी में Allocation, Free और Memory उपयोग की Monitoring आदि Tasks शामिल है ताकि यह सुनिश्चित किया जा सके कि प्रत्येक Process को अपनी आवश्यकतानुसार पर्याप्त मेमोरी मिल सके और मेमोरी का wastage न हो।

### CPU Scheduling

CPU Scheduling वह प्रक्रिया है जिसके द्वारा ऑपरेटिंग सिस्टम विभिन्न Processes को CPU समय Allocate करता है (Run होने के लिए )। CPU Scheduling का उद्देश्य है की CPU से का Full उपयोग किया जा सके ताकि CPU फ्री न रहे जिससे अधिक से अधिक काम करवाया जा सके। अलग-अलग शेड्यूलिंग Algorithms, जैसे फर्स्ट-कम-फर्स्ट-सर्व (FCFS), शॉर्टेस्ट जॉब फर्स्ट (SJF), और राउंड-रॉबिन (RR), इसका हिस्सा होते हैं।

### File Management

File Management ऑपरेटिंग सिस्टम का वह component है जो डेटा को फाइल और डायरेक्टरी के रूप में Store, Manage और Control करता है। यह फाइल Create, Read , Write, Modification, और Deletion जैसी क्रियाओं के लिए इंटरफेस प्रदान करता है और File Security और Access Control को भी सुनिश्चित करता है।

### IO Management

इनपुट/आउटपुट प्रबंधन का कार्य User और हार्डवेयर डिवाइस के बीच संचार का प्रबंधन करना है। इसमें विभिन्न I/O डिवाइस (जैसे कीबोर्ड, माउस, प्रिंटर) के लिए ड्राइवर और संबंधित सॉफ़्टवेयर का उपयोग करके डेटा ट्रांसफर की प्रक्रियाओं का प्रबंधन शामिल है, ताकि डिवाइसों के बीच सही और कुशल संचार सुनिश्चित किया जा सके।

### Networking Subsystem

Networking Subsystem वह घटक है जो विभिन्न नेटवर्कों के साथ communication को सक्षम करता है। यह नेटवर्क प्रोटोकॉल्स (जैसे TCP/IP) का Support करता है और डेटा पैकेट को नेटवर्क के माध्यम से भेजने, प्राप्त करने और रूटिंग करने का कार्य करता है। नेटवर्किंग सबसिस्टम का मुख्य उद्देश्य विभिन्न उपकरणों और नेटवर्क के बीच सुचारु संचार सुनिश्चित करना है।

### User Interface

User Interface वह Computer वह घातक है जो User को ऑपरेटिंग सिस्टम के साथ इंटरैक्ट करने की अनुमति देता है। यह ग्राफिकल यूजर इंटरफेस (GUI) या कमांड लाइन इंटरफेस (CLI) के रूप में हो सकता है। GUI में आइकन, मेनू, और विंडोज होते हैं, जबकि CLI कमांड टाइप करने की सुविधा प्रदान करता है।

### Security

सुरक्षा ऑपरेटिंग सिस्टम का वह पहलू है जो डेटा और संसाधनों को Unauthorized Access, Virus , मैलवेयर और अन्य खतरों से बचाने के लिए तंत्र प्रदान करता है। इसमें User प्रमाणीकरण, डेटा Encryption, Access Control , और ऑडिटिंग जैसी सुविधाएं शामिल हैं।

### Application

यह एक प्रकार के सॉफ्टवेयर जो वर्क करते है, ये सॉफ्टवेयर जैसे व्हाट्सप्प, फेसबुक, MS Office, Adobe Photoshop, Libre Office आदि उदाहरण है।

## Summary

## Referances
