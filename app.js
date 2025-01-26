const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3002;

// Conexión a MongoDB con autenticación
mongoose
  .connect('mongodb://developer:IdiAst2023@10.10.7.41:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conexión a MongoDB establecida');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });

// Middleware para parsear JSON automáticamente
app.use(express.json());

// Función para enviar los datos a Node-RED en una ruta específica
const sendDataToNodeRED = async (route, radarData) => {
  try {
    console.log(`Enviando datos a Node-RED en la ruta ${route}:`, radarData);
    await axios.post(`http://10.10.7.41:1880${route}`, radarData);
    console.log(`Datos enviados correctamente a Node-RED en la ruta ${route}`);
  } catch (error) {
    console.error(`Error al enviar los datos a Node-RED en la ruta ${route}:`, error);
  }
};

// Rutas para recibir datos desde la aplicación y enviarlos a Node-RED

// ************************ GMT ********************************

//RECIBIENDO  DATOS DE PIREN
app.post('/api/spotter/piren', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/piren', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en piren' });
});

// *************************************************************

// ************************ AST ********************************

//RECIBIENDO DATOS DE ESTACIONAMIENTO
app.post('/api/spotter/estacionamiento', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/estacionamiento', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en estacionamiento' });
});

// *************************************************************

// *********************** MOWI ********************************

//RECIBIENDO DATOS DE ISLA - LOLA
app.post('/api/spotter/prueba3', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/prueba3', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en prueba3' });
});

//RECIBE DATOS DE BETECOI
app.post('/api/spotter/betecoi', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/betecoi', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en betecoi' });
});

//RECIBE DATOS DE LAUREL-OESTE
app.post('/api/spotter/laurel', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/laurel', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en laurel' });
});

//RECIBE DATOS DE LEUCAYEC 
app.post('/api/spotter/leucayec', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/leucayec', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en leucayec' });
});

// ****************************************************************

// ********************SALMONES AUSTRAL****************************

//RECIBIENDO DATOS DE POCOIHUEN
app.post('/api/spotter/pocoihuen', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/pocoihuen', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en pocoihuen' });
});

//RECIBIENDO DATOS DE CONTAO
app.post('/api/spotter/contao', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/contao', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en contao' });
});

//NO RECIBE DATOS DE PIRQUEN
app.post('/api/spotter/pirquen', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/pirquen', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en pirquen' });
});

//NO RECIBE DATOS DE ROLLIZO FENIX
app.post('/api/spotter/rollizofenix', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/rollizofenix', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en rollizo fenix' });
});

//NO RECIBE DATOS DE ROLLIZO DON MIGUEL
app.post('/api/spotter/rollizodonmiguel', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/rollizodonmiguel', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en rollizo don miguel' });
});

//RECIBIENDO DATOS DE REÑIHUE
app.post('/api/spotter/renihue', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/renihue', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en renihue' });
});

//RECIBIENDO DATOS DE POLOCUHE
app.post('/api/spotter/polocuhe', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/polocuhe', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en polocuhe' });
});

//RECIBIENDO DATOS DE ILQUE
app.post('/api/spotter/ilque', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/ilque', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en ilque' });
});

//RECIBIENDO DATOS DE QUENAC
app.post('/api/spotter/quenac', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/quenac', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en quenac' });
});

//RECIBIENDO DATOS DE TRAIGUEN
app.post('/api/spotter/traiguen', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/traiguen', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en traiguen' });
});

//RECIBIENDO DATOS DE VERDUGO
app.post('/api/spotter/verdugo', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/verdugo', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en verdugo' });
});

// ****************************************************************

// ************************ AQUACHILE - 32 ************************

app.post('/api/spotter/amparogrande', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/amparogrande', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en amparogrande' });
});

app.post('/api/spotter/angostura', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/angostura', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en angostura' });
});

app.post('/api/spotter/aysen4', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/aysen4', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en aysen4' });
});

app.post('/api/spotter/brazoguardramiro', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/brazoguardramiro', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en brazoguardramiro' });
});

app.post('/api/spotter/brazohojeda', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/brazohojeda', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en brazohojeda' });
});

app.post('/api/spotter/brazohojeda2', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/brazohojeda2', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en brazohojeda2' });
});

app.post('/api/spotter/caceres', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/caceres', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en caceres' });
});

app.post('/api/spotter/canalad6', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/canalad6', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en canalad6' });
});

app.post('/api/spotter/canalpereznorte', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/canalpereznorte', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en canalpereznorte' });
});

app.post('/api/spotter/cascada', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/cascada', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en cascada' });
});

app.post('/api/spotter/concoto', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/concoto', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en concoto' });
});

app.post('/api/spotter/elefante', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/elefante', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en elefante' });
});

app.post('/api/spotter/esterofrio', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/esterofrio', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en esterofrio' });
});

app.post('/api/spotter/fislaswagner', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/fislaswagner', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en fislaswagner' });
});

app.post('/api/spotter/graffer', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/graffer', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en graffer' });
});

app.post('/api/spotter/herradura', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/herradura', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en herradura' });
});

app.post('/api/spotter/huelmo', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/huelmo', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en huelmo' });
});

app.post('/api/spotter/huenquillahue', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/huenquillahue', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en huenquillahue' });
});

app.post('/api/spotter/islasanchezaqua', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/islasanchezaqua', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en islasanchezaqua' });
});

app.post('/api/spotter/ladrilleros', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/ladrilleros', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en ladrilleros' });
});

app.post('/api/spotter/marta', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/marta', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en marta' });
});

app.post('/api/spotter/pamela', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/pamela', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en pamela' });
});

app.post('/api/spotter/pangal1', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/pangal1', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en pangal1' });
});

app.post('/api/spotter/pangal2', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/pangal2', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en pangal2' });
});

app.post('/api/spotter/refugio', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/refugio', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en refugio' });
});

app.post('/api/spotter/serrano', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/serrano', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en serrano' });
});

app.post('/api/spotter/staines2', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/staines2', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en staines2' });
});

app.post('/api/spotter/teguel1', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/teguel1', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en teguel1' });
});

app.post('/api/spotter/teguel3', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/teguel3', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en teguel3' });
});

app.post('/api/spotter/teresa1', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/teresa1', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en teresa1' });
});

app.post('/api/spotter/valverde6', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/valverde6', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en valverde6' });
});

app.post('/api/spotter/vicunamackena', async (req, res) => {
  const radarData = req.body;
  await sendDataToNodeRED('/api/spotter/vicunamackena', radarData);
  res.status(200).json({ message: 'Datos recibidos correctamente en vicunamackena' });
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
})