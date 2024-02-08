//create service Car

class Car {
    constructor({name = 'Ford Ranger 2023', doors = 4, price = '10 VND', customerInfo = {}}){
        this.name = name
        this.doors = doors
        this.price = price
        this.customerInfo = customerInfo
    }
}

//create service Logistics
class ServiceLogistics{
    transportClass = Car
    getTransport = (customerInfo) => {
        return new this.transportClass(customerInfo)
    }
}

//order for customer by Car
const carService  = new ServiceLogistics()
console.log('CarService::', carService.getTransport({customerInfo: {name: 'minh', cargoVolume: '100 kg'}}))

//cach 1
class Truck{
    constructor({name = 'Container 2023', doors = 16, price = '100 VND', customerInfo = {}}){
        this.name = name
        this.doors = doors
        this.price = price
        this.customerInfo = customerInfo
    }
}
carService.transportClass = Truck
console.log('TruckService::', carService.getTransport({customerInfo: {name: 'minh', cargoVolume: '1000 kg'}}))

//Cach 2
class TruckService extends ServiceLogistics{
    transportClass = Truck
}

const truckService = new TruckService()
console.log('TruckService::CLass::', truckService.getTransport({customerInfo: {name: 'minh', cargoVolume: '1000.000 kg'}}))
