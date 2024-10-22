//Given the arrival and departure times of all trains that reach a railway station, 
//the task is to find the minimum number of platforms required for the railway station 
//so that no train has to wait. We are given two arrays that represent the arrival and 
//departure times of the trains that stop.
//Arrival times: {9:00, 9:40, 9:50, 11:00, 15:00, 18:00}
//Departure times: {9:10, 12:00, 11:20, 11:30, 19:00, 20:00}

package basics;

import java.time.LocalTime;
import java.util.Arrays;

public class Array_minimum_platforms {

    public static int findMinimumPlatforms(LocalTime[] arrivalTime, LocalTime[] departureTime) {
        // Sort both arrays
        Arrays.sort(arrivalTime);
        Arrays.sort(departureTime);

        int n = arrivalTime.length;
        int platformsNeeded = 0;
        int minPlatforms = 0;

        int i = 0, j = 0;

        // Traverse both arrays
        while (i < n && j < n) {
            // If next event is arrival, increment count of platforms needed
            if (arrivalTime[i].isBefore(departureTime[j]) || 
            		arrivalTime[i].equals(departureTime[j])) {
                platformsNeeded++;
                i++;
                // Update minPlatforms if needed
                if (platformsNeeded > minPlatforms) {
                    minPlatforms = platformsNeeded;
                }
            } else { // If next event is departure, decrement count of platforms needed
                platformsNeeded--;
                j++;
            }
        }

        return minPlatforms;
    }

    public static void main(String[] args) {
        LocalTime[] arrivalTime = new LocalTime[]{
            LocalTime.of(9, 0), LocalTime.of(9, 40), 
            LocalTime.of(9, 50), LocalTime.of(11, 0), 
            LocalTime.of(15, 0), LocalTime.of(18, 0)
        };
        LocalTime[] departureTime = new LocalTime[]{
            LocalTime.of(9, 10), LocalTime.of(12, 0), 
            LocalTime.of(11, 20), LocalTime.of(11, 30), 
            LocalTime.of(19, 0), LocalTime.of(20, 0)
        };

        int result = findMinimumPlatforms(arrivalTime, departureTime);
        System.out.println("Minimum number of platforms required: " + result);
    }
}
