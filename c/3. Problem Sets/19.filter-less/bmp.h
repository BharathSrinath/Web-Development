// BMP-related data types based on Microsoft's own

#include <stdint.h>

// These data types are essentially aliases for C/C++ primitive data types.
// Adapted from http://msdn.microsoft.com/en-us/library/cc230309.aspx.
// See https://en.wikipedia.org/wiki/C_data_types#stdint.h for more on stdint.h.

typedef uint8_t  BYTE;
typedef uint32_t DWORD;
typedef int32_t  LONG;
typedef uint16_t WORD;

// The BITMAPFILEHEADER structure contains information about the type, size,
// and layout of a file that contains a DIB [device-independent bitmap].
// Adapted from http://msdn.microsoft.com/en-us/library/dd183374(VS.85).aspx.

typedef struct
{
    WORD   bfType;
    DWORD  bfSize;
    WORD   bfReserved1;
    WORD   bfReserved2;
    DWORD  bfOffBits;
} __attribute__((__packed__))
BITMAPFILEHEADER;

// The __attribute__((__packed__)) directive is used to indicate that you want the structure BITMAPFILEHEADER to be packed, meaning there should be no padding added between its members. This is often used when working with file formats or data structures that require a specific byte layout.
// It can have performance implications, as it might lead to less efficient memory access. Additionally, it might not be portable across different compilers, as it's a compiler-specific feature.
// Memory alignment is the practice of placing data in memory at addresses that are multiples of their size. This alignment is important for efficient memory access by the computer's processor.
    // Consider this example:
        // struct Example {
        //     char a;     // 1 byte
        //     int b;      // 4 bytes
        //     double c;   // 8 bytes
        // };
    // Without any padding, the size of this struct would be 1 + 4 + 8 = 13 bytes. However, to ensure that the int and double members are aligned properly (on addresses that are multiples of 4 and 8, respectively), the compiler might add padding bytes.
// However, in certain cases, you might want to avoid this padding for specific reasons. For instance, when working with file formats or network protocols where the exact byte layout matters, you might use the __attribute__((__packed__)) directive to tell the compiler not to add any padding bytes. This ensures that the struct's memory layout directly matches the expected byte layout in the file or network communication.

// The BITMAPINFOHEADER structure contains information about the
// dimensions and color format of a DIB [device-independent bitmap].
// Adapted from http://msdn.microsoft.com/en-us/library/dd183376(VS.85).aspx.

typedef struct
{
    DWORD  biSize;
    LONG   biWidth;
    LONG   biHeight;
    WORD   biPlanes;
    WORD   biBitCount;
    DWORD  biCompression;
    DWORD  biSizeImage;
    LONG   biXPelsPerMeter;
    LONG   biYPelsPerMeter;
    DWORD  biClrUsed;
    DWORD  biClrImportant;
} __attribute__((__packed__))
BITMAPINFOHEADER;

// The RGBTRIPLE structure describes a color consisting of relative intensities of
// red, green, and blue. Adapted from http://msdn.microsoft.com/en-us/library/aa922590.aspx.

typedef struct
{
    BYTE  rgbtBlue;
    BYTE  rgbtGreen;
    BYTE  rgbtRed;
} __attribute__((__packed__))
RGBTRIPLE;