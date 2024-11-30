---
sidebar_position: 15
title: Keys in DBMS
author: Heera Singh Lodhi
date: 30-11-2024
slug: "keys-in-dbms-in-hindi"
keywords: ["keys in dbms in hindi", "keys in dbms notes"]
description: ""
---

# Keys in DBMS

Key, dbms में एक या एक से अधिक कॉलम columns का सेट है जो की table में हर एक पंक्ति (row) को विशिष्ट (unique) रूप से पहचानता है। प्राइमरी key ensure करती है कि किसी भी दो पंक्ति (rows) में सामान values न हो।

Keys का उपयोग DBMS में डाटा सर्च करने के लिए करते है।

Keys Relational DBMS एक Basic लेकिन बहुत महत्वपूर्ण Concept, जिसका उपयोग पड़ते समय आय चाहे न आये लेकिन जब डेटाबेस डिज़ाइन करते है तब जरूर आता है।

## Types of Keys

Keys dbms में निम्नलिखित प्रकार की होती है –

- प्राइमरी key (Primary Key)
- सुपर key (Super Key)
- फॉरेन key (Foreign Key)
- कैंडिडेट key (Candidate Key)
- कम्पोजिट key (Composite Key)
- यूनिक key (Unique Key)

### Primary Key

- Primary Key किसी टेबल में एक या एक से अधिक कॉलम columns का सेट है जो की table में हर एक पंक्ति (row) को विशिष्ट (unique) रूप से पहचानता (identifies) है।
- Uniqueness: प्राथमिक key कॉलम में प्रत्येक मान अद्वितीय होना चाहिए।
- Non-null: Primary key columns के पास NULL values नहीं होनी चाहिए।
- Single table constraint: हर एक टेबल के पास केवल और केवल एक प्राइमरी key होनी चाहिए।

`यहाँ पर प्राइमरी key studentid है एवं ईमेल एक candidate key है।`

<table>
    <thead>
        <tr>
            <th>StudentID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Major</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Alice Smith</td>
            <td>20</td>
            <td>Computer Science</td>
            <td>alice@example.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Bob Johnson</td>
            <td>22</td>
            <td>Mathematics</td>
            <td>bob@example.com</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Carol Davis</td>
            <td>21</td>
            <td>Physics</td>
            <td>carol@example.com</td>
        </tr>
    </tbody>
</table>

### Super Key

Super key एक या अधिक columns का एक सेट है, जो सामूहिक रूप से, किसी तालिका में एक पंक्ति को विशिष्ट रूप से पहचान सकती है। सभी candidate keys, super key हैं, लेकिन सभी super keys candidate keys नहीं हैं।

Table – Students

<table>
  <thead>
    <tr>
      <th>StudentID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Major</th>
      <th>Email</th>
      <th>PhoneNumber</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alice Smith</td>
      <td>20</td>
      <td>Computer Science</td>
      <td>alice@example.com</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bob Johnson</td>
      <td>22</td>
      <td>Mathematics</td>
      <td>bob@example.com</td>
      <td>2345678901</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Carol Davis</td>
      <td>21</td>
      <td>Physics</td>
      <td>carol@example.com</td>
      <td>3456789012</td>
    </tr>
  </tbody>
</table>

`Example: Students table में, {StudentID}, {StudentID, Email}, और {StudentID, PhoneNumber}सभी super keys हैं।`

### Foreign Key

Foreign key, एक या एक से अधिक columns का combination है, जो दो टेबल के बीच में रिलेशनशिप एस्टब्लिश स्थापित करती है।

Can be null – Foreign key कॉलम में NULL value हो सकते हैं।

Table – Enrollments

<table>
  <thead>
    <tr>
      <th>EnrollmentID</th>
      <th>StudentID</th>
      <th>CourseID</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>101</td>
      <td>1</td>
      <td>501</td>
    </tr>
    <tr>
      <td>102</td>
      <td>2</td>
      <td>502</td>
    </tr>
    <tr>
      <td>103</td>
      <td>3</td>
      <td>503</td>
    </tr>
    <tr>
      <td>104</td>
      <td>1</td>
      <td>504</td>
    </tr>
  </tbody>
</table>

`Foreign Key: यहाँ पर StudentID foreign key है।`

### Candidate Key

एक candidate के एक कॉलम या कॉलम कॉम्बिनेशन है जो की uniquely हर row को, टेबल में। एक टेबल के पास multiple candidate keys हो सकती है, इनमे से एक हो प्राइमरी key चुना जाता है।

<table>
  <thead>
    <tr>
      <th>StudentID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Major</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alice Smith</td>
      <td>20</td>
      <td>Computer Science</td>
      <td>alice@example.com</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bob Johnson</td>
      <td>22</td>
      <td>Mathematics</td>
      <td>bob@example.com</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Carol Davis</td>
      <td>21</td>
      <td>Physics</td>
      <td>carol@example.com</td>
    </tr>
  </tbody>
</table>

### Composite Key

एक Composite key एक कॉलम या कॉलम कॉम्बिनेशन है जो की row uniquely identify करता टेबल में। यह की use होती है – जब single sufficient नहीं होता है हर एक row को identify करने के लिए।

<table>
    <thead>
        <tr>
            <th>StudentID</th>
            <th>CourseID</th>
            <th>Grade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>501</td>
            <td>A</td>
        </tr>
        <tr>
            <td>2</td>
            <td>502</td>
            <td>B</td>
        </tr>
        <tr>
            <td>3</td>
            <td>503</td>
            <td>A</td>
        </tr>
        <tr>
            <td>1</td>
            <td>504</td>
            <td>B</td>
        </tr>
    </tbody>
</table>

`Composite Key: {StudentID, CourseID} (The combination of StudentID and CourseID uniquely identifies each enrollment record).`

### Unique Key

एक unique key, एक कॉलम या कॉलम कॉम्बिनेशन है जो की यह सुनिश्चित करता है की टेबल में सभी rows यूनिक हो।

<table>
    <thead>
        <tr>
            <th>EmployeeID</th>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNumber</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John Miller</td>
            <td>john@example.com</td>
            <td>1234567890</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Sarah Brown</td>
            <td>sarah@example.com</td>
            <td>2345678901</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Emily Clark</td>
            <td>emily@example.com</td>
            <td>3456789012</td>
        </tr>
    </tbody>
</table>

Primary Key: EmployeeID

Unique Keys: Email, PhoneNumber (Both Email and PhoneNumber columns unique vlaues होनी चाहिए पूरी टेबल में)

## References

Javatpoint – https://www.javatpoint.com/dbms-keys?= Wikipedia – https://en.wikipedia.org/

## PDF Note Link
