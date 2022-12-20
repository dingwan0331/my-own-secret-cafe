module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("regions", [
      { id: 1, name: "강남" },
      { id: 2, name: "홍대" },
      { id: 3, name: "신촌" },
      { id: 4, name: "신사" },
      { id: 5, name: "사당" },
    ]);
    const regionArray = ["강남", "홍대", "신촌", "신사", "사당"];
    const cafeArray = [
      "투썸플레이스",
      "스타벅스",
      "할리스커피",
      "엔젤리너스",
      "탐앤탐스",
    ];
    const priceOfAmericanoArray = [3000, 3500, 4000, 4500, 5000];
    const socketEnum = ["0~5", "6~10", "11~15", "16~"];
    const cafeData = [];
    const openTimeArray = [900, 930, 1000, 1030, 1100, 0];
    const closeTimeArray = [2100, 2130, 2200, 2230, 2300, 2330, 2400, 0];

    let a = 1;
    for (let i = 0; i < cafeArray.length; i++) {
      for (let j = 0; j < regionArray.length; j++) {
        const priceOfAmericanoRandomIndex = Math.floor(
          Math.random() * priceOfAmericanoArray.length
        );

        const socketEnumRandoIndex = Math.floor(
          Math.random() * socketEnum.length
        );
        const longtitude = Math.random() * 180;
        const latitude = Math.random() * 90;

        cafeData.push({
          id: a,
          name: `${cafeArray[i]} ${regionArray[j]}점`,
          description: "",
          price_of_americano:
            priceOfAmericanoArray[priceOfAmericanoRandomIndex],
          number_of_socket: socketEnum[socketEnumRandoIndex],
          open_time:
            openTimeArray[Math.floor(Math.random() * openTimeArray.length)],
          close_time:
            closeTimeArray[Math.floor(Math.random() * closeTimeArray.length)],
          address: regionArray[j],
          latitude: latitude,
          longtitude: longtitude,
          is_seminaroom: Boolean(Math.floor(Math.random() * 2)),
          wifi_image_url: "a",
          thumbnail_url: "a",
          main_image_url: "a",
          menu_image_url: "a",
          region_id: Math.floor(Math.random() * regionArray.length) + 1,
          created_at: new Date(),
          updated_at: new Date(),
        });
        a++;
      }
    }
    return queryInterface.bulkInsert("cafes", cafeData);
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("cafes", null, {});
    return queryInterface.bulkDelete("regions", null, {});
  },
};
