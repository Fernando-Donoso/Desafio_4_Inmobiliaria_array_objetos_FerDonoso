const propiedades_alquiler = [
  {
    nombre: 'Alquiler 1, Departamento en Manhattan, Nueva York',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Sofisticado departamento ubicado en el corazón de Manhattan, una de las zonas más exclusivas y dinámicas de Nueva York.',
    ubicacion: '',
    habitaciones: 4,
    costo: 500000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Alquiler 2, Departamento frente al mar en Miami',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Elegante departamento frente al mar ubicado en una de las zonas más exclusivas de Miami. Ofrece vistas panorámicas al océano.',
    ubicacion: '',
    habitaciones: 4,
    costo: 1400000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Alquiler 3, Casas en Condominio en Los Ángeles',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Conjunto de modernas casas en condominio ubicadas en una de las zonas más cómodas y accesibles de Los Ángeles.',
    ubicacion: '',
    habitaciones: 2,
    costo: 800000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Alquiler 4, Departamento moderno en el centro de la ciudad',
    src: 'https://media.istockphoto.com/id/1300140251/photo/real-estate-agent-holding-keys-to-new-flat.jpg?s=2048x2048&w=is&k=20&c=vwa4aVQgotMPraIUCOe3rjpnqwWGxCqtQyQ4cOLm26o=',
    descripcion: 'Departamento moderno ubicado en pleno centro de la ciudad, con acceso inmediato a comercios, restaurantes, transporte y principales puntos de interés.',
    ubicacion: '',
    habitaciones: 3,
    costo: 1600000,
    smoke: true,
    pets: false
  }
];

const contenedor = document.querySelector("#contenedor-propiedades");

const renderPropiedades = () => {
let template = "";
for (let alquiler of propiedades_alquiler) {
  template += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${alquiler.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${alquiler.nombre}
                </h5>
                <p class="card-text">
                  ${alquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
                <p>
                  <i class="fas fa-bed"></i>  ${alquiler.habitaciones}  Habitaciones 
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo.toLocaleString()}</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
            </div>
        </div>
  `;
} 

contenedor.innerHTML = template;
};
renderPropiedades();




