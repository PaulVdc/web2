import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import lord from './img/lord.jpg';
import squid from './img/squid.jpg';


const homePage = `
<div class="text-center">
    <h3> MyMovies !</h3>
    <p>Here are my fevorite movies ever ; )</p>
    <div class="pb-3">
        <img class="img-thumbnail w-50" src="${lord}" alt="lord" />
    </div>
    <div>
      <img class="img-thumbnail w-50" src="${squid}" alt="squid" />
    </div>
</div>
      `;
const main =document.querySelector('main');

main.innerHTML = homePage;