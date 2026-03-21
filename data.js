const questionBank = [
 {
    id: 1,
    question: "Theo định nghĩa, thiết bị nào sau đây được gọi là 'Cầu trục'?",
    options: [
      "Thiết bị nâng bằng sức người để di chuyển vật nặng.",
      "Thiết bị cơ khí thiết kế để nâng tải và mang tải đi ngang.",
      "Thiết bị chỉ có khả năng nâng hạ tại chỗ.",
      "Bất kỳ phương tiện nào có bánh xe tự hành trên đường."
    ],
    answer: "Thiết bị cơ khí thiết kế để nâng tải và mang tải đi ngang.",
    explain: "Cầu trục dùng động lực để nâng hạ và có khả năng di chuyển vật theo phương ngang."
  },
  {
    id: 2,
    question: "Người vận hành cần trục phải đủ bao nhiêu tuổi trở lên?",
    options: ["16 tuổi", "17 tuổi", "18 tuổi", "20 tuổi"],
    answer: "18 tuổi",
    explain: "Theo luật lao động, người vận hành máy móc có yêu cầu nghiêm ngặt về an toàn phải từ đủ 18 tuổi."
  },
  {
    id: 3,
    question: "Thiết bị nào dùng để ngăn chặn việc nâng quá tải trọng cho phép?",
    options: ["Phanh hãm", "Bộ hạn chế chiều cao nâng", "Bộ hạn chế quá tải", "Công tắc hành trình"],
    answer: "Bộ hạn chế quá tải",
    explain: "Bộ hạn chế quá tải sẽ tự động ngắt truyền động khi tải trọng vượt quá mức cho phép của cần trục."
  },
  {
    id: 4,
    question: "Khi làm việc gần đường dây điện cao thế, khoảng cách an toàn được tính từ đâu?",
    options: ["Từ tâm cần trục", "Từ điểm gần nhất của cần trục hoặc tải đến dây điện", "Từ chân đế cần trục", "Từ cabin điều khiển"],
    answer: "Từ điểm gần nhất của cần trục hoặc tải đến dây điện",
    explain: "Khoảng cách an toàn phải tính từ bộ phận bất kỳ của cần trục hoặc vật nâng có khả năng tiếp cận dây điện gần nhất."
  },
  {
    id: 5,
    question: "Dây cáp thép cần được loại bỏ khi nào?",
    options: ["Khi bị rỉ sét nhẹ", "Khi có một vài sợi nhỏ bị đứt", "Khi số sợi đứt vượt quá quy định hoặc bị biến dạng mắt cáo", "Khi mới sử dụng được 6 tháng"],
    answer: "Khi số sợi đứt vượt quá quy định hoặc bị biến dạng mắt cáo",
    explain: "Cáp biến dạng hoặc đứt quá tỷ lệ cho phép sẽ không đảm bảo hệ số an toàn khi nâng hạ."
  },
  {
    id: 6,
    question: "Tín hiệu 'Dừng khẩn cấp' trong vận hành cần trục do ai thực hiện thì người lái phải tuân theo?",
    options: ["Chỉ người chỉ huy", "Chỉ người buộc móc tải", "Bất kỳ ai nhìn thấy nguy hiểm", "Chủ đầu tư"],
    answer: "Bất kỳ ai nhìn thấy nguy hiểm",
    explain: "Trong an toàn thiết bị nâng, bất kỳ ai phát hiện nguy hiểm đều có quyền ra tín hiệu dừng khẩn cấp."
  },
  {
    id: 7,
    question: "Chiều cao nâng tối thiểu của tải so với chướng ngại vật khi di chuyển ngang là bao nhiêu?",
    options: ["0.2m", "0.5m", "1.0m", "1.5m"],
    answer: "0.5m",
    explain: "Quy định an toàn yêu cầu tải phải cao hơn vật cản ít nhất 0.5m khi di chuyển theo phương ngang."
  },
  {
    id: 8,
    question: "Phanh của cơ cấu nâng hạ phải là loại phanh gì?",
    options: ["Phanh dải", "Phanh thường mở", "Phanh thường đóng", "Phanh tay"],
    answer: "Phanh thường đóng",
    explain: "Phanh thường đóng đảm bảo khi mất điện hoặc có sự cố, phanh sẽ tự động đóng lại để giữ tải."
  },
  {
    id: 9,
    question: "Công dụng của móc cẩu có lẫy an toàn là gì?",
    options: ["Để móc đẹp hơn", "Ngăn dây cáp/xích tuột ra khỏi lòng móc", "Để nâng được nặng hơn", "Để giảm rung động"],
    answer: "Ngăn dây cáp/xích tuột ra khỏi lòng móc",
    explain: "Lẫy an toàn (khóa miệng móc) ngăn chặn tình trạng cáp bị trượt ra ngoài khi dây bị chùng."
  },
  {
    id: 10,
    question: "Khi cần trục đang nâng tải, người lái có được phép rời khỏi cabin không?",
    options: ["Được nếu khóa phanh cẩn thận", "Được nếu chỉ đi trong 5 phút", "Tuyệt đối không được rời vị trí", "Được nếu có người đứng canh"],
    answer: "Tuyệt đối không được rời vị trí",
    explain: "Cấm tuyệt đối việc rời cabin khi tải đang treo trên móc để xử lý kịp thời các tình huống bất ngờ."
  },
 Dưới đây là nội dung tiếp theo từ câu 11 đến câu 40, đã được đồng bộ hóa hoàn toàn theo cấu trúc mới (trường answer lưu nội dung văn bản thay vì chỉ số) để bạn cập nhật vào Tệp 1:

JavaScript
  {
    id: 11,
    question: "Trước khi nâng tải trọng gần bằng tải trọng định mức, người lái phải làm gì?",
    options: [
      "Nâng thẳng lên độ cao cần thiết",
      "Nâng thử lên độ cao 200mm - 300mm để kiểm tra phanh và độ ổn định",
      "Yêu cầu thêm người hỗ trợ",
      "Cho máy chạy nhanh hơn để lấy đà"
    ],
    answer: "Nâng thử lên độ cao 200mm - 300mm để kiểm tra phanh và độ ổn định",
    explain: "Việc nâng thử giúp xác nhận phanh có giữ được tải và máy có bị nghiêng lật hay không trước khi nâng cao."
  },
  {
    id: 12,
    question: "Trong vận hành cần trục, 'tầm với' được định nghĩa là gì?",
    options: [
      "Chiều dài của cần",
      "Khoảng cách từ tâm quay đến tâm móc cẩu theo phương ngang",
      "Chiều cao từ mặt đất đến đỉnh cần",
      "Khoảng cách từ chân đế đến vật nâng"
    ],
    answer: "Khoảng cách từ tâm quay đến tâm móc cẩu theo phương ngang",
    explain: "Tầm với (bán kính làm việc) là thông số quan trọng nhất quyết định tải trọng nâng cho phép."
  },
  {
    id: 13,
    question: "Khi dây cáp bị xoắn hoặc thắt nút, người vận hành nên xử lý thế nào?",
    options: [
      "Tiếp tục làm việc bình thường",
      "Bôi thêm mỡ để dây trơn hơn",
      "Ngừng sử dụng và thay thế hoặc sửa chữa theo tiêu chuẩn",
      "Dùng búa đập cho thẳng lại"
    ],
    answer: "Ngừng sử dụng và thay thế hoặc sửa chữa theo tiêu chuẩn",
    explain: "Cáp bị xoắn hoặc thắt nút làm thay đổi cấu trúc chịu lực, dễ dẫn đến đứt cáp đột ngột."
  },
  {
    id: 14,
    question: "Thiết bị nào sau đây dùng để giới hạn hành trình nâng của móc cẩu?",
    options: ["Bộ hạn chế quá tải", "Bộ hạn chế chiều cao nâng", "Phanh hãm", "Van an toàn"],
    answer: "Bộ hạn chế chiều cao nâng",
    explain: "Thiết bị này ngăn chặn việc móc cẩu va chạm vào đỉnh cần hoặc tang cuốn."
  },
  {
    id: 15,
    question: "Tại sao không được kéo lê tải trọng trên mặt đất bằng cần trục?",
    options: [
      "Vì làm bẩn vật nâng",
      "Vì gây ra lực ngang lớn làm hỏng cần hoặc gây lật máy",
      "Vì tốn nhiên liệu",
      "Vì làm mòn dây cáp"
    ],
    answer: "Vì gây ra lực ngang lớn làm hỏng cần hoặc gây lật máy",
    explain: "Cần trục chỉ được thiết kế để chịu lực thẳng đứng; lực kéo ngang rất dễ làm biến dạng kết cấu thép."
  },
  {
    id: 16,
    question: "Hệ số an toàn của cáp thép dùng cho mục đích nâng hạ hàng hóa thường là bao nhiêu?",
    options: ["Ít nhất là 3", "Ít nhất là 5", "Ít nhất là 10", "Ít nhất là 2"],
    answer: "Ít nhất là 5",
    explain: "Quy chuẩn kỹ thuật thường yêu cầu hệ số an toàn từ 5 đến 6 đối với cáp nâng hàng."
  },
  {
    id: 17,
    question: "Khi làm việc ban đêm, yêu cầu bắt buộc đối với khu vực vận hành là gì?",
    options: [
      "Người lái phải đeo kính râm",
      "Phải có hệ thống chiếu sáng đầy đủ và rõ ràng",
      "Chỉ cần đèn pha của cần trục là đủ",
      "Sử dụng đèn pin cầm tay"
    ],
    answer: "Phải có hệ thống chiếu sáng đầy đủ và rõ ràng",
    explain: "Thiếu ánh sáng là nguyên nhân hàng đầu dẫn đến va chạm và sai sót trong việc móc tải."
  },
  {
    id: 18,
    question: "Loại dầu nào thường được dùng cho hệ thống thủy lực của cần trục?",
    options: ["Dầu động cơ (Diesel)", "Dầu thủy lực chuyên dụng (như ISO VG 46, 68)", "Dầu ăn", "Dầu phanh xe máy"],
    answer: "Dầu thủy lực chuyên dụng (như ISO VG 46, 68)",
    explain: "Dầu thủy lực chuyên dụng có độ nhớt ổn định và khả năng chống mài mòn cho bơm, van."
  },
  {
    id: 19,
    question: "Tiêu chuẩn loại bỏ xích tải khi mắt xích bị mòn bao nhiêu % đường kính?",
    options: ["5%", "10%", "20%", "50%"],
    answer: "10%",
    explain: "Khi độ mòn vượt quá 10% đường kính danh nghĩa, mắt xích không còn đảm bảo khả năng chịu lực."
  },
  {
    id: 20,
    question: "Khi nâng tải, nếu nghe thấy tiếng động lạ từ hộp số hoặc phanh, bạn sẽ làm gì?",
    options: [
      "Cố làm cho xong việc",
      "Tăng ga mạnh hơn để át tiếng động",
      "Dừng máy khẩn cấp, hạ tải xuống và kiểm tra",
      "Kệ nó, cuối ngày mới xem"
    ],
    answer: "Dừng máy khẩn cấp, hạ tải xuống và kiểm tra",
    explain: "Tiếng động lạ thường là dấu hiệu của sự cố cơ khí nghiêm trọng sắp xảy ra."
  },
  {
    id: 21,
    question: "Mục đích của việc lắp đặt các chân chống (Outriggers) trên cần trục bánh lốp là gì?",
    options: [
      "Để nâng máy lên cho cao",
      "Để trang trí",
      "Tăng diện tích chân đế và độ ổn định chống lật",
      "Để giữ cho lốp xe không bị mòn"
    ],
    answer: "Tăng diện tích chân đế và độ ổn định chống lật",
    explain: "Chân chống giúp mở rộng khoảng cách các điểm tựa, giữ trọng tâm máy luôn nằm trong vùng an toàn."
  },
  {
    id: 22,
    question: "Trong bảng tải trọng (Load Chart), khi góc nghiêng của cần càng nhỏ (cần hạ thấp) thì:",
    options: [
      "Tải trọng nâng được càng lớn",
      "Tải trọng nâng được càng nhỏ",
      "Tải trọng không thay đổi",
      "Máy sẽ chạy nhanh hơn"
    ],
    answer: "Tải trọng nâng được càng nhỏ",
    explain: "Góc cần nhỏ đồng nghĩa với tầm với lớn, mô-men lật tăng nên sức nâng cho phép phải giảm xuống."
  },
  {
    id: 23,
    question: "Người buộc móc tải (Signalman) phải đứng ở vị trí nào?",
    options: [
      "Đứng trực tiếp dưới vật nâng",
      "Đứng ở nơi người lái dễ quan sát thấy và ngoài vùng nguy hiểm",
      "Đứng trong cabin cùng người lái",
      "Đứng ở bất cứ đâu họ muốn"
    ],
    answer: "Đứng ở nơi người lái dễ quan sát thấy và ngoài vùng nguy hiểm",
    explain: "Vị trí này đảm bảo thông tin liên lạc thông suốt và an toàn tính mạng cho chính người phát lệnh."
  },
  {
    id: 24,
    question: "Thứ tự các bước khi nâng một vật nặng là gì?",
    options: [
      "Nâng nhanh -> Di chuyển -> Hạ",
      "Kiểm tra tải -> Buộc cáp -> Nâng thử -> Nâng chính thức",
      "Cứ thấy vật là móc vào nâng ngay",
      "Nâng lên cao nhất rồi mới di chuyển"
    ],
    answer: "Kiểm tra tải -> Buộc cáp -> Nâng thử -> Nâng chính thức",
    explain: "Đây là quy trình chuẩn để đảm bảo mọi khâu đều an toàn trước khi di chuyển vật nặng."
  },
  {
    id: 25,
    question: "Nếu bài thi có 30 câu hỏi, học viên cần đạt tối thiểu bao nhiêu câu để vượt qua?",
    options: ["20 câu", "24 câu", "25 câu", "30 câu"],
    answer: "25 câu",
    explain: "Theo quy định mới nhất của nhà trường, ngưỡng đạt là 25/30 câu."
  },
  {
    id: 26,
    question: "Tang cuốn cáp phải có rãnh để làm gì?",
    options: [
      "Để cho đẹp",
      "Để cáp xếp lớp đều, không bị chồng chéo hoặc nghiến cáp",
      "Để làm mát cáp",
      "Để giảm trọng lượng máy"
    ],
    answer: "Để cáp xếp lớp đều, không bị chồng chéo hoặc nghiến cáp",
    explain: "Rãnh giúp hướng cáp đi đúng vị trí, kéo dài tuổi thọ cho dây cáp."
  },
  {
    id: 27,
    question: "Bộ phận 'Puly' trong hệ thống nâng hạ có tác dụng chính là gì?",
    options: [
      "Thay đổi hướng dây cáp và lợi về lực",
      "Chỉ dùng để trang trí",
      "Làm cho dây cáp ngắn lại",
      "Tăng tốc độ nâng hạ"
    ],
    answer: "Thay đổi hướng dây cáp và lợi về lực",
    explain: "Hệ thống puly (palăng) giúp giảm lực kéo cần thiết để nâng vật nặng."
  },
  {
    id: 28,
    question: "Khi làm việc trong môi trường có hóa chất ăn mòn, ta nên dùng loại cáp nào?",
    options: ["Cáp thép đen thông thường", "Cáp mạ kẽm hoặc cáp inox", "Dây thừng nhựa", "Dây đồng"],
    answer: "Cáp mạ kẽm hoặc cáp inox",
    explain: "Lớp mạ hoặc vật liệu inox giúp ngăn chặn quá trình oxy hóa làm hỏng lõi thép bên trong."
  },
  {
    id: 29,
    question: "Áp suất làm việc của hệ thống thủy lực thường được hiển thị qua thiết bị nào?",
    options: ["Nhiệt kế", "Đồng hồ đo áp suất (Pressure Gauge)", "Thước đo dầu", "Đồng hồ tốc độ"],
    answer: "Đồng hồ đo áp suất (Pressure Gauge)",
    explain: "Người lái cần theo dõi đồng hồ áp suất để biết hệ thống có đang quá tải hay bị rò rỉ không."
  },
  {
    id: 30,
    question: "Trước khi bắt đầu ca làm việc, việc đầu tiên người lái cần làm là gì?",
    options: [
      "Leo lên lái ngay",
      "Kiểm tra mức dầu, nước làm mát và các thiết bị an toàn",
      "Đi ăn sáng",
      "Vệ sinh cabin"
    ],
    answer: "Kiểm tra mức dầu, nước làm mát và các thiết bị an toàn",
    explain: "Kiểm tra đầu ca là quy định bắt buộc để phát hiện sớm các hỏng hóc tiềm ẩn."
  },
  {
    id: 31,
    question: "Góc kẹp giữa hai nhánh dây cáp khi buộc tải không nên vượt quá bao nhiêu độ?",
    options: ["45 độ", "90 độ", "120 độ", "150 độ"],
    answer: "90 độ",
    explain: "Góc kẹp quá lớn sẽ làm tăng lực căng trên mỗi nhánh dây cáp một cách khủng khiếp, dễ gây đứt dây."
  },
  {
    id: 32,
    question: "Khi hạ tải trọng xuống mặt đất, người lái phải lưu ý điều gì?",
    options: [
      "Hạ thật nhanh cho xong",
      "Hạ từ từ, đảm bảo nền đất vững và tải không bị nghiêng đổ",
      "Cứ thả rơi tự do",
      "Không cần quan tâm mặt đất"
    ],
    answer: "Hạ từ từ, đảm bảo nền đất vững và tải không bị nghiêng đổ",
    explain: "Đảm bảo tải ổn định trên mặt đất trước khi tháo móc cẩu."
  },
  {
    id: 33,
    question: "Ý nghĩa của màu đỏ trên các nút bấm trong cabin là gì?",
    options: ["Khởi động", "Dừng khẩn cấp hoặc cảnh báo nguy hiểm", "Tăng tốc", "Bật đèn"],
    answer: "Dừng khẩn cấp hoặc cảnh báo nguy hiểm",
    explain: "Màu đỏ theo tiêu chuẩn quốc tế là màu của sự dừng lại hoặc nguy hiểm."
  },
  {
    id: 34,
    question: "Đối với cần trục tháp, việc kiểm tra độ ổn định của nền móng là trách nhiệm của ai?",
    options: ["Chỉ người lái", "Đơn vị thi công và bộ phận kỹ thuật", "Người đi đường", "Bảo vệ công trường"],
    answer: "Đơn vị thi công và bộ phận kỹ thuật",
    explain: "Nền móng cần trục tháp phải được thiết kế và nghiệm thu bởi kỹ sư có chuyên môn."
  },
  {
    id: 35,
    question: "Khi xe đang di chuyển trên đường, cần trục phải ở trạng thái nào?",
    options: [
      "Cần vươn dài ra phía trước",
      "Cần thu gọn, hạ thấp và khóa cố định theo hướng dẫn của nhà sản xuất",
      "Cần quay tự do",
      "Đang treo sẵn tải"
    ],
    answer: "Cần thu gọn, hạ thấp và khóa cố định theo hướng dẫn của nhà sản xuất",
    explain: "Đảm bảo chiều cao tĩnh không và trọng tâm xe ổn định khi tham gia giao thông."
  },
  {
    id: 36,
    question: "Phanh thường đóng mở ra khi nào?",
    options: [
      "Khi người lái đạp phanh",
      "Khi cơ cấu được cấp năng lượng (điện hoặc thủy lực) để hoạt động",
      "Khi máy bị hỏng",
      "Luôn luôn mở"
    ],
    answer: "Khi cơ cấu được cấp năng lượng (điện hoặc thủy lực) để hoạt động",
    explain: "Đây là cơ chế an toàn: có năng lượng mới cho phép chuyển động, mất năng lượng sẽ tự động dừng."
  },
  {
    id: 37,
    question: "Khái niệm 'Quá tải' xảy ra khi nào?",
    options: [
      "Khi vật nâng nặng hơn trọng lượng xe",
      "Khi mô-men tải lớn hơn mô-men giữ của xe",
      "Khi nâng vật nặng hơn tải trọng cho phép ở tầm với tương ứng",
      "Cả B và C đều đúng"
    ],
    answer: "Cả B và C đều đúng",
    explain: "Quá tải không chỉ phụ thuộc vào cân nặng vật mà còn phụ thuộc vào khoảng cách (tầm với)."
  },
  {
    id: 38,
    question: "Tiếng còi dài khi vận hành cần trục thường có nghĩa là:",
    options: ["Chào hỏi", "Bắt đầu thực hiện một thao tác hoặc cảnh báo di chuyển", "Yêu cầu nghỉ giải lao", "Kết thúc ca làm việc"],
    answer: "Bắt đầu thực hiện một thao tác hoặc cảnh báo di chuyển",
    explain: "Tín hiệu còi giúp người xung quanh chú ý để tránh xa khu vực máy sắp hoạt động."
  },
  {
    id: 39,
    question: "Cần trục tự hành bánh xích có ưu điểm gì so với bánh lốp?",
    options: [
      "Chạy nhanh hơn trên đường nhựa",
      "Khả năng di chuyển trên nền đất yếu, sình lầy tốt hơn",
      "Rẻ tiền hơn",
      "Nhẹ hơn"
    ],
    answer: "Khả năng di chuyển trên nền đất yếu, sình lầy tốt hơn",
    explain: "Diện tích tiếp xúc của xích lớn giúp áp suất xuống nền đất thấp, phù hợp mặt bằng công trường chưa hoàn thiện."
  },
  {
    id: 40,
    question: "Mỡ bôi trơn dây cáp có tác dụng gì?",
    options: [
      "Giảm ma sát giữa các sợi thép và chống rỉ sét",
      "Làm dây cáp đẹp hơn",
      "Làm tăng trọng lượng cáp",
      "Giúp người lái dễ cầm dây cáp"
    ],
    answer: "Giảm ma sát giữa các sợi thép và chống rỉ sét",
    explain: "Lõi cáp thường có lõi tẩm dầu để bôi trơn từ trong ra ngoài, giảm hao mòn do cọ xát."
  },
 {
    id: 41,
    question: "Khi phát hiện móc cẩu bị nứt, phương pháp sửa chữa nào sau đây được phép?",
    options: [
      "Hàn đắp vết nứt rồi mài phẳng",
      "Nung nóng rồi rèn lại",
      "Tuyệt đối không được hàn sửa chữa, phải thay mới",
      "Dùng keo dán sắt chuyên dụng"
    ],
    answer: "Tuyệt đối không được hàn sửa chữa, phải thay mới",
    explain: "Việc hàn nhiệt làm thay đổi cấu trúc tinh thể thép, gây giòn và dễ gãy đột ngột dưới tải trọng."
  },
  {
    id: 42,
    question: "Bộ phận nào có tác dụng giữ vật nâng ở một độ cao nhất định khi ngừng cấp điện?",
    options: ["Cáp thép", "Phanh (Thắng)", "Tang cuốn", "Động cơ"],
    answer: "Phanh (Thắng)",
    explain: "Phanh thường đóng sẽ tự động siết chặt khi mất điện để giữ vật không bị rơi tự do."
  },
  {
    id: 43,
    question: "Khi cần trục đang làm việc, người không có nhiệm vụ có được đứng trong bán kính quay không?",
    options: [
      "Được, nếu có đội mũ bảo hiểm",
      "Được, nếu đứng cách xa vật nâng 2m",
      "Tuyệt đối không được vào vùng bán kính quay của cần",
      "Được, nếu là cán bộ quản lý"
    ],
    answer: "Tuyệt đối không được vào vùng bán kính quay của cần",
    explain: "Tránh nguy cơ bị đuôi máy va đập hoặc vật nâng văng trúng khi máy xoay."
  },
  {
    id: 44,
    question: "Sức nâng của cần trục thay đổi như thế nào khi tăng tầm với (vươn cần ra xa)?",
    options: ["Sức nâng tăng lên", "Sức nâng giảm xuống", "Sức nâng không đổi", "Tùy thuộc vào người lái"],
    answer: "Sức nâng giảm xuống",
    explain: "Tầm với càng lớn thì mô-men lật càng lớn, do đó sức nâng cho phép phải giảm để đảm bảo ổn định."
  },
  {
    id: 45,
    question: "Khi nâng một vật dễ vỡ hoặc sắc nhọn bằng dây cáp, ta cần làm gì?",
    options: [
      "Dùng thêm nhiều dây cáp hơn",
      "Nâng thật nhanh",
      "Dùng vật lót (đệm) giữa dây cáp và cạnh sắc của vật",
      "Sơn màu đỏ vào dây cáp"
    ],
    answer: "Dùng vật lót (đệm) giữa dây cáp và cạnh sắc của vật",
    explain: "Vật lót giúp bảo vệ cáp không bị cứa đứt và bảo vệ bề mặt vật nâng không bị hư hại."
  },
  {
    id: 46,
    question: "Thời hạn kiểm định định kỳ đối với cần trục thông thường là bao lâu?",
    options: ["3 tháng/lần", "6 tháng/lần", "1 năm hoặc 2 năm/lần tùy tình trạng và quy định", "5 năm/lần"],
    answer: "1 năm hoặc 2 năm/lần tùy tình trạng và quy định",
    explain: "Theo quy định an toàn thiết bị nâng, kiểm định định kỳ thường là 1-2 năm tùy vào thời gian sử dụng."
  },
  {
    id: 47,
    question: "Thiết bị 'Chân chống' (Outriggers) phải được đặt trên nền như thế nào?",
    options: [
      "Đặt trực tiếp xuống bùn",
      "Đặt trên nền cứng hoặc có tấm lót đủ diện tích chịu lực",
      "Đặt nghiêng cũng được",
      "Chỉ cần 2 chân chạm đất là đủ"
    ],
    answer: "Đặt trên nền cứng hoặc có tấm lót đủ diện tích chịu lực",
    explain: "Để tránh lún cục bộ dẫn đến lật máy khi đang có tải."
  },
  {
    id: 48,
    question: "Ký hiệu 'SWL' (Safe Working Load) ghi trên cần trục có ý nghĩa gì?",
    options: ["Tốc độ nâng an toàn", "Trọng lượng của máy", "Tải trọng làm việc an toàn", "Chiều cao nâng tối đa"],
    answer: "Tải trọng làm việc an toàn",
    explain: "Đây là mức tải lớn nhất mà thiết bị được phép nâng ở điều kiện cụ thể."
  },
  {
    id: 49,
    question: "Tại sao không được dùng cần trục để nhổ gốc cây hoặc vật bị chôn dưới đất?",
    options: [
      "Vì làm bẩn cần trục",
      "Vì không xác định được lực cản, dễ gây quá tải đột ngột và đứt cáp/lật máy",
      "Vì tốn dầu",
      "Vì gốc cây quá nặng"
    ],
    answer: "Vì không xác định được lực cản, dễ gây quá tải đột ngột và đứt cáp/lật máy",
    explain: "Lực mút của đất và rễ cây có thể tạo ra lực cản lớn gấp nhiều lần tải trọng cho phép của máy."
  },
  {
    id: 50,
    question: "Khi di chuyển cần trục ô tô từ công trường này sang công trường khác, người lái phải:",
    options: [
      "Để nguyên trạng thái làm việc để đi cho nhanh",
      "Thu chân chống, hạ cần, cố định móc cẩu theo đúng tư thế hành trình",
      "Cứ chạy thoải mái vì xe có bánh lốp",
      "Nhờ xe khác kéo đi"
    ],
    answer: "Thu chân chống, hạ cần, cố định móc cẩu theo đúng tư thế hành trình",
    explain: "Đảm bảo an toàn giao thông và tránh hư hỏng kết cấu do rung lắc khi di chuyển."
  },
  {
    id: 51,
    question: "Trong hệ thống thủy lực, van an toàn có tác dụng gì?",
    options: [
      "Để xả dầu ra ngoài đất",
      "Giới hạn áp suất tối đa, bảo vệ các bộ phận không bị nổ vỡ khi quá tải",
      "Làm dầu chảy nhanh hơn",
      "Lọc sạch cặn bẩn trong dầu"
    ],
    answer: "Giới hạn áp suất tối đa, bảo vệ các bộ phận không bị nổ vỡ khi quá tải",
    explain: "Khi áp suất vượt mức cài đặt, van sẽ mở để đưa dầu về thùng chứa, tránh hỏng hệ thống."
  },
  {
    id: 52,
    question: "Người lái cần trục có được phép nâng vật khi dây cáp đang bị xiên (không thẳng đứng) không?",
    options: [
      "Được, nếu vật nhẹ",
      "Không được, vì sẽ gây rung lắc và lực ngang làm hỏng cần",
      "Được, nếu có người đẩy giúp",
      "Được, nếu nâng thật chậm"
    ],
    answer: "Không được, vì sẽ gây rung lắc và lực ngang làm hỏng cần",
    explain: "Nâng xiên tạo ra thành phần lực ngang cực kỳ nguy hiểm cho kết cấu thép của cần."
  },
  {
    id: 53,
    question: "Khi thấy người chỉ huy ra hiệu bằng cách nắm chặt bàn tay và đưa lên cao, nghĩa là:",
    options: ["Cho máy chạy nhanh", "Tạm dừng mọi thao tác", "Dừng khẩn cấp", "Nâng tải từ từ"],
    answer: "Tạm dừng mọi thao tác",
    explain: "Đây là ký hiệu tay cơ bản trong quy chuẩn thông tin liên lạc vận hành cần trục."
  },
  {
    id: 54,
    question: "Tại sao phải kiểm tra bình ắc quy hàng ngày?",
    options: [
      "Để xem có bị mất trộm không",
      "Đảm bảo đủ điện năng khởi động và hoạt động của các thiết bị an toàn điện tử",
      "Để lau cho sạch",
      "Để kiểm tra xem bình có nặng không"
    ],
    answer: "Đảm bảo đủ điện năng khởi động và hoạt động của các thiết bị an toàn điện tử",
    explain: "Ắc quy yếu có thể khiến hệ thống cảnh báo hoặc điều khiển điện tử hoạt động sai lệch."
  },
  {
    id: 55,
    question: "Khi làm việc ở khu vực có gió mạnh vượt quá cấp cho phép, người lái nên:",
    options: [
      "Hạ tải, quay cần về hướng xuôi gió và ngừng làm việc",
      "Cố gắng làm nhanh để nghỉ sớm",
      "Nâng vật nặng hơn để gió không thổi bay",
      "Treo thêm vật nặng vào chân máy"
    ],
    answer: "Hạ tải, quay cần về hướng xuôi gió và ngừng làm việc",
    explain: "Gió mạnh tạo ra áp lực lớn lên diện tích bề mặt cần và vật nâng, dễ gây lật máy."
  },
  {
    id: 56,
    question: "Độ võng của cần trục (đối với cầu trục) được kiểm tra khi nào?",
    options: ["Khi không có tải", "Khi nâng tải định mức và đặt ở giữa nhịp", "Khi đang di chuyển", "Khi mới mua về"],
    answer: "Khi nâng tải định mức và đặt ở giữa nhịp",
    explain: "Kiểm tra độ võng để đánh giá độ cứng vững và biến dạng đàn hồi của kết cấu thép."
  },
  {
    id: 57,
    question: "Khi thay cáp mới, ta phải lưu ý điều gì quan trọng nhất?",
    options: [
      "Màu sắc của cáp",
      "Đúng chủng loại, đường kính và khả năng chịu tải theo thiết kế của máy",
      "Cáp càng dài càng tốt",
      "Cáp càng rẻ càng tốt"
    ],
    answer: "Đúng chủng loại, đường kính và khả năng chịu tải theo thiết kế của máy",
    explain: "Sử dụng sai loại cáp có thể không khớp với rãnh tang/puly hoặc không đủ hệ số an toàn."
  },
  {
    id: 58,
    question: "Chức năng của bộ phận 'đối trọng' (Counterweight) là gì?",
    options: [
      "Làm cho máy nặng hơn để bám đường",
      "Cân bằng mô-men tải, giúp máy không bị lật về phía trước",
      "Dùng để chứa đồ nghề",
      "Để che chắn động cơ"
    ],
    answer: "Cân bằng mô-men tải, giúp máy không bị lật về phía trước",
    explain: "Đối trọng tạo ra mô-men giữ ngược lại với mô-men do vật nâng tạo ra."
  },
  {
    id: 59,
    question: "Phanh cơ cấu nâng hạ bị trượt (tải bị trôi) nguyên nhân thường do đâu?",
    options: [
      "Do tải quá nhẹ",
      "Do má phanh bị mòn, dính dầu mỡ hoặc lò xo phanh bị yếu",
      "Do người lái đạp mạnh",
      "Do trời quá nắng"
    ],
    answer: "Do má phanh bị mòn, dính dầu mỡ hoặc lò xo phanh bị yếu",
    explain: "Ma sát không đủ hoặc lực ép lò xo yếu sẽ không giữ được tang quay dưới sức nặng của tải."
  },
  {
    id: 60,
    question: "Khi nâng tải lên cao, dây cáp trên tang cuốn phải còn lại ít nhất bao nhiêu vòng?",
    options: ["1 vòng", "2 vòng", "Ít nhất từ 3 đến 5 vòng", "Không cần vòng nào"],
    answer: "Ít nhất từ 3 đến 5 vòng",
    explain: "Để lực ma sát giữa cáp và tang cuốn giữ chặt đầu cáp, không làm tuột mối nối cáp vào tang."
  },
  {
    id: 61,
    question: "Ký hiệu 'LMI' (Load Moment Indicator) trên các dòng cần trục hiện đại là gì?",
    options: [
      "Đồng hồ tốc độ xe",
      "Hệ thống báo quá tải và hiển thị thông số nâng hạ",
      "Hệ thống định vị GPS",
      "Đài nghe nhạc"
    ],
    answer: "Hệ thống báo quá tải và hiển thị thông số nâng hạ",
    explain: "LMI giúp người lái biết chính xác tải trọng đang nâng, bán kính và giới hạn an toàn."
  },
  {
    id: 62,
    question: "Khi làm việc gần mép hố đào, khoảng cách an toàn phụ thuộc vào yếu tố nào?",
    options: [
      "Độ sâu của hố và loại đất",
      "Sở thích của người lái",
      "Màu sắc của máy",
      "Thời gian đào hố"
    ],
    answer: "Độ sâu của hố và loại đất",
    explain: "Nền đất gần mép hố rất dễ bị sạt lở dưới áp lực cực lớn từ chân chống cần trục."
  },
  {
    id: 63,
    question: "Khi đang nâng tải mà mất điện đột ngột, người lái cần làm gì đầu tiên?",
    options: [
      "Bỏ cabin chạy ra ngoài",
      "Đưa tay điều khiển về vị trí trung gian (số 0) và chờ tải hạ từ từ bằng phanh phụ (nếu có)",
      "Cố gắng quay cabin",
      "Nhảy xuống đất tìm nguồn điện"
    ],
    answer: "Đưa tay điều khiển về vị trí trung gian (số 0) và chờ tải hạ từ từ bằng phanh phụ (nếu có)",
    explain: "Đưa về số 0 để tránh máy tự hoạt động bất ngờ khi có điện trở lại."
  },
  {
    id: 64,
    question: "Dầu động cơ nên được thay thế dựa trên tiêu chí nào?",
    options: [
      "Khi thấy dầu đổi màu đen",
      "Theo số giờ hoạt động (thường 250h-500h) hoặc định kỳ theo hướng dẫn",
      "Khi máy không nổ được",
      "Khi hết dầu"
    ],
    answer: "Theo số giờ hoạt động (thường 250h-500h) hoặc định kỳ theo hướng dẫn",
    explain: "Thay dầu định kỳ giúp bảo vệ các chi tiết bên trong động cơ khỏi mài mòn và cặn bẩn."
  },
  {
    id: 65,
    question: "Tiêu chuẩn loại bỏ móc cẩu khi độ biến dạng (độ hở) miệng móc vượt quá bao nhiêu %?",
    options: ["5%", "10%", "15%", "25%"],
    answer: "10%",
    explain: "Khi miệng móc bị choãi ra quá 10% so với kích thước ban đầu, cấu trúc thép đã bị mỏi và yếu."
  },
  {
    id: 66,
    question: "Trong bài thi, hành vi nào dưới đây bị coi là vi phạm an toàn nghiêm trọng?",
    options: [
      "Lái máy khi chưa có chứng chỉ vận hành",
      "Nâng quá tải trọng quy định",
      "Để người đứng dưới vật nâng",
      "Tất cả các đáp án trên"
    ],
    answer: "Tất cả các đáp án trên",
    explain: "Đây đều là các lỗi gây nguy hiểm trực tiếp đến tính mạng và tài sản."
  },
  {
    id: 67,
    question: "Sự khác biệt giữa 'Cần trục' và 'Cổng trục' là gì?",
    options: [
      "Cần trục có cần dài, cổng trục chạy trên đường ray có hình dáng như cái cổng",
      "Không có gì khác nhau",
      "Cổng trục chỉ dùng trong nhà",
      "Cần trục chỉ dùng ngoài trời"
    ],
    answer: "Cần trục có cần dài, cổng trục chạy trên đường ray có hình dáng như cái cổng",
    explain: "Đây là cách phân loại dựa trên hình dáng và kết cấu khung của thiết bị."
  },
  {
    id: 68,
    question: "Khi nâng vật nặng, việc 'nháy' (nhấp) tay điều khiển liên tục có hại gì?",
    options: [
      "Làm máy chạy nhanh hơn",
      "Gây xung lực lớn làm hại kết cấu máy và làm vật nâng bị rung lắc mạnh",
      "Tiết kiệm điện/dầu",
      "Không có hại gì"
    ],
    answer: "Gây xung lực lớn làm hại kết cấu máy và làm vật nâng bị rung lắc mạnh",
    explain: "Thao tác cần êm thuận để tránh các lực quán tính đột ngột gây đứt cáp hoặc hỏng hộp số."
  },
  {
    id: 69,
    question: "Lọc dầu thủy lực bị tắc sẽ dẫn đến hiện tượng gì?",
    options: [
      "Máy chạy nhanh hơn",
      "Áp suất giảm, các cơ cấu hoạt động yếu hoặc bị giật",
      "Động cơ bị nóng",
      "Không ảnh hưởng gì"
    ],
    answer: "Áp suất giảm, các cơ cấu hoạt động yếu hoặc bị giật",
    explain: "Dầu không qua được lọc làm thiếu hụt lưu lượng cung cấp cho bơm và các xilanh."
  },
  {
    id: 70,
    question: "Người lái cần trục có cần biết về sơ cứu điện giật không?",
    options: [
      "Không cần, đó là việc của bác sĩ",
      "Rất cần thiết để xử lý tình huống khẩn cấp tại công trường",
      "Chỉ cần biết lái máy là đủ",
      "Chỉ cần biết cách gọi điện thoại"
    ],
    answer: "Rất cần thiết để xử lý tình huống khẩn cấp tại công trường",
    explain: "Kỹ năng sơ cứu là bắt buộc đối với công nhân làm việc trong môi trường có rủi ro về điện."
  },
  {
    id: 71,
    question: "Khi vận hành cần trục bánh lốp, tại sao phải gài phanh chân (phanh hành trình)?",
    options: ["Để tiết kiệm dầu", "Để cố định xe, tránh xe bị trôi tự do khi đang nâng hạ", "Để làm mát lốp xe", "Để tăng tốc độ quay cần"],
    answer: "Để cố định xe, tránh xe bị trôi tự do khi đang nâng hạ",
    explain: "Phanh chân giúp giữ xe đứng yên tại chỗ, đảm bảo an toàn tuyệt đối khi cơ cấu nâng làm việc."
  },
  {
    id: 72,
    question: "Thiết bị nào dùng để đo độ nghiêng của xe cần trục?",
    options: ["Tốc kế", "Thước thủy hoặc đồng hồ đo độ nghiêng (Level Indicator)", "Đồng hồ áp suất", "Nhiệt kế"],
    answer: "Thước thủy hoặc đồng hồ đo độ nghiêng (Level Indicator)",
    explain: "Xe phải đảm bảo độ thăng bằng theo quy định thì mới được phép nâng tải."
  },
  {
    id: 73,
    question: "Khi dây cáp thép bị 'nổ' (bung các sợi cáp), nguyên nhân thường do đâu?",
    options: ["Do cáp quá mới", "Do nâng quá tải hoặc va đập đột ngột", "Do bôi quá nhiều mỡ", "Do nhiệt độ ngoài trời thấp"],
    answer: "Do nâng quá tải hoặc va đập đột ngột",
    explain: "Lực căng quá mức làm đứt gãy cấu trúc xoắn của các sợi thép thành phần."
  },
  {
    id: 74,
    question: "Người lái có được phép dùng cơ cấu quay để kéo lê tải không?",
    options: ["Được, nếu vật nhẹ", "Tuyệt đối không, vì gây lực uốn ngang làm gãy cần", "Được, nếu có người đẩy hộ", "Được, nếu quay thật chậm"],
    answer: "Tuyệt đối không, vì gây lực uốn ngang làm gãy cần",
    explain: "Cần trục chỉ chịu lực tốt theo phương thẳng đứng, lực ngang rất dễ gây sự cố kết cấu."
  },
  {
    id: 75,
    question: "Ký hiệu 'Pmax' trong hệ thống thủy lực nghĩa là gì?",
    options: ["Áp suất thấp nhất", "Áp suất làm việc tối đa cho phép", "Tốc độ tối đa", "Nhiệt độ tối đa"],
    answer: "Áp suất làm việc tối đa cho phép",
    explain: "Đây là giới hạn áp suất mà hệ thống có thể chịu đựng an toàn trước khi van an toàn mở."
  },
  {
    id: 76,
    question: "Tại sao phải kiểm tra các mối nối điện trên cần trục điện/cầu trục?",
    options: ["Để tránh rò rỉ điện gây giật và tránh move gây cháy nổ", "Để cho đẹp", "Để dây điện không bị rối", "Để tăng công suất motor"],
    answer: "Để tránh rò rỉ điện gây giật và tránh move gây cháy nổ",
    explain: "Mối nối lỏng lẻo phát sinh nhiệt cao và nguy cơ phóng điện cực kỳ nguy hiểm."
  },
  {
    id: 77,
    question: "Khi làm việc ở môi trường bụi bẩn, lọc gió động cơ nên được làm sạch khi nào?",
    options: ["1 năm một lần", "Hàng ngày hoặc theo đèn báo tắc lọc", "Khi máy hỏng", "Khi không thấy bụi nữa"],
    answer: "Hàng ngày hoặc theo đèn báo tắc lọc",
    explain: "Lọc gió sạch giúp động cơ đủ oxy để cháy hoàn toàn, tăng tuổi thọ máy."
  },
  {
    id: 78,
    question: "Trong ca làm việc, nếu phát hiện có người lạ leo lên thân máy, người lái phải làm gì?",
    options: ["Tiếp tục làm việc", "Dừng máy ngay lập tức và yêu cầu người đó xuống vùng an toàn", "Mặc kệ họ", "Lái nhanh hơn để họ sợ"],
    answer: "Dừng máy ngay lập tức và yêu cầu người đó xuống vùng an toàn",
    explain: "Đảm bảo không có người ở vị trí nguy hiểm là trách nhiệm hàng đầu của người lái."
  },
  {
    id: 79,
    question: "Bộ phận 'Tang cuốn cáp' bị mòn rãnh quá mức sẽ gây tác hại gì?",
    options: ["Làm cáp nhanh đứt", "Làm cáp bị chồng chéo, xoắn rối và nhanh mòn", "Làm máy chạy chậm", "Không có tác hại gì"],
    answer: "Làm cáp bị chồng chéo, xoắn rối và nhanh mòn",
    explain: "Rãnh tang định hướng cáp, nếu hỏng sẽ khiến cáp không xếp lớp đều được."
  },
  {
    id: 80,
    question: "Khi sử dụng hai cần trục để cùng nâng một vật nặng, yêu cầu quan trọng nhất là gì?",
    options: ["Hai máy phải cùng màu", "Phải có phương án nâng hạ (lifting plan) và người chỉ huy thống nhất", "Hai máy phải chạy cùng tốc độ", "Không cần yêu cầu gì"],
    answer: "Phải có phương án nâng hạ (lifting plan) và người chỉ huy thống nhất",
    explain: "Nâng hạ phối hợp là thao tác phức tạp, cần tính toán kỹ tải trọng phân bổ lên mỗi máy."
  },
  {
    id: 81,
    question: "Vì sao không được đứng dưới tải đang treo?",
    options: ["Vì bị che bóng mát", "Vì nguy cơ rơi tải do đứt cáp hoặc hỏng phanh đột ngột", "Vì làm vướng mắt người lái", "Vì quy định đứng đó sẽ bị phạt"],
    answer: "Vì nguy cơ rơi tải do đứt cáp hoặc hỏng phanh đột ngột",
    explain: "An toàn tính mạng là ưu tiên số 1, vùng dưới vật nâng là vùng tử thần."
  },
  {
    id: 82,
    question: "Trước khi vận hành máy sau một thời gian dài nghỉ (ví dụ sau Tết), cần làm gì?",
    options: ["Lái ngay", "Kiểm tra toàn diện, thay dầu nếu cần và vận hành thử không tải", "Chỉ cần đổ đầy dầu", "Nhờ người khác lái thử"],
    answer: "Kiểm tra toàn diện, thay dầu nếu cần và vận hành thử không tải",
    explain: "Thời gian nghỉ dài có thể làm dầu biến chất hoặc các chi tiết bị rỉ sét, kẹt cứng."
  },
  {
    id: 83,
    question: "Mục đích của việc nối đất (tiếp địa) cho cần trục điện là gì?",
    options: ["Để dẫn điện tốt hơn", "Để bảo vệ người vận hành khỏi bị điện giật khi có rò rỉ điện ra vỏ máy", "Để máy chạy khỏe hơn", "Để chống sét"],
    answer: "Để bảo vệ người vận hành khỏi bị điện giật khi có rò rỉ điện ra vỏ máy",
    explain: "Dòng điện rò sẽ theo dây tiếp địa đi xuống đất thay vì đi qua cơ thể người."
  },
  {
    id: 84,
    question: "Tại sao khi nâng tải không được để cáp bị trùng trên tang?",
    options: ["Để đỡ tốn cáp", "Tránh việc cáp bị nhảy ra khỏi rãnh tang hoặc bị dập cáp khi căng lại", "Để nâng được cao hơn", "Để máy không bị rung"],
    answer: "Tránh việc cáp bị nhảy ra khỏi rãnh tang hoặc bị dập cáp khi căng lại",
    explain: "Cáp trùng dễ gây ra hiện tượng giật mạnh khi bắt đầu chịu tải, gây đứt cáp đột ngột."
  },
  {
    id: 85,
    question: "Chứng chỉ vận hành cần trục có thời hạn bao lâu?",
    options: ["Vĩnh viễn", "Theo quy định của cơ sở đào tạo và pháp luật hiện hành", "1 năm", "5 năm"],
    answer: "Theo quy định của cơ sở đào tạo và pháp luật hiện hành",
    explain: "Người vận hành cần cập nhật kiến thức an toàn định kỳ để duy trì hiệu lực của chứng chỉ."
  },
  {
    id: 86,
    question: "Khi thấy cáp có hiện tượng bị 'thắt nút', người lái phải làm gì?",
    options: ["Dùng búa đập phẳng", "Loại bỏ đoạn cáp đó hoặc thay cáp mới", "Tiếp tục dùng", "Bôi thêm mỡ"],
    answer: "Loại bỏ đoạn cáp đó hoặc thay cáp mới",
    explain: "Cáp thắt nút đã mất đi khả năng chịu lực thiết kế ban đầu."
  },
  {
    id: 87,
    question: "Ý nghĩa của biển báo hình tam giác viền đỏ, nền vàng có hình cần trục lật?",
    options: ["Biển báo cấm", "Biển báo nguy hiểm, cảnh báo khu vực máy có nguy cơ lật", "Biển chỉ dẫn đường đi", "Biển báo hết giờ làm"],
    answer: "Biển báo nguy hiểm, cảnh báo khu vực máy có nguy cơ lật",
    explain: "Cảnh báo người vận hành và người xung quanh về rủi ro mất ổn định của thiết bị."
  },
  {
    id: 88,
    question: "Bộ phận nào trên cần trục dùng để thay đổi độ dài của cần (với cần ống lồng)?",
    options: ["Xilanh nâng cần", "Xilanh ra vào cần (Telescoping cylinder)", "Motor quay", "Tời nâng"],
    answer: "Xilanh ra vào cần (Telescoping cylinder)",
    explain: "Xilanh này điều khiển các đoạn cần thò ra hoặc thu vào để thay đổi tầm với."
  },
  {
    id: 89,
    question: "Khi bánh xe của cầu trục bị trượt trên ray, nguyên nhân có thể do:",
    options: ["Ray bị dính dầu mỡ hoặc tải trọng lệch", "Máy quá nặng", "Người lái lái nhanh", "Trời nắng"],
    answer: "Ray bị dính dầu mỡ hoặc tải trọng lệch",
    explain: "Ma sát giữa bánh xe và ray giảm khiến bánh xe xoay tại chỗ không di chuyển được."
  },
  {
    id: 90,
    question: "Tại sao phải để tải cách mặt đất 200-300mm khi bắt đầu nâng?",
    options: ["Để ngắm cho đẹp", "Để kiểm tra độ an toàn của phanh và dây buộc", "Để tiết kiệm điện", "Để chờ người chỉ huy"],
    answer: "Để kiểm tra độ an toàn của phanh và dây buộc",
    explain: "Nếu có sự cố (trôi tải), khoảng cách thấp sẽ giảm thiểu thiệt hại."
  },
  {
    id: 91,
    question: "Thao tác nào sau đây bị cấm khi máy đang hoạt động?",
    options: ["Lắng nghe tiếng động cơ", "Tra mỡ bôi trơn vào các bộ phận chuyển động", "Nhìn đồng hồ báo", "Điều chỉnh ghế lái"],
    answer: "Tra mỡ bôi trơn vào các bộ phận chuyển động",
    explain: "Cấm tuyệt đối việc bảo trì, sửa chữa khi máy đang chuyển động để tránh tai nạn cuốn người."
  },
  {
    id: 92,
    question: "Bộ phận 'Cabin' của cần trục tháp có thể di chuyển như thế nào?",
    options: ["Đứng yên", "Quay cùng với cần (với cần trục tháp quay đỉnh)", "Lên xuống dọc thân máy", "Chỉ di chuyển ngang"],
    answer: "Quay cùng với cần (với cần trục tháp quay đỉnh)",
    explain: "Giúp người lái luôn quan sát trực diện được vật nâng."
  },
  {
    id: 93,
    question: "Khi thấy người chỉ huy đưa hai tay sang ngang rồi gập về phía ngực, nghĩa là:",
    options: ["Cho máy chạy tới", "Thu cần lại", "Nâng tải lên", "Dừng máy"],
    answer: "Thu cần lại",
    explain: "Đây là tín hiệu tay yêu cầu giảm tầm với bằng cách thu cần ống lồng."
  },
  {
    id: 94,
    question: "Ưu điểm của động cơ Diesel trên cần trục tự hành là gì?",
    options: ["Sạch sẽ", "Mô-men xoắn lớn, hoạt động bền bỉ ở cường độ cao", "Không gây tiếng ồn", "Rẻ hơn động cơ xăng"],
    answer: "Mô-men xoắn lớn, hoạt động bền bỉ ở cường độ cao",
    explain: "Phù hợp với các thiết bị hạng nặng cần sức kéo lớn."
  },
  {
    id: 95,
    question: "Khi di chuyển dưới đường dây điện, chiều cao của cần phải cách dây ít nhất bao nhiêu (với dây 110kV)?",
    options: ["1m", "4m", "10m", "20m"],
    answer: "4m",
    explain: "Phải giữ khoảng cách an toàn phóng điện theo quy định của ngành điện lực."
  },
  {
    id: 96,
    question: "Thiết bị 'Chốt an toàn' trên các trục liên kết có tác dụng gì?",
    options: ["Để máy không bị rung", "Ngăn chặn các trục/chốt bị rơi ra ngoài trong quá trình làm việc", "Để đánh dấu", "Để tra mỡ"],
    answer: "Ngăn chặn các trục/chốt bị rơi ra ngoài trong quá trình làm việc",
    explain: "Rơi chốt liên kết có thể dẫn đến đổ cần hoặc rơi bộ phận máy."
  },
  {
    id: 97,
    question: "Tại sao phải xả nước ở bình chứa khí nén (nếu có)?",
    options: ["Để bình nhẹ hơn", "Tránh han rỉ bình và làm hỏng các van điều khiển bằng khí nén", "Để lấy nước rửa tay", "Để tăng áp suất khí"],
    answer: "Tránh han rỉ bình và làm hỏng các van điều khiển bằng khí nén",
    explain: "Hơi nước ngưng tụ lâu ngày gây oxy hóa và kẹt các van khí nén."
  },
  {
    id: 98,
    question: "Trong điều kiện sương mù dày đặc, tầm nhìn bị hạn chế, người lái nên:",
    options: ["Bật đèn pha và làm bình thường", "Ngừng vận hành cho đến khi tầm nhìn đảm bảo an toàn", "Vừa làm vừa bóp còi", "Nhờ người đứng dưới đất chỉ đường bằng giọng nói"],
    answer: "Ngừng vận hành cho đến khi tầm nhìn đảm bảo an toàn",
    explain: "Khi không quan sát rõ tải và xung quanh, nguy cơ va chạm là cực kỳ cao."
  },
  {
    id: 99,
    question: "Khi kết thúc ca làm việc, móc cẩu nên được đặt ở đâu?",
    options: ["Thả nằm sát mặt đất", "Nâng lên cao, thu cần lại và khóa các cơ cấu điều khiển", "Cứ để lơ lửng trên không", "Móc vào một vật nặng"],
    answer: "Nâng lên cao, thu cần lại và khóa các cơ cấu điều khiển",
    explain: "Vị trí này giúp tránh va chạm với người/phương tiện di chuyển bên dưới khi không có người trực."
  },
  {
    id: 100,
    question: "Khi thấy cáp trên tang cuốn chỉ còn lại 2 vòng, người lái phải làm gì?",
    options: ["Tiếp tục hạ cho đến khi hết cáp", "Dừng lại ngay, quy định tối thiểu phải còn ít nhất 3 vòng cáp trên tang", "Dùng dây thừng nối thêm", "Không quan trọng"],
    answer: "Dừng lại ngay, quy định tối thiểu phải còn ít nhất 3 vòng cáp trên tang",
    explain: "Dự phòng ít nhất 3 vòng cáp để đảm bảo lực ma sát giữ đầu cáp vào tang cuốn không bị tuột."
  },
  {
    id: 101,
    question: "Biển báo 'Cấm đứng trong bán kính quay của cần' có ý nghĩa gì?",
    options: ["Cảnh báo nguy hiểm va chạm khi máy quay", "Chỉ là biển trang trí", "Cấm người đi bộ qua lại", "Yêu cầu máy phải dừng quay"],
    answer: "Cảnh báo nguy hiểm va chạm khi máy quay",
    explain: "Đảm bảo an toàn cho người xung quanh khỏi các va chạm vật lý khi cabin và cần xoay."
  }
];
