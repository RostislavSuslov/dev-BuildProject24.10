const headerNav = document.querySelector('.header-nav')
const burger = document.querySelector('.btn-burger')
burger.addEventListener('click', () => headerNav.classList.toggle('show'))
console.log('test')
const installGenplan = () => {
    const address = document.querySelector('#address')
    const floor = document.querySelector('#floor')
    const flat = document.querySelector('#flat')
    const builds = document.querySelectorAll('.build-path')


    builds.forEach(build => {
        build.addEventListener('mouseover', () => {
            const buildAddress = build.getAttribute('data-address')
            const buildFloor = build.getAttribute('data-floor-quantity')
            const buildFlat = build.getAttribute('data-flat-quantity')

            address.innerHTML = buildAddress;
            floor.innerHTML = buildFloor;
            flat.innerHTML = buildFlat;
        })
    })
}

document.querySelector('.genplan') ? installGenplan() : null

