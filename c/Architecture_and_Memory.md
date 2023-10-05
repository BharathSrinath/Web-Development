# Architecture:
Modern computer architecture is based off of an architecture called the Von Neumann architecture, named after its creator. 
The Von Neumann architecture divides the computer up into two main parts - the CPU and the memory.
Memory is split into equal parts (bytes) and are numbered in a sequence, These numbers are called as address.
CPU reads in instructions from memory one at a time and executes them. This is known as the fetch-execute cycle.
Elements of CPU to accomplish this:
    # Program Counter:
        t is used to tell the computer where to fetch the next instruction from by holding the memory address of the next instruction to be executed.
    # Instruction Decoder:
        The fetched instruction is then passed onto decoder which figures out what the instruction actually means. 
        It will figure out the process to be performed and the memory locations that are going to be involved in this process 
            Ex: addition, subtraction, multiplication, data movement, etc.
        Computer instructions usually consist of both the actual instruction and the list ofmemory locations that are used to carry it out.
    # Data bus:
        It is the connection between the CPU and memory. It is the actual wire that connects them.
            In the motherboard of the computer, the wires that go out from the memory are the data bus
        It fetches the memory locations to be used in the calculation.
    # Registers: 
        Apart from the memory that is outside the processor, the CPU itself has some special, high-speed memory locations called registers.
        Think of a register as a place on your desk - it holds things you are currently working on. You may have lots of information tucked away in folders and drawers, but the stuff you are working on right now is on the desk.
        Every piece of data on the computer that is NOT in a register has an address.
            General-purpose registers: 
                They are where the main action happens. 
                    Ex: Arithmetic operations, storing data and holding temporary values during program execution.
                But computers have very few general-purpose registers. Most information is stored in main memory, brought in to the registers for processing, and then put back into memory when the processing is completed.
            Special-purpose registers: 
                They are registers which have very specific purposes.
                Examples:
                    Instruction pointer: The only way the computer knows that a memory location is an instruction is that 'instruction pointer' points to them at one point or another. If the instruction pointer points to a memory word, it is loaded as an instruction.
                    Index Registers: They are designed to assist with memory addressing tasks, particularly in situations where you need to access data at specific memory locations based on an index or offset. They can help you efficiently navigate through data structures like arrays or perform efficient data lookups.
                        Not all processors have dedicated index registers, and some architectures may use general-purpose registers for similar purposes.
    # Arithmetic and logic unit:
        Now that the CPU has retrieved all of the data it needs, it passes on the data and the decoded instruction to the arithmetic and logic unit for further processing.
        Here the instruction is actually executed. After the results of the computation have been calculated, the results are then placed on the data bus and sent to the appropriate location in memory or in a register, as specified by the instruction.
Data Accessing Methods:
    # Immediate mode:
        Generally we would give the computer an address to read from.
        But in this mode if we want to initialize a register to 0 we would specify immediate mode, and give it the number 0.
        Data to access is embedded in the instruction itself.
    # Register addressing mode:
        Instruction contains a register to access, rather than a memory location.
    # Direct addressing mode:
        Instruction contains the memory address to access.
    # Indexed addressing mode:
        Instruction contains a memory address to access, and also specifies an index register to offset that address
        char a[10] = "Bharath" To access h, you will go with char a[6]. Here 6 is the offset. So remember that arrays come under this mode
    # Indirect addressing mode:
        The instruction contains a register that contains a pointer to where the data should be accessed
        Sounds familiar? You have just read the explanation for a pointer. So pointers come under this mode
    # Base pointer addressing mode:
        This is similar to indirect addressing, but you also include a number called the offset to add to the register’s value before using it for lookup. 
        They are similar to indexed addressing mode except that instead of index + offset we are using address + offset. That is offsetting the base address to move to the new address 

# Memory manager:
It is a set of routines that takes care of the dirty work of getting your program memory for you. Most memory managers have two basic functions - allocate and deallocate. This pattern of memory management is called dynamic memory allocation.
The pool of memory used by memory managers is commonly referred to as the heap.
They mark each block of memory in the heap as being used or unused. When you request memory, the memory manager checks to see if there are any unused blocks of the appropriate size. If not, it calls the brk system call to request more memory.
    The last accessible memory address to your program is called the system break/current break/break
    The computer does not allow you to access memory in the break area. Why?
When you free memory it marks the block as unused so that future requests can retrieve it.

Principle of locality:
It underlies both the way in which you did your work in the library and the way that programs operate. 
The principle of locality states that programs access a relatively small portion of their address space at any instant of time, just as you accessed a very small portion of the library’s collection. (Depedning up on the topic you are referring, you might only need those books on your table and not your entire table)
    Temporal locality (locality in time): if an item is referenced, it will tend to be referenced again soon. 
        Ex: If you recently brought a book to your desk to look at, you will probably need to look at it again soon.
    Spatial locality (locality in space): if an item is referenced, items whose addresses are close by will tend to be referenced soon. 
        Ex: When you brought out the book on C program, you also noticed that there was another book shelved next to it about Assembly language (language before C), so you also brought back that book and, later on, found something useful in that book. Libraries put books on the same topic together on the same shelves to increase spatial locality.
Locality in programs: Just as accesses to books on the desk naturally exhibit locality, locality in programs arises from simple and natural program structures. For example, most pro­grams contain loops, so instructions and data are likely to be accessed repeatedly, showing high amounts of temporal locality. Since instructions are normally accessed sequentially, programs also show high spatial locality.
    We take advantage of the principle of locality by implementing the memory of a computer as a memory hierarchy.
    A memory hierarchy consists of multiple lev­els of memory with different speeds and sizes. The faster memories are more expensive per bit than the slower memories and thus are smaller.
