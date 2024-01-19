import math


def letters_count(letters):
    count = 0
    for char in letters:
        if char.isalpha():
            count += 1
    return count


def words_count(words):
    word_list = words.split()
    return len(word_list)


def sentence_count(sentence):
    count = 0
    for char in sentence:
        if char in [".", "!", "?"]:
            count += 1
    return count


def main():
    paragraph = input("Text: ")
    # print(paragraph)
    x = letters_count(paragraph)
    # print(f"Number of letters: {x}")
    y = words_count(paragraph)
    # print(f"Number of words: {y}")
    z = sentence_count(paragraph)
    # print(f"Number of sentences: {z}")
    l = x * 100 / y
    # print(f"Value of L: {l}")
    s = z * 100 / y
    # print(f"Value of S: {s}")
    index = (0.0588 * l) - (0.296 * s) - 15.8
    index_rounded = round(index)
    if index < 1:
        print("Before Grade 1")
    elif index > 16:
        print("Grade 16+")
    else:
        # print(f"Grade {index}")
        print(f"Grade {index_rounded}")


if __name__ == "__main__":
    main()
