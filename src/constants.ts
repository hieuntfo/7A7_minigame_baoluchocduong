import { Scenario } from './types';

import { Scenario } from './types';

export const scenarios: Scenario[] = [
    {
        id: 1,
        description: 'Anh Dũng chạy huých vào Khánh Linh làm đổ hộp bút tung tóe.',
        choices: [
            { id: '1A', type: 'Xanh', text: 'Cùng Anh Dũng nhặt bút và xin lỗi Khánh Linh chân thành.', result: 'Hành động nhỏ nhưng cho thấy sự quan tâm và trách nhiệm.', happinessChange: 10 },
            { id: '1B', type: 'Đỏ', text: 'Quát Anh Dũng: "Mắt để dưới chân à?" và bỏ đi.', result: 'Sự tức giận chỉ làm mọi thứ tồi tệ hơn.', happinessChange: -15 },
        ],
    },
    {
        id: 2,
        description: 'Cả nhóm đặt biệt danh chế giễu ngoại hình của Đan Khanh.',
        choices: [
            { id: '2A', type: 'Vàng', text: 'Nhắc nhở nhẹ nhàng: "Gọi tên bạn ấy nghe hay hơn nhiều mà!"', result: 'Một lời nhắc nhở đúng lúc có thể ngăn chặn sự tổn thương.', happinessChange: 10 },
            { id: '2B', type: 'Đỏ', text: 'Hùa theo cười đùa để tỏ ra mình "ngầu".', result: 'Niềm vui của bạn được xây trên nỗi buồn của người khác.', happinessChange: -20 },
        ],
    },
    {
        id: 3,
        description: 'Tùng Lâm A ngồi lủi thủi một mình trong khi cả lớp đang chơi đá cầu.',
        choices: [
            { id: '3A', type: 'Xanh', text: 'Chủ động mời bạn: "Vào chơi cùng đội tớ cho đủ người nè!"', result: 'Sự hòa nhập bắt đầu từ những lời mời đơn giản.', happinessChange: 15 },
            { id: '3B', type: 'Đỏ', text: 'Nghĩ thầm: "Bạn ấy tự kỷ thì kệ bạn ấy thôi."', result: 'Sự thờ ơ cũng là một dạng bạo lực.', happinessChange: -10 },
        ],
    },
    {
        id: 4,
        description: 'Một ảnh chế (meme) xúc phạm Ngọc Khánh bị phát tán trên nhóm chat.',
        choices: [
            { id: '4A', type: 'Vàng', text: 'Nhắn tin yêu cầu gỡ ảnh và không chia sẻ tiếp.', result: 'Dũng cảm đứng ra bảo vệ bạn bè trên không gian mạng.', happinessChange: 20 },
            { id: '4B', type: 'Đỏ', text: 'Ấn "Like" và gửi cho những nhóm bạn khác xem.', result: 'Bạn đang tiếp tay cho hành vi bắt nạt trực tuyến.', happinessChange: -30 },
        ],
    },
    {
        id: 5,
        description: 'Một nhóm bạn ép Minh Anh phải cho chép bài kiểm tra.',
        choices: [
            { id: '5A', type: 'Vàng', text: 'Đề nghị nhóm tự làm và mình sẽ hướng dẫn sau giờ học.', result: 'Giúp đỡ bạn bè đúng cách là cùng nhau tiến bộ.', happinessChange: 10 },
            { id: '5B', type: 'Đỏ', text: 'Ngó lơ vì "không phải việc của mình", để mặc bạn bị ép.', result: 'Im lặng trước cái xấu chính là đồng lõa.', happinessChange: -15 },
        ],
    },
    {
        id: 6,
        description: 'Tùng Lâm B tự ý lấy compa của Đan Lê, Đan Lê tức giận đòi đánh nhau.',
        choices: [
            { id: '6A', type: 'Vàng', text: 'Đứng ra hòa giải, nhắc Tùng Lâm B xin lỗi và trả lại đồ ngay.', result: 'Hòa giải giúp ngăn chặn những xung đột không đáng có.', happinessChange: 15 },
            { id: '6B', type: 'Đỏ', text: 'Cổ vũ: "Đánh đi! Cho nó chừa cái tội lấy trộm."', result: 'Kích động bạo lực sẽ không bao giờ là giải pháp.', happinessChange: -25 },
        ],
    },
    {
        id: 7,
        description: 'Có tin đồn Gia Linh nói xấu giáo viên chủ nhiệm.',
        choices: [
            { id: '7A', type: 'Vàng', text: 'Gặp riêng Gia Linh để xác nhận và khuyên bạn nên gặp cô giải thích.', result: 'Tìm hiểu sự thật trước khi phán xét là biểu hiện của sự trưởng thành.', happinessChange: 10 },
            { id: '7B', type: 'Đỏ', text: 'Đi kể với tất cả các bạn khác để "buôn chuyện".', result: 'Tin đồn thất thiệt có thể gây ra những hậu quả nghiêm trọng.', happinessChange: -20 },
        ],
    },
    {
        id: 8,
        description: 'Anh Dũng, bạn to con nhất lớp, bắt Ngọc Minh đi mua nước hộ.',
        choices: [
            { id: '8A', type: 'Xanh', text: 'Lên tiếng: "Bạn ấy không phải giúp việc, chúng mình tự đi đi."', result: 'Bảo vệ kẻ yếu là hành động của người dũng cảm.', happinessChange: 20 },
            { id: '8B', type: 'Đỏ', text: 'Giả vờ không thấy để tránh bị "vạ lây".', result: 'Sự im lặng của bạn hôm nay có thể là sự bất lực của bạn ngày mai.', happinessChange: -25 },
        ],
    },
    {
        id: 9,
        description: 'Khi làm bài tập lớn, Tiến Mạnh và Phương Linh cãi nhau gay gắt về ý tưởng.',
        choices: [
            { id: '9A', type: 'Vàng', text: 'Đề nghị dừng 2 phút để lắng nghe ý kiến của cả hai bên.', result: 'Lắng nghe và tôn trọng sự khác biệt là chìa khóa của làm việc nhóm.', happinessChange: 15 },
            { id: '9B', type: 'Đỏ', text: 'Đập bàn yêu cầu cả hai im lặng hoặc theo ý mình.', result: 'Áp đặt ý kiến sẽ phá vỡ tinh thần đồng đội.', happinessChange: -15 },
        ],
    },
    {
        id: 10,
        description: 'Tùng Lâm B, người trước đây từng hay đi bắt nạt, muốn làm hòa với lớp.',
        choices: [
            { id: '10A', type: 'Xanh', text: 'Mở lòng và cho bạn ấy cơ hội sửa sai qua một việc tốt.', result: 'Ai cũng xứng đáng có cơ hội thứ hai.', happinessChange: 25 },
            { id: '10B', type: 'Đỏ', text: 'Xua đuổi: "Đồ tồi như bạn không bao giờ thay đổi được đâu."', result: 'Sự định kiến và thù hằn sẽ không làm lớp học tốt đẹp hơn.', happinessChange: -20 },
        ],
    },
];
