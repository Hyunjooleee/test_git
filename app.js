const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))
//파일 링크시 루트폴더: public

const path = require('path');
const router = express.Router();

router.get('/02utility', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/hyunjoo/02utility.html'));
    //__dirname : It will resolve to your project folder.
    });


// 인식
// 루트폴더: test_git
router.get('/inchic/02', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/inchic/02.html'));
    //__dirname : It will resolve to your project folder.
    });


app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

