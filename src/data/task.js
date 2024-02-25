import axios from "axios";
// export const tasks=
// [
//     {
//         id: 0,
//         title: 'primera tarea',
//         description: 'mi primera tarea'
//     },
//     {
//         id: 1,
//         title: 'segunda tarea',
//         description: 'mi segunda tarea'
//     }, {
//         id: 2,
//         title: 'tercera tarea',
//         description: 'mi tercera tarea'
//     },
// ]

export let urlbase = "https://taskbackend-5jt6.onrender.com";
// export const urlbase = 'http://localhost:3000';

const getTaskData = async () => {
  try {
    const response = await axios.get(`${urlbase}/api/task`);

    // Axios ya maneja automáticamente los códigos de estado y lanza un error en caso de un código no exitoso
    // Por lo tanto, no necesitas verificar manualmente response.ok

    // Obtén directamente los datos de la respuesta
    const data = response.data;

    // Puedes realizar más acciones con los datos aquí
    // console.log(data);

    // Exportar los datos
    return data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error; // Puedes lanzar el error nuevamente si es necesario
  }
};
// const fetchData = async () => {
//     try {
//         // Hacer la solicitud a la API
//         const response = await fetch(`${urlbase}/api/task`);

//         // Verificar si la solicitud fue exitosa (código de estado 200-299)
//         if (!response.ok) {
//             throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
//         }

//         // Parsear la respuesta como JSON
//         const data = await response.json();
//         // console.log(data)
//         // Exportar los datos
//         return data;
//     } catch (error) {
//         console.error('Error al obtener los datos:', error);
//         throw error; // Puedes lanzar el error nuevamente si es necesario
//     }
// };
export { getTaskData };
