const globeContainer = document.getElementById("globe")
// const globe = Globe();

// const CustomData = [
//   {lat:40.766666,lng:29.916668,size:0.5,color:"red"}, // Turkey
//   {lat:51.509865,lng:-0.118092,size:0.3,color:"white"}, // UK
//   {lat:42.698334,lng:23.319941,size:0.4,color:"green"}, // Bulgaria
//   {lat:35.248036,lng:33.657724,size:0.4,color:"red"}, // Northen Cyprus
//   {lat:41.902782,lng:12.496366,size:0.4,color:"green"}, // Italy
//   {lat:37.983810,lng:23.727539,size:0.3,color:"blue"}, // Greece
//   {lat:44.439663,lng:26.096306,size:0.4,color:"white"}, // Romania
//   {lat:43.856430,lng:18.413029,size:0.3,color:"red"}, // Bosnia
//   {lat:40.409264,lng:49.867092,size:0.4,color:"red"}, // Azerbaijan
// ]

// globe(globeContainer)
//   .backgroundColor("#cbd5e1")
//   .width(800)
//   .height(675)
//   .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
//   .pointsData(CustomData)
//   .pointAltitude('size')
//   .pointColor('color')

// globe.controls().autoRotate = true;
// globe.controls().autoRotateSpeed = 1;


const world = Globe()
(globeContainer)

.width(800)
.height(660)
.backgroundColor("#cbd5e1")

.globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
.pointOfView({ altitude: 6 }, 5000)
.polygonCapColor(feat => 'rgba(200, 0, 0, 0.6)')
.polygonSideColor(() => 'rgba(0, 100, 0, 0.05)')
.polygonLabel(({ properties: d }) => `
    <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
    Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
  `);

// Auto-rotate
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 1.8;

fetch('./main/data.geojson').then(res => res.json()).then(countries => {
world.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'));

setTimeout(() => world
  .polygonsTransitionDuration(4000)
  .polygonAltitude(feat => Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5))
, 3000);
});
