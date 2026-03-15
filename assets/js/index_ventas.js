const propiedades_venta = [
  {
    nombre: 'Propiedad 1, Casa en Nueva York',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Moderna casa ubicada en una de las zonas más vibrantes de Nueva York, combinando comodidad, estilo urbano y acceso inmediato a servicios',
    ubicacion: '',
    habitaciones: 4,
    costo: 500000,
    smoke: true,
    pets: false
  },
  {
    nombre: 'Propiedad 2, Casa en las montañas, cerca de un lago',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Esta acogedora casa en las montañas ofrece un entorno natural privilegiado, Su diseño cálido y rústico crea un ambiente perfecto para descansar.',
    ubicacion: '',
    habitaciones: 4,
    costo: 1400000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Propiedad 3, Mansión de lujo en la ciudad',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Lujosa mansión ubicada en el corazón de la ciudad, ofreciendo confort, estilo y acceso a las principales atracciones',
    ubicacion: '',
    habitaciones: 2,
    costo: 800000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Propiedad 4, Departamento moderno en el centro de la ciudad',
    src: 'https://assets.barnes-international.com/bdata/property/2025-07/cb64192a-afb7-50fe-ae19-2afcdfb34d58/1.jpg?width=800&height=600&fit=crop',
    descripcion: 'Departamento moderno en el centro de la ciudad, con acabados de alta gama y vista panorámica',
    ubicacion: '',
    habitaciones: 3,
    costo: 1600000,
    smoke: true,
    pets: true
  }
];

const contenedor = document.querySelector("#contenedor-propiedades");

const renderPropiedades = () => {
let template = "";
for (let ventas of propiedades_venta) {
  template += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${ventas.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${ventas.nombre}
                </h5>
                <p class="card-text">
                  ${ventas.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${ventas.ubicacion}
                <p>
                  <i class="fas fa-bed"></i>  ${ventas.habitaciones}  Habitaciones 
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${ventas.costo.toLocaleString()}</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> ${ventas.smoke === false ? 'No se permite fumar' : 'Se permite fumar'}
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> ${ventas.pets === false ? 'No se permiten mascotas' : 'Se permiten mascotas'}
                </p>
              </div>
            </div>
        </div>
  `;
} 

contenedor.innerHTML = template;
};
renderPropiedades();




