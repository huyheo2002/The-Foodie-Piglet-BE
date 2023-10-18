'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('News', [{
      name: 'Gỏi cuốn tươi mát',
      desc:' Gỏi cuốn tươi mát là một sự kết hợp hoàn hảo giữa các lớp bánh tráng mỏng mịn, tôm tươi ngon, rau sống, và các loại gia vị đậm đà. Được phục vụ kèm theo tương mắm độc đáo, đây là một món ăn nhẹ nhàng và ngon miệng cho mùa hè',
      image: `Goi_cuon.png`,
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Súp nấm hải sản',
      desc:'Súp nấm với hải sản tươi ngon như sò điệp, tôm, mực, và cá hồi. Súp được nấu trong nước dùng thơm béo và kèm theo bánh mì nướng ăn kèm.',
      image: 'SupNamHaiSan.jpg',
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cơm rang hải sản kiểu Đông Nam Á',
      desc:'Cơm rang hải sản kiểu Đông Nam Á với hương vị độc đáo từ nước mắm, hành, tỏi và rau thơm. Hấp dẫn với tôm, mực, cá và cua.',
      image: 'ComRangHaiSanDNA.jpg',
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bánh flan hương vani',
      desc:'Bánh flan mềm mịn, ngon béo vị vani, được trang trí bằng caramel ngọt ngào. Một món tráng miệng tuyệt vời.',
      image: 'BanhFlan_Vali.jpg',
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cá hồi nướng mật ong',
      desc:'Cá hồi tươi ngon được nướng chín mềm, phủ mật ong và gia vị độc đáo. Hương vị ngọt ngào và thơm ngon.',
      image: 'CaHoiNuongMatOng.jpg',
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sò điệp nướng bơ tỏi',
      desc:' Sò điệp tươi ngon được nướng cùng bơ tỏi thơm béo và gia vị. Một món ngon khó cưỡng cho người yêu hải sản.',
      image: 'SoDiepNuongBoToi.jpg',
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Gỏi bắp bò thập cẩm',
      desc:'Gỏi bò tươi ngon với nước mắm, gia vị, rau sống, và đậu hủ chiên giòn. Món ăn ngon miệng và bổ dưỡng.',
      image: 'GoiBoThapCam.jpg',
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: ' Bánh mì sandwich cá cơm',
      desc:'Bánh mì sandwich độc đáo với lớp cá cơm tươi ngon chiên nhanh cùng với rau sống, cà chua, và sốt mayonnaise tự làm. Một lựa chọn ngon miệng cho bữa trưa hoặc bữa tối.',
      image: 'BanhMiSandWichCaCom.jpg',
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sườn cừu hương nấm',
      desc:'Món ăn sẽ được giảm giá từ 150$  -> 100$ trong 2 ngày 29-30/10/2023.Món ăn độc đáo này kết hợp giữa sườn cừu nướng mềm mịn và hương vị thơm ngon của nấm đồng. Món ăn được ướp gia vị tỉ mỉ và nướng đến khi vàng ươm. Đây là lựa chọn hoàn hảo cho những người yêu thích sườn cừu và hương vị nấm độc đáo..',
      image: 'SuonCuu.jpg',
      genreId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bánh mì bò hầm với sốt phô mai',
      desc:'Món ăn sẽ được giảm giá từ 120$  -> 89$ trong 2 ngày 27-28/10/2023.Bánh mì bò hầm thơm ngon kết hợp với sốt phô mai sữa bò creamy và hấp dẫn. Đây là một món ăn ngon miệng và đầy độ mềm mịn, thêm thật nhiều phô mai để tạo hương vị đặc biệt.',
      image: 'BanhMiPhomai.jpg',
      genreId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: ' Cá nướng lá mắc mật',
      desc:'Món cá nướng lá mắc mật là một biểu tượng của hương vị truyền thống và độc đáo trong ẩm thực. Nó bắt đầu bằng việc chọn một miếng cá tươi ngon, thường là cá hồi hoặc cá ba sa, được ướp đều với một hỗn hợp gia vị đậm đà bao gồm tỏi, ớt, gừng, và nước mắm. Sau đó, miếng cá này được bọc kín bằng lá mắc mật, một loại lá thơm và mỏng.',
      image: 'ca_nuong_mac_mat.jpg',
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Buổi biểu diễn âm nhạc trực tiếp',
      desc:'"Đêm Jazz thứ Tư" - Mỗi thứ Tư tại nhà hàng, chúng tôi tổ chức buổi biểu diễn âm nhạc jazz trực tiếp với các nghệ sĩ tài năng. Khách hàng có cơ hội thưởng thức âm nhạc tuyệt vời cùng với thực đơn đặc biệt.',
      image: 'Live_music.jpg',
      genreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tiệc tối đặc biệt',
      desc:'"Tiệc Hải sản Thứ Năm" - Mỗi Thứ Năm, chúng tôi tổ chức tiệc hải sản với tất cả các loại hải sản tươi ngon như tôm, sò điệp, cá hồi, và sò mực. Một bữa tối ngon miệng không thể bỏ lỡ.',
      image: 'Diner_D.jpg',
      genreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Lễ hội ẩm thực',
      desc:'"Lễ hội Vị biển Mở cửa cửa hàng" - Chúng tôi tổ chức một lễ hội vị biển đặc biệt với các món ăn và đồ uống liên quan đến đại dương. Đây là cơ hội thú vị để thử nghiệm các món đặc biệt như sushi và cocktail hải sản.',
      image: 'LeHoi_AmThuc.jpg',
      genreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Buổi tiệc kỷ niệm dành cho cặp đôi',
      desc:' "Kỷ niệm 10 năm khai trương nhà hàng" - Chúng tôi tổ chức một tiệc kỷ niệm 10 năm  dành cho các cặp đôi với thực đơn dựa trên trái cây. Khách hàng có thể thưởng thức các món ăn và cocktail độc đáo được lấy cảm hứng từ trái cây tươi ngon.',
      image: 'BuaTiec_KyNiem',
      genreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Lớp học nấu ăn',
      desc:'"Học cách làm bánh mì và thực đơn Pháp" - Chúng tôi tổ chức một lớp học nấu ăn đặc biệt với đầu bếp chuyên nghiệp. Khách hàng sẽ học cách làm bánh mì và nấu các món ăn Pháp ngon lành.',
      image: 'LopHocNauAn.jpg',
      genreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ngày hội gia đình',
      desc:'"Ngày Gia đình Thứ Bảy" - Mỗi Thứ Bảy, chúng tôi tổ chức ngày hội gia đình với các hoạt động cho trẻ em, thực đơn gia đình, và giải trí cho cả gia đình.',
      image: 'NgayHoiGiaDinh.jpg',
      genreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tiệc tự chọn rượu vang',
      desc:'"Tiệc Rượu Vang Vùng California" - Chúng tôi tổ chức tiệc tự chọn rượu vang vùng California với hương vị thơm ngon và các lựa chọn rượu vang đặc biệt.',
      image: 'TiecRuoiVang.jpg',
      genreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sự kiện chào đón mùa hè',
      desc:' "Lễ hội Mùa Hè Ẩm thực" - Chúng tôi tổ chức lễ hội mùa hè với thực đơn đặc biệt dành cho mùa này, kèm theo các hoạt động ngoài trời và sự kiện vui nhộn cho khách hàng.',
      image: 'SuKienMuaHe.jpg',
      genreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bình luận đánh giá từ khách hàng nổi tiếng',
      desc:' 10 tháng 7, 2023 -Diễn viên nổi tiếng và đầu bếp truyền hình tham gia vào sự kiện "Lễ hội ẩm thực". Họ trải nghiệm thực đơn và chia sẻ nhận xét tích cực về hương vị và chất lượng món ăn. Các bình luận và đánh giá của họ được hiển thị trên trang web của nhà hàng, tạo sự tin tưởng và thúc đẩy người khác đến thử món ăn tại đây.',
      image: 'LeHoi_AmThuc.jpg',
      genreId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Đánh giá số sao và nhận xét',
      desc:' Một khách hàng có tên John đã đánh giá nhà hàng bằng 5 sao và để lại nhận xét: "Thực đơn đa dạng và ngon miệng, dịch vụ tận tâm. Tôi đã đến đây vào dịp kỷ niệm và chắc chắn sẽ quay lại."',
      image: 'john.jpg',
      genreId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('News', []);
  },
};