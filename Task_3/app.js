const ALBUMS = 'https://jsonplaceholder.typicode.com/albums'

const dataContainer = document.querySelector('#data-container')

function toggleLoader() {
  const loaderHTML = document.querySelector('#loader')
  const isHidden = loaderHTML.hasAttribute('hidden')
  if (isHidden) {
    loaderHTML.removeAttribute('hidden')
  } else {
    loaderHTML.setAttribute('hidden', '')
  }
}

function createAlbumElement(text) {
  const albumElement = document.createElement('li')
  albumElement.textContent = text

  return albumElement
}

async function renderAlbums() {
  try {
    toggleLoader()
    const response = await fetch(ALBUMS)
    if (!response.ok) {
      throw new Error('Произошла ошибка в получении данных об альбомах...')
    }
    // console.log(response)
    const albums = await response.json()
    // console.log(albums)
    albums.forEach((album) => {
      const albumHTML = createAlbumElement(album.title)
      dataContainer.append(albumHTML)
    })
  } catch (error) {
    console.log(error)
  } finally {
    toggleLoader()
  }
}

renderAlbums()