Primary technologies used in building memory hierarchies:
    1. Main memory is implemented from DRAM (dynamic random access memory)
    2. Levels closer to the processor (caches) use SRAM (static random access memory).
        DRAM is less costly per bit than SRAM although it is substantially slower. This is because DRAM uses significantly less area per bit of memory and thus have larger capacity for the same amount of silicon.
    3. The last whih is largest and slowest is the magnetic disk -> HDD -> Flash memory like SSD (Evolved into SSD these days)
Memory hierarchies:
Because of these differences in cost and access time, it is advantageous to build memory as a hierarchy of levels.
As you can see, access time increases from main memory while speed and cost decreases 
A memory hierarchy can consist of multiple levels, but data is copied between only two adjacent levels at a time

Virtual Memory:
Virtual memory is not a distinct form of memory; rather, it is a memory management process. 
It plays a vital role in how the memory hierarchy functions within a computer system.
The process of fetching and swapping data among different levels of the memory hierarchy, including RAM, cache, and even secondary storage, is a fundamental aspect of virtual memory management. 

Why virtual memory management?
    To allow efficient and safe sharing of memory among multiple programs 
        Protect the programs from each other, ensuring that a program can only read and write the portions of main memory that have been assigned to it.
    To remove the programming burdens of a small, limited amount of main memory
Fucntioning of a virtual memory at the hardware level:
    When data is needed, the processor initially checks the cache. If the data is found there, retrieval is much faster than accessing RAM. However, if the data is not present in the cache, the processor fetches it from RAM.
    To optimize memory usage, only actively used parts of a program are loaded into RAM. Other data remains on slower storage, such as a hard disk or SSD. 
    When the system requires data that is not in RAM, the operating system performs a 'swap,' where less critical data in RAM is moved to slower storage to make room for the needed data.
    In cases of substantial memory demands, even secondary storage may come into play. However, this can significantly slow down the system due to the much longer access times of secondary storage compared to RAM and cache.
Fucntioning of a virtual memory at the software level:
    When a program is executed on a computer, it operates in a virtual address space.  That is OS will give a virtual address starting from 0 to n-1 for this program and as it runs the virtual address will expand.
    This virtual address will be mapped into physical address of RAM. This process is known as mapping
    OS sets up and maintains the page tables (just think of it like an excel sheet for understanding purpose), which store the mapping information. 
    The computer's hardware, including the CPU and memory management unit (MMU), is designed to work with virtual addresses. When the program accesses a virtual address, the hardware assists in translating that virtual address into a physical address by consulting the page table.
    Within a program's own virtual address space, the contents are typically organized sequentially. A program's code and data are structured logically, and the program itself assumes that its memory is arranged in a contiguous manner.
    As a program runs and requires more memory, the operating system allocates additional memory pages to it. These pages may not necessarily be contiguous in physical RAM. Because in backgroud OS may require RAM for other tasks too. So when you look at the physical RAM, memory will allocated randomy based on the which application requires what at any given point of time. Hence the name 'Dynamic Random Access Memory' (Now it makes sense doesn;t it)
    Virtual memory can be mapped to more than just physical memory; it can be mapped to disk as well.
    
Virtual memory creates the illusion of larger memory. when we say the illusion of larger memroy, what we actually mean is the illusion of larger FASTER memory. This is because the larger memory is not an illusion. Rather it is a real memory from the secondary storage. But they are not faster. Due to swapping the required contents frequently, we are processing them with the help of faster memory such as cache and RAM.

RAM:
It is divided into user space, kernel space and code segment

|----------------------------------------------|
|                 User Space                   |
|                                              |
|----------------------------------------------|
|               Kernel Space                   |
|                                              |
|----------------------------------------------|
|             Code Segment (Text)              |
|                                              |
|----------------------------------------------|

Code Segment (Text Segment): This region holds the executable code of the program, including the instructions that the CPU fetches and executes. It is typically read-only to prevent accidental modification of program instructions during execution.
Kernel Space: Part of RAM is reserved for the operating system's kernel. This space is not directly accessible by user-level programs and contains essential system data structures and code.

User space is divided into heap, stack, data segment, bss segment and MMIO


|----------------------------------------------|
|                   Heap                       |
|                                              |
|----------------------------------------------|
|                   Stack                      |
|                                              |
|----------------------------------------------|
|                 Data Segment                 |
|                                              |
|----------------------------------------------|
|                 BSS Segment                  |
|                                              |
|----------------------------------------------|
|                MMIO (if present)             |
|                                              |
|----------------------------------------------|


Stack: Stores function call data, local variables, and control flow information. It operates in a last-in, first-out (LIFO) manner, making it well-suited for managing function calls and returns.
Heap: The heap is a dynamic memory area used for allocating and deallocating memory at runtime. It's often used for managing data structures of varying sizes, such as arrays and linked lists. Unlike the stack, memory in the heap is allocated and deallocated manually by the programmer.
Data Segment: The data segment includes initialized data and global variables. These variables have fixed addresses in memory and retain their values throughout the program's execution.
BSS (Block Started by Symbol) Segment: The BSS segment contains uninitialized static and global variables that are initialized to zero or null by default. It's a space reserved for variables that will be initialized at runtime.
Memory-Mapped I/O (MMIO): In some systems, a portion of RAM may be reserved for memory-mapped I/O. This is used for communication between the CPU and peripheral devices, such as graphics cards or network adapters.

Note: RAM itself doesn't possess the "superpower" of knowing what data or operations it's handling. Instead, it's the collaborative effort of the operating system, hardware features, memory management techniques, and memory addressing that give the appearance of specific memory regions dedicated to different tasks. The OS and hardware work together to create the illusion of memory segmentation and protection, ensuring efficient and secure memory utilization.
