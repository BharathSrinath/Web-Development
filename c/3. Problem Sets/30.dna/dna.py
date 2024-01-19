import csv
import sys

def main():
    # Check for the correct number of command-line arguments
    if len(sys.argv) != 3:
        print("Usage: python dna.py <database.csv> <sequence.txt>")
        sys.exit(1)

    # Get the filenames from command-line arguments
    database_filename = sys.argv[1]
    sequence_filename = sys.argv[2]

    # Read the DNA sequence from the sequence file
    with open(sequence_filename, "r") as sequence_file:
        dna_sequence = sequence_file.read().strip()

    # Read the CSV database into a list of dictionaries
    with open(database_filename, "r") as database_file:
        reader = csv.DictReader(database_file)
        database = list(reader)

    # Get the list of STRs from the database (excluding the 'name' column)
    str_names = database[0].keys()
    str_names = list(str_names)[1:]

    # Calculate the longest run of consecutive repeats for each STR
    str_counts = {}
    for str_name in str_names:
        str_counts[str_name] = longest_match(dna_sequence, str_name)

    # Check if the STR counts match exactly with any individual in the database
    for person in database:
        name = person["name"]
        person_counts = {str_name: int(person[str_name]) for str_name in str_names}
        if person_counts == str_counts:
            print(name)
            return

    # If no match is found
    print("No match")

def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""
    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    for i in range(sequence_length):
        count = 0
        while True:
            start = i + count * subsequence_length
            end = start + subsequence_length

            if sequence[start:end] == subsequence:
                count += 1
            else:
                break

        longest_run = max(longest_run, count)

    return longest_run

if __name__ == "__main__":
    main()
