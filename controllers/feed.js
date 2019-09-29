exports.getPosts = (req, res, next) => {
    
        res.status(200).json({
            posts: [{
                _id: '1',
                title: "Entenpost", 
                content: "This is the first post",
                image: '/image/duck.jpg',
                creator: {
                    name: "Benedikt Kurz"
                }, 
                createdAt: new Date()
            }]
        });

};

exports.createPost = (req, res, next) => {

    const title = req.body.title;
    const content = req.body.content;

    console.log("req " + req.body);

    console.log("Titel und Content", title, content);

    // Create post in DB
    res.status(201).json({

        message: 'Post successfully created',
        post: { 
            _id: new Date().toISOString, 
            title: title, 
            content: content,
            creator: {
                name: "Benedikt Kurz"
            },
            createdAt: new Date()
        
        }
    }); 

};