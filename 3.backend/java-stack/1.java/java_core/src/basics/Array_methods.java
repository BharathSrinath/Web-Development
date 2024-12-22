package basics;

import java.util.Arrays;
import java.util.Random;

public class Array_methods {

	public static void main(String[] args) {

		int[] firstArray = getRandomArray(10);
                System.out.println(Arrays.toString(firstArray));
        //        Rather than using for-loop, this method can be used directly print the array
        //        But remember for-loop can print the values, toString just prints the array as 
        //        a whole.
                Arrays.sort(firstArray);
        //        Sorts the array
                System.out.println(Arrays.toString(firstArray));

                int[] secondArray = new int[10];
                System.out.println(Arrays.toString(secondArray));
                Arrays.fill(secondArray, 5);
        //        fills the array with same values
                System.out.println(Arrays.toString(secondArray));

                int[] thirdArray = getRandomArray(10);
                System.out.println(Arrays.toString(thirdArray));

                int[] fourthArray = Arrays.copyOf(thirdArray, thirdArray.length);
        //        Copies one array to another. 
        //        It takes two arguments. First argument is the array to be copied and second
        //        is the length of the copied array.
                System.out.println(Arrays.toString(fourthArray));

                Arrays.sort(fourthArray);
                System.out.println(Arrays.toString(thirdArray));
                System.out.println(Arrays.toString(fourthArray));

                int[] smallerArray = Arrays.copyOf(thirdArray, 5);
                System.out.println(Arrays.toString(smallerArray));

                int[] largerArray = Arrays.copyOf(thirdArray, 15);
                System.out.println(Arrays.toString(largerArray));

                String[] sArray = {"Able", "Jane", "Mark", "Ralph", "David"};
                Arrays.sort(sArray);
                System.out.println(Arrays.toString(sArray));
                
        //        binarySearch(list, key). If the key is present it returns the first occurrence
        //        If the key is not present, it returns -1
        //        For binarySearch() to work, the list must be sorted
                if (Arrays.binarySearch(sArray, "Mark") >= 0) {
                        System.out.println("Found Mark in the list");
                }

                int[] s1 = {1, 2, 3, 4, 5};
                int[] s2 = {1, 2, 3, 4, 5, 0};
        //        Arrays are considered equal only when they have same length and 
        //        each index has the same value.
                if (Arrays.equals(s1, s2)) {
                        System.out.println("Arrays are equal");
                } else {
                        System.out.println("Arrays are not equal");
                }
                
        //      This is known as array of objects.
        //		When you assign an object (whether it’s an array or any other type) to a variable, 
        //      the variable indeed carries a reference to that object. When you create an array of 
        //      objects (e.g., MyClass[] myArray), each element in the array is essentially a 
        //      reference to an object.
                Object[] anyArray = new Object[3];
                System.out.println(Arrays.toString(anyArray)); 
        // 		It prints out [null, null, null]. Because it is an object

                anyArray[0] = new String[] {"a", "b", "c"};
                System.out.println(Arrays.deepToString(anyArray));

                anyArray[1] = new String[][]{
                        {"1", "2"},
                        {"3", "4", "5"},
                        {"6", "7", "8", "9"}
                };
                System.out.println(Arrays.deepToString(anyArray));

                anyArray[2] = new int[2][2][2];
        //        anyArray[2] = "Hello";
                System.out.println(Arrays.deepToString(anyArray));

                for (Object element : anyArray) {
                        System.out.println("Element type = " + element.getClass().getSimpleName());
                        System.out.println("Element toString() = " + element);
                        System.out.println(Arrays.deepToString((Object[]) element));
        //            We have to type-cast this to an object[], because compiler 
        //            doesn't know that element is an object array here.
                }
        
        }

        private static int[] getRandomArray(int len) {
        // Generates random number and take an integer argument which marks the upper bound
        // That is below generates random values between 0 to 99 (100 is excluded)
                Random random = new Random();
                int[] newInt = new int[len];
                for (int i = 0; i < len; i++) {
                        newInt[i] = random.nextInt(100);
                }

                return newInt;
        }
}