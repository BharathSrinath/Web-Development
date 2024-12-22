# Architecture:
    # Modern computer architecture is based on an architecture called the Von Neumann architecture, named after its creator. 
    # The Von Neumann architecture divides the computer into two main parts - the CPU and the memory.
    # Memory is split into equal parts (bytes) and is numbered in a sequence. These numbers are called addresses.
        # When accessing memory in a computer, we are usually working with bytes, as modern computer systems typically address memory at the byte level. However, the lowest representation of the data in that memory is in bits.
    # The CPU reads instructions from memory one at a time and executes them. This is known as the fetch-execute cycle.

# Elements of the CPU to accomplish this:
    # Program Counter: It is used to tell the computer where to fetch the next instruction by holding the memory address of the next instruction to be executed.
    # Instruction Decoder:
        # The fetched instruction is then passed onto the decoder, which figures out what the instruction actually means. 
        # It will determine the process to be performed and the memory locations involved in this process 
            # Ex: addition, subtraction, multiplication, data movement, etc.
        # Computer instructions usually consist of both the actual instruction and the list of memory locations that are used to carry it out.
    # Data Bus:
        # It is the connection between the CPU and memory. It is the actual wire (copper traces or lines in a PCB) that connects them.
            # On the motherboard of the computer, the wires going out from the memory are part of the data bus.
        # It fetches the memory locations to be used in the calculation.
    # Registers: 
        # Apart from the memory that is outside the processor, the CPU itself has some special, high-speed memory locations called registers.
        # Think of a register as a place on your desk - it holds things you are currently working on. You may have lots of information tucked away in folders and drawers, but the stuff you are working on right now is on the desk.
        # Every piece of data on the computer that is NOT in a register has an address.
            # General-purpose registers: 
                # They are where the main action happens. 
                    # Ex: Arithmetic operations, storing data, and holding temporary values during program execution.
                # Computers have very few general-purpose registers. Most information is stored in main memory, brought into the registers for processing, and then put back into memory when the processing is completed.
            # Special-purpose registers: 
                # They have specific purposes.
                # Examples:
                    # Instruction Pointer: The only way the computer knows that a memory location is an instruction is that the 'instruction pointer' points to it at one point or another. If the instruction pointer points to a memory word, it is loaded as an instruction.
                    # Index Registers: They assist with memory addressing tasks, particularly in accessing data at specific memory locations based on an index or offset. They help efficiently navigate data structures like arrays or perform data lookups.
                        # Not all processors have dedicated index registers; some architectures may use general-purpose registers for similar purposes.
    # Arithmetic and Logic Unit (ALU):
        # Now that the CPU has retrieved all the data it needs, it passes the data and the decoded instruction to the arithmetic and logic unit for processing.
        # Here, the instruction is executed. After the computation's results have been calculated, they are placed on the data bus and sent to the appropriate location in memory or a register, as specified by the instruction.

# Data Accessing Methods:
    # Immediate Mode:
        # Generally, we would give the computer an address to read from.
        # But in this mode, if we want to initialize a register to 0, we would specify immediate mode and give it the number 0.
        # The data to access is embedded in the instruction itself.
    # Register Addressing Mode:
        # The instruction contains a register to access, rather than a memory location.
    # Direct Addressing Mode:
        # The instruction contains the memory address to access.
    # Indexed Addressing Mode:
        # The instruction contains a memory address to access and also specifies an index register to offset that address.
        # Ex: `char a[10] = "Bharath";` To access `h`, you would use `char a[6]`. Here 6 is the offset, making arrays an example of this mode.
    # Indirect Addressing Mode:
        # The instruction contains a register that holds a pointer to where the data should be accessed.
        # This is the same concept as pointers in programming.
    # Base Pointer Addressing Mode:
        # Similar to indirect addressing, but you also include an offset to add to the register's value before using it for lookup.
        # It is like indexed addressing mode, but instead of index + offset, we are using address + offset (offsetting the base address to move to the new address).

# Memory Manager:
    # The memory manager is a set of routines that takes care of allocating and deallocating memory for your program. This pattern is called dynamic memory allocation.
    # The pool of memory used by memory managers is commonly referred to as the heap.
    # Memory managers mark each block of memory in the heap as being used or unused. When you request memory, the memory manager checks to see if there are any unused blocks of the appropriate size. If not, it calls the `brk` system call to request more memory.
        # The last accessible memory address to your program is called the system break/current break/break.
        # The computer does not allow you to access memory in the break area.
    # When you free memory, it marks the block as unused so that future requests can retrieve it.

# Principle of Locality:
    # The principle of locality states that programs access a relatively small portion of their address space at any instant of time.
    # Temporal locality: If an item is referenced, it will tend to be referenced again soon.
        # Ex: If you recently brought a book to your desk to look at, you will probably need to look at it again soon.
    # Spatial locality: If an item is referenced, items with nearby addresses will tend to be referenced soon.
        # Ex: When you brought out a book on C programming, you noticed another book shelved next to it about Assembly language. You brought that book too, and later found it useful.

# Locality in Programs:
    # Programs exhibit locality due to their structure. Loops in programs tend to repeatedly access instructions and data, showing temporal locality. Programs also show spatial locality since instructions are normally accessed sequentially.
    # Memory hierarchies are built to take advantage of locality. They consist of multiple levels of memory with different speeds and sizes.
        # Main memory is implemented with DRAM (dynamic random access memory), which is slower but larger.
        # Caches use SRAM (static random access memory), which is faster but smaller.

# Virtual Memory:
    # Virtual memory is not a distinct form of memory but a memory management process. It plays a key role in managing the memory hierarchy.
    # Virtual memory allows efficient and safe sharing of memory among multiple programs.
    # When a program is executed, it operates in a virtual address space, which the operating system maps to physical memory using page tables. The hardware assists in translating virtual addresses to physical addresses.

# RAM:
    # It is divided into user space, kernel space, and the code segment.
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
    # User space is further divided into the heap, stack, data segment, BSS segment, and MMIO (if present).
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
    # Stack: Stores function call data, local variables, and control flow information. It operates in a last-in, first-out (LIFO) manner, making it well-suited for managing function calls and returns.
    # Heap: The heap is a dynamic memory area used for allocating and deallocating memory at runtime. It's often used for managing data structures of varying sizes, such as arrays and linked lists. Unlike the stack, memory in the heap is allocated and deallocated manually by the programmer.
    # Data Segment: The data segment includes initialized data and global variables. These variables have fixed addresses in memory and retain their values throughout the program's execution.
    # BSS (Block Started by Symbol) Segment: The BSS segment contains uninitialized static and global variables that are initialized to zero or null by default. It's a space reserved for variables that will be initialized at runtime.
    # Memory-Mapped I/O (MMIO): In some systems, a portion of RAM may be reserved for memory-mapped I/O. This is used for communication between the CPU and peripheral devices, such as graphics cards or network adapters.

Note: RAM itself doesn't possess the "superpower" of knowing what data or operations it's handling. Instead, it's the collaborative effort of the operating system, hardware features, memory management techniques, and memory addressing that give the appearance of specific memory regions dedicated to different tasks. The OS and hardware work together to create the illusion of memory segmentation and protection, ensuring efficient and secure memory utilization.