---
title: Functions in C
slug: functions-in-c
author: Heera Singh Lodhi
date: 06-12-2024
---


# Functions in C

Function कोड का एक ब्लॉक है जिसका उपयोग किसी विशिष्ट कार्य को करने के लिए किया जाता है। जिस प्रकार के हम printf function का उपयोग कुछ प्रिंट करने या display के लिए करते हैं।

अभी तक जितने भी Function उपयोग किए हैं वो सभी library function थे। इनके अलावा हम अपने भी ‍‌Function बना सकते हैं।

## Type of functions

सी प्रोग्राम में फंक्शन निम्न प्रकार के होते हैं-

- Library Function (लाइब्रेरी फंक्शन)
- User Defined Function (यूजर डिफाइंड फंक्शन)

## 1. Library Function

Library Function होते हैं जो पहले से ही सी प्रोग्रामस में हमें उपयोग करने के लिए पहले से बना कर रखे हैं जो हम हेडर फाइल लगाकर यूज करते हैं।

उदाहरण के लिए printf, scanf, getc, getchar.

```c
// example

#include <stdio.h>

int main() {
  printf("this is a library");
  return 0;
}

// other library functions are
// getc, getchar, scanf, sqrt etc.
```

## 2. User Defined Function

यह Function वह होते हैं जो यूजर खुद बनाते हैं यानी कि हमारे द्वारा बनाए गए Function, User Defined Function कहलाते हैं।

```c
// Syntax of user defined function

return_type function_name(para1, para2) {
    // function body
    return return_type
}
```


**Explanation**

**return_type** – ये function का return type है, इसका मतलब यह है की function जो भी काम करने वाला है वो integer (Number) के रूप में रिजल्ट देगा।

para1 & para2 – ये फंक्शन के parameters है जो function में इनपुट की तरह काम करते है। फंक्शन में parameters जितने चाहे उतने ले सकते है, जरुरत के हिसाब से।

जैसे अभी नीचे उदाहरण में, 2 numbers को जोड़ना चाहते थे इसलिए 2 पैरामीटर लिए थे , यदि 3 numbers जोड़ने होंगे तो हम 3 पैरामीटर्स भी ले सकते है।

**Example of function (उदाहरण)**

Function call – बनाये हुए Function को उपयोग करना function call कहलाता है। जो निम्न उदाहरण में बताया गया है –

```c
int sum(int a, int b) {
	int c = a + b;
  	return c;
}

int main() {
  	// function call
	int ans = sum(3,5);
  	printf("Addition of two number %dn", ans);
  	return 0;
}
```

## Features of functions

- Code reusability.
- Readability.
- Easy to debug.

### Function terminologies

- **function name** - function का name एक identifier होता है जिस हम बाद बाद उपयोग करते है।
- **function body** - यह function का वह part है function code लिखा जाता है। 
- **return** - function अपना का करने के बाद क्या return करेगा यह। 
- **parameters** - function डिक्लेरेशन के समय जो variable function में बताये जाते है वह function parameters है। 
- **function declaration** - function का नाम एवं parameters बताना declaration है। 
- **function call** - function का उपयोग करना ही function call है। 
- **arguments** - function call करते समय जब parameters के value pass करते तो ये values arguments कहलाती जिन्हे function arguments कहते है। 

### Function Terminologies Example

```c
#include <stdio.h>

// function declaration
// sum is a function name
// int is the return type of function
int sum(int a,int b); // a and b are parameters

int main() {
  // function call
  int a = 4;
  int b = 45;

  // function calling
  // arguments - a, b
  int addition = sum(a,b);

  printf("%d", addition);

  return 0;
}


int sum(int a, int b)
// function body
{
  int c = a + b;

  // return 
  return c;
}

```
 
## Function important points

- एक Function को हम जितने बार भी उपयोग करना चाहे उतने बार उपयोग कर सकते है।
- Function का केवल एक ही return type होता है।


## Summary 

## Referances

