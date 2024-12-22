package collections;

import java.util.ArrayList;

public class Collections_userDefined_ArrayList_MobilePhone {
	
    ArrayList<Collections_userDefined_ArrayList_Contact> myContacts =  new ArrayList<>();

    // Method to add a new contact
    public boolean addNewContact(Collections_userDefined_ArrayList_Contact contact) {
        if (findContact(contact.getName()) >= 0) {
//        	Look carefully. There are two findContact methods. One accepts a string and 
//        	another accepts an object.
//        	And we are trying to avoid the duplicate names for this task.
            return false;
        }
        myContacts.add(contact);
        return true;
    }

    // Method to update an existing contact
    public boolean updateContact(Collections_userDefined_ArrayList_Contact oldContact, 
    		Collections_userDefined_ArrayList_Contact newContact) {
        int foundPosition = findContact(oldContact);
        if (foundPosition < 0) {
            return false;
        }
        myContacts.set(foundPosition, newContact);
        return true;
    }

    // Method to remove a contact
    public boolean removeContact(Collections_userDefined_ArrayList_Contact contact) {
        int foundPosition = findContact(contact);
        if (foundPosition < 0) {
            return false;
        }
        myContacts.remove(foundPosition);
        return true;
    }

    // Method to find a contact's position in the ArrayList by Contact object
    private int findContact(Collections_userDefined_ArrayList_Contact contact) {
        return myContacts.indexOf(contact);
    }

    // Method to find a contact's position in the ArrayList by name
    private int findContact(String contactName) {
        for (int i = 0; i < myContacts.size(); i++) {
        	Collections_userDefined_ArrayList_Contact contact = myContacts.get(i);
            if (contact.getName().equals(contactName)) {
                return i;
            }
        }
        return -1;
    }

    // Method to query a contact by name
    public Collections_userDefined_ArrayList_Contact queryContact(String name) {
        int position = findContact(name);
        if (position >= 0) {
            return myContacts.get(position);
        }
        return null;
    }

    // Method to print all contacts
    public void printContacts() {
        System.out.println("Contact List:");
        for (int i = 0; i < myContacts.size(); i++) {
        	Collections_userDefined_ArrayList_Contact contact = myContacts.get(i);
            System.out.println((i + 1) + ". " + contact.getName() + " -> " + contact.getPhoneNumber());
        }
    }
}
