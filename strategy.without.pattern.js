function getPrice(originalPrice, typePromotion = 'default') {
    // Giảm giá khi người dùng đặt trước một sản phẩm của VINFAST 
    if (typePromotion === "preOrder") {
        return originalPrice * 0.2; // giảm 20%
    } // Ở giai đoạn này nếu như bạn đã biết về SOLID thì nó đã phá vỡ nguyên tắc đầu tiên. Đó là Nguyên tắc trách nhiệm duy nhất.

    // Tiếp tục thêm tính năng khuyễn mãi thông thường, ví dụ Nếu giá gốc < 200 thì giảm 10%, còn > thì giảm tối đa 30
    if (typePromotion === "promotion") {
        return origialPrice <= 200 ?  origialPrice * 0.1 : originalPrice - 30;
    }
    // Đến ngày blackFriday promotion
    if (typePromotion === "blackFriday") {
        return origialPrice <= 200 ?  origialPrice * 0.2 : originalPrice - 50;
    }

    // Thời xưa chưa có marketing như bây giờ.
    if (typePromotion === 'default') {
        return originalPrice;
    }
}

console.log('-->>>',  getPrice(200,  'blackFriday'))
