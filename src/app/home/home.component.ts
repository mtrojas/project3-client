import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user'))

  constructor() { }

  ngOnInit() {
      var gallery = document.querySelector('.gallery');
      var overlay = document.querySelector('.overlay');
      var overlayImage = overlay.querySelector('img');
      var overlayClose = overlay.querySelector('.close');

      function generateHTML([h, v]) {
        return `
        <div class="item h${h} v${v}">
          <img src="../assets/images/${randomNumber(12)}.jpg">
          <div class="item__overlay">
            <button >View -></button>
          </div>
        </div>
        `;
      }

      function randomNumber(limit) {
        return Math.floor(Math.random() * limit) + 1;
      }

      function handleClick(e) {
        const src = e.currentTarget.querySelector('img').src;
        overlayImage.src = src;
        overlay.classList.add('open');
      }

      function close() {
        overlay.classList.remove('open');
      }

      var digits = Array.from({ length: 20}, () =>
        [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1,1], [1, 1],
        [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
        [1, 1], [1, 1], [1, 1], [1, 1]]);
      var html = digits.map(generateHTML).join('');
      gallery.innerHTML = html;

      var items = document.querySelectorAll('.item');
      items.forEach(item => item.addEventListener('click', handleClick));

      overlayClose.addEventListener('click', close);
  }

}
