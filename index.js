import fs from "fs";
import start from './server.js'

const fileToRead = fs.createWriteStream("./test.txt");

for (let index = 0; index < 10000; index++) {
  fileToRead.write(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sodales risus, nec tempus nulla scelerisque sed. Fusce rhoncus aliquet dictum. In eu maximus augue. Mauris sit amet turpis nulla. Cras sodales, enim at fermentum hendrerit, orci mauris dignissim velit, commodo malesuada neque ante in tortor. Sed rutrum lorem eu nibh placerat lobortis porta vel enim. Sed sit amet nunc ut quam porttitor eleifend. Vestibulum mi magna, posuere eget egestas sit amet, sodales interdum augue. Ut fringilla sodales felis, sit amet placerat ante dapibus nec. Integer aliquam ex orci, quis consectetur orci dictum id. Morbi bibendum efficitur libero in mattis"
  );
}
start();