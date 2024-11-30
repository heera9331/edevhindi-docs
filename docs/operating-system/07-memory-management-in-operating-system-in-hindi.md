---
sidebar_position: 7
title: Memory Management in Operating System
author: Heera Singh Lodhi
date: 30-11-2024
slug: "memory-management-in-os"
keywords: ["memory management", "memory management in os"]
---

# Memory Management in Operating System

मेमोरी मैनेजमेंट, ऑपरेटिंग सिस्टम द्वारा प्रदान की जाने वाली सुविधाओं में से एक मुख्य सुविधा है, जिसकी मदद से ऑपरेटिंग सिस्टम डाटा को मैनेज कर पता है। एक अच्छे मेमोरी की मदद से हो तो बहुत से ऍप्लिकेशन्स एक साथ चल पाती है।इसमें कंप्यूटर की primary मेमोरी (RAM) को handle करना शामिल है, जिसमें मेमोरी स्पेस को allocate करना और हटाना, virtual मेमोरी को प्रबंधित करना और सुरक्षा और performance सुनिश्चित करना जैसे कार्य शामिल हैं।

कंप्यूटर ऑपरेटिंग सिस्टम के द्वारा मेमोरी के छोटे से छोटे bit या बाइट को भी हैंडल किया जाता है।
डाटा फ्लो मैनेज करना की डाटा RAM से disk या डिस्क से RAM (Primary memory) में effiecient एवं सुरक्षित तरीके से ट्रांसफर हो सके।

## मेमोरी मैनेजमेंट के प्रमुख उद्देश्य शामिल हैं

Efficient Utilization – यह सुनिश्चित करना कि उपलब्ध मेमोरी का इष्टतम उपयोग किया जाए।Protection – यदि एक प्रोसेस को मेमोरी allocate है तो दूसरी प्रोसेस उस मेमोरी को use ना करे और न ही allocate करे। Swapping and Paging – सिस्टम को सुचारू रूप से चालू रखने के लिए RAM और डिस्क स्टोरेज के बीच डेटा की आवाजाही को मैनेज करना। Segmentation and Virtual Memory – memory को parts में devide करना एवं अब्स्ट्रक्शन प्रोवाइड करना जिससे प्रोसेसेज separately चलती रही (एक दूसरे को डिस्टर्ब की बिना)

## Key Concepts in Memory Management

- Allocation and Deallocation
- Virtual Memory
- Segmentation
- Memory Protection
- Garbage Collection

### 1. Allocation and Deallocation

हर एक प्रोसेस या एप्लीकेशन को चलाने के लिए मेमोरी की आवस्यकता होती है जो ऑपरेटिंग सिस्टम द्वारा प्रदान की जाता है, इस प्रोसेस को मेमोरी आवंटन (allocation) कहते है। मेमोरी का आकर (size) एवं स्थान (place) ऑपरेटिंग सिस्टम decide करता है। मेमोरी allocation की reverse प्रोसेस को मेमोरी deallocaiton कहते है, जिसमे प्रोसेस द्वारा उपयोग की गयी मेमोरी blocks को फ्री (रिलीज़) कर दिया जाता है।

#### Types of memory allocation

Memory allocation के दो प्रकार होते है –

1. Static memory allocation
   इस प्रकार के मेमोरी allocation में मेमोरी compile-time में ही allocate कर दी जाती है।
1. Dynamic memory allocation
   इस प्रकार के मेमोरी allocation में मेमोरी run-time में allocate की जाती है।

### Virtual Memory

Virtual मेमोरी एक फिजिकल मेमोरी (सेकेंडरी मेमोरी) होती है जो एक main मेमोरी (RAM) की तरह treat की जाती है। main मेमोरी जब भी काम पड़ जाती है कंप्यूटर को तब रैंडम एक्सेस मेमोरी (RAM) से डेटा को अस्थायी रूप से डिस्क स्टोरेज में स्थानांतरित किया जाता है। यह उपयोगकर्ताओं के लिए बहुत बड़ी मुख्य मेमोरी का भ्रम पैदा करता है (इसकी वजह से हमें लगता है की मेमोरी बहुत बड़ी साइज की है )
।

**Paging:** वर्चुअल मेमोरी को ब्लॉक्स में devide किया जाता है जिसे पेज कहा जाता है, और इस प्रोसेस को paging कहते है।

**Swapping:** process को main memory से disk insert (in) या disk से main memory (out) insert करना wapping कहलाता है।

### Segmentation

एक प्रोग्राम को विभिन्न segments में विभाजित करना है, जैसे code segment, stack segment और data segment। प्रत्येक segment का length अलग-अलग का हो सकता है, इस प्रोसेस segmentation है।

### Memory Protection

मेमोरी protection एक तंत्र (machenism) है जो की मेमोरी एक्सेस को prevent कर है, ये वह मेमोरी की बात हो रही है जो processes के लिए allocate हो चुकी है। यह ऑपरेटिंग सिस्टम की स्थिरता (stability) और सुरक्षा (security) बनाए रखने के लिए यह आवश्यक है।

### Garwage Collection

Garwage कलेक्शन एक फीचर है जिसमे प्रोसेस द्वारा उपयोग की गयी मेमोरी को automatically फ्री कर दिया जाता है (एक इस फीचर के द्वारा unused memory blocks को identify किया जाता है ) , जिससे memory किसी दूसरी process के काम आ जाये।

- यह फीचर Java, python जैसी popular programming languages में पाया जाता है।

## Refences LInks

https://www.javatpoint.com/os-virtual-memory
https://www.tutorialspoint.com/operating_system/os_memory_management.htm
https://www.geeksforgeeks.org/memory-management-in-operating-system/
