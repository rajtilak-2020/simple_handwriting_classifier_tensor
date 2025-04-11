const express = require('express')
const path = require('path')

const app = express();
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '3 - handwriting_classifier_CNN')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.info(`Server listening on port ${port}`)
});
