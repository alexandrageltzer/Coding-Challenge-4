# Coding-Challenge-4
U2863-9518

// 1. Implement EV Class:

class Car:
    def __init__(self, make, speed):
        self.make = make
        self.speed = speed

    def accelerate(self):
        self.speed += 10
        print(f"{self.make} going at {self.speed} km/h")

    def brake(self):
        self.speed -= 5
        print(f"{self.make} going at {self.speed} km/h")
        class Car:
    def __init__(self, make, speed):
        self.make = make
        self.speed = speed

    def accelerate(self):
        self.speed += 10
        print(f"{self.make} going at {self.speed} km/h")

    def brake(self):
        self.speed -= 5
        print(f"{self.make} going at {self.speed} km/h")

    // 2. Charge Battery Method:

    class EV(Car):
    def __init__(self, make, speed, charge):
        super().__init__(make, speed)
        self.charge = charge

    def chargeBattery(self, chargeTo):
        self.charge = chargeTo
        print(f"{self.make} charged to {self.charge}%")

    // 3. Customize Accelerate Method:
    
    class EV(Car):
    def __init__(self, make, speed, charge):
        super().__init__(make, speed)
        self.charge = charge

    def chargeBattery(self, chargeTo):
        self.charge = chargeTo
        print(f"{self.make} charged to {self.charge}%")

    def accelerate(self):
        if self.charge > 0:
            self.speed += 20
            self.charge -= 1
            print(f"{self.make} going at {self.speed} km/h, with a charge of {self.charge}%")
        else:
            print(f"{self.make} cannot accelerate. Battery is empty.")
