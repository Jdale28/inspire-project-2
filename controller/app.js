const app = {
    index: (req,res) => {
        res.render('index', { title: 'Inspire' });
    }
}

module.exports = app