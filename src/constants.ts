import { Scenario } from './types';

import { Scenario } from './types';

export const scenarios: Scenario[] = [
  {
    id: 1,
    description: 'Tiến Mạnh vô tình làm đổ nước vào vở của Phương Linh. Phương Linh đang rất giận.',
    choices: [
      {
        id: '1A',
        type: 'Xanh',
        text: 'Nhắc Tiến Mạnh xin lỗi và cùng lau khô vở cho Phương Linh.',
        result: '"Tớ xin lỗi, tớ không cố ý. Để tớ dùng máy sấy làm khô giúp bạn nhé!" - Lớp học thêm gắn kết.',
        happinessChange: 20,
      },
      {
        id: '1B',
        type: 'Đỏ',
        text: 'Nói: "Có quyển vở thôi mà, làm gì căng thế!"',
        result: '"Bạn quá đáng thế! Đã sai còn không biết điều!" - Phương Linh khóc và không khí lớp trở nên căng thẳng.',
        happinessChange: -30,
      },
    ],
  },
  {
    id: 2,
    description: 'Giờ ra chơi, cả nhóm đang chơi đá cầu nhưng không cho Ngọc Minh vào chơi cùng.',
    choices: [
      {
        id: '2A',
        type: 'Vàng',
        text: 'Chủ động mời Ngọc Minh vào: "Càng đông càng vui mà, Ngọc Minh vào làm một đội với tớ!"',
        result: '"Cảm ơn các bạn, tớ cứ tưởng mọi người ghét tớ." - Ngọc Minh cảm thấy được hòa nhập.',
        happinessChange: 20,
      },
      {
        id: '2B',
        type: 'Đỏ',
        text: 'Lờ đi và tiếp tục chơi như không thấy Ngọc Minh.',
        result: 'Ngọc Minh lủi thủi đi về chỗ, cảm thấy bị cô lập và buồn bã.',
        happinessChange: -15,
      },
    ],
  },
  {
    id: 3,
    description: 'Có tin đồn Gia Linh lấy trộm bút của bạn khác. Cả lớp đang xì xào.',
    choices: [
      {
        id: '3A',
        type: 'Vàng',
        text: 'Đề nghị lớp bình tĩnh, hỏi rõ Gia Linh và cùng đi tìm lại cây bút.',
        result: '"Hóa ra bút kẹt trong kẽ bàn. May mà lớp mình không trách lầm Gia Linh." - Sự công bằng được thực thi.',
        happinessChange: 30,
      },
      {
        id: '3B',
        type: 'Đỏ',
        text: 'Hùa theo: "Nhìn Gia Linh hiền thế mà tay chân nhanh nhẹn nhỉ!"',
        result: 'Gia Linh bị tẩy chay, không dám đến trường vào hôm sau. Đây là một hình thức bạo lực tâm lý.',
        happinessChange: -40,
      },
    ],
  },
];
