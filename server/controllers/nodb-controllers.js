const favorites = [{id: 1, name: 'Kyletron', realm: 'Tichondrius', class: 2, level: 120, image: ''}, {id: 2, name: 'Okeane', realm: 'Tichondrius', class: 3, level: 110, image: ''}, {id: 3, name: 'Kayboyse', realm: 'Tichondrius', class: 11, level: 112, image: ''}]
let id = 4;

module.exports = {
    getChar: (req, res) => {
        res.status(200).send(favorites);
    },

    addChar: (req, res) => {
        let newFavorite = {
            id,
            name: req.body.name,
            realm: req.body.realm,
            level: req.body.level
        }
        favorites.push(newFavorite);
        id++
        res.status(200).send(favorites);
    }
}
