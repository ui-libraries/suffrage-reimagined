import router, { routeNames } from '../../router/index'

function goToNextRoute() {
    let index = routeNames.indexOf(router.name);

    if (routeNames[index + 1]) {
      router.push({ name: routeNames[index + 1] });
    }
}

function goToPrevRoute() {
    let index = routeNames.indexOf(router.name);

    if (routeNames[index - 1]) {
      router.push({ name: routeNames[index - 1] });
    }
}

export { goToNextRoute, goToPrevRoute }

// to import into a file
// import { goToNextRoute, goToPrevRoute } 

