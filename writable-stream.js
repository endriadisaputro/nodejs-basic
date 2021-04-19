/*
Writable Stream
Pada materi sebelumnya kita sudah belajar bagaimana membaca berkas menggunakan teknik stream (readable stream). 
Tapi apakah Anda tahu bahwa teknik stream juga dapat digunakan untuk menulis berkas? Teknik ini disebut 
writable stream.

Untuk membuat writable stream dalam menulis berkas gunakanlah method createWriteStream() dari core module fs.
*/
const fs=require('fs');

const writableStream=fs.createWriteStream('output.txt');

/*
Fungsi ini menerima satu argumen yakni alamat berkas untuk menyimpan hasil data yang dituliskan. 
Berkas output akan dibuat secara otomatis jika tidak ada, namun bila berkas tersebut sudah ada, 
maka data sebelumnya akan tertimpa! Anda harus hati-hati yah!

Lalu untuk menuliskan data pada writable stream, gunakan method write().
*/
const fs=require('fs');

const writableStream=fs.createWriteStream('output.txt');

writableStream.write('ini merupakan baris pertama\n');
writableStream.write('ini merupakan baris kedua\n');
writableStream.end();

/*
Method end() digunakan untuk menandakan akhir dari 
writable stream sekaligus bisa digunakan sebagai penulisan writeable terakhir.
*/
const fs=require('fs');

const writableStream=fs.createWriteStream('output.txt');

writableStream.write('ini merupakan baris pertama');
writableStream.write('ini merupakan baris kedua');
writableStream.end('akhir dari writable stream!');

/*
Kode di atas akan menghasilkan output.txt dengan data seperti ini:

Ini merupakan teks baris pertama!
Ini merupakan teks baris kedua!
Akhir dari writable stream!
*/