fetch('DarkSoulsWeapons.json')
.then(respuesta => respuesta.json())
.then(responseJson => {
    const allitems=[];
    let group = [];

    responseJson.data.forEach(item => {
        const name = document.createElement('h2');
        name.textContent = item.name;
        name.classList.add('text-xl', 'font-semibold', 'mb-2','bg-gray-100');

        const image= document.createElement('img')
        image.src = item.image;

        const atkp = document.createElement('p');
        atkp.textContent = `Physical ATK: ${item.atk.physical}`;
        atkp.classList.add('text-gray-700', 'mb-1','bg-gray-100');

        const atkm = document.createElement('p');
        atkm.textContent = `Magic ATK: ${item.atk.magic}`;
        atkm.classList.add('text-gray-700', 'mb-1','bg-gray-100');

        const def = document.createElement('p');
        def.textContent = `Physical DEF: ${item.def.physical}`;
        def.classList.add('text-gray-700', 'mb-1', 'bg-gray-100');

        const req = document.createElement('p');
        req.textContent = `Requirements: STR ${item.req.strength}, DEX ${item.req.dexterity}, INT ${item.req.intelligence}, FAI ${item.req.faith}`;
        req.classList.add('text-gray-700', 'mb-1', 'bg-gray-100');

        const durability = document.createElement('p');
        durability.textContent = `Durability: ${item.durability}`;
        durability.classList.add('text-gray-700', 'mb-1','bg-gray-100');

        const weight = document.createElement('p');
        weight.textContent = `Weight: ${item.weight}`;
        weight.classList.add('text-gray-700', 'mb-1','bg-gray-100');

        const attackTypes = document.createElement('p');
        attackTypes.textContent = `Attack Types: ${item.attackTypes.join(', ')}`;
        attackTypes.classList.add('text-gray-700', 'mb-1','bg-gray-100');

        const obtained = document.createElement('p');
        obtained.textContent = `Obtained: ${item.obtained.join(', ')}`;
        obtained.classList.add('text-gray-700', 'mb-1', 'bg-gray-100');

        const container = document.createElement('div');
        container.classList.add('bg-dark', 'p-4', 'rounded-lg', 'shadow', 'w-60' );

        // Agregar elementos al contenedor individual
        container.append(name,image, atkp, atkm, def, req, durability, weight, attackTypes, obtained);
        
        // Agregar el contenedor individual al grupo
        group.push(container);

        // Si el grupo tiene 4 elementos, agregar el grupo al arreglo allitems y reiniciar el grupo
        if (group.length === 1) {
            allitems.push(group);
            group = [];
        }
    });

    // Si quedan elementos en el grupo, agregar el grupo al arreglo allitems
    if (group.length > 0) {
        allitems.push(group);
    }

    // Crear un contenedor principal
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('grid', 'lg:grid-cols-5', 'gap-2', 'p-2');

    // Agregar cada grupo de elementos al contenedor principal
    allitems.forEach(group => {
        const groupContainer = document.createElement('div');
        groupContainer.classList.add('grid', 'grid-cols-2', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-4');

        group.forEach(item => {
            groupContainer.appendChild(item);
        });

        mainContainer.appendChild(groupContainer);
    });

    // Agregar el contenedor principal al cuerpo del documento
    document.body.appendChild(mainContainer);
});