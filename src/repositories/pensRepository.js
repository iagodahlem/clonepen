const initial = { allIds: [], byId: {} }

const get = (key) => {
  return JSON.parse(localStorage.getItem(key)) || initial
}

const set = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value))
}

export const index = async () => {
  const { allIds, byId } = get('pens')

  return allIds
    .map(id => byId[id])
}

export const show = async (id) => {
  const { byId } = get('pens')

  return byId[id]
}

export const create = async () => {
  const { allIds, byId } = get('pens')
  const lastId = allIds[allIds.length - 1] || 0

  const id = (Number(lastId) + 1).toString()

  const pen = {
    id,
    editors: {
      html: '',
      css: '',
      js: '',
    }
  }

  set('pens', {
    allIds: [...allIds, id],
    byId: {
      ...byId,
      [id]: pen,
    },
  })

  return pen
}

export const update = async (id, pen) => {
  const { allIds, byId } = get('pens')

  const updatedPen = {
    ...byId[id],
    ...pen,
  }

  set('pens', {
    allIds,
    byId: {
      ...byId,
      [id]: updatedPen,
    },
  })

  return updatedPen
}

export const del = async (id) => {
  const pens = get('pens')

  const allIds = pens.allIds.filter(i => i !== id)
  const byId = Object.keys(pens.byId)
    .filter(key => key !== id)
    .reduce((newById, key) => ({ ...newById, [key]: pens.byId[key] }), {})

  set('pens', {
    allIds,
    byId,
  })

  return allIds
    .map(id => byId[id])
}
