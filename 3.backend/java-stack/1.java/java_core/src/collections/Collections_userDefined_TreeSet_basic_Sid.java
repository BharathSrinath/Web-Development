package collections;

import java.util.Comparator;

public class Collections_userDefined_TreeSet_basic_Sid implements 
Comparator<Collections_userDefined_TreeSet_basic_Students>{

	@Override
	public int compare(Collections_userDefined_TreeSet_basic_Students o1,
			Collections_userDefined_TreeSet_basic_Students o2) {
		return o1.sid() - o2.sid();
	}

}
