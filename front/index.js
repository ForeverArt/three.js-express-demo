var loader = new THREE.OBJLoader();
    // load a resource
    loader.load(
        // resource URL
        'http://localhost:3000/models/F117.obj',
        // called when resource is loaded
        function (object) {
          console.log(object)
        },
        // called when loading is in progresses
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {

            console.log('An error happened');

        }
    );
