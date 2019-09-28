exports.getPosts = (req, res, next) => {
    
        res.status(200).json({
            posts: [{title: "Titel", content: "This is the first post"}]
        });

};

exports.createPost = (req, res, next) => {

    const title = req.body.title;
    const content = req.body.content;

    console.log("Titel und Content", title, content);

    // Create post in DB
    res.status(201).json({

        message: 'Post successfully created',
        post: {id: "asdf", title: title, content: content}

    }); 

};