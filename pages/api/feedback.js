function handler(req,res){
    if(req.method == 'POST'){
       const email =  req.body.email;
       const feedback =  req.body.feedback;

       const newFeedback = {
        id: new Date().toISOString(),
        email:email,
        text:feedback

       };

       //store that in a database or in a file
    }
    res.status(200).json({
        message: "This Works!!!!!!!!"
    });
}

export default handler;