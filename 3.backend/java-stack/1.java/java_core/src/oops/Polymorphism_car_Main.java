package oops;

public class Polymorphism_car_Main {

	public static void main(String[] args) {

		Polymorphism_car_Car car = new Polymorphism_car_Car("2022 Blue Ferrari 296 GTS");
                runRace(car);

                Polymorphism_car_Car ferrari = new GasPoweredCar("2022 Blue Ferrari 296 GTS",
                        15.4, 6);
                runRace(ferrari);

                Polymorphism_car_Car tesla = new ElectricCar("2022 Red Tesla Model 3",
                        568, 75);
                runRace(tesla);

                Polymorphism_car_Car ferrariHybrid = new HybridCar("2022 Black Ferrari SF90 Stradale",
                        16, 8, 8);
                runRace(ferrariHybrid);

	}
	
	public static void runRace(Polymorphism_car_Car car) {
                car.startEngine();
                car.drive();
        }

}
