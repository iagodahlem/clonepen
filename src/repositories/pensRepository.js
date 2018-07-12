import Pen from '../domain/Pen'
import { get, set } from '../infra/localStorage'

const initial = { allIds: [], byId: {} }

export const index = async () => {
  const { allIds, byId } = getPens()

  return allIds
    .map(id => byId[id])
}

export const show = async (id) => getPens().byId[id]

export const create = async () => {
  const { allIds, byId } = getPens()

  const pen = Pen()

  setPens({
    allIds: [...allIds, pen.id],
    byId: {
      ...byId,
      [pen.id]: pen,
    },
  })

  return pen
}

export const update = async (id, pen) => {
  const { allIds, byId } = getPens()

  const updatedPen = {
    ...byId[id],
    ...pen,
  }

  setPens({
    allIds,
    byId: {
      ...byId,
      [id]: updatedPen,
    },
  })

  return updatedPen
}

export const del = async (id) => {
  const pens = getPens()

  const allIds = pens.allIds.filter(i => i !== id)
  const byId = Object.keys(pens.byId)
    .filter(key => key !== id)
    .reduce((newById, key) => ({ ...newById, [key]: pens.byId[key] }), {})

  setPens({
    allIds,
    byId,
  })

  return allIds
    .map(id => byId[id])
}

const getPens = () => get('pens') || initial

const setPens = (pens) => set('pens', pens)
