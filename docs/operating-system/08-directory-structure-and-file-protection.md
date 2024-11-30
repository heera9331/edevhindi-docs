---
sidebar_position: 8
title: Directory Structure and File Protection
author: Heera Singh Lodhi
date: 30-11-2024
slug: "directory-structure-and-file-protection"
keywords:
  ["directory in os", "file protection in os", "directory in os in hindi"]
---

# Directory Structure and File Protection

Directory or Folder –Directory या folder एक container (बॉक्स) की तरह है, जिसके पास इनफार्मेशन होती है किसी दूसरी files एवं फ़ोल्डर्स। यह फ़ाइलों और फ़ोल्डरों को एक hierarchical तरीके से व्यवस्थित करता है।

<center>और</center>

Directory structure एक organizational frameworks जो operating systems द्वारा उपयोग किया जाता है files avm sub-subdirectories को मैनेज करने के लिए।

## Types of directory structures

- Directory structures कई प्रकार की होती हैं –
- Single-Level Directory
- Two-Level Directory
- Tree-Structured Directory
- Acyclic-Graph Directory
- General Graph Directory

### Single-Level Directory

सबसे सरल directory structure single-level directory है। जिसमे सभी फाइल्स एक directory में होती है।

ऐसे implement करना एवं समझना आसान होता है।

Limitations: No subdirectories, मैनेज करने में कठिन, and potential name conflicts.

![single level directory](https://edevhindi.com/wp-content/uploads/2024/06/Screenshot-from-2024-06-18-23-46-04.png)

### Two-Level Directory

two-level डायरेक्टरी स्ट्रक्चर में directory में, file दो लेवल के रहती है। एक प्रकार की डायरेक्टरी स्ट्रक्चर में हर एक यूजर के अपनी डायरेक्टरी होती है। उदाहरण – user1 -> picture -> image.png

![two level directory structure](https://edevhindi.com/wp-content/uploads/2024/06/Screenshot-from-2024-06-18-23-57-34.png)

### Three-Level Directory or Tree-Structured Directory

एक पॉपुलर डायरेक्टरी स्ट्रक्चर है, जिसमे एक रुट डायरेक्टरी होती है और multiple sub-directory होती है।

ये डायरेक्टरी स्ट्रक्चर बहुत ही flexible, scalable एवं nested directories को सपोर्ट करती है।

![three level directory structure](https://edevhindi.com/wp-content/uploads/2024/06/Screenshot-from-2024-06-19-00-18-35.png)

### Acyclic-Graph Directory

यह डायरेक्टरी स्ट्रक्चर tree – directory स्ट्रक्चर के सामान है, लेकिन इसमें file, directory को multiple directories के साथ साझा किया जाता है।
यह directory structure, nested directory भी सपोर्ट करता है। (एक directory के अंदर sub-directories)

![acyclic graph directory](https://edevhindi.com/wp-content/uploads/2024/06/Screenshot-from-2024-06-25-00-50-22.png)

## File Protection

File protection एक machenism है, user के डाटा को safe (या unauthorized access) रखने का किसी कंप्यूटर सिस्टम में। इस machenism से ये ensure किया जाता है, की authorized यूजर ही specific operation perform कर पाए किसी फाइल पर।

1. File Protection Key Concepts
2. Access Control Lists (ACLs)
3. File Permissions
4. User Authentication and Authorization
5. Encryption

### 1. Access Control Lists (ACLs)

हर के file या directory के साथ एक फाइल attach रहती जिसमे user permissions लिखी रहती है।
ACL entries में हर एक user या group की actions (read, write, execute) लिखी रहती है की क्या permission है।

### 2. File Permission (ACLs)

Tranditional unix-based file सिस्टम में simple permission मॉडल उपयोग किया जाता है, जो है read (r), write (w), execute (x)
यह permission owner, group एवं other के लिए है।
उदाहरण – किसी फाइल की permission यदि rwxr-xr– है तो इसका मतलब owner के लिए (read , write एवं execute), group के लिए (read एवं execute) एवं other के लिए सिर्फ read परमिशन है।

### 3. User Authentication and Authorization

system एक्सेस करने से पहले यह सुनिश्चित करना की user authenticated (password या biometric द्वारा) है की नहीं।
एक बार उसे authorized हो जाने के बाद files को एक्सेस कर सकता है।

### 4. Encryption

Encryption प्रोसेस में files को unreadable format में convert कर दिया जाता है बिना किसी key के।
