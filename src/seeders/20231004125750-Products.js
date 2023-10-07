'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
      id:1,
      keyword: "banh-mi-baguette",
      name: 'Bánh mì baguette',
      image: `Appertizer_Bread.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id:2,
      keyword: "com-gao-lut",
      name: 'Cơm gạo lứt',
      image: `Appetizer_Brown_rice.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id:3,
      keyword: "banh-korokke",
      name: 'Bánh Korokke',
      image: `Appetizer_BanhKorokke.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      id:4,
      keyword: "salad-hai-san-chua-cay",
      name: 'Salad hải sản chua cay',
      image: `Appetizer_Salas_HaiSan_ChuaCay.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id:5,
      keyword: "soup-bouilabaisee",
      name: 'Súp Bouilabaisee',
      image: `Appetizer_Soup_Bouilabaisee.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id:6,
      keyword: "tom-chien-xu",
      name: 'Tôm chiên xù',
      image: `Appetizer_TomChienXu.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id:7,
      keyword: "salad-carrot",
      name: 'Salad cà rốt',
      image: `Appetizer_Carrot.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id:8,
      keyword: "com-trung-cuon",
      name: 'Cơm trứng cuộn',
      image: `Appetizer_Eggs-rice.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id:9,
      keyword: "hamburger",
      name: 'Hamburger',
      image: `Appetizer_Hamburger.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id:10,
      keyword: "Mien-xao",
      name: 'Miến xào',
      image: `Appetizer_Japchae.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id:11,
      keyword: "banh-goi-mandu",
      name: 'Bánh gối (Mandu)',
      image: `Appetizer_Mandu.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:12,
      keyword: "com-tron-han-quoc",
      name: 'Cơm trộn hàn quốc ',
      image: `Appetizer_Bibimbap.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:13,
      keyword: "salad-rau-qua",
      name: 'Salad rau quả ',
      image: `Appetizer_Salas.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:14,
      keyword: "salad-cu-qua",
      name: 'Salad củ quả ',
      image: `Appetizer_salas2.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:15,
      keyword: "tokboki",
      name: 'Tokboki hàn quốc',
      image: `Appetizer_Toboki.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:16,
      keyword: "tokboki-trung",
      name: 'Tokbokki trứng hàn quốc ',
      image: `Appetizer_Toboki1.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:17,
      keyword: "mien-xao-han-quoc",
      name: 'Miến xào hàn quốc',
      image: `Appertizer_mienxaoKorea.png`,
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:18,
      keyword: "bingsu-truyen-thong",
      name: 'Bingsu truyền thống ',
      image: `Desserts_Bingsu1.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:19,
      keyword: "bingsu-oreo",
      name: 'Bingsu Oreo ',
      image: `Desserts_Bingsu2.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:20,
      keyword: "bingsu-xoai",
      name: 'Bingsu xoài ',
      image: `Desserts_Bingsu5.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:21,
      keyword: "bingsu-tra-xanh",
      name: 'bingsu trà xanh',
      image: `Desserts_Bingsu6.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:22,
      keyword: "bingsu-phomai",
      name: 'bingsu phomai',
      image: `Desserts_Bingsu4.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:23,
      keyword: "bingsu-caffe",
      name: 'bingsu cà phê',
      image: `Desserts_Bingsu3.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:24,
      keyword: "kem-tuoi",
      name: 'Kem tươi',
      image: `Desserts_Cream.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:25,
      keyword: "pudding-cherry",
      name: 'Pudding cherry',
      image: `Desserts_Banna_cotta.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:26,
      keyword: "kem-tuoi-cherry",
      name: 'Kem tươi cherry',
      image: `Desserts_Cream_cherry.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:27,
      keyword: "pudding-dau",
      name: 'Pudding dâu tây',
      image: `Desserts_Flan.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:28,
      keyword: "sua-chua-mit",
      name: 'Sữa chua mít',
      image: `Desserts_Mix_Fruits.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:29,
      keyword: "sua-chua-dua-hau",
      name: 'Sữa chua dưa hấu',
      image: `Desserts_MixFruit.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:30,
      keyword: "sua-chua-dau-tay",
      name: 'Sữa chua dâu tây',
      image: `Desserts_Suachua_dau.png`,
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:31,
      keyword: "caffee-sua",
      name: 'Cà phê sữa ',
      image: `Drink_Milk-Coffee.png`,
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:32,
      keyword: "Nuoc-uong-hoa-qua",
      name: 'Nước uống hoa quả ',
      image: `Drink_Milk-Fruit.png`,
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:33,
      keyword: "Nuoc-gao-han-quoc",
      name: 'Nước gạo hàn quốc ',
      image: `Drink_Rice.jpg`,
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:34,
      keyword: "tra-phuc-long",
      name: 'Trà phúc long',
      image: `Drink_Tea.png`,
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:35,
      keyword: "tra-ngo",
      name: 'Trà ngô ',
      image: `Drink_Tea1.png`,
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:36,
      keyword: "ruou-gao-han-quoc",
      name: 'Rượu gạo hàn quốc',
      image: `Drink_wine-rice.jpg`,
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:37,
      keyword: "ruou-han-quoc-truyen-thong",
      name: 'Rượu  hàn quốc',
      image: `Drink_Wine.jpg`,
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:38,
      keyword: "combo-thit-bo-nuong-set1",
      name: 'Combo thịt bò nướng set1 ',
      image: `FoodCombo_Beff-grill1.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:39,
      keyword: "combo-thit-bo-nuong-set2",
      name: 'Combo thịt bò nướng set2 ',
      image: `FoodCombo_Beff-grill2.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:40,
      keyword: "combo-thit-bo-nuong-set3",
      name: 'Combo thịt bò nướng set3 ',
      image: `FoodCombo_Beff-grill3.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:41,
      keyword: "combo-thit-bo-nuong-cao-cap",
      name: 'Combo thịt bò nướng premium ',
      image: `FoodCombo_Premium_Beef-Grill.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:42,
      keyword: "Combo-thit-ga-coca",
      name: 'Combo thịt gà + coca cola ',
      image: `FoodCombo_Chicken.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:43,
      keyword: "Combo-bua-an-gia-dinh",
      name: 'Combo bữa ăn gia đình ',
      image: `FoodCombo_family.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:44,
      keyword: "Combo-com-4-mon-set1",
      name: 'Combo cơm 4 món set1 ',
      image: `FoodCombo_Rice1.png `,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:45,
      keyword: "Combo-com-4-mon-set2",
      name: 'Combo cơm 4 món set2 ',
      image: `FoodCombo_Rice2.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:46,
      keyword: "Combo-com-4-mon-set3",
      name: 'Combo cơm 4 món set3 ',
      image: `FoodCombo_Rice3.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:47,
      keyword: "Combo-com-4-mon-set4",
      name: 'Combo cơm 4 món set4 ',
      image: `FoodCombo_Rice4.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:48,
      keyword: "Combo-com-4-mon-set5",
      name: 'Combo cơm 4 món set5',
      image: `FoodCombo_Rice5.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:49,
      keyword: "Combo-com-4-mon-set6",
      name: 'Combo cơm 4 món set6 ',
      image: `FoodCombo_Rice6.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:50,
      keyword: "Combo-com-4-mon-set7",
      name: 'Combo cơm 4 món set7 ',
      image: `FoodCombo_Rice7.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:51,
      keyword: "Combo-bua-trua-1-nguoi-set1",
      name: 'Combo bữa trưa 1 người set1 ',
      image: `FoodCombo_Lunch1.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:52,
      keyword: "Combo-bua-trua-1-nguoi-set2",
      name: 'Combo bữa trưa 1 người set2 ',
      image: `FoodCombo_Lunch2.png`,
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:53,
      keyword: "bo-ham-nam",
      name: 'Bò hầm nấm ',
      image: `MainFood_Beef_ribs.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:54,
      keyword: "bo-ap-chao",
      name: 'Bò áp chảo ',
      image: `MainFood_Beef.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:55,
      keyword: "thi-bo-sot-vang",
      name: 'Thịt bò sốt vang ',
      image: `MainFood_Beef1.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:56,
      keyword: "bo-xao-hanh-tay-sot-bbq",
      name: 'Thịt bò xào hành tây sốt bbq',
      image: `MainFood_Beef2.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:57,
      keyword: "thit-bo-ham-trung-quoc",
      name: 'Thịt bò hầm trung quốc',
      image: `MainFood_Beff_tofu.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:58,
      keyword: "thit-bo-ham-nam-han-quoc",
      name: 'Thịt bò hầm nấm hàn quốc',
      image: `MainFood_Beffstew_mushroom.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:59,
      keyword: "ga-ham-hat-sen",
      name: 'Gà hầm hạt sen',
      image: `MainFood_Chicken_stew.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:60,
      keyword: "ga-sot-mat-ong",
      name: 'Gà sốt mật ong',
      image: `MainFood_Chicken.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:61,
      keyword: "mien-ga-chua-ngot",
      name: 'Miến gà chua ngọt',
      image: `MainFood_Chicken_noodle.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:62,
      keyword: "ga-ham-ngu-vi",
      name: 'Gà hầm ngũ vị',
      image: `MainFood_Chicken_stew2.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:63,
      keyword: "canh-ga-sot-cay",
      name: 'Cánh gà sốt cay',
      image: `MainFood_Chicken_Wings.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:64,
      keyword: "ga-ham-mua-dong",
      name: 'Gà hầm mùa đông',
      image: `MainFood_ChickenStew_fruit.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:65,
      keyword: "mi-lanh",
      name: 'Mì lạnh',
      image: `MainFood_cold_noodles.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:66,
      keyword: "ngo-chien-pho-mai",
      name: 'Ngô chiên phô mai',
      image: `MainFood_Corn-cheese.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:67,
      keyword: "my-tuong-den",
      name: 'Mỳ tương đen ',
      image: `MainFood_dark_soy_noodles.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:68,
      keyword: "trung-ran-thap-cam",
      name: 'Trứng rán thập cẩm',
      image: `MainFood_Egg.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:69,
      keyword: "ga-sot-ot-chuong",
      name: 'Gà sốt ớt chuông',
      image: `MainFood_Fried_chicken2.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:70,
      keyword: "dui-ga-chien-nuoc-mam",
      name: 'Đùi gà chiên nước mắm',
      image: `MainFood_Fried_chicken.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:71,
      keyword: "dui-ga-sot-cay",
      name: 'Đùi gà sốt cay',
      image: `MainFood_Fried_chicken6.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:72,
      keyword: "ga-sot-cay-ngot",
      name: 'Trứng rán thập cẩm',
      image: `MainFood_Fried_chicken8.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:73,
      keyword: "canh-ga-kfc",
      name: 'Cánh gà KFC',
      image: `MainFood_Friedchicken7.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:74,
      keyword: "dui-ga-kfc",
      name: 'Đùi gà KFC',
      image: `MainFood_Fried_chicken9.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:75,
      keyword: "suon-bo-ham-cu-cai",
      name: 'Sườn bò hầm củ cải',
      image: `MainFood_Gamjatang.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:76,
      keyword: "sup-ggori-gomtang",
      name: 'Súp Ggori gomtang',
      image: `MainFood_Ggori_Gomtang.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:77,
      keyword: "than-bo-kobe-nuong-tang",
      name: 'Thăn bò kobe nướng tảng',
      image: `MainFood_Grill_Beeftenderloin1.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:78,
      keyword: "bap-bo-kobe",
      name: 'Bắp bò Kobe',
      image: `MainFood_Grill_Beff_Cobe.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:79,
      keyword: "suon-bo-sot-tieu-den",
      name: 'Sườn bò sốt tiêu đen',
      image: `MainFood_Grill_Beff_stone.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:80,
      keyword: "uc-ga-sot-bbq",
      name: 'Ức gà sốt BBQ',
      image: `MainFood_Grill_Chicken-Bulgogi.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:81,
      keyword: "combo-nam-nhung-lau",
      name: 'Combo nấm nhúng lẩu',
      image: `MainFood_Grill_Mushroom.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:82,
      keyword: "tim-bo-kobe",
      name: 'Tim bò Kobe',
      image: `MainFood_Grill_Tangsukyuk.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:83,
      keyword: "bap-bo-sot-tieu-den",
      name: 'Bắp bò sốt tiêu đen',
      image: `MainFood_Grill_Yangnyeom_Galbi.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:84,
      keyword: "ba-chi-bo",
      name: 'Ba chỉ bò',
      image: `MainFood_Grill-BeefCobe.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:85,
      keyword: "trung-hap-han-quoc",
      name: 'Trứng hấp hàn quốc',
      image: `MainFood_Gyeran_Jjim.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:86,
      keyword: "thit-bo-xao-rau-cu",
      name: 'Thịt bò xào rau củ',
      image: `MainFood_Japchae.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:87,
      keyword: "ga-sot-chua-ngot",
      name: 'Gà sốt chua ngọt',
      image: `MainFood_Kanpungi.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:88,
      keyword: "kimbap-truyen-thong",
      name: 'Kim bắp truyền thống',
      image: `MainFood_Kimbap.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:89,
      keyword: "kim-chi-dau-hu",
      name: 'Kim chi đậu hũ',
      image: `MainFood_Kimchi_Jjigae.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:90,
      keyword: "com-tron-truyen-thong-han-quoc",
      name: 'Cơm trộn truyền thống Hàn Quốc',
      image: `MainFood_Mixbeff_egg_fruit2.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:91,
      keyword: "sup-nam-trung-hoa",
      name: 'Súp nấm Trung Hoa',
      image: `MainFood_Mixbeff_egg_fruit2.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:92,
      keyword: "mi-den",
      name: 'Mì đen ',
      image: `MainFood_Noodles.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:93,
      keyword: "mi-tron-thap-cam",
      name: 'Mì trộn thập cẩm',
      image: `MainFood_Noodles2.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:94,
      keyword: "com-rang-trung",
      name: 'Cơm rang trứng',
      image: `MainFood_Rice_egg1.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:95,
      keyword: "com-ga",
      name: 'Cơm gà',
      image: `MainFood_Rice_meat_ribs.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:96,
      keyword: "com-rang-dong-bien",
      name: 'Cơm rang dong biển',
      image: `MainFood_Ried_rice.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:97,
      keyword: "sup-trung-han-quoc",
      name: 'Súp trứng hàn quốc',
      image: `MainFood_Soup_eggs.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:98,
      keyword: "sup-kim-chi-thit-bo",
      name: 'Súp kim chi thịt bò',
      image: `MainFood_SoupBeff.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:99,
      keyword: "sup-bo-ham-bi-dao",
      name: 'Súp bò hầm bí đao',
      image: `MainFood_SoupBeff_squash.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:100,
      keyword: "sup-kim-chi",
      name: 'Canh kim chi ',
      image: `MainFood_SoupKimChi.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:101,
      keyword: "spagetti",
      name: 'Mỳ ý',
      image: `MainFood_spaghetti.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:102,
      keyword: "suong-bo-ninh-nhu",
      name: 'Sương bò ninh nhừ',
      image: `MainFood_Sulungtang.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:103,
      keyword: "thit-chien-gion-han-quoc",
      name: 'Thịt chiên giòn Hàn Quốc',
      image: `MainFood_Tangsukyuk.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:104,
      keyword: "sup-bo-ham-nam",
      name: 'Súp bò hầm nấm',
      image: `MainFood_Yukgaejang.png`,
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:105,
      keyword: "hai-san-chua-cay",
      name: 'Hải sản chua cay',
      image: `SeaFood.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:106,
      keyword: "bao-ngu-hap-xa",
      name: 'Bào ngư hấp xả',
      image: `SeaFood_abalone.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:107,
      keyword: "banh-kep-hai-san",
      name: 'Bánh kếp hải sản',
      image: `SeaFood_BanhKepHaiSan.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:108,
      keyword: "sup-so-cu-qua",
      name: 'Súp sò củ quả',
      image: `SeaFood_Clam.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:109,
      keyword: "mien-xao-hai-san",
      name: 'Miến xào hải sản',
      image: `SeaFood_MienXaoHS.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:110,
      keyword: "cua-huynh-de",
      name: 'Cua huỳnh đế',
      image: `SeaFood_CuaHuynhDe.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:111,
      keyword: "mi-xao-hai-san",
      name: 'Mì xào hải sản',
      image: `SeaFood_MiXaoHs.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:112,
      keyword: "muc-nuong-1-nang",
      name: 'Mực nướng 1 nắng',
      image: `SeaFood_MucNuong1Nang.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:113,
      keyword: "mi-hai-san",
      name: 'Mì hải sản',
      image: `SeaFood_Noodles_Eggs.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:114,
      keyword: "oc-huong-rang-muoi",
      name: 'Ốc hương rang muối',
      image: `SeaFood_OcHuongRangMuoi.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:115,
      keyword: "tom-sot-thai",
      name: 'Tôm sốt thái',
      image: `SeaFood_Prawn.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:116,
      keyword: "sashimi-truyen-thong",
      name: 'Sashimi truyền thống',
      image: `SeaFood_Sashimi_ca.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:117,
      keyword: "hai-san-dau-hu-non",
      name: 'Hải sản đậu hũ non',
      image: `SeaFood_Soondubu_Jigae.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:118,
      keyword: "muc-sot-cay",
      name: 'Mực sốt cay',
      image: `SeaFood_Squid.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:119,
      keyword: "tom-xu-chien-gion",
      name: 'Tôm xú chiên giòn',
      image: `SeaFood_TomChienXu.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:120,
      keyword: "vem-xanh-new-zealand-sot-tieu-den",
      name: 'Vẹm xanh New Zealand sốt tiêu đen',
      image: `SeaFood_VemXAnh_New_Zealand.png`,
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', []);
  }
};
