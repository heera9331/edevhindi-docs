---
sidebar_position: 8
title: File Allocation Methods in OS
author: Heera Singh Lodhi
date: 30-11-2024
slug: "file-allocation-methods-in-os"
keywords:
  [
    "file allocation in os",
    "file allocation in hindi",
    "file allocation methods in os",
  ]
---

इस आर्टिकल में हम पढ़ेंगे फाइल allocation methods, कंप्यूटर में डाटा को फाइल, फोल्डर एवं सब-फोल्डर hierarchy में स्टोर किया जाता logically। किसी नई फाइल को डिस्क में स्टोर करना है तो ऑपरेटिंग सिस्टम फाइल allocation मेथड्स का उपयोग करते है।

File allocation मेथड्स निम्न प्रकार की होती है –

- Continuous allocation
- Linked allocation
- Indexed allocation

### 1. Continuous Allocation

इस मेथड में फाइल को डिस्क में लगातार (continuous) blocks में स्टोर किया जाता है। जहाँ पर फाइल की इनफार्मेशन स्टोर होती है वहां फाइल का स्टार्टिंग ब्लॉक address एवं अंतिम ब्लॉक address (number of block) रख लिया जाता है।

Advantages

Simplicity: आसानी से implement किया एवं समजा जा सकता है।
Fast Access: Sequential access बहुत ही fast होता है क्योकि blocks continuous है।
Minimal Overhead: Overhead कम होता है metadata को maintain करने में।

### 2. Linked Allocation

Linked allocation एक प्रकार की फाइल allocation मेथड है जिसमे फाइल non-continous ब्लॉक्स में स्टोर होती है। ब्लॉक्स लगातार होने की बजाय dis-continuous होती है एवं एक दूसरे से लिंक रहते है इसलिए इस linked allocation कहते है। हर एक ब्लॉक के पास अगल ब्लॉक का एड्रेस होता है।

Advantages

Flexibility: files आसानी से grow होती है, continuous की कोई problem नहीं होती है।

Fast Access: Sequential access बहुत ही fast होता है क्योकि blocks continuous है।

Minimal Overhead: Overhead कम होता है metadata को maintain करने में।

### 3. Indexed Allocation

Indexed allocation एक प्रकार की फाइल allocation मेथड है जिसमे files के pointers की इनफार्मेशन एक separate ब्लॉक में स्टोर रहती है, इस ब्लॉक को हम index की तरह उपयोग करते है इस इंडेक्स को book के index तरह मान सकते है जिसमे page title एवं page number दिया रहता है।ब्लॉक्स में स्टोर होती है। ब्लॉक्स लगातार होने की बजाय dis-continuous होती है एवं एक दूसरे से लिंक रहते है इसलिए इस linked allocation कहते है। हर एक ब्लॉक के पास अगल ब्लॉक का एड्रेस होता है।

## Advantages

Direct Access: index की मदद से फाइल का डाटा एक्सेस करने में आसानी होती है।
No Contiguous Space Requirement: contiguous ब्लॉक जरुरत नहीं पड़ती है.
