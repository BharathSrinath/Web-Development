package servlets;

import java.util.HashMap;
import java.util.Map;

public class CountryCapital {
	
	public Map<String, String> map;

    public CountryCapital() {
    	map = new HashMap<>();
    	map.put("India", "New Delhi");
    	map.put("China", "Beijing");
    	map.put("Japan", "Tokyo");
    	map.put("SriLanka", "Colombo");
    }

    public String getCapital(String country) {
        return map.get(country);
    }
}
