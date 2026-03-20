const questionBank = [
  {
  id: 1,
    question: "Người vận hành cần trục phải đủ bao nhiêu tuổi trở lên?",
    options: ["16 tuổi", "17 tuổi", "18 tuổi", "20 tuổi"],
    answer: 2,
    explain: "Theo luật lao động, người vận hành máy móc có yêu cầu nghiêm ngặt về an toàn phải từ đủ 18 tuổi."
  },
  {
    id: 2,
    question: "Thiết bị nào dùng để ngăn chặn việc nâng quá tải trọng cho phép?",
    options: ["Phanh hãm", "Bộ hạn chế chiều cao nâng", "Bộ hạn chế quá tải", "Công tắc hành trình"],
    answer: 2,
    explain: "Bộ hạn chế quá tải sẽ tự động ngắt truyền động khi tải trọng vượt quá mức cho phép của cần trục."
  },
  {
    id: 3,
    question: "Khi làm việc gần đường dây điện cao thế, khoảng cách an toàn được tính từ đâu?",
    options: ["Từ tâm cần trục", "Từ điểm gần nhất của cần trục hoặc tải đến dây điện", "Từ chân đế cần trục", "Từ cabin điều khiển"],
    answer: 1,
    explain: "Khoảng cách an toàn phải tính từ bộ phận bất kỳ của cần trục hoặc vật nâng có khả năng tiếp cận dây điện gần nhất."
  },
  {
    id: 4,
    question: "Dây cáp thép cần được loại bỏ khi nào?",
    options: ["Khi bị rỉ sét nhẹ", "Khi có một vài sợi nhỏ bị đứt", "Khi số sợi đứt vượt quá quy định hoặc bị biến dạng mắt cáo", "Khi mới sử dụng được 6 tháng"],
    answer: 2,
    explain: "Cáp biến dạng hoặc đứt quá tỷ lệ cho phép sẽ không đảm bảo hệ số an toàn khi nâng hạ."
  },
  {
    id: 5,
    question: "Tín hiệu 'Dừng khẩn cấp' trong vận hành cần trục do ai thực hiện thì người lái phải tuân theo?",
    options: ["Chỉ người chỉ huy", "Chỉ người buộc móc tải", "Bất kỳ ai nhìn thấy nguy hiểm", "Chủ đầu tư"],
    answer: 2,
    explain: "Trong an toàn thiết bị nâng, bất kỳ ai phát hiện nguy hiểm đều có quyền ra tín hiệu dừng khẩn cấp."
  },
  {
    id: 6,
    question: "Chiều cao nâng tối thiểu của tải so với chướng ngại vật khi di chuyển ngang là bao nhiêu?",
    options: ["0.2m", "0.5m", "1.0m", "1.5m"],
    answer: 1,
    explain: "Quy định an toàn yêu cầu tải phải cao hơn vật cản ít nhất 0.5m khi di chuyển theo phương ngang."
  },
  {
    id: 7,
    question: "Trước khi hạ tải vào vị trí, người vận hành cần lưu ý điều gì?",
    options: ["Hạ thật nhanh", "Kiểm tra độ ổn định của nền và kệ đỡ", "Không cần quan sát phía dưới", "Vừa hạ vừa di chuyển ngang"],
    answer: 1,
    explain: "Nền đất hoặc giá đỡ phải chịu được tải trọng để tránh lật hoặc rơi đổ sau khi tháo cáp."
  },
  {
    id: 8,
    question: "Phanh của cơ cấu nâng hạ phải là loại phanh gì?",
    options: ["Phanh dải", "Phanh thường mở", "Phanh thường đóng", "Phanh tay"],
    answer: 2,
    explain: "Phanh thường đóng đảm bảo khi mất điện hoặc có sự cố, phanh sẽ tự động đóng lại để giữ tải."
  },
  {
    id: 9,
    question: "Công dụng của móc cẩu có lẫy an toàn là gì?",
    options: ["Để móc đẹp hơn", "Ngăn dây cáp/xích tuột ra khỏi lòng móc", "Để nâng được nặng hơn", "Để giảm rung động"],
    answer: 1,
    explain: "Lẫy an toàn (khóa miệng móc) ngăn chặn tình trạng cáp bị trượt ra ngoài khi dây bị chùng."
  },
  {
    id: 10,
    question: "Khi cần trục đang nâng tải, người lái có được phép rời khỏi cabin không?",
    options: ["Được nếu khóa phanh cẩn thận", "Được nếu chỉ đi trong 5 phút", "Tuyệt đối không được rời vị trí", "Được nếu có người đứng canh"],
    answer: 2,
    explain: "Cấm tuyệt đối việc rời cabin khi tải đang treo trên móc để xử lý kịp thời các tình huống bất ngờ."
  },
  {
    id: 11,
    question: "Việc kiểm tra tình trạng kỹ thuật cần trục định kỳ bao lâu một lần?",
    options: ["1 tháng/lần", "6 tháng/lần", "Theo quy định của nhà sản xuất và cơ quan chức năng", "1 năm/lần"],
    answer: 2,
    explain: "Thời hạn kiểm định tùy thuộc vào độ tuổi của máy và quy chuẩn kỹ thuật quốc gia."
  },
  {
    id: 12,
    question: "Xích tải bị mòn bao nhiêu % đường kính mắt xích thì phải thay mới?",
    options: ["5%", "10%", "15%", "20%"],
    answer: 1,
    explain: "Khi độ mòn vượt quá 10%, khả năng chịu lực của xích giảm đi đáng kể, không còn an toàn."
  },
  {
    id: 13,
    question: "Trong sơ đồ buộc tải, góc giữa hai nhánh dây cáp không nên vượt quá bao nhiêu độ?",
    options: ["45 độ", "60 độ", "90 độ", "120 độ"],
    answer: 2,
    explain: "Góc giữa các nhánh cáp quá lớn (trên 90 độ) sẽ làm tăng đột biến lực căng trên mỗi nhánh dây."
  },
  {
    id: 14,
    question: "Cần trục tự hành thường bị lật do nguyên nhân chính nào?",
    options: ["Nâng quá tải", "Tầm với quá lớn", "Nền đất yếu hoặc không ra chân chống", "Tất cả các phương án trên"],
    answer: 3,
    explain: "Cần trục lật thường là sự kết hợp của nhiều yếu tố: quá tải, mất trọng tâm và nền tảng không vững."
  },
  {
    id: 15,
    question: "Thiết bị bảo vệ nào dùng để giới hạn hành trình của cần trục trên đường ray?",
    options: ["Đèn báo", "Công tắc hành trình và đầu chặn", "Còi hú", "Gờ giảm tốc"],
    answer: 1,
    explain: "Công tắc hành trình giúp ngắt nguồn điện khi cần trục đi đến giới hạn cuối của đường ray."
  },
  {
    id: 16,
    question: "Khi nâng tải bằng 2 cần trục, cần lưu ý điều gì quan trọng nhất?",
    options: ["Phải có người chỉ huy chung duy nhất", "Hai cần trục phải cùng hãng sản xuất", "Nâng càng nhanh càng tốt", "Dùng cáp thật dài"],
    answer: 0,
    explain: "Việc phối hợp hai cần trục cực kỳ nguy hiểm, cần sự thống nhất tuyệt đối từ một người chỉ huy."
  },
  {
    id: 17,
    question: "Trọng tâm của vật nâng nằm ở đâu là an toàn nhất khi buộc cáp?",
    options: ["Nằm bên trên các điểm móc", "Nằm bên dưới các điểm móc", "Nằm ngang hàng với điểm móc", "Không quan trọng"],
    answer: 1,
    explain: "Trọng tâm nằm dưới điểm móc giúp vật nâng luôn ở trạng thái cân bằng bền, không bị lật úp."
  },
  {
    id: 18,
    question: "Tiêu chuẩn loại bỏ puly khi rãnh puly bị mòn sâu quá bao nhiêu?",
    options: ["5% đường kính cáp", "10% đường kính cáp", "25% bán kính rãnh hoặc thành puly mòn 20%", "50% thành puly"],
    answer: 2,
    explain: "Puly mòn quá mức sẽ làm hỏng cáp nhanh chóng và gây trượt cáp khỏi rãnh."
  },
  {
    id: 19,
    question: "Trước khi làm việc ban đêm, cần chuẩn bị điều gì?",
    options: ["Hệ thống chiếu sáng đầy đủ tại bãi làm việc và cabin", "Còi báo động lớn hơn", "Dây cáp mới hơn", "Mặc quần áo ấm"],
    answer: 0,
    explain: "Ánh sáng là yếu tố tiên quyết để đảm bảo người lái nhìn rõ tải và người xi nhan."
  },
  {
    id: 20,
    question: "Khi gió bão từ cấp mấy trở lên thì phải ngừng vận hành cần trục ngoài trời?",
    options: ["Cấp 3", "Cấp 4", "Cấp 5 hoặc cấp 6 (tùy loại máy)", "Cấp 10"],
    answer: 2,
    explain: "Thông thường từ cấp 6 trở lên, sức gió có thể làm mất ổn định tải và gây lật cần trục."
  },
  {
    id: 21,
    question: "Công dụng của bộ phận kẹp ray trên cần trục tháp/cổng trục là gì?",
    options: ["Để giữ cần trục không bị trôi khi có gió lớn", "Để làm phanh dừng", "Để dẫn hướng đường đi", "Để nối các đoạn ray"],
    answer: 0,
    explain: "Kẹp ray giúp cố định máy vào đường ray khi nghỉ hoặc khi có giông bão, tránh gió thổi trôi máy."
  },
  {
    id: 22,
    question: "Khi nâng vật nặng, dây cáp phải ở trạng thái nào?",
    options: ["Nằm ngang", "Bị xoắn vào nhau", "Thẳng đứng so với trọng tâm vật", "Căng lệch về một phía"],
    answer: 2,
    explain: "Nâng thẳng đứng giúp tránh lực quán tính làm vật bị đu đưa gây nguy hiểm khi rời mặt đất."
  },
  {
    id: 23,
    question: "Tại sao không được dùng cáp quá mòn để nâng tải?",
    options: ["Vì nhìn không đẹp", "Vì làm hỏng puly", "Vì nguy cơ đứt cáp gây tai nạn", "Vì tốn dầu bôi trơn"],
    answer: 2,
    explain: "Cáp mòn làm giảm khả năng chịu tải thực tế so với thiết kế, dẫn đến đứt đột ngột."
  },
  {
    id: 24,
    question: "Người chỉ huy (người xi nhan) nên đứng ở vị trí nào?",
    options: ["Đứng ngay dưới tải", "Đứng ở nơi người lái dễ quan sát thấy nhất", "Đứng trên cabin cùng người lái", "Đứng ngoài hàng rào công trường"],
    answer: 1,
    explain: "Vị trí đứng phải đảm bảo người lái nhìn rõ tín hiệu tay mà vẫn an toàn cho người chỉ huy."
  },
  {
    id: 25,
    question: "Phanh cơ cấu nâng hạ bị hỏng thì xử lý thế nào?",
    options: ["Vẫn dùng nếu tải nhẹ", "Ngừng máy, hạ tải xuống đất và sửa chữa", "Dùng dây thừng buộc lại", "Đổ thêm dầu vào má phanh"],
    answer: 1,
    explain: "Phanh nâng hạ là bộ phận an toàn nhất, nếu hỏng phải dừng hoạt động ngay lập tức."
  },
  {
    id: 26,
    question: "Cáp thép có lõi đay (lõi sợi) khác cáp lõi thép ở điểm nào?",
    options: ["Chịu nhiệt tốt hơn", "Mềm dẻo và giữ dầu bôi trơn tốt hơn", "Cứng hơn", "Không bao giờ đứt"],
    answer: 1,
    explain: "Lõi đay giúp cáp linh hoạt hơn nhưng không chịu được nhiệt độ cao như lõi thép."
  },
  {
    id: 27,
    question: "Khi dùng khóa cáp (cóc cáp), khoảng cách giữa các khóa nên là bao nhiêu?",
    options: ["2 lần đường kính cáp", "6 lần đường kính cáp", "10 lần đường kính cáp", "Tùy ý"],
    answer: 1,
    explain: "Khoảng cách tiêu chuẩn (thường bằng 6 lần d) đảm bảo lực kẹp dàn đều và giữ cáp chắc nhất."
  },
  {
    id: 28,
    question: "Mục đích của việc kiểm tra 'không tải' trước khi làm việc là gì?",
    options: ["Để máy nóng lên", "Để kiểm tra hoạt động của các cơ cấu và thiết bị an toàn", "Để tiết kiệm điện", "Để nhân viên thực tập thử lái"],
    answer: 1,
    explain: "Thử không tải giúp phát hiện các hư hỏng của hệ thống điều khiển trước khi mang tải thật."
  },
  {
    id: 29,
    question: "Bộ phận nào giúp cần trục không bị lật khi nâng tải ở phía trước?",
    options: ["Cabin", "Chân chống hoặc đối trọng", "Dây cáp", "Bánh xe"],
    answer: 1,
    explain: "Đối trọng và chân chống tạo ra momen giữ để cân bằng với momen gây lật của tải."
  },
  {
    id: 30,
    question: "Ký hiệu 'SWL' ghi trên cần trục có nghĩa là gì?",
    options: ["Trọng lượng của cần trục", "Tốc độ nâng lớn nhất", "Tải trọng làm việc an toàn", "Năm sản xuất"],
    answer: 2,
    explain: "SWL (Safe Working Load) là mức tải tối đa mà thiết bị được phép nâng trong điều kiện bình thường."
  },
  {
   id: 31,
    question: "Khi sử dụng cáp vải (webbing sling) để nâng vật có cạnh sắc, cần làm gì?",
    options: ["Dùng thêm một sợi cáp vải nữa", "Dùng đệm lót tại các cạnh sắc để bảo vệ cáp", "Nâng thật chậm", "Không cần làm gì"],
    answer: 1,
    explain: "Cạnh sắc có thể cắt đứt cáp vải ngay lập tức dưới áp lực của tải trọng nếu không có vật đệm."
  },
  {
    id: 32,
    question: "Góc kẹp giữa các nhánh cáp càng lớn thì lực căng trên mỗi nhánh cáp sẽ:",
    options: ["Càng giảm", "Không thay đổi", "Càng tăng", "Bằng trọng lượng vật nâng"],
    answer: 2,
    explain: "Góc kẹp lớn làm tăng lực thành phần cơ học, có thể gây đứt cáp dù vật nâng không quá nặng."
  },
  {
    id: 33,
    question: "Trong bảng tín hiệu tay, hành động 'Xòe bàn tay, quay vòng ngón tay trỏ' có nghĩa là:",
    options: ["Hạ cần", "Nâng móc", "Di chuyển cần trục", "Dừng khẩn cấp"],
    answer: 1,
    explain: "Đây là tín hiệu chuẩn quốc tế cho lệnh nâng móc hoặc nâng tải."
  },
  {
    id: 34,
    question: "Yêu cầu đối với bãi đặt cần trục tự hành là gì?",
    options: ["Gần nguồn nước", "Bằng phẳng, không sụt lún, cách mép hố đào theo quy định", "Càng dốc càng tốt để thoát nước", "Gần khu vực đông người"],
    answer: 1,
    explain: "Nền đất yếu hoặc quá gần mép hố là nguyên nhân hàng đầu gây lật cần trục tự hành."
  },
  {
    id: 35,
    question: "Bộ phận 'chân chống' (outriggers) phải được ra như thế nào?",
    options: ["Chỉ cần ra 2 chân phía trước", "Ra hết cỡ và kê kích trên tấm đệm gỗ/thép vững chắc", "Không cần ra nếu tải nhẹ", "Ra chân nhưng không cần nhấc bánh xe khỏi mặt đất"],
    answer: 1,
    explain: "Phải ra hết hành trình và kê đệm để tăng diện tích chân đế, đảm bảo độ ổn định."
  },
  {
    id: 36,
    question: "Khi cần trục đang làm việc, người không có nhiệm vụ có được đứng trong bán kính quay của cần không?",
    options: ["Được, nếu đội mũ bảo hiểm", "Được, nếu đứng cách tải 2 mét", "Tuyệt đối không được", "Được, nếu có sự đồng ý của người lái"],
    answer: 2,
    explain: "Vùng bán kính quay là khu vực nguy hiểm, có thể xảy ra va chạm hoặc rơi tải bất ngờ."
  },
  {
    id: 37,
    question: "Tại sao không được phép dùng thiết bị nâng để nhổ các vật đang bị vùi dưới đất?",
    options: ["Vì làm bẩn cần trục", "Vì không xác định được lực cản, dễ gây quá tải và đứt cáp đột ngột", "Vì tốn nhiên liệu", "Vì gây tiếng ồn lớn"],
    answer: 1,
    explain: "Lực mút của đất và vật cản ngầm có thể lớn gấp nhiều lần sức nâng của máy."
  },
  {
    id: 38,
    question: "Kiểm tra mức dầu thủy lực khi nào là chính xác nhất?",
    options: ["Khi máy đang hoạt động", "Khi vừa tắt máy xong", "Khi máy nguội và các xylanh đã thu hết về vị trí nghỉ", "Lúc nào cũng được"],
    answer: 2,
    explain: "Lúc này dầu đã hồi về thùng chứa, giúp quan sát mức dầu thực tế chính xác nhất."
  },
  {
    id: 39,
    question: "Thiết bị 'Chống va chạm' (Anti-collision) thường được lắp trên loại cần trục nào?",
    options: ["Cần trục ô tô", "Cần trục tháp làm việc trong nhóm có bán kính giao nhau", "Cần trục bánh xích", "Cần trục chân đế"],
    answer: 1,
    explain: "Thiết bị này ngăn ngừa việc hai tay cần va chạm nhau khi nhiều cần trục tháp làm việc cùng một khu vực."
  },
  {
    id: 40,
    question: "Khi hạ tải xuống xe vận tải, người móc cáp nên đứng ở đâu?",
    options: ["Đứng trên sàn xe", "Đứng dưới đất, cách xa thùng xe một khoảng an toàn", "Đứng trên tải", "Đứng sát cabin xe"],
    answer: 1,
    explain: "Tránh đứng trên sàn xe để không bị kẹp giữa tải và thành xe nếu tải bị đu đưa."
  },
  {
    id: 41,
    question: "Hiện tượng 'Cáp bị xoắn' (Bird-caging) thường xảy ra do:",
    options: ["Cáp quá mới", "Chùng cáp đột ngột hoặc tải bị xoay mạnh", "Do bôi quá nhiều dầu", "Do nâng quá nhẹ"],
    answer: 1,
    explain: "Hiện tượng này làm hỏng cấu trúc cáp và buộc phải loại bỏ sợi cáp đó ngay lập tức."
  },
  {
    id: 42,
    question: "Chức năng của 'Van một chiều có khóa' trong hệ thống thủy lực chân chống là gì?",
    options: ["Làm chân chống ra nhanh hơn", "Giữ chân chống không bị thu về khi đường ống bị vỡ", "Điều chỉnh áp suất dầu", "Lọc sạch bụi bẩn"],
    answer: 1,
    explain: "Đây là van an toàn giúp giữ cố định vị trí chân chống ngay cả khi hệ thống thủy lực gặp sự cố."
  },
  {
    id: 43,
    question: "Định nghĩa 'Tầm với' (Radius) của cần trục là gì?",
    options: ["Chiều dài của tay cần", "Khoảng cách từ tâm quay đến tâm móc cẩu theo phương ngang", "Chiều cao từ mặt đất đến móc cẩu", "Độ rộng của chân chống"],
    answer: 1,
    explain: "Tầm với càng lớn thì sức nâng (tải trọng cho phép) càng giảm."
  },
  {
    id: 44,
    question: "Khi di chuyển cần trục ô tô trên đường, tay cần phải đặt ở vị trí nào?",
    options: ["Để tự do", "Đặt đúng vị trí giá đỡ và hãm chặt", "Vươn dài ra phía trước", "Nâng cao lên trời"],
    answer: 1,
    explain: "Phải cố định tay cần để đảm bảo trọng tâm xe và an toàn giao thông."
  },
  {
    id: 45,
    question: "Tại sao phải dùng dây dẫn hướng (tag line) khi nâng các vật có diện tích bề mặt lớn?",
    options: ["Để trang trí", "Để ngăn vật nâng bị xoay do gió và va chạm vào thân cần trục", "Để đo chiều cao", "Để làm vật nâng nặng hơn"],
    answer: 1,
    explain: "Dây dẫn hướng giúp nhân viên bên dưới kiểm soát được hướng quay của vật nâng từ xa."
  },
  {
    id: 46,
    question: "Một bộ khóa cáp (clips) lắp đúng quy chuẩn thì phần chữ U của khóa phải đặt ở đâu?",
    options: ["Đặt vào phần dây ngắn (phần đuôi cáp)", "Đặt vào phần dây chịu lực chính", "Đặt xen kẽ nhau", "Không quan trọng"],
    answer: 0,
    explain: "Quy tắc: 'Never saddle a dead horse' - Phần thân khóa (saddle) luôn nằm bên dây chịu lực, chữ U nằm bên dây chết."
  },
  {
    id: 47,
    question: "Áp suất lốp của cần trục bánh lốp ảnh hưởng thế nào đến an toàn?",
    options: ["Không ảnh hưởng", "Lốp quá mềm làm xe mất ổn định và dễ lật khi nâng tải", "Chỉ ảnh hưởng đến tốc độ chạy xe", "Làm tốn nhiên liệu"],
    answer: 1,
    explain: "Lốp phải căng đúng tiêu chuẩn để chịu được lực ép khi máy mang tải."
  },
  {
    id: 48,
    question: "Khi làm việc trong khu vực có nhiều tiếng ồn, người lái và người xi nhan nên dùng gì?",
    options: ["Hét thật to", "Dùng bộ đàm hoặc cờ tín hiệu", "Dùng đèn pin", "Viết giấy"],
    answer: 1,
    explain: "Bộ đàm đảm bảo thông tin liên lạc rõ ràng, tránh hiểu lầm tín hiệu tay."
  },
  {
    id: 49,
    question: "Thiết bị nào bảo vệ cần trục tháp không bị hư hỏng khi có gió quá lớn?",
    options: ["Phanh tay", "Cơ cấu cho phép tay cần quay tự do theo hướng gió (Wind-vane mode)", "Dây xích buộc tay cần vào tòa nhà", "Hạ thấp tay cần xuống đất"],
    answer: 1,
    explain: "Cho phép tay cần quay tự do giúp giảm diện tích cản gió, tránh gãy cần."
  },
  {
    id: 50,
    question: "Sức nâng của cần trục bánh xích thay đổi thế nào so với cần trục bánh lốp cùng tải trọng?",
    options: ["Thấp hơn", "Thường cao hơn và ổn định hơn trên nền đất mềm", "Bằng nhau", "Kém linh hoạt hơn"],
    answer: 1,
    explain: "Bánh xích có diện tích tiếp xúc lớn, áp suất xuống nền thấp nên ổn định hơn."
  },
  {
    id: 51,
    question: "Tại sao cấm dùng cần trục để nâng người (trừ thiết bị chuyên dụng)?",
    options: ["Vì người quá nhẹ", "Vì hệ số an toàn của cần trục nâng hàng thấp hơn hệ số nâng người", "Vì tốn thời gian", "Vì không có ghế ngồi"],
    answer: 1,
    explain: "Cần trục nâng hàng không có các thiết bị bảo hiểm dự phòng bắt buộc cho việc nâng người."
  },
  {
    id: 52,
    question: "Khối lượng móc cẩu (Hook block) có tính vào tải trọng nâng không?",
    options: ["Không tính", "Có tính vào tổng tải trọng nâng", "Chỉ tính 50%", "Chỉ tính khi nâng rất nặng"],
    answer: 1,
    explain: "Tổng tải trọng = Khối lượng vật nâng + Khối lượng móc + Khối lượng cáp + Phụ kiện buộc tải."
  },
  {
    id: 53,
    question: "Khi thấy dây cáp bị xoắn ngược (kink), bạn xử lý thế nào?",
    options: ["Dùng búa đập cho phẳng lại", "Tiếp tục dùng nếu vết xoắn nhỏ", "Loại bỏ đoạn cáp đó vì cấu trúc bên trong đã hỏng", "Bôi thêm mỡ"],
    answer: 2,
    explain: "Vết gập (kink) làm hỏng vĩnh viễn khả năng chịu lực của sợi cáp tại điểm đó."
  },
  {
    id: 54,
    question: "Trước khi bắt đầu ca làm việc, người lái cần kiểm tra gì ở cabin?",
    options: ["Gương chiếu hậu và các cần điều khiển có về vị trí trung hòa không", "Radio nghe nhạc", "Điều hòa nhiệt độ", "Màu sơn cabin"],
    answer: 0,
    explain: "Đảm bảo các cần điều khiển không bị kẹt và có tầm nhìn tốt là yếu tố an toàn cơ bản."
  },
  {
    id: 55,
    question: "Vật nâng bị vướng vào chướng ngại vật khi đang nâng, người lái nên:",
    options: ["Tăng ga để kéo mạnh", "Dừng lại ngay, hạ tải nhẹ xuống để gỡ vướng", "Xoay cần thật nhanh", "Nhờ người đứng gần đó dùng tay đẩy"],
    answer: 1,
    explain: "Cố tình kéo vật bị vướng sẽ gây quá tải đột biến dẫn đến gãy cần hoặc đứt cáp."
  },
  {
    id: 56,
    question: "Dấu hiệu nào cho thấy bơm thủy lực của cần trục bị hỏng hoặc thiếu dầu?",
    options: ["Máy chạy êm hơn", "Có tiếng hú to và các thao tác bị rung giật", "Khói đen thoát ra nhiều", "Đèn pha không sáng"],
    answer: 1,
    explain: "Tiếng hú (cavitation) là biểu hiện của việc không khí lọt vào hệ thống thủy lực hoặc bơm quá tải."
  },
  {
    id: 57,
    question: "Khi dùng 2 nhánh xích để nâng vật, góc tối ưu giữa 2 nhánh là bao nhiêu?",
    options: ["0 - 45 độ", "90 - 120 độ", "150 độ", "180 độ"],
    answer: 0,
    explain: "Góc hẹp giúp chia đều tải trọng và giữ lực căng trên mỗi nhánh ở mức thấp nhất."
  },
  {
    id: 58,
    question: "Trên bảng tải trọng (Load Chart), nếu tầm với nằm giữa hai giá trị ghi trong bảng, bạn nên chọn giá trị nào?",
    options: ["Giá trị tải trọng lớn hơn", "Giá trị tải trọng nhỏ hơn (để an toàn)", "Lấy trung bình cộng", "Tự đoán số"],
    answer: 1,
    explain: "Trong an toàn thiết bị nâng, luôn chọn thông số khắt khe hơn để đảm bảo biên độ an toàn."
  },
  {
    id: 59,
    question: "Tác dụng của 'đối trọng phụ' (extra counterweight) là gì?",
    options: ["Làm máy đẹp hơn", "Tăng sức nâng của máy ở tầm với xa", "Làm máy chạy nhanh hơn", "Giảm tiêu hao dầu"],
    answer: 1,
    explain: "Đối trọng giúp cân bằng momen tải, cho phép nâng vật nặng hơn mà không bị lật."
  },
  {
    id: 60,
    question: "Kiểm tra an toàn thiết bị nâng 'bất thường' thực hiện khi nào?",
    options: ["Sau khi thay thế các bộ phận quan trọng hoặc sau sự cố/thiên tai", "Mỗi buổi sáng", "Mỗi tuần một lần", "Khi người lái thấy thích"],
    answer: 0,
    explain: "Các tác động lớn như thay cáp, thay cần hoặc sau bão cần được kiểm định lại để đảm bảo an toàn."
  },
  {
   Chào bạn, đây là 30 câu tiếp theo (từ câu 61 đến 90). Phần này tập trung vào các tình huống thực tế nguy hiểm, quy trình xử lý sự cố và các yêu cầu kỹ thuật chi tiết về thiết bị nâng để đảm bảo học viên của bạn nắm vững kiến thức an toàn hiện trường.

JavaScript
/**
 * File: data.js (Phần 3: Từ câu 61 đến 90)
 * Chủ đề: Xử lý sự cố, An toàn hiện trường và Kỹ thuật chuyên sâu
 */

const ngan_hang_cau_hoi_p3 = [
  {
    id: 61,
    question: "Khi đang nâng tải mà bị mất điện đột ngột, người vận hành phải làm gì?",
    options: ["Rời khỏi cabin đi báo thợ điện", "Giữ nguyên cần điều khiển và chờ có điện lại", "Đưa cần điều khiển về vị trí trung hòa, đóng phanh phụ (nếu có) và cảnh báo người bên dưới", "Nhảy ra khỏi cabin ngay lập tức"],
    answer: 2,
    explain: "Phải đưa về vị trí an toàn để tránh việc máy tự hoạt động bất ngờ khi có điện trở lại."
  },
  {
    id: 62,
    question: "Chiều dài tối thiểu của đoạn cáp thừa sau khóa cáp (hạt đậu) là bao nhiêu?",
    options: ["50mm", "100mm", "Ít nhất 150 - 200mm", "Không cần để thừa"],
    answer: 2,
    explain: "Đoạn thừa giúp quan sát xem cáp có bị trượt qua khóa hay không trong quá trình làm việc."
  },
  {
    id: 63,
    question: "Tại sao không được dùng bộ hạn chế chiều cao nâng để dừng móc thay cho cần điều khiển?",
    options: ["Vì tốn điện", "Vì đó là thiết bị an toàn dự phòng, không phải thiết bị điều khiển vận hành thường xuyên", "Vì làm hỏng móc", "Vì tiếng ồn lớn"],
    answer: 1,
    explain: "Lạm dụng thiết bị an toàn làm nó nhanh hỏng, dẫn đến mất khả năng bảo vệ khi có sự cố thật."
  },
  {
    id: 64,
    question: "Khi di chuyển cần trục không tải, móc cẩu nên đặt ở vị trí nào?",
    options: ["Sát mặt đất", "Nâng cao lên gần kịch trần để không vướng", "Nâng cao vừa phải và hãm chắc để tránh đung đưa", "Tháo móc ra cất đi"],
    answer: 2,
    explain: "Móc quá cao dễ va chạm vào tay cần, quá thấp dễ vướng vào chướng ngại vật dưới đất."
  },
  {
    id: 65,
    question: "Thiết bị 'Lioa' hoặc bộ ổn áp trên cần trục tháp có tác dụng gì?",
    options: ["Làm máy chạy nhanh hơn", "Bảo vệ hệ thống điện tử và biến tần khỏi sự trồi sụt của điện lưới", "Tiết kiệm điện năng", "Chống sét"],
    answer: 1,
    explain: "Điện lưới công trường thường không ổn định, dễ gây cháy bo mạch điều khiển đắt tiền."
  },
  {
    id: 66,
    question: "Khi góc nâng của tay cần (boom angle) giảm xuống thì sức nâng của cần trục sẽ:",
    options: ["Tăng lên", "Giảm xuống", "Không thay đổi", "Tùy thuộc vào loại cáp"],
    answer: 1,
    explain: "Góc hạ thấp đồng nghĩa với tầm với (radius) tăng, làm momen gây lật tăng nên sức nâng phải giảm."
  },
  {
    id: 67,
    question: "Tiêu chuẩn loại bỏ móc cẩu khi độ biến dạng (độ há miệng móc) vượt quá:",
    options: ["5%", "10%", "15%", "20%"],
    answer: 1,
    explain: "Khi miệng móc há ra quá 10%, cấu trúc kim loại đã bị mỏi và có nguy cơ gãy đột ngột."
  },
  {
    id: 68,
    question: "Phanh cơ cấu quay của cần trục tháp khi không làm việc nên để ở trạng thái nào?",
    options: ["Phanh chặt cứng", "Mở phanh để tay cần tự do quay theo hướng gió (đối với cần trục tháp)", "Tháo rời má phanh", "Phanh bằng tay"],
    answer: 1,
    explain: "Để tay cần quay tự do giúp giảm lực cản gió lên thân tháp, tránh lật cẩu khi có gió bão."
  },
  {
    id: 69,
    question: "Khi nâng một vật nặng có hình dạng không cân đối, việc quan trọng nhất là:",
    options: ["Dùng cáp thật to", "Xác định trọng tâm và điều chỉnh độ dài các nhánh cáp để vật cân bằng", "Nâng thật nhanh", "Nghiêng cần trục về phía vật nặng"],
    answer: 1,
    explain: "Vật không cân bằng dễ bị trượt cáp hoặc gây lực va đập mạnh khi rời mặt đất."
  },
  {
    id: 70,
    question: "Bộ phận nào có tác dụng giữ cho cáp không bị chồng chéo trên tang cuốn?",
    options: ["Puly đầu cần", "Bộ xếp cáp (hoặc rãnh trên tang)", "Phanh tang", "Móc cẩu"],
    answer: 1,
    explain: "Xếp cáp đều giúp cáp không bị đè bẹp, tăng tuổi thọ và vận hành êm ái."
  },
  {
    id: 71,
    question: "Khi phát hiện cáp bị mòn luồn sâu vào rãnh puly, nguyên nhân thường do:",
    options: ["Cáp quá nhỏ", "Rãnh puly bị mòn hoặc đường kính cáp không phù hợp", "Do bôi thiếu mỡ", "Do nhiệt độ môi trường"],
    answer: 1,
    explain: "Sự không tương thích giữa cáp và rãnh puly gây mòn nhanh cả hai bộ phận."
  },
  {
    id: 72,
    question: "Người chỉ huy đứng ở vị trí 'điểm mù' của người lái thì phải xử lý thế nào?",
    options: ["Vẫn ra tín hiệu bằng tay", "Sử dụng bộ đàm hoặc người trung gian truyền tín hiệu", "Cứ thực hiện theo thói quen", "Người lái tự nhìn và làm"],
    answer: 1,
    explain: "Nguyên tắc: Người lái không nhìn thấy người chỉ huy thì tuyệt đối không vận hành."
  },
  {
    id: 73,
    question: "Tác dụng của 'công tắc hành trình' (Limit switch) là gì?",
    options: ["Để tắt máy khi hết ca", "Để giới hạn phạm vi chuyển động an toàn của các cơ cấu", "Để tăng tốc độ", "Để đo chiều dài"],
    answer: 1,
    explain: "Nó tự động ngắt nguồn điện khi các bộ phận tiến gần sát vùng nguy hiểm."
  },
  {
    id: 74,
    question: "Tại sao cần phải vệ sinh cần trục thường xuyên?",
    options: ["Để cho đẹp", "Để dễ dàng phát hiện các vết nứt, rò rỉ dầu hoặc hư hỏng cơ khí", "Để tiết kiệm dầu", "Để máy chạy nhanh hơn"],
    answer: 1,
    explain: "Lớp bụi bẩn dày thường che lấp các vết nứt chân chim trên kết cấu thép rất nguy hiểm."
  },
  {
    id: 75,
    question: "Khi di chuyển cần trục tự hành có tải (pick and carry), cần lưu ý:",
    options: ["Chạy tốc độ cao nhất", "Tải phải đặt sát mặt đất và cố định tránh đung đưa, di chuyển chậm", "Nâng tải thật cao", "Chỉ chạy lùi"],
    answer: 1,
    explain: "Di chuyển có tải làm thay đổi trọng tâm liên tục, rất dễ lật nếu đi nhanh hoặc đường gồ ghề."
  },
  {
    id: 76,
    question: "Trong hệ thống thủy lực, 'Két làm mát dầu' có tác dụng gì?",
    options: ["Làm nóng dầu", "Duy trì nhiệt độ dầu ổn định để đảm bảo độ nhớt và bảo vệ gioăng phớt", "Lọc bụi", "Tăng áp suất"],
    answer: 1,
    explain: "Dầu quá nóng sẽ bị loãng, làm giảm hiệu suất làm việc và hỏng các chi tiết cao su."
  },
  {
    id: 77,
    question: "Khi sử dụng ma ní (shackle) để nối cáp, lưu ý nào sau đây là đúng?",
    options: ["Dùng ma ní bị cong cũng được", "Chốt ma ní phải được vặn chặt và có chốt chẻ bảo vệ (nếu có)", "Dùng đinh thay cho chốt ma ní", "Vặn lỏng chốt cho dễ tháo"],
    answer: 1,
    explain: "Chốt ma ní không chặt có thể bị xoay và tuột ra khi tải đung đưa."
  },
  {
    id: 78,
    question: "Tại sao không được phép hàn trực tiếp vào móc cẩu hoặc xích tải?",
    options: ["Làm xấu thiết bị", "Nhiệt độ hàn làm thay đổi cấu trúc kim loại, gây giòn và dễ gãy", "Làm tốn điện hàn", "Vì móc cẩu không ăn mối hàn"],
    answer: 1,
    explain: "Các thiết bị nâng được nhiệt luyện đặc biệt, nhiệt độ hàn sẽ phá hủy tính chất chịu lực này."
  },
  {
    id: 79,
    question: "Khi bão đổ bộ, đối với cần trục bánh lốp, người lái nên làm gì?",
    options: ["Đỗ dưới gốc cây lớn", "Thu gọn cần, hạ móc, chống chân và di chuyển đến nơi chắn gió", "Cứ để máy ngoài bãi trống", "Nâng hết cần lên trời"],
    answer: 1,
    explain: "Giảm tối đa diện tích cản gió và hạ thấp trọng tâm để máy không bị đổ."
  },
  {
    id: 80,
    question: "Mục đích của việc lắp 'gương cầu lồi' trong cabin cần trục là:",
    options: ["Để người lái soi gương", "Để quan sát được các điểm mù xung quanh xe và tang cuốn cáp", "Để trang trí", "Để hội tụ ánh sáng"],
    answer: 1,
    explain: "Giúp người lái bao quát toàn bộ hoạt động của máy mà không cần rời vị trí ngồi."
  },
  {
    id: 81,
    question: "Thế nào là 'Nâng quá tải động'?",
    options: ["Nâng vật quá nặng", "Nâng hoặc dừng tải quá đột ngột tạo ra lực quán tính lớn", "Nâng vật khi gió to", "Nâng vật dưới nước"],
    answer: 1,
    explain: "Lực quán tính khi phanh gấp có thể làm tăng tải trọng thực tế lên gấp 1.5 - 2 lần."
  },
  {
    id: 82,
    question: "Trong kiểm định kỹ thuật, 'Thử tải tĩnh' thường được thực hiện ở mức:",
    options: ["100% sức nâng", "110% sức nâng", "125% sức nâng", "150% sức nâng"],
    answer: 2,
    explain: "Thử tải tĩnh ở mức 125% để kiểm tra độ bền kết cấu và khả năng giữ tải của phanh."
  },
  {
    id: 83,
    question: "Trong kiểm định kỹ thuật, 'Thử tải động' thường được thực hiện ở mức:",
    options: ["100% sức nâng", "110% sức nâng", "125% sức nâng", "150% sức nâng"],
    answer: 1,
    explain: "Thử tải động ở mức 110% để kiểm tra sự hoạt động ổn định của các cơ cấu khi vận động."
  },
  {
    id: 84,
    question: "Khi làm việc trên cao, thợ móc cáp phải sử dụng thiết bị bảo hộ gì bắt buộc?",
    options: ["Giày cao su", "Kính râm", "Dây đai an toàn toàn thân", "Găng tay vải"],
    answer: 2,
    explain: "Dây đai an toàn ngăn chặn tai nạn rơi ngã từ trên cao khi đứng trên kiện hàng hoặc giàn giáo."
  },
  {
    id: 85,
    question: "Khi nâng kiện hàng bằng nhiều nhánh cáp, nếu một nhánh bị chùng thì:",
    options: ["Không sao cả", "Lực sẽ dồn hết vào các nhánh còn lại, dễ gây đứt xích/cáp", "Máy sẽ chạy chậm lại", "Vật sẽ cân bằng hơn"],
    answer: 1,
    explain: "Nhánh chùng không chịu lực khiến các nhánh kia bị quá tải so với tính toán ban đầu."
  },
  {
    id: 86,
    question: "Tại sao cấm dùng cần trục để kéo các phương tiện khác bị sa lầy?",
    options: ["Vì xe kia bẩn", "Vì lực kéo ngang không nằm trong thiết kế của cơ cấu nâng hạ, dễ làm hỏng cần", "Vì tốn xăng", "Vì không có dây kéo"],
    answer: 1,
    explain: "Cần trục thiết kế để nâng thẳng đứng, lực kéo ngang rất dễ làm xoắn hoặc gãy tay cần."
  },
  {
    id: 87,
    question: "Khi cáp bị chồng lên nhau trên tang (nhảy cáp), bạn nên làm gì?",
    options: ["Dùng tay đẩy lại khi máy đang chạy", "Dừng máy, hạ tải và xếp lại cáp bằng dụng cụ chuyên dụng khi tang đứng yên", "Kệ nó", "Bôi thật nhiều mỡ"],
    answer: 1,
    explain: "Tuyệt đối không dùng tay chạm vào cáp khi tang đang quay vì sẽ bị cuốn tay vào trong."
  },
  {
    id: 88,
    question: "Bộ phận 'Lọc dầu thủy lực' bị tắc sẽ dẫn đến hiện tượng gì?",
    options: ["Dầu sạch hơn", "Máy hoạt động yếu, nóng dầu và nhanh hỏng bơm", "Máy chạy nhanh hơn", "Không ảnh hưởng gì"],
    answer: 1,
    explain: "Lọc tắc làm cản trở dòng chảy, gây thiếu dầu cục bộ tại bơm thủy lực."
  },
  {
    id: 89,
    question: "Thế nào là 'Tầm với nhỏ nhất' của cần trục?",
    options: ["Khi tay cần hạ xuống thấp nhất", "Khi tay cần nâng lên góc cao nhất", "Khi tay cần thu ngắn nhất", "Khi chưa lắp tay cần"],
    answer: 1,
    explain: "Góc nâng càng lớn thì khoảng cách từ tâm quay đến móc càng nhỏ (tầm với nhỏ nhất)."
  },
  {
    id: 90,
    question: "Khi thấy người chỉ huy ra tín hiệu không rõ ràng, người lái phải:",
    options: ["Tự đoán ý để làm", "Dừng mọi thao tác và yêu cầu xác nhận lại tín hiệu", "Làm ngược lại", "Cứ làm từ từ"],
    answer: 1,
    explain: "An toàn là trên hết, chỉ hành động khi hiểu rõ mệnh lệnh."
  },
  {
    Chào bạn, để hoàn tất ngân hàng 101 câu hỏi cho bộ đề thi cần trục như bạn đã hoạch định, mình xin gửi nốt 11 câu cuối cùng (từ 91 đến 101).

Phần này mình tập trung vào các quy định về Nhật ký vận hành, Sơ cấp cứu và các Tiêu chuẩn kỹ thuật đặc thù để đảm bảo học viên có kiến thức toàn diện nhất.

JavaScript
/**
 * File: data.js (Phần cuối: Từ câu 91 đến 101)
 * Chủ đề: Hồ sơ thiết bị, Sơ cứu và Quy định pháp luật
 */

const ngan_hang_cau_hoi_p_cuoi = [
  {
    id: 91,
    question: "Sổ nhật ký vận hành cần trục dùng để ghi chép nội dung gì?",
    options: ["Tình trạng kỹ thuật hàng ngày, các sự cố và nội dung bảo dưỡng", "Họ tên gia đình người lái", "Danh sách thực phẩm ăn trưa", "Thời tiết hàng năm"],
    answer: 0,
    explain: "Nhật ký vận hành là hồ sơ pháp lý quan trọng để theo dõi lịch sử hoạt động và an toàn của thiết bị."
  },
  {
    id: 92,
    question: "Khi phát hiện người bị điện giật do cần trục chạm vào dây điện, bước đầu tiên là:",
    options: ["Lao vào kéo nạn nhân ra ngay", "Ngắt nguồn điện hoặc dùng vật cách điện tách nạn nhân khỏi nguồn điện", "Đổ nước vào người nạn nhân", "Gọi điện cho người thân"],
    answer: 1,
    explain: "Tuyệt đối không chạm trực tiếp vào nạn nhân khi chưa ngắt điện để tránh bị điện giật dây chuyền."
  },
  {
    id: 93,
    question: "Tại sao không được dùng xích có các mắt xích bị xoắn hoặc nứt?",
    options: ["Làm xích nặng hơn", "Gây tập trung ứng suất tại điểm nứt, dẫn đến đứt xích đột ngột khi mang tải", "Làm tốn dầu bôi trơn", "Vì nhìn không chuyên nghiệp"],
    answer: 1,
    explain: "Xích tải khi đã nứt hoặc biến dạng thì khả năng chịu lực không còn đảm bảo như thiết kế ban đầu."
  },
  {
    id: 94,
    question: "Thế nào là 'Tải trọng định mức' (Rated Capacity)?",
    options: ["Tổng trọng lượng của cần trục", "Khối lượng tối đa mà cần trục được phép nâng ở một tầm với cụ thể", "Khối lượng tối thiểu", "Sức kéo ngang của cần"],
    answer: 1,
    explain: "Tải trọng định mức thay đổi theo tầm với (radius) và cấu hình của cần trục."
  },
  {
    id: 95,
    question: "Khi làm việc ở khu vực có nền đất không ổn định, tấm lót chân chống (pad) nên có kích thước thế nào?",
    options: ["Bằng diện tích chân chống", "Càng nhỏ càng tốt", "Lớn gấp 3-4 lần diện tích đế chân chống để giảm áp suất xuống nền", "Không cần dùng tấm lót"],
    answer: 2,
    explain: "Tăng diện tích tiếp xúc giúp phân tán áp lực, ngăn chặn việc chân chống bị lún gây lật máy."
  },
  {
    id: 96,
    question: "Bộ phận 'Chống xoắn cáp' (Swivel) lắp ở móc cẩu có tác dụng:",
    options: ["Làm móc cẩu quay nhanh hơn", "Cho phép vật nâng tự xoay mà không làm xoắn các nhánh cáp treo", "Để móc cáp dễ hơn", "Làm cáp bền hơn"],
    answer: 1,
    explain: "Swivel giúp triệt tiêu momen xoắn của cáp, đảm bảo an toàn cho dây cáp và vật nâng."
  },
  {
    id: 97,
    question: "Người vận hành cần trục cần được huấn luyện an toàn định kỳ bao lâu một lần?",
    options: ["3 tháng/lần", "6 tháng/lần", "Ít nhất 1 năm hoặc 2 năm/lần (theo quy định hiện hành)", "5 năm/lần"],
    answer: 2,
    explain: "Huấn luyện định kỳ giúp cập nhật kiến thức an toàn và các quy định mới của pháp luật."
  },
  {
    id: 98,
    question: "Trong điều kiện sương mù dày đặc, tầm nhìn bị hạn chế, người lái nên:",
    options: ["Bật đèn pha và làm bình thường", "Ngừng vận hành cho đến khi tầm nhìn đảm bảo an toàn", "Vừa làm vừa bóp còi", "Nhờ người đứng dưới đất chỉ đường bằng giọng nói"],
    answer: 1,
    explain: "Khi không quan sát rõ tải và xung quanh, nguy cơ va chạm là cực kỳ cao."
  },
  {
    id: 99,
    question: "Khi kết thúc ca làm việc, móc cẩu nên được đặt ở đâu?",
    options: ["Thả nằm sát mặt đất", "Nâng lên cao, thu cần lại và khóa các cơ cấu điều khiển", "Cứ để lơ lửng trên không", "Móc vào một vật nặng"],
    answer: 1,
    explain: "Vị trí này giúp tránh va chạm với người/phương tiện di chuyển bên dưới khi không có người trực."
  },
  {
    id: 100,
    question: "Khi thấy cáp trên tang cuốn chỉ còn lại 2 vòng, người lái phải làm gì?",
    options: ["Tiếp tục hạ cho đến khi hết cáp", "Dừng lại ngay, quy định tối thiểu phải còn ít nhất 3 vòng cáp trên tang", "Dùng dây thừng nối thêm", "Không quan trọng"],
    answer: 1,
    explain: "Dự phòng ít nhất 3 vòng cáp để đảm bảo lực ma sát giữ đầu cáp vào tang cuốn không bị tuột."
  },
  {
    id: 101,
    question: "Biển báo 'Cấm đứng dưới tầm quay của cần trục' có ý nghĩa gì?",
    options: ["Để tiết kiệm chỗ đứng", "Cảnh báo vùng nguy hiểm có thể bị tải rơi hoặc cần trục va trúng", "Để làm đẹp công trường", "Chỉ dành cho người mới vào nghề"],
    answer: 1,
    explain: "Đây là quy tắc vàng để tránh tai nạn thương vong do vật rơi từ trên cao."
  }
];
];
