package demoproject_Jsp;

public class Info {
	//variable declaration
	int pid;
	String pname;
	String pbrand;
	float pprice;
	String psales;
	//constructors
	public Info(int pid, String pname, String pbrand, float pprice, String psales) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.pbrand = pbrand;
		this.pprice = pprice;
		this.psales = psales;
	}
	
	//getters and setters
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getPbrand() {
		return pbrand;
	}
	public void setPbrand(String pbrand) {
		this.pbrand = pbrand;
	}
	public float getPprice() {
		return pprice;
	}
	public void setPprice(float pprice) {
		this.pprice = pprice;
	}
	public String getPsales() {
		return psales;
	}
	public void setPsales(String psales) {
		this.psales = psales;
	}	
}

