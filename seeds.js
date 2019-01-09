var mongoose        = require("mongoose"),
    Campground      = require("./models/campground");
    Comment      = require("./models/comment");

var data = [
    {name: "GFAIRY", 
    image: "https://avatars1.githubusercontent.com/u/36695144?s=88&v=4", 
    description: "The creator of the manga, Hero Mashima admitted he never really expected Fairy Tail to last as long as it did and was mostly just envisioned as a series of adventures then a ongoing epic. As such most of the arcs more questionable outcomes are due to him coming up with things right on the spot to meet deadlines."},
    {name: "GFAIRY", 
    image: "https://yt3.ggpht.com/a-/AAuE7mBlVCRJawuU4QYf21y-Fx-cc8c9HhExSiAPtQ=s48-mo-c-c0xffffffff-rj-k-no", 
    description: "The creator of the manga, Hero Mashima admitted he never really expected Fairy Tail to last as long as it did and was mostly just envisioned as a series of adventures then a ongoing epic. As such most of the arcs more questionable outcomes are due to him coming up with things right on the spot to meet deadlines."},
    {name: "GFAIRY", 
    image: "https://yt3.ggpht.com/-7k6mc6OLtVk/AAAAAAAAAAI/AAAAAAAAAAA/u7uL-fEvcrw/s88-c-k-no-mo-rj-c0xffffff/photo.jpg", 
    description: "The creator of the manga, Hero Mashima admitted he never really expected Fairy Tail to last as long as it did and was mostly just envisioned as a series of adventures then a ongoing epic. As such most of the arcs more questionable outcomes are due to him coming up with things right on the spot to meet deadlines."},
    {name: "GFAIRY", 
    image: "https://www.gravatar.com/avatar/8d741f4fcce07054085f48a56d2715cc?s=32&d=identicon&r=PG", 
    description: "The creator of the manga, Hero Mashima admitted he never really expected Fairy Tail to last as long as it did and was mostly just envisioned as a series of adventures then a ongoing epic. As such most of the arcs more questionable outcomes are due to him coming up with things right on the spot to meet deadlines."}
]
function seedDB(){
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed all!");
        data.forEach(function(seed){
            Campground.create(seed, function(err, site){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a site");
                    Comment.create(
                        {
                            text: "This is love!!",
                            author: "Zalo"
                        }, function (err, comment) {
                            if(err){
                                console.log(err);
                            } else {
                                site.comments.push(comment);
                                site.save();
                                console.log("Created a comment");
                            }
                        }
                    )
                }
            })
        });
    });
};

module.exports = seedDB;