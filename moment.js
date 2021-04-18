/*
Node Package Manager
Dalam pengembangan aplikasi saat ini, industri gencar memanfaatkan module atau package luar agar 
pengembangan dapat lebih cepat. Semakin kompleks aplikasi tersebut, semakin banyak pula module/package 
yang digunakan. Di sinilah kita memerlukan sebuah package Manager.

Node Package Manager (NPM) merupakan pengelola package untuk JavaScript yang dapat memudahkan kita 
dalam mengelola package yang tersedia pada https://www.npmjs.com/. NPM merupakan standard package 
manager yang disediakan oleh Node.js dan sudah otomatis terpasang ketika memasang Node.js pada komputer kita. 
NPM dapat dioperasikan melalui CMD atau Terminal, Anda pun sudah mencobanya ketika membuat proyek JavaScript.

Selain untuk membuat proyek JavaScript, NPM dapat digunakan untuk memasang atau menghapus 
third party module (modul pihak ketiga). Modul yang dipasang melalui NPM akan disimpan pada folder node_modules.

Terdapat dua tipe pemasangan modul melalui NPM: yakni global dan lokal. Bila modul dipasang secara global, 
maka modul tersebut akan bersifat layaknya core module dan dapat digunakan di mana pun. 
Sedangkan modul yang dipasang secara lokal hanya dapat digunakan pada cakupan project Node.js 
yang memasangnya saja.

Namun saat ini, kami sangat menyarankan Anda untuk memasang modul pihak ketiga secara lokal saja. 
Hindari pemasangan modul secara global karena akan menyebabkan banyak masalah. 
Sebaiknya gunakan npx bila Anda ingin menjalankan Node.js package di mana pun Anda inginkan. 

MomentJS merupakan salah satu modul pihak ketiga yang populer untuk mengelola waktu di Node.js. 
Untuk memasangnya secara lokal, jalankan perintah berikut pada Terminal di project Node.js Anda:

npm install moment

Setelah pemasangan selesai, Anda bisa menggunakan module moment pada proyek Node.js Anda.
*/

const moment=require('moment');

const date=moment().format("MMM Do YY");
console.log(date);

/**
 * output:
 * Jan 11th 21
 */



 /*
 Untuk menghapus modul pihak ketiga, Anda bisa gunakan perintah npm uninstall <package-name>. 
 Bila Anda ingin menghapus modul moment, maka tuliskan:

npm uninstall moment

Terakhir, NPM juga bisa berfungsi sebagai runner script. 
Ia dapat menjalankan script yang dituliskan pada objek scripts yang ada di berkas package.json. 
Dengan menetapkan script pada package.json, Anda dapat membuat jalan pintas untuk menjalankan Node.js process. 
Selain itu, Anda bisa membuat lebih dari satu script sesuai dengan environment yang Anda inginkan.

"scripts": {
    "start-dev": "NODE_ENV=development node app.js",
    "start": "NODE_ENV=production node app.js"
  }
  
Untuk menjalankan script, Anda cukup menggunakan perintah npm run <nama-script>. 
Berdasarkan contoh di atas, jika Anda ingin menjalankan di environment development maka tuliskan perintah:

npm run start-dev
*/