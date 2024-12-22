package basics;

public class Payment_app {

	public static void main(String[] args) {
		double amount = 50000;
		System.out.println("You have purchased for Rs. "+amount);
		
		if (amount >= 3000) {
			double discount = (amount*20)/100;
			amount -= discount;
			System.out.println("Discount of Rs: "+amount+" is applied!!");
		}
		
		if(amount >= 10000) {
			double gst = (amount*7.2)/100;
			System.out.println("GST for the purchased amount of Rs."+amount+" is Rs."+gst);
			amount += gst;
			System.out.println("Final amount payable is Rs."+amount);
		}
	}

}
