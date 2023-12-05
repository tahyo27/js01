const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg",
 "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg"];
 
 const chosenImage = images[Math.floor(Math.random() * images.length)];

 const bgImage = `img/${chosenImage}`;

 document.body.style.backgroundImage = `url(${bgImage})`;
 document.body.style.backgroundSize = "cover"; // 배경 이미지가 웹 창에 꽉 차도록 설정
 document.body.style.backgroundRepeat = "no-repeat"; // 배경 이미지 반복 없이 표시
 document.body.style.backgroundPosition = "center"; // 이미지를 가운데 정렬

