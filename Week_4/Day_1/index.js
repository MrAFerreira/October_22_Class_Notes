/* fetch('https://api.spacexdata.com/v4/launches')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    data.forEach((launch) => {
      const patchImage = launch.links.patch.small;
      const launchName = launch.name;
      //console.log(launch.links.patch.small);
      //Here we create the image

      //Also get the name
      //Title
      const titleElement = document.createElement('h2');
      titleElement.innerHTML = launchName;
      document.body.appendChild(titleElement);

      //Image
      const imgElement = document.createElement('img');
      imgElement.setAttribute('src', patchImage);
      imgElement.setAttribute('width', 200);
      document.body.appendChild(imgElement);
    });
  })
  .catch((err) => console.log(err)); */

async function displayPatches(limit = 10) {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/launches');
    const jsonResponse = await response.json();
    const data = jsonResponse.slice(0, limit);

    data.forEach((launch) => {
      const patchImage = launch.links.patch.small;
      const imgElement = document.createElement('img');

      imgElement.setAttribute('src', patchImage);
      imgElement.setAttribute('width', 200);

      document.body.appendChild(imgElement);
    });
  } catch (error) {
    console.log(error);
  }
}

displayPatches();
