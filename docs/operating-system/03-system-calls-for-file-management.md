---
sidebar_position: 3
title: System Calls for File Management
author: Heera Singh Lodhi
date: 30-11-2024
slug: "system-calls-for-file-management"
keywords: ["system calls", "file manage system calls"]
---

## System Calls

System calls low-level फंक्शन्स है जो operating system द्वारा प्रोवाइड किये जाते है, जो की hardware से interact करते है एवं system resources को मैनेज करते है।

<center>और</center>

हम कह सकते है की सिस्टम कॉल्स, API’s है जो ऑपरेटिंग सिस्टम द्वारा प्रदान की जाती है, जिनकी सहायता से user -level ऍप्लिकेशन्स कर्नेल से interact कर सके।

## System Calls for File Management

- open()
- close()
- read()
- write()
- lseek()
- unlink()
- stat()
- chmod()
- chown()
- rename()

### Open System Call

- open() – इस system call कर उपयोग file को open या create करने लिए किया जाता है।Syntax

```c title="main.c"
int open(const char \*pathname, int flags, mode_t mode);
```

- pathname: फाइल का नाम जो open या create करनी है।
- flags: flags file का mode decide करता है, की किस मोड में file ओपन करना है (e.g., O_RDONLY for read-only, O_WRONLY for write-only).
- mode: यदि कोई नई फ़ाइल बनाई जाती है तो उपयोग करने की अनुमतियाँ।

### Close System Call

- Purpose: close() – एक open फ़ाइल डिस्क्रिप्टर को close करने के लिए ।

Syntax

```c title="main.c"
int close(int fd);
```

Parameters:
fd: File descriptor of the open file.

### Read System Call

Purpose: read() – इस सिस्टम कॉल का उपयोग open फाइल से डाटा read करने के लिए किया जाता है।

Syntax

```c title="main.c"
ssize_t read(int fd, void \*buf, size_t count);
```

Parameters:

- fd: Open फाइल का file descriptor है।
- buf: ये buffer pointer है जहा डाटा स्टोर करना है।
- count: यह integer number जो बताता है की file से कितने bytes डाटा रीड करना है।

### Write System Call

Purpose: write() – एक फाइल में data write करने के लिए इस system कॉल का उपयोग करते है।Syntax

```c title="main.c"
ssize_t write(int fd, const void \*buf, size_t count);
```

Parameters:

- fd: opened का file descriptor.
- buf: ये एक buffer है जहाँ पर डाटा store है।
- count: यह एक integer जो यह बताता है की कितने bytes of data file में write करने है।

### Lseek System Call

Purpose: lseek() – यह सिस्टम फाइल offset को specified location पर move करता है।

Syntax:

```c title="main.c"
off_t lseek(int fd, off_t offset, int whence);
```

Parameters:

- fd: open फाइल का file descriptor
- offset: कितने bytes offset मूव करना है।
- whence: offset का Starting point (e.g., SEEK_SET for the beginning of the file).

### Unlink System Call

Purpose: unlink() – फाइल को delete करने के लिए।

Syntax

```c title="main.c"
int unlink(const char *pathname);
```

Parameters:

- pathname: फाइल का नाम जो डिलीट करनी है।

### Stat System Call

Purpose: stat() – फाइल के status की information जानने के लिए।

Syntax

```c title="main.c"
int stat(const char \*pathname, struct stat \*buf);
```

- Parameters:pathname: फाइल का नाम जिसकी status information लेनी है।
- buf: ये बफर है जहा file status की जानकारी स्टोर करनी है।

### Chmod System Call

Purpose: chmod() – एक file की permission को change करने के लिए।

Syntax

```c title="main.c"
int chmod(const char \*pathname, mode_t mode);
```

- Parameters:pathname: फाइल का नाम
- mode: file की नई permission |

### Chown System Call

Purpose: chown() – एक file का owner या group change करने के लिए।
Syntax

```c title="main.c"
int chown(const char \*pathname, uid_t owner, gid_t group);
```

- Parameters:pathname: फाइल का नाम।
- owner: नए owner’s की user ID |
- group: नई group id |

### Rename System Call

Purpose: rename() – एक फाइल को rename करने के लिए उपयोग किया जाता है।
Syntax

```c title="main.c"
int rename(const char \*oldpath, const char \*newpath);
```

Parameters:

- oldpath: फाइल का नाम जिसे rename करना है।
- newpath: फाइल का नया नाम।

### References

https://www.tutorialspoint.com/what-are-the-types-of-system-calls-used-in-file-managementhttps://www.javatpoint.com/system-calls-in-operating-systemhttps://www.geeksforgeeks.org/introduction-of-system-call/

यदि कोई प्रश्न हो तो कमेंट करके अवश्य पूछे, अरे ऐसे ही न बैठे जरा पोस्ट को दोस्तों के साथ शेयर ही कर दे।
