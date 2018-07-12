import uuid from 'uuid'

const Pen = () => ({
  id: uuid(),
  editors: {
    html: '',
    css: '',
    js: '',
  },
})

export default Pen
