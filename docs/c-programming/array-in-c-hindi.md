---
title: Array in C
slug: array-in-hindi
date: 09-12-2024
author: Heera Singh Lodhi
---

# Array in C (हिंदी)

Array एक प्रकार का derived data type है जो को एक बार एक से अधिक element (values) को स्टोर कर सकता है। array एक बार में 
एक ही प्रकार (same data type) के data elements को store कर सकता है जैसे सभी integer हो या float हो या character हो,etc.


- Array में store होने वाली items/values को elements कहते है।
- Array contiguous memory लोकेशन में elements को store करता है। contiguous से आशय है की एक के बाद एक।
- Array को एक प्रकार का pointer variable(pointer एक प्रकार के variable है जो किसी दुसरे variable address को store करता है )
  भी कह सकते है जो store होने वाले elements में first element की मेमोरी location को point करता है।
- Array में indexing 0 से start होती है।

## Array declaration

```c
data_type arr[size];

// Example
#include <stdio.h>
int main() {
  	// declaration
	int marks[5];
/*
_____________________
|	|	|	|	|	|
`````````````````````
 0    1   2   3   4
*/
  
  return 0;
}
```


## Array initialization

```c
#include <stdio.h>
int main() {
 
// initialization
int marks[0] = 57;
/*
_____________________
| 57 |	|	|	|	|
`````````````````````
 0    1   2   3   4
*/

int marks[1] = 60;
/*
_____________________
| 57 |60 |	|	|	|
`````````````````````
 0    1   2   3   4
*/

int marks[2] = 62;
/*
_____________________
| 57 |60 |62|	|	|
`````````````````````
 0    1   2   3   4
*/

int marks[3] = 65;
/*
_____________________
| 57 |60 |62|65|	|
`````````````````````
 0    1   2   3   4
*/
 
int marks[4] = 68;
/*
_____________________
| 57 |60 |62 |65 |68|
`````````````````````
 0    1   2   3   4
*/
 return 0; 
}
```

## Array accessing elements


```c
#include <stdio.h>

int main() {
  	// first element
	printf("%dn", marks[0]);  	
  // second element
	printf("%dn", marks[1]);  	
  	// third element
	printf("%dn", marks[2]);  	
  // fourth element
	printf("%dn", marks[3]);  	
  // fifth element
	printf("%dn", marks[4]);  	
}
```


### Complete program

```c
#include <stdio.h>

int main() {
    // declaration
    int marks[5];
	
    // initialization
    marks[0]=57;
    marks[1]=60;
    marks[2]=62;
    marks[3]=65;
    marks[4]=68;

  	// accessing
    printf("%dn", marks[0]);
    printf("%dn", marks[1]);
    printf("%dn", marks[2]);
    printf("%dn", marks[3]);
    printf("%dn", marks[4]);

    return 0;
}

// output
// 57
// 60
// 62
// 65
// 68

```

## Another sort way

```c
#include <stdio.h>

int main() {
  	// declaration & initialization
    int marks[5] = {57, 60, 62, 65, 68};
	
  	// accessing
    for(int i=0; i<5; i++ ) { 
        printf("%dn", marks[i]); 
    }
} 
// output
// 57
// 60
// 62
// 65
// 68
```

## User-defined size & elements

```c
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    int marks[n];
    for(int i=0; i<n; i++) {
        scanf("%d", &marks[i]);
    }
    
    for(int i=0; i<n; i++) {
        printf("%dn", marks[i]);
    } 
    return 0;
}

// output
// 5
// 57 60 62 65 68
// 57
// 60
// 62
// 65
// 68

```


## Types of Array

- One-dimensional array
- Two-dimensional array
- Multidimensional array


### One-Dimensional Array

abhi jo bhi normal array ko study kiya yahi one/single-dimesinoal array karhlata hai 


