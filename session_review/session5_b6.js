let soDien = 452;
let tongTien = 0;
let donGiaB1 = 1678;
let donGiaB2 = 1734;
let donGiaB3 = 2014;
let donGiaB4 = 2536;
let donGiaB5 = 2834;
let donGiaB6 = 2927;
let bangGia = [
  {
    'name': 'Bậc 1',
    'price': donGiaB1,
    'range': [0, 50]
  },
  {
    'name': 'Bậc 2',
    'price': donGiaB2,
    'range': [50, 100]
  },
  {
    'name': 'Bậc 3',
    'price': donGiaB3,
    'range': [100, 200]
  },
  {
    'name': 'Bậc 4',
    'price': donGiaB4,
    'range': [200, 300]
  },
  {
    'name': 'Bậc 5',
    'price': donGiaB5,
    'range': [300, 400]
  },
  {
    'name': 'Bậc 6',
    'price': donGiaB6,
    'range': [400, Infinity]
  }
];

function tinhTongTienDien(bangGia, soDien) {
  let result = [];
  let tongSoTienDien = 0;
  for (let i = bangGia.length - 1; i >= 0; i--) {
    let giaTungBac = bangGia[i];
    if (soDien > giaTungBac.range[0] && soDien <= giaTungBac.range[1]) {
      let tongTienTheoBac = giaTungBac.price * (soDien - giaTungBac.range[0]);
      tongSoTienDien += tongTienTheoBac;
      result.push({
        'name': giaTungBac.name,
        'congThuc': `${soDien - giaTungBac.range[0]} * ${giaTungBac.price}`,
        'total': tongTienTheoBac
      });
      soDien = giaTungBac.range[0];
    }
  }
  result.push({
    'name': "Tổng số tiền điện",
    'total': tongSoTienDien
  })
  return result;
}

console.log(tinhTongTienDien(bangGia, 150));

// if(soDien >= 400){
//   tongTien += donGiaB6 * (soDien - 400);
//   soDien = 400;
// }
// if(soDien >= 350){
//   tongTien += donGiaB5 * (soDien - 350);
//   soDien = 350;
// }
// if(soDien >= 300){
//   tongTien += donGiaB5 * (soDien - 300);
//   soDien = 300;
// }
// if(soDien >= 200){
//   tongTien += donGiaB4 * (soDien - 200);
//   soDien = 200;
// }