import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand"><img src="https://img.icons8.com/pastel-glyph/64/000000/green-energy.png" width="70" height="70" class="d-inline-block align-top" alt="Icono" loading="lazy"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ml-auto">
                <a class="nav-item nav-link active font-weight-bold" href="#integrantes">Integrantes<span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link active font-weight-bold" href="#babel-webpack">Babel y Webpack</a>
                <a class="nav-item nav-link active font-weight-bold" href="#utilidades">Utilidades en React</a>
                
              </div>
            </div>
          </nav>
    </header>

    <main>
      <br/>
      <section id="integrantes" class="container">
        <h1 align="center">Integrantes del Equipo: Alto Voltaje</h1>
        <div class="table-responsive">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombres</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Email</th>
      <th scope="col">Celular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Catalina</td>
      <td>Restrepo Salgado</td>
      <td>liris.salgadop11@gmail.com</td>
      <td>3145322319</td>
    </tr>
    <tr>
      <td>Jhurany</td>
      <td>Marín Tobón</td>
      <td>jhuranytobon@gmail.com</td>
      <td>3145343361</td>
    </tr>
    <tr>
      <td>Jacobo</td>
      <td>Garcés Oquendo</td>
      <td>jacobogarcesoquendo@gmail.com</td>
      <td>3116657131</td>
    </tr>
    <tr>
      <td>Steban</td>
      <td>Agudelo Restrepo</td>
      <td>stebanagudelo10@gmail.com</td>
      <td>3235039820</td>
    </tr>
    <tr>
      <td>Michael Andrés</td>
      <td>Muñoz Oino</td>
      <td>maicolamo24@gmail.com</td>
      <td>3147783892</td>
    </tr>
  </tbody>
</table>
</div>

      </section>

      <br/>

      <section id="babel-webpack" class="container">
        <h1 align="center">¿Qué son Babel y WebPack?</h1>
        <div class="card mb-3"/>
  <div class="row ">
    <div class="col-md-4">
      <img src="https://desarrolloactivo.ams3.cdn.digitaloceanspaces.com/images/articles/57acef2169e00c0368e96a3b/large@2x.jpg" class="card-img imagen" alt="Babel"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Babel</h5>
        <p class="card-text">Como no todos los navegadores están actualizados a la última versión de Node.js, no sabemos si algún usuario tendrá problemas para utilizar nuestra aplicación. Para esto utilizamos Babel, una herramienta que nos permite transformar nuestro código JavaScript de última generación (o con funcionalidades extras) a un JS que cualquier navegador o versión de Node.js puede entender. <br/> Debemos indicarle a Babel lo que queremos que transforme por medio de plugins.</p>
        <p class="card-text"><small class="text-muted">Información: https://platzi.com/blog/que-es-babel/ <br/> Imagen: https://desarrolloactivo.com/articulos/babel-transpiler/</small></p>
      </div>
    </div>
  </div>
  <br/>
  <div class="card mb-3"/>
  <div class="row ">
    <div class="col-md-4">
      <img src="https://i.imgur.com/0uaBZ9U.jpg" class="card-img imagen" alt="WebPack"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Webpack</h5>
        <p class="card-text">Webpack es un empaquetador de módulos, lo que significa que nos permite generar un achivo único con todos aquellos módulos que necesita nuestra aplicación para funcionar. Esto nos permite incluir todos nuestros documentos JS y CSS en un único archivo, llamado *.bundle.js. Además, se pueden realizar otras tareas de optimización de los códigos, como la minificación y la compresión.</p>
        <p class="card-text"><small class="text-muted">Información: https://www.victorvr.com/tutorial/que-es-webpack<br/> Imagen: https://codequs.com/p/r1oAvKoNI/webpack-5-and-module-federation-a-microfrontend-revolution/</small></p>
      </div>
    </div>
  </div>
</section>

<br/>

   <section id="utilidades" class="container">
     <h1 align="center">¿Para Qué se Usan en React?</h1>
     <div class="card mb-3"/>
  <div class="row ">
    <div class="col-md-4">
      <img src="https://cdn-media-1.freecodecamp.org/images/1*3XcVWZvLKvLukdJ2zbDDpQ.jpeg" class="card-img imagen2" alt="Utilidades"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Configuración de Proyectos</h5>
        <p class="card-text">Cuando realizamos un proyecto con React, utilizar Babel y Webpack nos será muy útil para ser más ágiles programando, mientras solucionamos problemas que pueden presentarse a la hora de ejecutar nuestra aplicación en un dispositivo. <br/> Por un lado, Babel nos permite transformar nuestro código JavaScript ES6 en un JavaScript que cualquier navegador soporte. <br/> Por otro lado, Webpack es una herramienta de compilación que nos permite añadir en un solo archivo, todas las dependencias a los elementos que forman parte de nuestro proyecto de desarrollo, lo que nos permite tener una tarea programada para optimizar la construcción y la ágil puesta en producción de nuestros proyectos. </p>
        <p class="card-text"><small class="text-muted">Información: https://arepa.dev/hola-mundo-en-react-babel-webpack/<br/> Imagen: https://gpolanco.com/configurar-react-desde-cero-con-webpack-y-babel/</small></p>
      </div>
    </div>
  </div>
   </section>
    </main>
    <br/>

    <footer class="footer-style">
      <div class="container text-center">
          <div class="row">
              <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                  <br/>
                  <p class="font-weight-bold">Equipo #6 | 2020</p>
              </div>
              <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                <br/>
                <p class="font-weight-bold" >Institución Educativa Diego Echavarría Misas | Construcción de Elementos de Software Web</p>
                <br/>
              </div>
          </div>
      </div>
  </footer>
    </div>
  );
}

export default App;

