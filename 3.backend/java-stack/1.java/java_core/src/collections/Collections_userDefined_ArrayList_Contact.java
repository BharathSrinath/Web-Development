package collections;

public class Collections_userDefined_ArrayList_Contact {
	private String name;
    private String phoneNumber;

    // Constructor to initialize name and phoneNumber
    public Collections_userDefined_ArrayList_Contact(String name, String phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Getter for phoneNumber
    public String getPhoneNumber() {
        return phoneNumber;
    }

    // Static method to create a new Contact instance
//    public static Collections_userDefined_ArrayList_Contact createContact(String name, String phoneNumber) {
//        return new Collections_userDefined_ArrayList_Contact(name, phoneNumber);
//    }
}
// We had a confusion with this method. But understood later. Rather than creating a new instance within main class,
// we have created the above static method to create the new instance. 