---
sidebar_position: 4
title: OS Disk Scheduling Algorithms
author: Heera Singh Lodhi
date: 30-11-2024
slug: "os-disk-scheduling-algorithms"
keywords: ["OS disk scheduling Algorithms", "OS Scheduling Algorithms"]
---

# OS Disk Scheduling Algorithms

जब operating system के पास के डिस्क से डाटा read/write करने की एक साथ बहुत ज्यादा requests आ जाती है तो डाटा read/write efficiently एवं optimized हो सके इसलिए disk scheduling algorithms का उपयोग करते है।

इन algorithms का उद्देश्य disk I/O operations optimize, seek time को काम करना, और सिस्टम efficiency को इम्प्रूव करना।

मुख्यतः उपयोग होने वाली डिस्क scheduling अल्गोरिथ्म्स निम्नलिखित है –

- First-Come, First-Served (FCFS)
- Shortest Seek Time First (SSTF)
- SCAN
- Circular SCAN (C-SCAN)
- LOOK and C-LOOK
- FSCAN

Seek Time – डिस्क arm को desired track तक पहुंचने में लगा समय (जहाँ पर डाटा स्टोर है) seek time कहलाता है।

### First-Come, First-Served (FCFS)

इस disk scheduling algorithm में जिस आर्डर में read/write request आएगी उसी आर्डर में डाटा डिस्क से read/write करेगी।लाभ – सरल एवं implement करने में आसान।हानि – inefficient disk arm movements होता है, जिसके कारण seek time बहुत ज्यादा होता है।

### Shortest Seek Time First (SSTF)

इस disk scheduling algorithm में जिस read/write request का seek time सबसे काम होगा वह request पहले कम्पलीट की जाएगी (या execute होगी)। FCFS एल्गोरिथम की तुलना में इस एल्गोरिथम में ‘seek time’ कम है।Advantagesइस अल्गोरिथम में disk response time काम है।

यह जवाडा एफ्फिसिएंट है FCFS की तुलना में।Disadvantages:Algorithm execution में अधिक टाइम।

### SCAN disk scheduling algorithm

इस disk scheduling algorithm पूरी डिस्क को एक एक साइड से दूसरी साइड तक स्कैन किया जाता है, इसलिए इस अल्गोरिथम को scan डिस्क सचेंडुलिंग अल्गोरिथम कहते है।

### C-SCAN disk scheduling algorithm

यह disk scheduling algorithm SCAN algorithm जैसी है, इसमें disk हेड जब अंतिम trick पर होता है इसके बाद शुरुआत में जाता है।

### References

https://www.scaler.com/topics/disk-scheduling-algorithms/https://www.javatpoint.com/os-disk-scheduling
Notes

इस ब्लॉग का एक और अपडेट आएगा जिसमे टॉपिक complete हो जायेगा एवं handritten उदाहरण भी होंगे।
