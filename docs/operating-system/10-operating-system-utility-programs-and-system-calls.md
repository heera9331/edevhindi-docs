---
sidebar_position: 8
title: Utility Programs and System Calls
author: Heera Singh Lodhi
date: 30-11-2024
slug: "operating-system-utility-programs-and-system-calls"
keywords:
  ["directory in os", "file protection in os", "directory in os in hindi"]
---

# Utility Programs and System Calls

फाइल सिस्टम एक डाटा डाटा स्ट्रक्चर है जो की ऑपरेटिंग सिस्टम के द्वारा उपयोग किया जाता है, जिससे ऑपरेटिंग सिस्टम डिस्क या हार्डडिस्क के डाटा को मैनेज कर पता है।

**File** – फाइल एक कलेक्शन है रिलेटेड इनफार्मेशन का या फाइल एक कलेक्शन है logicallyरिलेटेड entities का।

**Directory** – डायरेक्टरी एक स्पेशल टाइप की फाइल जो रेफरेन्सेस रखती है किसी दूसरी फाइल और directories (फोल्डर के नाम से भी जाता है) का।

**Path** – पाथ (path) एक एड्रेस (पता) है फाइल या directory का, जो की रिलेटिव या absolute हो सकता है।

## Types of File System

निम्नलिखित प्रकार के फाइल सिस्टम होते है –

- NTFS (New Technology File System)
- FAT32 (File Allocation Table)
- exFAT (Extended File Allocation Table)
- HFS+ (Hierarchical File System Plus)
- APFS (Apple File System)
- ext3/ext4 (Extended File System)

### 1. NTFS (New Technology File System)

यह फाइल सिस्टम विंडोज ऑपरेटिंग सिस्टम द्वारा उपयोग किया जाता है। यह large files, फाइल परमिशन, encryption, and journaling आदि सपोर्ट करता है।

### 2. FAT32 (File Allocation Table)

यह एक पुराना विंडोज फाइल सिस्टम है, जिसमे फाइल साइज एवं पार्टीशन साइज को हैंडल करने की लिमिट रहती है। यदि फाइल या पार्टीशन का साइज लिमिट से ज्यादा हो जाये तो फाइल और फोल्डर को हैंडल नहीं कर पायेगा।

### 3. exFAT (Extended File System)

यह एक latest लिनक्स फाइल सिस्टम है जो की फ़्लैश ड्राइव्स के लिए बनाया गया है (FAT32 और NTFS features को मिला के) |

### 4. HFS+ (Hierarchical File System Plus)

पुराने macOS में उपयोग किया जाता था।

### 5. APFS (Apple File System)

यह फाइल सिस्टम नए जनरेशन macOS में उपयोग किया जाता है और optimized भी है SSD’s के लिए।

### 6. ext3/ext4 (Extended File System)

ये फाइल सिस्टम ज्यादातर लिनक्स ऑपरेटिंग सिस्टम में उपयोग होते है। ext3 मीन्स extended file system version 3 और ext4 मीन्स extended वर्शन 4
ये फाइल सिस्टम ज्यादातर लिनक्स ऑपरेटिंग सिस्टम में उपयोग होते है। ext3 मीन्स extended file system version 3 और ext4 मीन्स extended वर्शन 4
