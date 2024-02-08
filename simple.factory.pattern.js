//without simple factory pattern

const serviceLogistics = (cargoVolume) => {
    switch (cargoVolume) {
        case '10': {
            return {
                name: 'Truck 10',
                doors: 6,
                price: '100.000 VND'
            };
        }
        case '20': {
            return {
                name: 'Truck 20',
                doors: 16,
                price: '1.000.000 VND'
            };
        }
    }
};

console.log(serviceLogistics('20'));

//with simple factory pattern
class ServiceLogistics {
    constructor(doors = 6,  price = '100.000 VND',  name = 'Truck 10'){
        this.name = name
        this.doors = doors
        this.price = price
    }
    static getTransport = (cargoVolume) => {
        switch (cargoVolume) {
            case '10': {
                return new ServiceLogistics()
            }
            case '20': {
                return new ServiceLogistics(16, '1.000.000 VND', 'Truck 20')
            }
        }
    }
}
console.log(`Level xxxx:::`, ServiceLogistics.getTransport('20'));

/*
 Khi khởi tạo một class thì có tính prototype mà tính prototype 
 thì chúng ta đã biết đó là nguyên mẫu chúng ta dựa vào mỗi class được 
 sinh ra nhưng mà nó sử dụng chung prototype(nguyên mẫu) nên giá trị 
 bộ nhớ heap rất thấp
*/

/*
 ưu điểm: cung cấp một cơ chế đặc biệt để tạo đối tượng, 
 tách biệt việc tạo đối tượng và sử dụng đối tượng,
 nó chứa logic phán đoán khi cần thiết, nó có thể quyết định khi nào chúng ta tạo, thể hiện cùng một lúc,
 khách hàng không cần biết tên lớp, tên class là gì, chỉ cần chúng ta chuyển tham só vào là nó khởi tạo cho chúng ta
*/

/*
nhược điểm: không hoạt động bình thường nếu hàm có vấn đề, khó có thể mở rộng được
*/