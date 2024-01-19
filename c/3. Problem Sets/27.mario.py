def get_valid_height():
    while True:
        height_str = input("Enter the height of your pyramid: ")
        if height_str.isdigit():
            height = int(height_str)
            if height >= 1 and height <= 8:
                return height
        print("Invalid input. Please enter a positive integer between 1 and 8.")


def main():
    height = get_valid_height()

    for i in range(height):
        spaces = height - i - 1
        hashes = i + 1

        # Print spaces
        print(" " * spaces, end="")

        # Print left hashes
        print("#" * hashes, end="  ")

        # Print right hashes
        print("#" * hashes)


if __name__ == "__main__":
    main()
