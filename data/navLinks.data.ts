/**
 * Links that will be observed in the navigation menu
 *
 * id - Id of the page, it is used for the map function of react
 * name - name of the page
 * url - Url that will be obtained when clicking the link
 */

export type NavLinkType = {
  id: string,
  name: string,
  url: string
}

export const navLinks = [
  {
    id: '001',
    name: 'Inicio',
    url: '/#'
  },
  {
    id: '002',
    name: 'Nosotros',
    url: '/#nosotros'
  },
  {
    id: '003',
    name: 'Servicios',
    url: '/#servicios'
  },
  {
    id: '004',
    name: 'Precios',
    url: '/#precios'
  },
  {
    id: '005',
    name: 'Portafolio',
    url: '/#portafolio'
  },
  {
    id: '007',
    name: 'Contáctanos',
    url: '/#contacto'
  },
]